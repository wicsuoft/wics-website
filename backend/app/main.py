"""FastAPI application entry point."""

from fastapi import FastAPI

from app.controllers import events, qr, user

app = FastAPI(title="WiCS Passport API")

# TODO: Confirm the API paths and contracts before implementing controller routes.
app.include_router(user.router, prefix="/api/v1")
app.include_router(events.router, prefix="/api/v1")
app.include_router(qr.router, prefix="/api/v1")

# TODO: Configure the database connection and frontend CORS origins once agreed.
# Controllers intentionally have no endpoints until their behavior is agreed.
