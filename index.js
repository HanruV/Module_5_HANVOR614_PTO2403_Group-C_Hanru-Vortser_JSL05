// Array of song objects.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Don't Stop Believing", artist: "Journey", genre: "Rock" },
    { title: "Every Little Step", artist: "Bobby Brown", genre: "R&B" },
    { title: "Africa", artist: "Toto", genre: "Pop" },
    { title: "Jump", artist: "Van Halen", genre: "Rock" },
    { title: "Outstanding", artist: "The Gap Band", genre: "R&B" },
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rock",
    "Rocket": "R&B",
    "Groot": "Pop",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlistsContainer = document.getElementById('playlists');    //Linking the div to function
    
    // Generate HTML for each guardian's playlist
    const playlistContent = Object.entries(guardians).map(([guardian, genre]) => { //to use map() conversion of the object into an array with entries()
        //Playlist variable that filters songs based on guardians genre
        const playlist = songs.filter(song => song.genre === genre); 
        // Create HTML for the guardian's playlist, loop over plalist with a map() to make <p> elements for each song that matches the genre
        // returning the tilte of the song and the artist
        return `
            <div class="playlist">
                <h2>${guardian}'s Playlist</h2>
                ${playlist.map(song => `<p><span class = 'song-title'>${song.title}</span> by ${song.artist}</p>`).join('')}
            </div>
        `;
    }).join(''); // The use of join enables the strings to be combined in the divs via an empty string between

    // Linking the playlist content map() with the container contets
    playlistsContainer.innerHTML = playlistContent;
}

// Calling the function to populate the Div's for each guardian
generatePlaylist(guardians, songs);