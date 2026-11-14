## Backend (Passport System)

The passport system will extend the existing frontend with login, event QR
scanning, and a user's passport. The backend scaffold lives under `backend/`, using
Python and FastAPI, with an initial PostgreSQL schema. Database connection setup
and the application features still need to be implemented.

### Tool roles

- **FastAPI:** Receives API requests and connects endpoints to backend logic.
- **SQLAlchemy:** Provides a Python SQL toolkit and an optional ORM for querying
  and updating database data. ORM models map Python classes to tables and objects
  to rows.
- **Alembic:** Tracks and applies versioned database schema changes, such as
  adding a table or column. It can generate candidate migrations from SQLAlchemy
  model changes; generated migrations must be reviewed.
- **PostgreSQL:** Stores the data and executes SQL queries.

SQLAlchemy and Alembic are proposed tools, not configured dependencies yet.
SQLAlchemy handles data access; Alembic handles schema evolution.

### Local backend setup (Python + uv)

The backend uses **Python 3.14** and **uv** for dependency and virtual environment
management. Python 3.14 receives bug fixes and has support scheduled through
October 2030; see the [Python support schedule](https://devguide.python.org/versions/).
uv keeps dependency declarations and a lockfile together so contributors can
reproduce the same dependency versions.

Install uv using the [official installation instructions](https://docs.astral.sh/uv/getting-started/installation/)
for your operating system. Open a new terminal if needed, then confirm it is
available with `uv --version`.

After cloning the repository, run these commands from the repository root:

```bash
cd backend
uv python install 3.14
uv sync
uv run python --version
uv run python -c "import fastapi, uvicorn; print('Backend dependencies are ready')"
```

`uv python install 3.14` installs a Python interpreter for the selected series.
`uv sync` creates `backend/.venv/` and installs the dependencies recorded in
`backend/uv.lock`. Each contributor has their own local environment; it is ignored
by Git. `uv run` uses that environment, so manual activation is unnecessary.
For your editor, select the Python interpreter inside `backend/.venv/`.

The configured dependencies are FastAPI and `uvicorn[standard]`, the ASGI server
with development reload support. Database, authentication, and testing packages
will be added as those implementations are agreed.

Start the development server from `backend/` with:

```bash
uv run uvicorn app.main:app --reload
```

The server will then be available at `http://127.0.0.1:8000`, with interactive API
documentation at `http://127.0.0.1:8000/docs`. Stop it with `Ctrl+C`.
The application registers the user, events, and QR controller scaffolds. They
currently have no endpoints, so the API documentation will have no operations.

Run these commands from `backend/` during development (replace `PACKAGE` with an
actual package name):

| Command                             | Purpose                                                                                                   |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `uv sync`                           | Install or synchronize dependencies, including after pulling changes.                                     |
| `uv run python --version`           | Run a command using the project's virtual environment.                                                    |
| `uv add PACKAGE`                    | Add a runtime dependency and update the environment and lockfile.                                         |
| `uv add --dev PACKAGE`              | Add a development-only dependency, such as a test tool.                                                   |
| `uv remove PACKAGE`                 | Remove a runtime dependency and update the environment and lockfile.                                      |
| `uv lock --upgrade-package PACKAGE` | Update a package's locked version within its declared constraints. Run `uv sync` afterward to install it. |
| `uv sync --locked`                  | Install only if the lockfile matches `pyproject.toml`; useful for CI.                                     |

Commit `backend/pyproject.toml`, `backend/uv.lock`, and `backend/.python-version`.
When adding, removing, or upgrading dependencies, commit the resulting changes to
`pyproject.toml` and `uv.lock` together. Use uv project commands to keep dependency
declarations, the lockfile, and the environment in sync.
See the [uv project guide](https://docs.astral.sh/uv/guides/projects/) for more details.

### Layout and scope

- `backend/app/`: backend application code.
- `backend/app/main.py`: FastAPI application and controller registration.
- `backend/app/controllers/user.py`: user profiles, passport reads, and future
  authentication endpoints. Auth can stay here initially and be split out later
  if its responsibilities grow; email-code implementation is deferred.
- `backend/app/controllers/events.py`: event listing and admin event management.
- `backend/app/controllers/qr.py`: event QR issuance, validation, and stamp check-in.
  QR rules and endpoint contracts remain to be agreed.
- `backend/migrations/001_initial_schema.sql`: initial PostgreSQL table definitions;
  not automatically applied. A migration runner has not been chosen.
- `backend/tests/schema.sql`: database constraint checks using rolled-back fixtures.
- `backend/app/queries/passport.sql`: parameterized query selecting a user's
  passport for one school year; database/API integration is still pending.
- `backend/pyproject.toml`: Python project metadata, supported Python version,
  and dependencies managed with uv.
- `backend/.python-version`: selects the Python 3.14 series for local uv commands.
- `backend/uv.lock`: committed dependency lockfile generated by uv.

Controllers are intended to group FastAPI endpoints by functionality. The initial
authentication idea is to send a verification code to an allowed UofT email
address and verify that code during login. This is tentative and verifies access
to that email account; it does not establish current student status or implement
UofT single sign-on.

### Agreed passport rules

- Every attended event earns exactly one passport stamp. Repeat scans of the same
  event must not award additional stamps.
- Each academic year has its own passport containing that year's event stamps.
  The year labelled `2026–2027` covers August 1, 2026 through April 30, 2027,
  inclusive; subsequent years follow the same August–April range.
- The same user account persists across academic years. Keep the user's data and
  stamps from all years of the account so they can view past passports and
  attendance history. Starting a new academic year must not delete or overwrite
  earlier years' data.

Yearly passports select attended events using their event date within that
academic year's range. May–July falls outside the defined passport range; stamps
from those months must still be retained in account history. School-year boundaries
are stored as actual dates in `school_years`; the yearly passport API still needs
to be implemented.

### Initial PostgreSQL schema

The schema defines four tables, `users`, `school_years`, `events`, and `stamps`.

- `users`: UUID ID, email unique regardless of case, required nonblank display
  name, member/admin role, and creation time.
- `school_years`: Exactly `start_date` and `end_date`, both `DATE` values forming
  the composite primary key. Dates must run from August 1 through April 30 of the
  following calendar year, such as `2026-08-01` through `2027-04-30`.
- `events`: UUID ID, title, `date` (a timestamp with timezone), optional
  description/location/URLs, provisional publication status, and creation time.
  An event end time is not needed for now.
- `stamps`: Exactly `user_id` and `event_id`, referencing users and events. Their
  composite primary key permits one stamp per user/event.

The first (parent) admin will be set up manually. That admin can grant admin
permissions to other users. The database currently has the confirmed `member`
and `admin` roles; whether newly appointed admins may also manage permissions
remains to be decided. Permission-management endpoints are not implemented yet.

The SQL and controllers include `TODO` comments for unsettled details, including
required event fields, delegated permission management, email-domain rules, QR
validity, and deletion/revocation policy. For now, deleting users or events referenced by stamps
is blocked to preserve passport history. There is no separate attendance table or
stored check-in timestamp; passport data comes from the user's stamps joined to
event details. Grouping that data into academic-year passports and making prior
years available must follow the agreed passport rules above. There is no
separate passport table or school-year field on stamps; yearly passports select
the user's stamped events within the chosen school year's boundaries.

`backend/app/queries/passport.sql` implements this selection with three bound
parameters: the authenticated user ID, school-year start date, and school-year
end date. It uses Toronto calendar dates and includes all of April 30, regardless
of the database session's timezone. It reads existing stamps without deleting or
resetting other years. The application does not execute this query yet.

To create the tables, first provision an empty PostgreSQL application database,
install the [PostgreSQL `psql` client](https://www.postgresql.org/docs/current/app-psql.html),
and set `DATABASE_URL` in your shell to that database's connection URL. From
`backend/`, apply the schema once:

```bash
psql "${DATABASE_URL:?Set DATABASE_URL to the intended database connection URL}" -X --set ON_ERROR_STOP=1 --file migrations/001_initial_schema.sql
```

The file runs in a transaction and deliberately fails if its tables already
exist. Do not reapply it after changing the schema; later changes need new
migrations. `DATABASE_URL` is currently used only by this manual command; the
FastAPI application does not connect to the database yet. Keep credentials out
of version control. Neither `uv sync` nor starting FastAPI creates these tables.

School years are not seeded automatically. After applying the schema, add the
years you want to offer using your database SQL client, for example:

```sql
INSERT INTO school_years (start_date, end_date)
VALUES ('2026-08-01', '2027-04-30');
```

After applying the schema to a disposable test database, run the constraint checks
from `backend/` with that test database's `DATABASE_URL`:

```bash
psql "${DATABASE_URL:?Set DATABASE_URL to the intended test database connection URL}" -X --set ON_ERROR_STOP=1 --file tests/schema.sql
```

These checks cover valid passports and event rosters, duplicate stamps, missing
users/events, email uniqueness, required display names/event dates, school-year
constraints, and preservation of stamp history.
All fixtures are rolled back.

### Attendance flow

The initial flow is for an admin to log in and generate a QR code for an event.
At the event, users scan that QR code to mark their attendance. QR contents,
validity rules, and the exact check-in process still need to be agreed.

Duplicate check-in handling means deciding what happens if the same user scans
again or a request is retried. Possible responses include returning the existing
attendance confirmation or reporting that the user has already checked in. The
proposed response is "Already checked in." The initial schema enforces one stamp
per user/event, but the check-in endpoint and its response are not implemented or
finalized. Stamps contain no check-in timestamp; storing that would require an
agreed schema change.
See [PostgreSQL unique constraints](https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS).

### Middleware and frontend communication

The frontend communicates with FastAPI endpoints through HTTP requests, for
example using `fetch`. Middleware processes requests and responses around those
endpoints for shared behavior such as logging or CORS; custom middleware is
optional. See [FastAPI middleware](https://fastapi.tiangolo.com/tutorial/middleware/).

If browser requests go directly from the frontend to a backend on a different
origin (scheme, host, or port), the backend needs an appropriate CORS policy.
FastAPI provides `CORSMiddleware`, which can be configured on the application
without writing a custom middleware file. See [FastAPI CORS](https://fastapi.tiangolo.com/tutorial/cors/).

Authentication and admin permission checks can use FastAPI dependencies attached
to the endpoints that need them. Agree on middleware and dependency
responsibilities before implementation. See [FastAPI dependencies](https://fastapi.tiangolo.com/tutorial/dependencies/).
Additional files and their responsibilities should be approved before creation.

### Initial TODOs

- [x] Approve and add the minimal scaffold with comment-only placeholders.
- [x] Add user (including future auth), events, and QR controller scaffolds.
- [x] Choose the Python version and dependency management workflow: Python 3.14 + uv.
- [x] Document local Python environment setup and dependency commands.
- [ ] Document required environment variables (keep secrets
      out of version control).
- [ ] Decide how successful login creates a session, how the frontend sends it
      with requests, and how logout and session expiry work.
- [ ] Define user and admin permissions and decide which request handling
      belongs in middleware, dependencies, and controllers.
- [x] Add the initial PostgreSQL schema for users, events, school years, and
      stamps linking users to events.
- [x] Confirm one stamp per attended event and a passport per academic year,
      retaining all years' account data and passport history.
- [x] Define academic-year passports as August through the following April,
      selecting stamps by event date and preserving history.
- [x] Store school-year boundaries as actual dates and add the yearly passport SQL query.
- [ ] Connect the yearly passport query to the database/API and expose access to past years.
- [ ] Finalize provisional user/event fields and API contracts for users, events,
      QR check-in, and passports.
- [ ] Confirm repeat-scan behavior, including the response shown to users and
      database enforcement against duplicate attendance records or stamps.
- [ ] Configure the database connection and migration workflow after those choices
      are approved.
- [ ] Build the first login flow from the frontend through the backend and email
      delivery, then add the agreed event and passport flows.
- [ ] Add tests for login verification, permissions, and check-in behavior as
      those features are implemented.
- [ ] Document backend/database deployment and how it connects to the Vercel
      frontend, including allowed frontend origins if hosted separately.

#### DELEGATE

- [ ] Decide code expiry, resend and attempt limits, one-time use, and secure code
      storage (for email auth)
- [ ] Finalize the email-code login flow; investigate SSO integration
- [ ] Agree on QR contents, validity rules, and the exact check-in process.

#### DISCUSS

- [ ] Decide on minimal pages required for frontend design
- [ ] Decied on task sizes

## Frontend

### Updating the team

Edit `frontend/src/data/team.js` to update the About page's team year and members.
The `executives` export controls the executive section; array order controls card order.

Members have `name` and `role`, plus optional `imageUrl`, `githubUrl`, `linkedinUrl`, and `imageURL`.
Put photos in `frontend/public/exec/` and reference them as `/exec/filename.jpg`.
Use full `https://` social URLs, or omit unavailable fields. Updates take effect on redeployment.

### Future Changes:

- [ ] Add admin dashboard
- [ ] Expand 'For Students' / Hiring section
- [ ] Add gallery section
  - After admin dashboard (for easy updates)

## Deployment

Deployed on Vercel.
