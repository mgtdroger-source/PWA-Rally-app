STC Recorder PWA v2.26 Field Test - larger rally stopwatch digits over frozen line engine

Built from v2.23 after the 10-STC proof run confirmed the Method 2 / Method P line engine.
This bake is intentionally a very small rally stopwatch readability bake. Method 2, Method P, and v2.24/v2.25 button-mode/top-sticky logic are not intentionally changed.

Package identity:
- Header: Version 2.26
- Package: STC Recorder v2.26 / cache v2-26-1
- APP_VERSION = '2.26'
- Service worker cache = stc-pwa-v2-26-1
- Manifest link = manifest.webmanifest?v=2.26
- Service worker register = service-worker.js?v=2.26

Engine status carried forward from v2.23:
- Method 2 remains the primary two-fix signed-distance crossing calculation.
- Method P remains independent insurance using the evidence-window fit.
- Primary Method P evidence window: +/-60m.
- Fallback Method P evidence window: +/-90m.
- Chosen-result policy is unchanged:
  - If Method 2 is Good/Fair, chosenMethod remains M2.
  - If Method 2 is missing or unacceptable, Method P may become chosenMethod if its evidence is acceptable.
  - If both exist and Method 2 is Good/Fair, Method P is audit evidence only.

v2.26 changes:
1. Rally stopwatch readability
   - Increased top sticky stopwatch digits for easier in-car glance reading.
   - Slightly increased timer band padding.
   - Layout, engine logic, and button-mode behaviour are otherwise unchanged.

v2.25 changes carried forward:
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

v2.26 changes:
1. Top sticky container slimmed
   - Rally name is the main line.
   - Day/date remains visible below the rally name.
   - STC Recorder v2.26 is shown in small print.
   - The visible package/cache line is removed from the normal UI but kept hidden in the page for debug/reference.

2. Rally stopwatch added to the top sticky container
   - Before Begin: shows Timer starts after Begin.
   - After Begin, if current time is before entrant start time: shows Start in HH:MM:SS.
   - After Begin, if current time is after entrant start time: shows Elapsed HH:MM:SS.
   - Digits are larger and use tabular numeric styling for in-car readability.

3. Rally-day warning slimmed
   - Missing/invalid date and wrong-day warnings remain active.
   - Warning text is smaller and no longer dominates the top container.

Carried forward from v2.24:
- Button-mode card selection remains active.
- Begin changes to Running and duplicate Begin presses are guarded.
- RUN_STARTED marks timing armed.

CSV/log review checks:
1. appVersion = 2.26.
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
