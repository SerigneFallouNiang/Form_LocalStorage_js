let form = document.querySelector('#loginForm');

form.libelle.addEventListener('change', function() {
    validLibelle(this);
});


form.message.addEventListener('change', function() {
    validMessage(this);
});
//********************** */ validation Libelle******************
const validLibelle = function(inputLibelle) {
    // Création de l'expression régulière pour validation libelle
    let libelleRegExpString = '^[a-zA-Z]+$';
    let small = inputLibelle.nextElementSibling;

    function validateLibelle(libelle) {
        libelle = libelle.trim(); // Supprimer les espaces en début et en fin de chaîne
        let libelleRegExp = new RegExp(libelleRegExpString, 'g');
        return libelleRegExp.test(libelle);
    }

    // On teste l'expression régulière
    let testLibelle = validateLibelle(inputLibelle.value);
    if (testLibelle) {
        small.innerHTML = 'Libelle Valide';
        small.classList.add('text-success');
        small.classList.remove('text-danger');
        return true;
    } else {
        small.innerHTML = 'Libelle Non Valide';
        small.classList.add('text-danger');
        small.classList.remove('text-success');
        return false;
    }
};


//********************** */ validation Libelle******************
const validMessage = function(inputMessage) {
    // Création de l'expression régulière pour validation libelle
    let MessageRegExpString = '^[a-zA-Z]+$';
    let small = inputMessage.nextElementSibling;

    function validMessage(message) {
        message = libelle.trim(); // Supprimer les espaces en début et en fin de chaîne
        let messageRegExp = new RegExp(MessageRegExpString, 'g');
        return messageRegExp.test(libelle);
    }

    // On teste l'expression régulière
    let testMessage = validMessage(inputMessage.value);
    if (testMessage) {
        small.innerHTML = 'Message Valide';
        small.classList.add('text-success');
        small.classList.remove('text-danger');
        return true;
    } else {
        small.innerHTML = 'Message Non Valide';
        small.classList.add('text-danger');
        small.classList.remove('text-success');
        return false;
    }
};