function playAll() {
    let tracks = document.querySelectorAll('.track');
    tracks.forEach(track => {
        let src = track.src;
        track.src = '';
        track.src = src;
    });
}

function toggleFavorite(button) {
    button.classList.toggle('favorited');
    updateFavorites();
}
function playSong(song) {
    var player = document.getElementById('audioPlayer');
    var source = document.getElementById('audioSource');
    source.src = song;
    player.load();
    player.play();
}
