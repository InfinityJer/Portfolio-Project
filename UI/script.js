const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const recommendedSongsContainer = document.getElementById('recommended-songs');
const songPlayer = document.getElementById('song-player');
const songTitleElement = document.getElementById('song-title');
const songArtistElement = document.getElementById('song-artist');
const songAlbumElement = document.getElementById('song-album');
const songGenreElement = document.getElementById('song-genre');
const saveSongButton = document.getElementById('save-song-button');
const playlist = document.getElementById('playlist');
const feedbackForm = document.getElementById('feedback-form');
const feedbackRatingSelect = document.getElementById('feedback-rating');
const feedbackCommentsInput = document.getElementById('feedback-comments');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');
const preferredGenresSelect = document.getElementById('preferred-genres');

// Search for songs
searchButton.addEventListener('click', () => {
    const searchQuery = searchBar.value.trim();
    if (!searchQuery) return;

    // Fetch search results
    fetch(`search?q=<span class="math-inline">\{searchQuery\}\`\)
\.then\(response \=\> response\.json\(\)\)
\.then\(data \=\> \{
// Clear previous search results
recommendedSongsContainer\.innerHTML \= '';
// Display search results
data\.forEach\(song \=\> \{
const songItem \= createSongItem\(song\);
recommendedSongsContainer\.appendChild\(songItem\);
\}\);
\}\);
\}\);
// Play song preview
recommendedSongsContainer\.addEventListener\('click', event \=\> \{
const songItem \= event\.target\.closest\('\.song\-item'\);
if \(\!songItem\) return;
const songId \= songItem\.getAttribute\('data\-song\-id'\);
const songData \= fetchSongData\(songId\);
// Update song player with preview
songPlayer\.src \= songData\.previewUrl;
songTitleElement\.textContent \= songData\.title;
songArtistElement\.textContent \= songData\.artist;
songAlbumElement\.textContent \= songData\.album;
songGenreElement\.textContent \= songData\.genre;
\}\);
// Save song to playlist
saveSongButton\.addEventListener\('click', \(\) \=\> \{
const songId \= songPlayer\.getAttribute\('data\-song\-id'\);
const songData \= fetchSongData\(songId\);
// Update playlist
const playlistItem \= createPlaylistItem\(songData\);
playlist\.appendChild\(playlistItem\);
\}\);
// Submit feedback
feedbackForm\.addEventListener\('submit', event \=\> \{
event\.preventDefault\(\);
const feedbackData \= \{
rating\: feedbackRatingSelect\.value,
comments\: feedbackCommentsInput\.value,
\};
// Submit feedback to server
fetch\(\`feedback/</span>{songPlayer.getAttribute('data-song-id')}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Feedback submitted:', data);

            // Clear feedback form
            feedbackRatingSelect.value = 'like';
            feedbackCommentsInput.value = '';
        });
});

// Update user settings
settingsForm.addEventListener('submit', event => {
    event.preventDefault();

    const userData = {
        username: usernameInput.value,
        password: passwordInput.value,
        email: emailInput.value,
        preferredGenres: Array.from(preferredGenresSelect.selectedOptions).map(option => option.value),
    };

    // Update user settings on server
    fetch('settings', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('User settings updated:', data);
        });
});

// Function to create a song item element
function createSongItem(song) {
    const songItem = document.createElement('li');
    songItem.classList.add('song-item');
    songItem.setAttribute

