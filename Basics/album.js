// EX:40 Album
function make_album(artist_name, album_title) {
    const music_album = {
        artst_name: artist_name,
        alb_title: album_title,
    };
    return music_album;
}
function make_album2(artist_name, album_title, tracks) {
    const music_album = {
        artst_name: artist_name,
        alb_title: album_title,
        trcks: Number
    };
    return music_album;
}
console.log(make_album("John", "The Glory"));
console.log(make_album("Martin Jr", "Peace"));
console.log(make_album("Christ Sheaperd", "My Homeland"));
console.log(make_album2("Abraham", "Great Me", 100));
export {};
