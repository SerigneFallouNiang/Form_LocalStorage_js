document.addEventListener("DOMContentLoaded", showData);

function validateForm() {
    let libelle = document.getElementById("libelle").value;
    let categorie = document.getElementById("categorie").value;
    let message = document.getElementById("message").value;

    if (libelle === "") {
        alert("Libelle est obligatoire");
        return false;
    }

    if (categorie === "Selectionner une categorie") {
        alert("Categorie est obligatoire");
        return false;
    }

    if (message === "") {
        alert("Message est obligatoire");
        return false;
    }

    return true;
}

function AddData() {
    if (!validateForm()) return;

    let libelle = document.getElementById("libelle").value;
    let categorie = document.getElementById("categorie").value;
    let message = document.getElementById("message").value;

    let ideaList;
    if (localStorage.getItem("ideaList") == null) {
        ideaList = [];
    } else {
        ideaList = JSON.parse(localStorage.getItem("ideaList"));
    }

    ideaList.push({
        libelle: libelle,
        categorie: categorie,
        message: message,
        approuver: false // Initialisez à false
    });

    localStorage.setItem("ideaList", JSON.stringify(ideaList));
    showData();
    document.getElementById("loginForm").reset();
}

function showData() {
    let ideaList;
    if (localStorage.getItem("ideaList") == null) {
        ideaList = [];
    } else {
        ideaList = JSON.parse(localStorage.getItem("ideaList"));
    }

    let html = "";

    ideaList.forEach(function(element, index) {
        html += "<tr>";
        html += "<td>" + element.libelle + "</td>";
        html += "<td>" + element.categorie + "</td>";
        html += "<td>" + element.message + "</td>";
        html += "<td>" + (element.approuver ? '✅' : '') + "</td>";
        html += `<td>
                    <button onclick="deleteData(${index})" class="btn btn-danger">Delete</button>
                    <button onclick="approuveData(${index})" class="btn btn-primary">Approuver</button>
                    <button onclick="nonApprouveData(${index})" class="btn btn-warning">Non approuver</button>

                 </td>`;
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

function deleteData(index) {
    let ideaList;
    if (localStorage.getItem("ideaList") == null) {
        ideaList = [];
    } else {
        ideaList = JSON.parse(localStorage.getItem("ideaList"));
    }

    ideaList.splice(index, 1);
    localStorage.setItem("ideaList", JSON.stringify(ideaList));
    showData();
}


function approuveData(index) {
    let ideaList = JSON.parse(localStorage.getItem("ideaList")) || [];
    
    if (ideaList[index]) {
        ideaList[index].approuver = true;
        localStorage.setItem("ideaList", JSON.stringify(ideaList));
        showData(); // Rafraîchit l'affichage
    }
    
}

function nonApprouveData(index) {
    let ideaList = JSON.parse(localStorage.getItem("ideaList")) || [];
    if (ideaList[index]) {
        ideaList[index].approuver = false;
        localStorage.setItem("ideaList", JSON.stringify(ideaList));
        showData(); // Rafraîchit l'affichage
    }
}