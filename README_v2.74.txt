STC Recorder v2.74

Base
- Latest deployed index v2.73 with unchanged v2.72 support files.

Changes
- Restores the Button-mode “I have checked my results” confirmation on Review.
- Submit Results remains disabled in Button mode until the confirmation is checked.
- GPS mode remains review-only with locked GPS results and does not show the checkbox.
- After a successful Submit, tracking collection, retry timer, active request and further queued delivery are stopped.
- Failed submissions leave tracking available so the entrant can correct and retry.

Unchanged
- STC timing engine and Method 2 / Method P calculations.
- Manual/Button and GPS mode timing operation.
- Tracking report format and stored queue contents.
- Reset Run behaviour, except it clears the submitted-closed runtime state for a fresh run.
