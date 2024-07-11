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
        message: message
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
        html += `<td>
                    <button onclick="editData(${index})" class="btn btn-warning">Edit</button>
                    <button onclick="deleteData(${index})" class="btn btn-danger">Delete</button>
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

function editData(index) {
    let ideaList;
    if (localStorage.getItem("ideaList") == null) {
        ideaList = [];
    } else {
        ideaList = JSON.parse(localStorage.getItem("ideaList"));
    }

    document.getElementById("libelle").value = ideaList[index].libelle;
    document.getElementById("categorie").value = ideaList[index].categorie;
    document.getElementById("message").value = ideaList[index].message;

    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    document.querySelector("#Update").onclick = function() {
        if (!validateForm()) return;

        ideaList[index].libelle = document.getElementById("libelle").value;
        ideaList[index].categorie = document.getElementById("categorie").value;
        ideaList[index].message = document.getElementById("message").value;

        localStorage.setItem("ideaList", JSON.stringify(ideaList));
        showData();

        document.getElementById("Submit").style.display = "block";
        document.getElementById("Update").style.display = "none";
        document.getElementById("loginForm").reset();
    }
}
