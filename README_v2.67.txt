STC Recorder v2.67

Base
- STC Recorder v2.66 field-tested repair.

Tidy lifecycle update
- Event End stops tracking position collection and records the END_OF_EVENT report.
- Event End no longer closes the STC GPS timing engine or releases the wake lock.
- GPS timing continues until the final control Method 2 / Method P audit packet completes.
- A control marked missed does not qualify as final-control completion, so GPS is not stopped for a missed final control.
- Submit Results stops tracking collection immediately and retains submission network priority.
- If the final control is still incomplete when submission succeeds, GPS timing remains active until that control completes.
- When the final control completes, the GPS watch, timing run and wake lock are stopped cleanly.

Unchanged
- 300 m STC approach gate.
- 90 m Method P evidence and departure windows.
- Method 2 and Method P calculations.
- Existing test display.
