// define the make album function 
function make_album(artist_name:string ,album_Title: string, tracks?: number){
    let album:{artist: string,title:string, tracks?: number} = {
        artist:artist_name,
        title: album_Title,
    };
    if (tracks !== undefined){
        album. tracks = tracks;
    }
    return album;

}
// calling three function diffrent values

 let album1 = make_album("Subhan", "Album title 1");
 let album2 = make_album("Arham","Album title2");
 let album3 =make_album("Rahim","  Album title 3", 10);
 console.log(album1);
 console.log(album2);
 console.log(album3 );
