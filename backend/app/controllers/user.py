"""User profiles, the current user's passport, and authentication endpoints."""

from fastapi import APIRouter

router = APIRouter(prefix="/users", tags=["users"])

# Authentication can live here initially alongside user/profile functionality.
# TODO: Agree on login/session behavior before implementing authentication routes.
# Email-code expiry, resend limits, attempts, and storage are deferred.
# TODO: Agree on profile/passport request and response schemas and permissions.
# Passport stamps will be read by joining stamps to events for the current user.
# app/queries/passport.sql selects one school year's passport using date boundaries.
# All other years' stamps are retained for history; the API is still deferred.
# The first (parent) admin is created manually and can grant admin permissions.
# TODO: Decide whether newly appointed admins may also manage permissions.
# The authenticated user must come from the server's auth dependency, not a
# caller-supplied user ID. Do not add user/role editing without access checks.
