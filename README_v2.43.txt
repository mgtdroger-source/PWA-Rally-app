STC Recorder PWA v2.43 - STC recording confirmation buzz

Changes from v2.40
------------------
- Added an audible speaker buzz only after an STC time has been successfully recorded and saved.
- The buzz occurs before the display refreshes to the next STC.
- No buzz is played on first touch, during the hold, on the finger test, or when recording fails.
- Added two settings in GPS_CONFIG:
    stcConfirmBuzzEnabled: true,
    stcConfirmBuzzMs: 200,
- Set stcConfirmBuzzEnabled to false to disable the buzz.
- Change stcConfirmBuzzMs to alter its duration in milliseconds.
- Manual button timing, GPS evidence, and the 300 m GPS detection gate are unchanged.
- Updated app, manifest and service-worker cache versions to v2.43.

Phone note
----------
The buzz uses the phone's media speaker. Audible volume can be affected by media volume, silent/focus settings, Bluetooth routing and browser/device restrictions. Test on the actual rally phone before use.


v2.43 changes:
- Added an on-screen note explaining how to unlock an existing Atomic Time sync.
- Finger Test now plays the same short audible confirmation buzz.
- The saved-STC buzz remains after successful recording only.


v2.43 change:
- Successful Atomic Time sync now plays the same audible confirmation buzz used by the finger test and saved STC recording.
- Unlocking the Synced button does not play a buzz.
