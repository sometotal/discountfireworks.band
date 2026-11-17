// Gives every folder in playlists/ its own index.html page (if it doesn't
// already have one), so each playlist gets a real URL whose title shows up in
// link previews. The title is guessed from the folder name; edit the
// generated file's `title:` to change it.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', '..', 'playlists');

function titleFromFolder(name) {
  return name
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\b(lp|ep)\b/gi, (m) => m.toUpperCase())
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const created = [];
for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (!entry.isDirectory() || /^[._]/.test(entry.name)) continue;
  const page = path.join(root, entry.name, 'index.html');
  if (fs.existsSync(page)) continue;
  const title = titleFromFolder(entry.name).replace(/"/g, '\\"');
  fs.writeFileSync(page, `---\nlayout: playlist\ntitle: "${title}"\n---\n`);
  created.push(`playlists/${entry.name}/index.html`);
}

console.log(created.length ? `Created:\n${created.join('\n')}` : 'All playlist folders already have a page.');
