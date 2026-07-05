STC Recorder PWA v2.20 Field Trial - Method P final gate proof

Built from v2.19 after the weighted-fit Method P test.

Included in v2.20:
- Package identity moved to v2.20 across index, manifest and service worker cache.
- No intentional UI changes.
- No intentional Method 2 changes.
- No intentional active-STC / halfway logic changes.

Method P change in this bake:
- Method P still uses configurable [9, 6, 3] gates.
- Ordered target sequence remains -9, -6, -3, +3, +6, +9.
- Distance tolerance and GPS quality gates remain active.
- Poor GPS reads are still rejected from the Method P weighted fit.
- Method P now waits until the final departure 9m gate has been attempted before publishing a final P result.
- A final departure 9m gate is considered attempted when it is accepted within tolerance, or when the vehicle has passed the target and the best candidate is rejected by distance or GPS quality.
- Interim 4/5 point fits are no longer enough to publish a final P result before the last 9m gate has been dealt with.
- Method P may continue trying to improve after a 5-point result until all six gates are accepted.

CSV/log additions retained or added:
- P_GATE_ACCEPT
- P_GATE_REJECT
- pGrade
- pAlgorithm
- pAcceptedCount
- pRejectedCount
- pBeforeCount
- pAfterCount
- pConfidence
- pPacketComplete
- pFinalTargetM
- pFinalTargetStatus
- pTargetStatus
- pAcceptedPoints
- pRejectedPoints
- pFitSlopeMps
- pFitSpeedKmh
- pFitResidualM
- pFitMaxResidualM
- pFitSpanM
- pFitSpanSec

Test focus:
- Confirm CSV shows appVersion 2.20.
- Confirm Method P does not publish final P_FULL/P_STRONG/P_PAIR until the final +9m departure gate is accepted or rejected after being truly attempted.
- Confirm pTargetStatus shows the result for each gate.
