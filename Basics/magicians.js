// EX:41 Magicians
var magicians = ["Sameer", "Nadir", "Jadoogar", "Aamil Junaid Bangali"];
function show_magicians(mag) {
    for (var index = 0; index < mag.length; index++) {
        console.log(mag[index]);
    }
}
show_magicians(magicians);
// EX:42 Great Magicians
function make_great() {
    for (var index = 0; index < magicians.length; index++) {
        magicians[index] = "the Great" + " " + magicians[index];
    }
}
make_great();
show_magicians(magicians);
