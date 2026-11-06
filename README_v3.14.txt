STC Recorder PWA v3.14 — Production logging cleanup

Changes from v3.13:
- Removed temporary STC 1 / STC 2 GPS-fix and 450 m field-test diagnostics.
- Removed the additional waypoint-fit diagnostic row and per-control startup coordinate dump.
- Retained a single CONFIG_LOADED startup summary, along with waypoint outcome, missing-location, Method 2, Method P, and sequence event logs.
- Corrected older version references in page metadata and the manifest link.
- Updated application version and service-worker cache revision to v3.14.

No changes to waypoint or trip-line timing, VM control processing, GPS sequence rules, tracking, button operation, or submissions.
