STC Recorder v2.64

Base: STC Recorder v2.61.

Run / review tracking safeguards:
- Selecting Review / Edit / Submit pauses tracking immediately.
- Recorded STC progress and the current STC are preserved.
- Back to STCs returns to the same run and the Begin button changes to Continue.
- Selecting Continue restarts tracking without clearing STC progress or starting a new event.
- Successful Submit stops tracking, closes the run and returns the next run to Begin.
- A detected End of Event also closes the run.
- Reset App stops tracking and clears run evidence as before.
- Pending tracking reports remain queued and continue retrying for delivery.

No STC timing-engine calculation changes.


v2.64 continuation detail:
- Button mode Continue selects the first STC without a button-recorded time and scrolls it into view.
- GPS timing evidence remains independent and audit-only.
- GPS Logger mode has no card-selection or scrolling change.


v2.64 navigation detail:
- Back to STCs returns to the Continue button.
- Continue resumes the run, then selects and scrolls to the next unrecorded Button-mode STC.
- GPS mode resumes without card selection.
