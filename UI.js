export class UI {

    addBookToList() {

    }

    static pokupiSaForme() {
        return {
            title: document.querySelector("#title").value,
            author: document.querySelector("#author").value,
            isbn: document.querySelector("#isbn").value
        }
    }

    prikaziKnjigu(book) {
        const prikaz = document.querySelector("#book-list");
        const row = document.createElement("tr");
        row.innerHTML =
            `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</td>
        `
        prikaz.appendChild(row);
    }

    prikaziAlert(poruka, klasa) {
        const div = document.createElement("div");
        div.className = `alert ${klasa}`;
        div.appendChild(document.createTextNode(poruka));

        const container = document.querySelector(".container");
        container.insertBefore(div, document.querySelector("#book-form"));

        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 3000);
    }

    brisiKnjigu(elementX) {
        if (elementX.className == "delete") {
            elementX.parentElement.parentElement.remove();
        }
    }

    brisiPolja() {
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
}