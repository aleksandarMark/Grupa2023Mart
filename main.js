import { Book } from "./Book.js";
import { UI } from "./UI.js";

const ui = new UI();
const dugme = document.querySelector("#book-form").addEventListener("submit", dodaj);
document.querySelector("#book-list").addEventListener("click", brisi);

function dodaj(e) {
    e.preventDefault();

    let podaci = UI.pokupiSaForme();
    if (podaci.title == "" || podaci.author == "" || podaci.isbn == "") {
        ui.prikaziAlert("Nisu opunjeni svi podaci", "error");
    } else {
        const knjiga = new Book(podaci.title, podaci.author, podaci.isbn);
        ui.prikaziKnjigu(knjiga);
        ui.prikaziAlert("Knjiga uspesno dodata", "success");
        ui.brisiPolja();
    } 
}

function brisi(e) {
    ui.brisiKnjigu(e.target);
}



