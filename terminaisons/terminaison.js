async function checkerLoader(){

    const response = await fetch('./newChecker.json')
    const words = await response.json();
    return words;
}
const correctedWords = [];
checkerLoader().then(words => {

    words.forEach((word, index) => {
        let correctedWord = '';
        if (word.toCheck.match(/(ée?s\b)/g)){
            correctedWord = word.toCheck.replace(/(ée?s)\b/g, 'é‧e‧s')
            correctedWords.push(correctedWord)
        } else if (word.toCheck.match(/(ée)/g)) {
            correctedWord = word.toCheck.replace(/(ée)\b/g, 'é‧e')
            correctedWords.push(correctedWord)
        } else if (word.toCheck.match(/é\B/g)) {
            correctedWord = word.toCheck.replace(/é\B/g, 'é‧e')
            correctedWords.push(correctedWord)

        } else if (word.toCheck.match(/(une?s)\b/g)){
            correctedWord = word.toCheck.replace(/une?s\b/g, 'un‧e‧s')
            correctedWords.push(correctedWord)
        } else if (word.toCheck.match(/(une)\b/g)){
            correctedWord = word.toCheck.replace(/une\b/g, 'un‧e')
            correctedWords.push(correctedWord)
        } else if (word.toCheck.match(/(un)\b/g)){
            correctedWord = word.toCheck.replace(/un\b/g, 'un‧e')
            correctedWords.push(correctedWord)

        } else if (word.toCheck.match(/oise?s\b/g)){
            correctedWord = word.toCheck.replace(/oise?s\b/g, 'ois‧e‧s')
            correctedWords.push(correctedWord)
        } else if (word.toCheck.match(/oise?\b/g)){
            correctedWord = word.toCheck.replace(/oise?\b/g, 'ois‧e')
            correctedWords.push(correctedWord)

        } else if (word.toCheck.match(/f\b|ve\b/g)){
            correctedWord = word.toCheck.replace(/f\b|ve\b/g, 'f‧ve')
            correctedWords.push(correctedWord)
        } else if (word.toCheck.match(/ves\b|fs\b/g)){
            correctedWord = word.toCheck.replace(/ves\b|fs\b/g, 'f‧ve‧s')
            correctedWords.push(correctedWord)
            
        } else if (word.toCheck.match(/aise?\b/g)){
            correctedWord = word.toCheck.replace(/aise?\b/g, 'ais‧e')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)
        } else if (word.toCheck.match(/aises\b/g)){
            correctedWord = word.toCheck.replace(/aises\b/g, 'ais‧e‧s')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)  

        } else if (word.toCheck.match(/en(ne)?\b/g)){
            correctedWord = word.toCheck.replace(/en\b/g, 'en‧ne')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)     
        } else if (word.toCheck.match(/en(ne)?s\b/g)){
            correctedWord = word.toCheck.replace(/en(ne)?s\b/g, 'en‧ne‧s')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)  

        } else if (word.toCheck.match(/er\b|ère\b/g)){
            correctedWord = word.toCheck.replace(/er\b|ère\b/g, 'er‧ère')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)     
        } else if (word.toCheck.match(/ers\b|ères\b/g)){
            correctedWord = word.toCheck.replace(/ers\b|ères\b/g, 'er‧ère‧s')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)     

        } else if (word.toCheck.match(/(?<!q)ue?\b/g)){
            correctedWord = word.toCheck.replace(/ue?\b/g, 'u‧e')
            correctedWords.push(correctedWord)
            console.log(correctedWord)     
        } else if (word.toCheck.match(/(?<!q)ue?s\b/g)){
            correctedWord = word.toCheck.replace(/ue?s\b/g, 'u‧e‧s')
            correctedWords.push(correctedWord)
            console.log(correctedWord)     

        } else {
            correctedWords.push(correctedWord)
        }
    })


 
    console.log(correctedWords)
});


// problème avec les terminaisons i, te, l/le/aux/lles,