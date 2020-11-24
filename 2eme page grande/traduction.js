let frensh = {
    "header": {
        "acceuil": "Acceuil",
        "boutique": "NP",
        "page4": "Shop",
        "compte": "Mon Compte",
        "support": "Support"
    },
    "connexion": {
        "button": "Se connecter",
        "email": "Pseudo ou Adresse Email",
        "password": "Mot de passe",
        "passwordF": "Mot de passe oublié ?",
        "souvenir": "Se souvenir de moi",
    }
};

let langages = {
    "francais": "Fr",
    "anglais": "En"
};

let english = {
    "header": {
        "acceuil": "Home",
        "boutique": "NP",
        "page4": "Shop",
        "compte": "My account",
        "support": "Support"
    },
    "langages": {
        "francais": "Fr",
        "anglais": "En"
    },
    "connexion": {
        "button": "Log in",
        "email": "Username or Email Adress",
        "password": "Password",
        "passwordF": "Password forgotten ?",
        "souvenir": "Remember me",
    }
};

let element1 = document.getElementById('deco1');
let element2 = document.getElementById('deco2');
let element3 = document.getElementById('deco3');
let element4 = document.getElementById('deco4');
let element5 = document.getElementById('deco5');
let button = document.getElementById('langage');
let button_connexion = document.getElementById('button_connexion');

let element6 = document.getElementById('connexion_username');
let element7 = document.getElementById('connexion_password');
let element8 = document.getElementById('connexion_passwordF');
let element9 = document.getElementById('connexion_souvenir');
let element10 = document.getElementById('connexion_submit');

function traductionToFrensh() {
    button.innerHTML = langages.francais;
    button_connexion.innerHTML = frensh.connexion.button;
    element1.textContent = frensh.header.acceuil;
    element2.textContent = frensh.header.boutique;
    element3.textContent = frensh.header.page4;
    element4.textContent = frensh.header.compte;
    element5.textContent = frensh.header.support;
    element6.textContent = frensh.connexion.email;
    element7.textContent = frensh.connexion.password;
    element8.textContent = frensh.connexion.passwordF;
    element9.textContent = frensh.connexion.souvenir;
    element10.textContent = frensh.connexion.button;
}

function traductionToEnglish() {
    button.innerHTML = langages.anglais;
    button_connexion.innerHTML = english.connexion.button;
    element1.textContent = english.header.acceuil;
    element2.textContent = english.header.boutique;
    element3.textContent = english.header.page4;
    element4.textContent = english.header.compte;
    element5.textContent = english.header.support;
    element6.textContent = english.connexion.email;
    element7.textContent = english.connexion.password;
    element8.textContent = english.connexion.passwordF;
    element9.textContent = english.connexion.souvenir;
    element10.textContent = english.connexion.button;
}

window.onload = function() {
   if (localStorage.getItem('langage') === langages.francais) {
       traductionToFrensh();
   } else {
       traductionToEnglish();
   }
}

button.addEventListener('click', function(event) {
    if (event.target.textContent === "Fr") {
        localStorage.clear();
        localStorage.setItem('langage', 'En');
        event.target.textContent = langages.anglais;
        traductionToEnglish();
    } else {
        localStorage.clear();
        localStorage.setItem('langage', 'Fr');
        event.target.textContent = langages.francais;
        traductionToFrensh();
    } 
});






