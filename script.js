"use strict";
let contentEdit = document.querySelector(".div");
let ContentBtn = document.querySelector(".div-btn");
let textArea = document.querySelector(".textarea");
let UserText = [];

window.addEventListener("load", (e) =>{
    return TextCheck();

})
// ContentBtn.addEventListener("click", (e) =>{
//     e.preventDefault();
    // return TextCheck();
// })

function TextCheck() {
    console.clear();
    UserText = [];
    let text = textArea.value;

    // Tout d'abord, on vient découper le texte en paragraphes, que l'on vient stocker dans un tableau.
    // Pour cela, on utilise une expression régulière qui vient cibler uniquement les retours à la ligne.
    UserText = text.replace(/\n?\n/g, '$1|').split('$1|');
   
    // Ensuite, on vient découper et remplacer le tableau en tableau comportant les phrases, classées par paragraphes.
    UserText.forEach((e, index) => {
        UserText[index] = e.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|');
        UserText[index].forEach(subElement => {
            console.log(subElement)
            // if (subElement.match(/toutefois/g)){
            subElement.replace(/\w/g, 'noix')
                // console.log("je ici ! " + subElement)
            // }
        });
    });


    // console.log(UserText);
     // let p = document.createElement("p");
    // p.innerHTML = phrases;
    // document.body.appendChild(p);
    // let newText = text.replace(/femme/g,  'personne');
    // contentEdit.innerHTML = newText ; 

}