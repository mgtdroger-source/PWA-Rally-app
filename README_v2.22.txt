STC Recorder PWA v2.22 Field Test - Independent Method P evidence-window fit

Built from the v2.21_FIXED2 package. Use this v2.22 package only for the next Method P field test.

Package identity:
- Header: Version 2.22
- Package: STC Recorder v2.22 / cache v2-22-1
- APP_VERSION = '2.22'
- Service worker cache = stc-pwa-v2-22-1
- Manifest link = manifest.webmanifest?v=2.22
- Service worker register = service-worker.js?v=2.22

Intent of this bake:
- Field-test the new independent Method P logic.
- No intentional UI redesign.
- No Method 2 logic change.
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
- Method P waits until departure beyond the active evidence window has been attempted before publishing.
- Method P fits signed distance versus time and calculates the zero-distance crossing time.
- Once Method P publishes for an STC, the Method P result is locked and later GPS cannot rewrite it.

Chosen-result policy:
- If Method 2 is Good/Fair, chosenMethod remains M2.
- If Method 2 is missing or unacceptable, Method P may become chosenMethod if its evidence is acceptable.
- If both exist and Method 2 is Good/Fair, Method P is audit evidence only.

CSV/log focus:
- appVersion should show 2.22.
- Method 2 fields and Method P fields are logged independently.
- New Method P fields include pWindowM, pPrimaryWindowM, pFallbackWindowM, pRole, pDeltaVsM2Sec, pWarning, and chosenReason.
- pAlgorithm should show evidence-window-fit-v1.
- pTargetStatus now summarizes the evidence window instead of old distance gates.
- P_GATE_ACCEPT / P_GATE_REJECT rows are no longer part of the new Method P evidence-window method.

Field-test instruction:
- Start ideally 150m before the STC line.
- Drive through normally.
- Continue ideally 150m after the STC line before stopping or resetting.
- This gives Method P enough before/after evidence to prove the +/-60m and fallback +/-90m windows.

Review checks after CSV upload:
1. appVersion = 2.22.
2. Method 2 result is present and unchanged where it detects a crossing.
3. Method P pAlgorithm = evidence-window-fit-v1.
4. Method P pWindowM is 60 or 90.
5. Method P has accepted before and after evidence.
6. Method P locks after publishing.
7. No late Method P rewrite after lock.
8. chosenMethod remains M2 when Method 2 is Good/Fair.
9. chosenMethod becomes P only if Method 2 is missing or unacceptable.
10. pDeltaVsM2Sec and pWarning support audit review.
