"use strict";
let contentEdit = document.querySelector(".div");
let ContentBtn = document.querySelector(".div-btn");
let textArea = document.querySelector(".textarea");
let userText = [];
let newText = [];
window.addEventListener("load", (e) =>{
    return textCheck();

})
// ContentBtn.addEventListener("click", (e) =>{
//     e.preventDefault();
    // return TextCheck();
// })

function textCheck() {
    // console.clear();
    userText = [];
    let text = textArea.value;

    // Tout d'abord, on vient découper le texte en paragraphes, que l'on vient stocker dans un tableau.
    // Pour cela, on utilise une expression régulière qui vient cibler uniquement les retours à la ligne.
    userText = text.replace(/\n?\n/g, '$1|').split('$1|');
   
    // Ensuite, on vient découper et remplacer le tableau en tableau comportant les phrases, classées par paragraphes.
    userText.forEach((e, index) => {
        userText[index] = e.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|');
        userText[index].forEach((subElement, subIndex) => {

            // c'est ici que l'on check pour les différents mots à changer.
            if (subElement.match(/(essai)/g)){
                userText[index][subIndex] = subElement.replace(/(essai)/g, 'piñata')
            }            
        });
    });




    textJoin();
}






function textJoin() {
// Cette fonction permet ensuite de rassembler le texte dans une nouvelle variable avant de l'attribuer au textarea





    newText = userText;
    textArea.value = newText;
// ajouter une classe "succès!"
}
