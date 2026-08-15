STC Recorder v2.99
=================

v2.99 — Tracking engine integration

Focused change from proven v2.98:
- Replaced the prior Tracking transport/storage/confirmation engine with the proven Streamlined Tracking Demo v0.11 model.
- Tracking records are retained in IndexedDB until positive confirmation.
- Live 30-second reports use the proven liveSubmit + trackingConfirm(reportKey) path.
- Offline backlog recovery continues alongside new live reports.
- Event End freezes all remaining retained records into one persistent bulk package.
- Event End bulk retries retain the same packageId and clear local data only after bulkConfirm succeeds.
- Tracking audit output is reduced to key operational events rather than one row per tracking delivery.
- Existing Track X display, STC Submit priority, Review/Continue lifecycle, GPS timing and Button timing remain unchanged.

Backend reference:
- Tracking Code.gs v0.25

Package identity:
STC Recorder v2.99 / cache v2-99-1

No Bulk 300 test control is included in the entrant Recorder.
