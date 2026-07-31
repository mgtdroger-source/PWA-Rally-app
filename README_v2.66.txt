STC Recorder v2.66

Base: STC Recorder v2.64.

Help and cache update:
- Button-mode Help now explains Review / Edit / Submit.
- Review pauses the recorder while details and STC times are checked or corrected.
- Back to STCs returns to the Continue button.
- Continue resumes the same run and moves to the next STC without a button-recorded time.
- Submit Results ends the run.
- Package, manifest and service-worker cache identities updated to v2.66 so GitHub Pages loads the revised Help.

No STC timing, tracking or run-navigation logic changes from v2.64.


v2.66 field-test repair
- Method 2 and Method P calculations and the existing test display are unchanged.
- The current GPS STC remains authoritative until its audit packet completes or closes.
- The next STC may arm inside 300 m and retain preliminary evidence without marking the current STC missed.
- Removed the unsafe next-STC-nearer automatic missed/advance path from live processing.
- Submit Results pauses background tracking delivery, submits and confirms results first, then resumes retained track delivery quietly.
