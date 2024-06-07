// define the make album function 
function make_album(artist_name, album_Title, tracks) {
    var album = {
        artist: artist_name,
        title: album_Title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three function diffrent values
var album1 = make_album("Subhan", "Album title 1");
var album2 = make_album("Arham", "Album title2");
var album3 = make_album("Rahim", "  Album title 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
