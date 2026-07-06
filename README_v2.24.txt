STC Recorder PWA v2.24 Field Test - UI/button-mode tidy over frozen line engine

Built from v2.23 after the 10-STC proof run confirmed the Method 2 / Method P line engine.
This bake is intentionally a UI/state tidy bake. Method 2 and Method P algorithm logic is not intentionally changed.

Package identity:
- Header: Version 2.24
- Package: STC Recorder v2.24 / cache v2-24-1
- APP_VERSION = '2.24'
- Service worker cache = stc-pwa-v2-24-1
- Manifest link = manifest.webmanifest?v=2.24
- Service worker register = service-worker.js?v=2.24

Engine status carried forward from v2.23:
- Method 2 remains the primary two-fix signed-distance crossing calculation.
- Method P remains independent insurance using the evidence-window fit.
- Primary Method P evidence window: +/-60m.
- Fallback Method P evidence window: +/-90m.
- Chosen-result policy is unchanged:
  - If Method 2 is Good/Fair, chosenMethod remains M2.
  - If Method 2 is missing or unacceptable, Method P may become chosenMethod if its evidence is acceptable.
  - If both exist and Method 2 is Good/Fair, Method P is audit evidence only.

v2.24 changes:
1. Button-mode active STC selection
   - STC 1 starts as the blue-border selected STC.
   - Tapping an STC card moves the blue border to that STC.
   - Touching/holding a record button also selects that STC.
   - After a confirmed button record, the blue border moves sequentially to the next STC.
   - If a button time was early or wrong, tap the previous STC and record again.

2. GPS UI stepping disabled for button-mode selection
   - In this field-test build, GPS still records Method 2 and Method P evidence.
   - The visible blue-border STC target is not moved by the GPS halfway-to-next-line rule while manual button selection is active.
   - GPS line evidence remains available in the log/diagnostics.

3. Begin / Running state
   - Begin now changes to Running after a valid run is armed.
   - Duplicate Begin presses are ignored once the run is active.
   - A visible run status line shows: Running — timing armed.

4. Run-start log tidy
   - RUN_STARTED marks the point where pre-run timing evidence was cleared and the GPS timing engine was armed.
   - The duplicate Begin issue from earlier testing should be reduced by the Running guard.

CSV/log review checks:
1. appVersion = 2.24.
2. No CROSSING or METHOD_P timing events before RUN_STARTED.
3. Method 2 and Method P fields remain logged independently.
4. Method P pAlgorithm remains evidence-window-fit-v1.
5. chosenMethod remains M2 when Method 2 is Good/Fair.
6. Button record events advance the active STC sequentially.
7. Manual card taps create ACTIVE_STC_SELECT events.
8. There should be only one RUN_STARTED event for a normal run.

Suggested test:
- Open app and allow GPS to warm up.
- Enter rally number, surname, and start time.
- Press Begin; the button should show Running.
- Confirm STC 1 has the blue border.
- Record STC 1 by button; blue border should move to STC 2.
- Tap STC 1 again and re-record if testing correction workflow.
- Export Full GPS Log CSV for review.
