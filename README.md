## Backend (Passport System)

The passport system will extend the existing frontend with login, event QR
scanning, and a user's passport. The backend is planned in this repository under
`backend/`, using Python and FastAPI. PostgreSQL is the current database preference;
the database choice and implementation details still need to be confirmed.

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

### Layout and scope

- `backend/app/`: backend application code. Use separate controllers for distinct
  functionalities; confirm each controller's responsibility before adding it.
- `backend/app/main.py`: placeholder for the FastAPI application entry point and
  controller registration.
- `backend/app/controllers/auth.py`: placeholder for email-code request and
  verification endpoints.
- `backend/migrations/`: planned location for versioned database schema changes
  once a migration tool is configured.
- `backend/tests/`: planned location for backend tests as features are implemented.
- `backend/pyproject.toml`: Python project metadata and dependencies once the
  project setup is agreed.

Controllers are intended to group FastAPI endpoints by functionality. The initial
authentication idea is to send a verification code to an allowed UofT email
address and verify that code during login. This is tentative and verifies access
to that email account; it does not establish current student status or implement
UofT single sign-on.

### Attendance flow

The initial flow is for an admin to log in and generate a QR code for an event.
At the event, users scan that QR code to mark their attendance. QR contents,
validity rules, and the exact check-in process still need to be agreed.

Duplicate check-in handling means deciding what happens if the same user scans
again or a request is retried. Possible responses include returning the existing
attendance confirmation or reporting that the user has already checked in. The
proposed behavior is to show "Already checked in," retain the original check-in
time, and avoid additional attendance records or stamps. This proposal is not
implemented or finalized. If approved, a database uniqueness constraint on the
user/event pair can enforce one attendance record per user per event.
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
- [ ] Agree on additional controller responsibilities before adding files.
- [ ] choose the Python version and dependency management workflow.
- [ ] Document local setup and required environment variables (to secrets
      out of version control).
- [ ] Finalize the email-code login flow; investigate SSO integration
- [ ] Decide code expiry, resend and attempt limits, one-time use, and secure code
      storage (for email auth).
- [ ] Decide how successful login creates a session, how the frontend sends it
      with requests, and how logout and session expiry work.
- [ ] Define user and admin permissions and decide which request handling
      belongs in middleware, dependencies, and controllers.
- [ ] Agree on QR contents, validity rules, and the exact check-in process.
- [ ] Agree on the initial data model and API contract for users, events,
      attendance, and passport stamps.
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
- [ ] Decide on minimal pages required for frontend design

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
