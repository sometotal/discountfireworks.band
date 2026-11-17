# Playlists

Drop a folder of audio files in here, commit, and push. After GitHub Pages
rebuilds (a minute or two), it shows up at https://discountfireworks.band/playlists/

- Each folder becomes one playlist with its own page at
  `/playlists/<folder>/`. A GitHub Action adds an `index.html` to new folders
  automatically; edit its `title:` line to change the name shown on the page
  and in link previews (iMessage, Slack, etc.).
- Supported audio: mp3, m4a, aac, wav, ogg, oga, opus, flac, webm.
- Tracks play in filename order, so prefix them with numbers (`01 Song.mp3`,
  `02 Other Song.mp3`). The leading number is hidden in the track list.
- Optional cover art: put an image in the folder. `cover.jpg` (or `folder.jpg`,
  `front.png`, ...) is used first, otherwise the first image found. It's also
  the link-preview image.
- Share a playlist with its page link, e.g. `/playlists/new-songs/`. Old
  `/playlists/#new-songs` links redirect there.
- Folders or files starting with `_` or `.` are ignored by Jekyll and won't show up.

Note: flac isn't playable in every browser; mp3 or m4a are safest.
