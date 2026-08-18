STC Recorder PWA v3.02 — Installed PWA update handover + Event End final status

Changes from v3.01:
- Correct manifest and service-worker registration version references to v3.02.
- Keep existing skipWaiting(), old-cache cleanup and clients.claim().
- When an already-installed/controlled PWA receives a new service worker, reload the page once on controllerchange so the active document runs under the new worker.
- Force an update check after service-worker registration.
- Event End now remains visible in the tracking status line.
- During finalisation: Event End · Final upload…
- If offline/retained: Event End · Final upload pending
- After positive final confirmation: Event End · Final upload complete
- Final Event End status persists until Reset App/new run.

Unchanged:
- GPS timing and line-crossing logic.
- Manual STC timing/button logic.
- Tracking live/recovery/bulk transport and receipt logic.
- Submit Results ordering and confirmation.
- Rally configuration contract.

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
