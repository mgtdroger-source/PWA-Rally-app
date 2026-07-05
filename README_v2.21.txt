STC Recorder PWA v2.21 Field Trial - Method P car-speed gates + packet lock

Built from v2.20 after walking and low-speed drive tests proved the final-gate Method P logic.

Included in v2.21:
- Package identity moved to v2.21 across index, manifest and service worker cache.
- No intentional UI changes.
- No intentional Method 2 changes.
- No intentional active-STC / halfway logic changes.

Method P changes in this bake:
- Method P gate distances changed from walking-test 9 / 6 / 3m to car-speed 30 / 15 / 8m.
- Ordered target sequence is now -30, -15, -8, +8, +15, +30.
- Distance tolerance and GPS quality gates remain active.
- Poor GPS reads are still rejected from the Method P weighted fit.
- Method P still waits until the final departure gate has been attempted before publishing a final result.
- The final departure gate is now +30m or -30m depending on approach direction.
- Once Method P publishes a final result for an STC, that STC's Method P packet is locked.
- Later driving, turning around, or passing nearby lines cannot add P gates or rewrite the completed packet for that STC.

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
- pPacketLocked
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
- Confirm CSV shows appVersion 2.21.
- Confirm Method P uses 30 / 15 / 8m gates.
- Confirm pTargetStatus shows -30, -15, -8, +8, +15, +30.
- Confirm Method P locks after the final result for each STC.
- Confirm no late P_GATE_ACCEPT / P_GATE_REJECT rows are added for an already locked STC.
