## Backend (Passport System)

### Design

- [ ] this
- [ ] that

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
