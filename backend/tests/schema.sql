-- Run after migrations/001_initial_schema.sql in a disposable test database.
-- All fixtures are rolled back, including when a constraint check fails.
BEGIN;

DO $$
DECLARE
    first_user UUID;
    second_user UUID;
    first_event UUID;
    second_event UUID;
    stamp_count INTEGER;
BEGIN
    INSERT INTO school_years (start_date, end_date)
        VALUES ('2025-08-01', '2026-04-30'), ('2026-08-01', '2027-04-30');
    BEGIN
        INSERT INTO school_years (start_date, end_date)
            VALUES ('2026-08-01', '2027-04-30');
        RAISE EXCEPTION 'Duplicate school years must be rejected';
    EXCEPTION WHEN unique_violation THEN
        NULL;
    END;

    INSERT INTO users (email, display_name)
        VALUES ('schema-test-' || gen_random_uuid() || '@example.com', 'First Test User')
        RETURNING id INTO first_user;
    INSERT INTO users (email, display_name)
        VALUES ('schema-test-' || gen_random_uuid() || '@example.com', 'Second Test User')
        RETURNING id INTO second_user;
    INSERT INTO events (title, date)
        VALUES ('Schema test event', '2026-11-13T18:00:00Z')
        RETURNING id INTO first_event;
    INSERT INTO events (title, date)
        VALUES ('Another schema test event', '2026-11-14T18:00:00Z')
        RETURNING id INTO second_event;

    INSERT INTO stamps (user_id, event_id)
        VALUES (first_user, first_event), (first_user, second_event),
               (second_user, first_event);

    SELECT count(*) INTO stamp_count FROM stamps WHERE user_id = first_user;
    IF stamp_count <> 2 THEN
        RAISE EXCEPTION 'A user must be able to earn stamps for different events';
    END IF;
    SELECT count(*) INTO stamp_count FROM stamps WHERE event_id = first_event;
    IF stamp_count <> 2 THEN
        RAISE EXCEPTION 'An event must be able to award stamps to different users';
    END IF;

    BEGIN
        INSERT INTO stamps (user_id, event_id) VALUES (first_user, first_event);
        RAISE EXCEPTION 'Duplicate stamps must be rejected';
    EXCEPTION WHEN unique_violation THEN
        NULL;
    END;

    BEGIN
        INSERT INTO stamps (user_id, event_id) VALUES (gen_random_uuid(), first_event);
        RAISE EXCEPTION 'A stamp must reference an existing user';
    EXCEPTION WHEN foreign_key_violation THEN
        NULL;
    END;

    BEGIN
        INSERT INTO stamps (user_id, event_id) VALUES (first_user, gen_random_uuid());
        RAISE EXCEPTION 'A stamp must reference an existing event';
    EXCEPTION WHEN foreign_key_violation THEN
        NULL;
    END;

    BEGIN
        INSERT INTO users (email, display_name)
            SELECT upper(email), display_name FROM users WHERE id = first_user;
        RAISE EXCEPTION 'Email case variants must not create duplicate accounts';
    EXCEPTION WHEN unique_violation THEN
        NULL;
    END;

    BEGIN
        INSERT INTO users (email) VALUES ('schema-test-' || gen_random_uuid() || '@example.com');
        RAISE EXCEPTION 'A user must have a display name';
    EXCEPTION WHEN not_null_violation THEN
        NULL;
    END;

    BEGIN
        INSERT INTO users (email, display_name)
            VALUES ('schema-test-' || gen_random_uuid() || '@example.com', '   ');
        RAISE EXCEPTION 'A display name must not be blank';
    EXCEPTION WHEN check_violation THEN
        NULL;
    END;

    BEGIN
        INSERT INTO school_years (start_date, end_date)
            VALUES ('2026-08-01', '2026-04-30');
        RAISE EXCEPTION 'A school year must end in the following calendar year';
    EXCEPTION WHEN check_violation THEN
        NULL;
    END;

    BEGIN
        INSERT INTO school_years (start_date, end_date)
            VALUES ('2026-09-01', '2027-04-30');
        RAISE EXCEPTION 'A school year must cover August 1 through April 30';
    EXCEPTION WHEN check_violation THEN
        NULL;
    END;

    BEGIN
        INSERT INTO events (title, date) VALUES ('Missing date', NULL);
        RAISE EXCEPTION 'An event must have a date';
    EXCEPTION WHEN not_null_violation THEN
        NULL;
    END;

    BEGIN
        DELETE FROM users WHERE id = first_user;
        RAISE EXCEPTION 'Deleting a user must not silently remove passport history';
    EXCEPTION WHEN foreign_key_violation OR restrict_violation THEN
        NULL;
    END;

    BEGIN
        DELETE FROM events WHERE id = first_event;
        RAISE EXCEPTION 'Deleting an event must not silently remove passport history';
    EXCEPTION WHEN foreign_key_violation OR restrict_violation THEN
        NULL;
    END;
END;
$$;

ROLLBACK;
