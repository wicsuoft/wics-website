-- Initial PostgreSQL schema. Apply once to an empty application database.
-- This file is not automatically applied by FastAPI or uv sync.
-- TODO: Agree on the migration runner and database connection workflow.
-- Plural names avoid quoting PostgreSQL's reserved USER keyword.

BEGIN;

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL CHECK (length(btrim(email)) > 0 AND email = btrim(email)),
    -- Every user must have a nonblank display name.
    display_name TEXT NOT NULL CHECK (length(btrim(display_name)) > 0),
    -- Confirmed roles: member/admin. Manually bootstrap the first (parent) admin;
    -- that admin can grant admin permissions to other users.
    -- TODO: Decide whether newly appointed admins can also manage permissions.
    role TEXT NOT NULL DEFAULT 'member' CHECK (role IN ('member', 'admin')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Treat email case variants as one account. TODO: Decide allowed UofT domains
-- and alias handling during authentication; no domain restriction is finalized.
CREATE UNIQUE INDEX users_email_unique ON users (lower(email));

-- Only the two boundary dates are stored; together they identify a school year.
-- Each year covers August 1 through April 30 of the following calendar year.
CREATE TABLE school_years (
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    PRIMARY KEY (start_date, end_date),
    CONSTRAINT school_years_valid_dates CHECK (
        EXTRACT(MONTH FROM start_date) = 8 AND EXTRACT(DAY FROM start_date) = 1
        AND EXTRACT(MONTH FROM end_date) = 4 AND EXTRACT(DAY FROM end_date) = 30
        AND EXTRACT(YEAR FROM end_date) = EXTRACT(YEAR FROM start_date) + 1
    )
);

CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL CHECK (length(btrim(title)) > 0),
    -- TODO: Confirm which event details are required for publication.
    description TEXT,
    date TIMESTAMPTZ NOT NULL,
    -- Yearly passports use this event date against school_years boundaries.
    -- May-July events remain in history without belonging to a yearly passport.
    location TEXT,
    -- Optional URLs support the existing frontend event cards.
    -- TODO: Decide image hosting and registration/photo link requirements.
    image_url TEXT,
    registration_url TEXT,
    photos_url TEXT,
    -- TODO: Confirm the publication/cancellation workflow and allowed states.
    status TEXT NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'published', 'cancelled')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- A passport stamp is exactly the link between a user and an attended event.
-- No separate stamp ID, timestamp, or attendance table is introduced.
-- TODO: Decide whether future attendance auditing needs a check-in timestamp.
CREATE TABLE stamps (
    user_id UUID NOT NULL,
    event_id UUID NOT NULL,
    PRIMARY KEY (user_id, event_id),
    -- Preserve existing passport history by blocking parent deletion for now.
    -- TODO: Agree on account deletion, event deletion, and stamp revocation.
    CONSTRAINT stamps_user_fk FOREIGN KEY (user_id) REFERENCES users (id)
        ON DELETE RESTRICT,
    CONSTRAINT stamps_event_fk FOREIGN KEY (event_id) REFERENCES events (id)
        ON DELETE RESTRICT
);

-- The primary key already indexes user passports; this supports event rosters.
CREATE INDEX stamps_event_id_idx ON stamps (event_id);

COMMIT;
