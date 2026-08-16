STC Recorder v3.00
=================

v3.00 — Tracking status UI refinement

Focused change from proven v2.99:
- Normal tracking status now shows: Track <retained> · Total <recorded this run>.
- Track is the current retained / awaiting-confirmation count.
- Total is the total number of tracking positions recorded during the current run.
- During Event End bulk, the same status line becomes the transfer indicator:
    Tracks retained · <count>
    Tracks uploading · <count>
    Tracks confirming · <count>
    Tracks uploaded · <count>
- No tracking transport, storage, confirmation, STC timing, GPS or Button timing logic changed.

Tracking engine retained from v2.99:
- IndexedDB retention until positive confirmation.
- Live 30-second reports with individual recovery while new live reports continue.
- Event End bulk with persistent same-package retry and positive bulk confirmation before local clear.

Backend:
- Compatible with the combined Rally App Code.gs v3.18, which incorporates the proven Tracking v0.25 service.

Package identity:
STC Recorder v3.00 / cache v3-00-1

No Bulk 300 test control is included in the entrant Recorder.
