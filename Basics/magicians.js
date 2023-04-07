// EX:41 Magicians
let magicians = ["Sameer", "Nadir", "Jadoogar", "Aamil Junaid Bangali"];
function show_magicians(mag) {
    for (let index = 0; index < mag.length; index++) {
        console.log(mag[index]);
    }
}
show_magicians(magicians);
// EX:42 Great Magicians
let copy_magicians = ["Sameer", "Nadir", "Jadoogar", "Aamil Junaid Bangali"];
;
function make_great(mag) {
    for (let index = 0; index < mag.length; index++) {
        mag[index] = "the Great" + " " + mag[index];
    }
}
make_great(copy_magicians);
show_magicians(magicians);
export {};
// EX:43 Unchanged Magicians
