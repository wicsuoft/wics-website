"""Event listing and event management endpoints."""

from fastapi import APIRouter

router = APIRouter(prefix="/events", tags=["events"])

# TODO: Agree on event fields, pagination, filters, and response schemas.
# TODO: Decide public visibility rules for draft, published, and cancelled events.
# Event creation, editing, and cancellation need admin permission checks before
# endpoints are implemented. QR issuance and scanning belong to the QR controller.
