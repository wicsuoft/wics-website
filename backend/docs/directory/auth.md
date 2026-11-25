**Code format:**
- 6 digits
- Generate with ``` secrets.randbelow() ```

**Code expiry:**
- 10 mins

**Attempt limits:**
- 5 wrong guesses per code
- 10 attempts per 20 mins for rate-limit verification per email and IP 

**Resend limits:**
- 60 second cooldown for sending to an email
- 5 sends per email per hour

**Secure code storage:**
- Store all generated codes as hashes
- Use HMAC-SHA256 (keyed) instead of plain SHA-256

**Email-code login flow:**
- Request code endpoint: validate email domain, apply limits, generate code with ``` secrets.randbelow() ``` and store its HMAC-SHA256 hash in PostgreSQL, send email, return 202
- Verify code endpoint: look up latest live code in PostgreSQL, check expiry and attempts, compare the HMAC-SHA256 hash of live code with stored hash, fetch user, start session
