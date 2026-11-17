# Playlists

Drop a folder of audio files in here, commit, and push (via a PR as usual).
After GitHub Pages rebuilds (a minute or two), it shows up at
https://discountfireworks.band/playlists/

**One-time setup per computer:** turn on the repo's git hooks:

    git config core.hooksPath .githooks

Then whenever a commit touches `playlists/`, the pre-commit hook builds the
playlist pages and adds them to that same commit. A "Playlist pages" check on
each PR fails if the pages are missing or out of date (hook not set up, or
files uploaded on github.com). To fix it, run the build yourself and commit:

    node .github/scripts/build-playlists.js

- Each folder becomes one playlist at `/playlists/<folder>/`. Share that link:
  its name shows up in link previews (iMessage, Slack, etc.). Old
  `/playlists/#folder` links redirect there.
- The name comes from the folder (`summer-demos` → "Summer Demos"). To pick
  your own, add a `playlist.json` to the folder: `{ "title": "Rehearsal Covers" }`
- Supported audio: mp3, m4a, aac, wav, ogg, oga, opus, flac, webm.
- Tracks play in filename order, so prefix them with numbers (`01 Song.mp3`,
  `02 Other Song.mp3`). The leading number is hidden in the track list.
- Optional cover art: put an image in the folder. `cover.jpg` (or `folder.jpg`,
  `front.png`, ...) is used first, otherwise the first image found. It's also
  the link-preview image.
- Folders or files starting with `_` or `.` are ignored.

The `index.html` files are generated, so don't edit them by hand.

The player itself is `player.js` and `player.css` in this folder.

Note: flac isn't playable in every browser; mp3 or m4a are safest.
