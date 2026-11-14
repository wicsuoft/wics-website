-- Parameterized yearly passport query for the future database integration.
-- $1: authenticated user UUID (from the server's auth dependency).
-- $2: school_years.start_date; $3: school_years.end_date.
-- Boundaries use Toronto calendar dates, independent of the database timezone.
-- Include all of end_date by stopping at midnight at the start of the next day.
SELECT events.id AS event_id, events.title, events.date,
       events.description, events.location, events.image_url
FROM school_years
JOIN events ON events.date >= (
    school_years.start_date::timestamp AT TIME ZONE 'America/Toronto'
)
AND events.date < (
    (school_years.end_date + 1)::timestamp AT TIME ZONE 'America/Toronto'
)
JOIN stamps ON stamps.event_id = events.id
WHERE stamps.user_id = $1::uuid
  AND school_years.start_date = $2::date
  AND school_years.end_date = $3::date
ORDER BY events.date, events.id;
