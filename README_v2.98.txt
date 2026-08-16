STC Recorder v2.98
=================

v2.98 — Cross-platform PWA launch baseline

Focused change from proven v2.97:
- Removed the fixed manifest start_url.
- Added manifest scope "./".
- This allows Apple Safari Add to Home Screen to retain the current rally-day URL/config on first launch.
- Proven on iPad: WhatsApp rally-day link -> Safari -> Add to Home Screen -> Rally Recorder icon -> correct Rally/Day/Date -> result submission received successfully.

Unchanged from v2.97:
- GPS timing engine and line-crossing logic
- Manual/Button timing logic
- Start STC reset behavior
- App-close recovery logic
- rally package persistence/restoration
- location startup safeguard
- submission and tracking logic

Package identity:
STC Recorder v2.98 / cache v2-98-1

Install/use summary:
Android: open rally-day link, install Rally Recorder, then use the installed app.
Apple: open rally-day link in Safari, Share -> Add to Home Screen, then open Rally Recorder from its Home Screen icon.
Keep Rally Recorder open during the rally.
