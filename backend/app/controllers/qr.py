"""Event QR issuance, validation, and stamp check-in endpoints."""

from fastapi import APIRouter

router = APIRouter(prefix="/qr", tags=["qr"])

# TODO: Agree on QR contents, expiry, rotation, and the check-in window.
# TODO: Agree on endpoint paths, request/response schemas, and repeat-scan responses.
# Issuing event QR codes needs admin permission checks. Check-in must authenticate
# the user and validate the QR proof before inserting their (user_id, event_id)
# stamp. An event ID alone is not proof of attendance.
# The stamps primary key prevents duplicate stamps, including concurrent scans.
