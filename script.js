// API-avain Last.fm:ltä
const API_KEY = '4ecb0c1ee68f2c56929908c49f98b116';

// Kun sivu latautuu, haetaan suosituimmat artistit
document.addEventListener('DOMContentLoaded', () => {
  fetchTopArtists();

  // Hakukenttä
  document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query.length > 2) {
      fetchArtistAlbums(query);
    }
  });
});

// Hakee suosituimmat artistit Last.fm:stä
function fetchTopArtists() {
  fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.getTopArtists&api_key=${API_KEY}&format=json`)
    .then(res => res.json())
    .then(data => {
      displayArtists(data.artists.artist);
    });
}

// Näyttää artistit vasemmassa sarakkeessa
function displayArtists(artists) {
  const container = document.getElementById('artistList');
  container.innerHTML = '';
  artists.forEach(artist => {
    const div = document.createElement('div');
    div.className = 'card';
    div.textContent = artist.name;
    div.addEventListener('click', () => fetchArtistAlbums(artist.name));
    container.appendChild(div);
  });
}

// Hakee artistin albumit
function fetchArtistAlbums(artistName) {
  fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=${encodeURIComponent(artistName)}&api_key=${API_KEY}&format=json`)
    .then(res => res.json())
    .then(data => {
      displayAlbums(data.topalbums.album, artistName);
    });
}

// Näyttää albumit oikeassa sarakkeessa
function displayAlbums(albums, artistName) {
  const container = document.getElementById('albumList');
  container.innerHTML = '';

  albums.forEach(album => {
    const card = document.createElement('div');
    card.className = 'album-card';

    const img = document.createElement('img');
    img.src = album.image[2]['#text'];
    img.alt = album.name;
    img.className = 'album-cover';

    const info = document.createElement('div');
    info.className = 'album-info';

    const title = document.createElement('h3');
    title.textContent = album.name;

    info.appendChild(title);
    card.appendChild(img);
    card.appendChild(info);
    container.appendChild(card);

    // Klikkaamalla albumia haetaan kappaleet
    card.addEventListener('click', () => {
      fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getInfo&artist=${encodeURIComponent(artistName)}&album=${encodeURIComponent(album.name)}&api_key=${API_KEY}&format=json`)
        .then(res => res.json())
        .then(data => {
          if (data.album && data.album.tracks && data.album.tracks.track) {
            const trackList = document.createElement('div');
            trackList.className = 'tracklist';
            trackList.innerHTML = '<strong>🎶 Kappaleet:</strong>';
            data.album.tracks.track.forEach(track => {
              const trackItem = document.createElement('div');
              trackItem.textContent = `• ${track.name}`;
              trackList.appendChild(trackItem);
            });

            // Poistaa vanhan kappalelistan jos sellainen on
            const oldTracklist = card.querySelector('.tracklist');
            if (oldTracklist) oldTracklist.remove();

            card.appendChild(trackList);
          }
        });
    });
  });
}
