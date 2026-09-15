# Safari Circle service

This is the deployable authentication and moderation foundation for Safari Circle. It uses PostgreSQL, opaque server-side sessions, bcrypt password hashing, expiring one-time verification codes, rate limiting, strict headers and an auditable moderation queue.

Apply `migrations/001_circle.sql`, copy `.env.example` into the deployment secret configuration, install locked dependencies and run `npm start`. Verification delivery is intentionally provider-adapted: configure the provider URL and token in the deployment secret manager. The API never returns a verification code.

Production requirements outside source control: managed PostgreSQL with encrypted backups, verified email/SMS provider, HTTPS reverse proxy, secret rotation, object storage and malware scanning for photographs, moderation staffing/escalation policy, observability and incident response.
