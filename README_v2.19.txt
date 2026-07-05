STC Recorder PWA v2.19 Field Trial - Method P weighted-fit algorithm

Built from v2.18 after proving the Method P distance gate fix.

Included in v2.19:
- Package identity moved to v2.19 across index, manifest and service worker cache.
- No intentional UI changes.
- No intentional Method 2 changes.
- No intentional active-STC / halfway logic changes.

Method P changes:
- Method P remains based on configurable distance gates [9, 6, 3].
- Ordered targets remain -9, -6, -3, +3, +6, +9.
- Distance tolerance remains controlled by methodPMaxTargetErrorM.
- Added GPS quality filter for Method P candidate gates. Good/Fair reads are usable; Poor reads are rejected from the Method P fit.
- Method P now calculates crossing time using a weighted signed-distance-vs-time fit over the accepted Good/Fair gate points.
- More accurate GPS fixes receive higher weight in the fit.
- Method P now grades its result:
  * P_FULL: 5 or 6 accepted points with at least 2 before and 2 after.
  * P_STRONG: at least 4 accepted points with both sides represented.
  * P_PAIR: at least one valid before and one valid after point.
  * P_FAIL: not enough valid before/after data.
- Method P can upgrade from P_PAIR to P_STRONG or P_FULL as better evidence arrives.

CSV/log additions for field review:
- P_GATE_ACCEPT event rows.
- P_GATE_REJECT event rows.
- METHOD_P summary rows with pGrade, pAlgorithm, pAcceptedCount, pRejectedCount, pBeforeCount, pAfterCount, pConfidence.
- pAcceptedPoints and pRejectedPoints compact evidence strings.
- Fit metrics: pFitSlopeMps, pFitSpeedKmh, pFitResidualM, pFitMaxResidualM, pFitSpanM, pFitSpanSec.

Test focus:
- Confirm appVersion reads 2.19 in exported CSV.
- Confirm Poor GPS gate points are rejected from Method P fit.
- Compare Method 2 and Method P grades/times over repeated STC 1 passes before changing UI or submit policy.
