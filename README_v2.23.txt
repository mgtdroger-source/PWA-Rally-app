STC Recorder PWA v2.23 Field Test - Method P evidence-window fixes

Built from v2.22 Field Test after the first evidence-window field run exposed two engine-state bugs.
Use this v2.23 package only for the next field test.

Package identity:
- Header: Version 2.23
- Package: STC Recorder v2.23 / cache v2-23-1
- APP_VERSION = '2.23'
- Service worker cache = stc-pwa-v2-23-1
- Manifest link = manifest.webmanifest?v=2.23
- Service worker register = service-worker.js?v=2.23

Intent of this bake:
- Fix the v2.22 Method P departure-attempt bug.
- Fix the pre-Begin GPS timing bug.
- Keep Method 2 crossing maths unchanged.
- No intentional UI redesign.
- No active-STC / halfway logic change.

Method 2 contract:
- Method 2 remains the primary result.
- Method 2 is still the two-fix signed-distance crossing calculation.
- Method 2 result is shown/logged independently from Method P.

Method P contract:
- Method P is insurance only.
- Method P is independent of Method 2.
- Method P does not use exact distance gates.
- Method P does not use the old 30 / 15 / 8m packet acceptance model.
- Method P collects Good/Fair signed-distance samples around the STC line.
- Poor samples are rejected from the Method P fit.
- Primary Method P evidence window: +/-60m.
- Fallback Method P evidence window: +/-90m.
- Method P requires at least one accepted sample before the line and one accepted sample after the line.
- Method P fits signed distance versus time and calculates the zero-distance crossing time.
- Once Method P publishes for an STC, the Method P result is locked and later GPS cannot rewrite it.

v2.23 fixes:
1. Pre-Begin GPS guard
   - GPS may run before Begin for warm-up and live accuracy display only.
   - The timing engine does not record Method 2, Method P, chosenMethod, or STC GPS state until Begin has been pressed with valid rally number, surname, and start time.
   - On Begin, pre-run GPS timing evidence/history is cleared so the first timing pair is created only after Begin.

2. Method P departure-attempt fix
   - Method P still fits only samples inside the active +/-60m or fallback +/-90m evidence window.
   - The departure-attempt check now uses the wider retained signed-distance history, not the already-filtered fit window.
   - Wider history is retained so Method P can see that the car has genuinely departed beyond the evidence window even if no GPS fix lands exactly on 60m or 90m.

Chosen-result policy:
- If Method 2 is Good/Fair, chosenMethod remains M2.
- If Method 2 is missing or unacceptable, Method P may become chosenMethod if its evidence is acceptable.
- If both exist and Method 2 is Good/Fair, Method P is audit evidence only.

CSV/log focus:
- appVersion should show 2.23.
- Method 2 fields and Method P fields are logged independently.
- Method P pAlgorithm should show evidence-window-fit-v1.
- pWindowM should be 60 or 90.
- pPrimaryWindowM should be 60 and pFallbackWindowM should be 90.
- P_GATE_ACCEPT / P_GATE_REJECT rows are not part of the evidence-window method.
- RUN_BEGIN marks the point where pre-run timing evidence was cleared and the GPS timing engine was armed.

Field-test instruction:
- Open the app and allow GPS to warm up.
- Enter rally number, surname, and start time.
- Press Begin.
- Watch GPS accuracy; if Good/Fair, drive.
- Start ideally 100m to 150m before the STC line.
- Continue ideally 100m to 150m after the STC line before stopping or resetting.

Review checks after CSV upload:
1. appVersion = 2.23.
2. No CROSSING or METHOD_P timing events before RUN_BEGIN.
3. Method 2 result is present and unchanged where it detects a crossing.
4. Method P pAlgorithm = evidence-window-fit-v1 when it publishes.
5. Method P pWindowM is 60 or 90.
6. Method P has accepted before and after evidence.
7. Method P locks after publishing.
8. No late Method P rewrite after lock.
9. chosenMethod remains M2 when Method 2 is Good/Fair.
10. chosenMethod becomes P only if Method 2 is missing or unacceptable.
