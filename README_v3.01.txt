STC Recorder v3.01
=================

v3.01 — Unified Event End bulk trigger

Focused change from v3.00:
- There is one Event End tracking finalisation path.
- Event End may be triggered by either:
    1. Event End waypoint detection, or
    2. successful Submit Results.
- Whichever trigger occurs first establishes the one Event End bulk transaction.
- A later second trigger cannot create a second bulk package.
- If the Event End waypoint triggers first, the retained tracking package may upload immediately when online.
- If Submit Results triggers first, STC results retain network priority: the STC result must upload and receive positive confirmation first. Only after submission priority is released may the Event End tracking bulk upload begin.
- Submit-triggered Event End uses the latest available GPS fix for the final END_OF_EVENT tracking record when available.
- Audit EVENT_END_TRACKING records whether the trigger was WP or SUBMIT.

Unchanged from v3.00:
- Track <retained> · Total <recorded> UI.
- Event End upload/confirm/uploaded status on the same UI line.
- IndexedDB retention, live tracking, recovery, same-package bulk retry and positive confirmation rules.
- STC timing, GPS timing, Button timing and result payload logic.

Backend:
- Compatible with combined Rally App Code.gs v3.18.

Package identity:
STC Recorder v3.01 / cache v3-01-1
