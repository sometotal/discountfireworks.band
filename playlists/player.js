// Player for the generated playlist pages: the track list is already in the
// HTML (one <li data-src> per track), this just wires up playback.
(function () {
  var player = document.getElementById('player');
  var list = document.querySelector('.tracks');
  if (!player || !list) return;
  var items = list.querySelectorAll('li');
  var album = list.dataset.album;
  var current = 0;

  function load(i, play) {
    current = (i + items.length) % items.length;
    player.src = items[current].dataset.src;
    items.forEach(function (li, j) { li.classList.toggle('playing', j === current); });
    if (play) player.play();
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: items[current].querySelector('.name').textContent,
        artist: 'Discount Fireworks',
        album: album
      });
    }
  }

  items.forEach(function (li, i) {
    li.addEventListener('click', function () { load(i, true); });
  });
  document.getElementById('prev').onclick = function () { load(current - 1, true); };
  document.getElementById('next').onclick = function () { load(current + 1, true); };
  player.addEventListener('ended', function () {
    if (current < items.length - 1) load(current + 1, true);
  });
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler('previoustrack', function () { load(current - 1, true); });
    navigator.mediaSession.setActionHandler('nexttrack', function () { load(current + 1, true); });
  }

  load(0, false);
})();
