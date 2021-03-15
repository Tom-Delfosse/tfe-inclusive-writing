"use strict";
const btnCheck = document.querySelector(".btn--check");
const btnCancel = document.querySelector(".btn--cancel");
const btnCopy = document.querySelector(".btn--copy");
const textArea = document.querySelector(".textarea");
const data = import('./checker.json');
let userText = [];
let newText = [];
let text = '';


btnCheck.addEventListener("click", (e) =>{
    return textCompact();
})

window.addEventListener("load", (e) =>{
    console.log(data)
})

btnCancel.addEventListener('click', (e) =>{
    // ce bouton permet simplement d'annuler les modifications effectuées.
    console.clear();
    newText = text;
    btnCancel.setAttribute('disabled', true);
    textJoin();
})

btnCopy.addEventListener('click', (e) =>{
    // Ce bouton permet tout simplement de copier dans le presse-papier le texte modifié.
    navigator.clipboard.writeText(newText).then(function() {
        console.log('Le texte fut copié dans le presse papier avec succès !')
    }, function() {
        console.log('Une erreur est survenue, impossible de copier dans le presse papier.')
    })
})

function textCompact() {
    console.clear();
    userText = [];
    text = textArea.value;

    // On check si le textArea est vide et si c'est le cas, on annule la modification du site.
    if (!text) {
        return alert("ajoutez du texte pour qu'il soit converti !")
    }

    // Si le textArea contient du texte, on vient découper le texte en paragraphes, que l'on vient stocker dans un tableau.
    // Pour cela, on utilise une expression régulière qui vient cibler uniquement les retours à la ligne.
    userText = text.replace(/\n?\n/g, '$1|').split('$1|');

    // Ensuite, on vient découper et remplacer le tableau en tableau comportant les phrases, classées par paragraphes.
    userText.forEach((e, index) => {
        userText[index] = e.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|');
        userText[index].forEach((subElement, subIndex) => {

            // c'est ici que l'on check pour les différents mots à changer.
            if (subElement.match(/(Normalement)/g)){
                userText[index][subIndex] = subElement.replace(/(Normalement)/g, 'Étonnamment')
            }

            // switch (true) {
            //     case subElement.test(maintenant):
            //         console.log("Maintenant est ici !")
            //     break;
            //     default: 
            //     console.log('aucun changement à effectuer !');
            // }
        });

        // Après avoir corrigé le texte, on vient rassembler les paragraphes afin de supprimer les caractères inutiles qui permettent de structurer les tableaux.
        userText[index] = userText[index].join(' ')
    });
    //Ici, on désactive l'état "disabled" du bouton permettant d'annuler les changements.
    btnCancel.removeAttribute('disabled');
    btnCopy.removeAttribute('disabled');
    // Ici, on applique le texte dans une nouvelle variable en ajouter deux retours à la ligne entre chaque paragraphe.
    newText = userText.join('\n\n')

    textJoin();
}

function textJoin() {
    // Cette fonction permet simplement de renvoyer le texte dans la zone éditable directement dans le DOM.

    textArea.classList.add("textarea--checked");
    textArea.value = newText;
}


// ____TO_DO____
// Ajouter une classe succès ! ✅
// Ajouter un bouton de retour en arrière ✅
// Ajouter un bouton 'copier dans le presse-papier' ✅
// Si pas de texte, ajouter une option "ajoutez du texte pour le convertir !" ✅
// Si rien de changé, ajouter une nouvelle classe 'rien ne nécessite d'êtrem modifié !'
// Highlight les endroits changés dans un span et possibilité de les annuler.


// __LATER__
// Faire les options de modifications du site.
// Option pour personnaliser les modifications à effectuer
// Stocker ces données perso dans le LocalStorage
// Highlighter les changements effectués ?
// Montrer, pendant la modification du site, que le site est en train de travailler dans le background.