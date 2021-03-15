"use strict";
const btnCheck = document.querySelector(".btn--check");
const btnCancel = document.querySelector(".btn--cancel");
const btnCopy = document.querySelector(".btn--copy");
const textArea = document.querySelector(".textarea");
let userText = [];
let newText = [];
let text = '';
let words = '';


function checkerLoader(){
    // Cette fonction a pour simple objectif de récupérer les données JSON de la base de donnée et de les attribuer dans une variable accessible sans faire de requêtes supplémentaires.
    fetch('./checker.json')
    .then(function (response) { return response.json()})
    .then(function (data) {
        return words = data;
    }).catch(function (error) {
        console.error("Il y'a eu un problème avec l'obtention des données.")
        console.error(error)
    })
}
checkerLoader();

window.addEventListener("load", (e) =>{
    // Cet écouteur d'évenements a pour objectif d'attendre que les données soient bien téléchargées afin de donner accès aux modifications.
    btnCheck.removeAttribute('disabled');
})

btnCheck.addEventListener("click", (e) =>{
    return textCompact();
})

btnCancel.addEventListener('click', (e) =>{
    // ce bouton permet simplement d'annuler les modifications effectuées.
    console.clear();
    newText = text;
    btnCancel.setAttribute('disabled', true);
    textbackinTxtArea();
})



function textCompact() {
    // console.clear();
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


            words.forEach((word, index) => {
                let regex = new RegExp('\\b'+'(' + word.toCheck + ')'+'\\b', 'g')

                if (subElement.match(regex)) {                
                    subElement = subElement.replace(regex, '<span class="corrected">'+word.checked+'</span>');
                    // subElement = subElement.replace(regex, word.checked);
                }
            })
            userText[index][subIndex] = subElement
        });

        // Après avoir corrigé le texte, on vient rassembler les paragraphes afin de supprimer les caractères inutiles qui permettent de structurer les tableaux.
        userText[index] = userText[index].join(' ')
    });

    //Ici, on désactive l'état "disabled" du bouton permettant d'annuler les changements.
    btnCancel.removeAttribute('disabled');
    btnCopy.removeAttribute('disabled');
    // Ici, on applique le texte dans une nouvelle variable en ajouter deux retours à la ligne entre chaque paragraphe.
    // newText = userText.join('\n\n')
    newText = userText

    if (newText === text ){
        alert('aucune modification effectuée !')
    }

    textInNewDiv();
}

function textInNewDiv(){
    let textDiv = document.createElement("div")
    userText.forEach(paragraph => {
        // console.log(paragraph)
        let p = document.createElement("p");
        p.innerHTML = paragraph;
        textDiv.appendChild(p)
    })
    textDiv.classList.add("text-container")
    document.body.replaceChild(textDiv, textArea)
    btnCheck.setAttribute('disabled', true);
    spanDetector();

}

function spanDetector() {
    let spanList = document.querySelectorAll('.corrected')
    spanList.forEach(span => {
        let spanBtn = document.createElement("button");
        spanBtn.classList.add("btn", "btn--delete");
        spanBtn.innerHTML = "supprimer"
        span.appendChild(spanBtn);
    })   
    
    let spanBtnList = document.querySelectorAll('.btn--delete');
    spanBtnList.forEach((button, index) => {
        button.addEventListener("click", (e) =>{
            // console.log(spanList[index].innerHTML)
            
            words.forEach(word => {
                if (spanList[index].innerHTML.match(word.checked)) {
                    console.log("même mot")
                    console.log(word.checked)
                }
            })
        })
    })
}

function textbackinTxtArea(){
    let textDiv = document.querySelector(".text-container")
    textArea.innerHTML = newText;
    document.body.replaceChild(textArea, textDiv)
    btnCheck.removeAttribute('disabled');
}


btnCopy.addEventListener('click', (e) =>{
    // Ce bouton permet tout simplement de copier dans le presse-papier le texte modifié.
    copyToClip();
})

function copyToClip() {
    let textCopied = document.querySelector(".text-container").innerText.replace(/\B(supprimer)/g, '');
    console.log(textCopied)


    // console.log(textCopied)
    navigator.clipboard.writeText(textCopied).then(function() {
        console.log('Le texte fut copié dans le presse papier avec succès !')
    }, function() {
        console.log('Une erreur est survenue, impossible de copier dans le presse papier.')
    })
}
// ____TO_DO____
// Ajouter une classe succès ! ✅
// Ajouter un bouton de retour en arrière ✅
// Ajouter un bouton 'copier dans le presse-papier' ❌ Nécessite modification : supprimer les spans. UPDATE : ✅
// Si pas de texte, ajouter une option "ajoutez du texte pour le convertir !" ✅
// Si rien de changé, ajouter une nouvelle classe 'rien ne nécessite d'êtrem modifié !' ✅
// Highlight les endroits changés dans un span✅
// possibilité d'annuler les changements localement.
// afficher l'explication au hover du span.
// montrer que l'article a déjà été déjà été modifié

// __LATER__
// Faire les options de modifications du site.
// Option pour personnaliser les modifications à effectuer
// Stocker ces données perso dans le LocalStorage
// Montrer, pendant la modification du site, que le site est en train de travailler dans le background.