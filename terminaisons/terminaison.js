async function checkerLoader(){

    const response = await fetch('./newChecker.json')
    const words = await response.json();
    return words;
}

const correctedWords = [];
let emptyCells = null;
checkerLoader().then(words => {

    words.forEach((word) => {
        let correctedWord = '';
        if (word.toCheck.match(/(ée?s(?!(-))(?![^\x00-\x7F])\b)/g)){
            correctedWord = word.toCheck.replace(/(ée?s)(?!(-))(?![^\x00-\x7F])\b/g, 'é‧e‧s')
            correctedWords.push(correctedWord)
        } else if (word.toCheck.match(/(ée)(?!(-))(?![^\x00-\x7F])/g)) {
            correctedWord = word.toCheck.replace(/(ée)(?!(-))(?![^\x00-\x7F])\b/g, 'é‧e')
            correctedWords.push(correctedWord)

        } else if (word.toCheck.match(/é\B/g)) {
            correctedWord = word.toCheck.replace(/é\B/g, 'é‧e')
            correctedWords.push(correctedWord)


        } else if (word.toCheck.match(/(une?|ine?)s(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/une?s(?!(-))(?![^\x00-\x7F])\b/g, 'un‧e‧s')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)  

        } else if (word.toCheck.match(/(une?|ine?)(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/ne?(?!(-))(?![^\x00-\x7F])\b/g, 'n‧e')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)  


        } else if (word.toCheck.match(/oise?s(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/oise?s(?!(-))(?![^\x00-\x7F])\b/g, 'ois‧e‧s')
            correctedWords.push(correctedWord)

        } else if (word.toCheck.match(/oise?(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/oise?(?!(-))(?![^\x00-\x7F])\b/g, 'ois‧e')
            correctedWords.push(correctedWord)


        } else if (word.toCheck.match(/(f|ve)(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/(f|ve)(?!(-))(?![^\x00-\x7F])\b/g, 'f‧ve')
            correctedWords.push(correctedWord)

        } else if (word.toCheck.match(/(ve|f)s(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/(ve|f)s(?!(-))(?![^\x00-\x7F])\b/g, 'f‧ve‧s')
            correctedWords.push(correctedWord)
            

        } else if (word.toCheck.match(/aise?(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/aise?(?!(-))(?![^\x00-\x7F])\b/g, 'ais‧e')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)
        } else if (word.toCheck.match(/aises(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/aises(?!(-))(?![^\x00-\x7F])\b/g, 'ais‧e‧s')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)  


        } else if (word.toCheck.match(/nn?e?(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/nn?e?(?!(-))(?![^\x00-\x7F])\b/g, 'n‧ne')
            correctedWords.push(correctedWord)
            // console.log(correctedWord) 
                
        } else if (word.toCheck.match(/nn?e?s(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/nn?e?s(?!(-))(?![^\x00-\x7F])\b/g, 'n‧ne‧s')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)  


        } else if (word.toCheck.match(/(er|ère)(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/(er|ère)(?!(-))(?![^\x00-\x7F])\b/g, 'er‧ère')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)     
        } else if (word.toCheck.match(/(er|ère)s(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/(er|ère)s(?!(-))(?![^\x00-\x7F])\b/g, 'er‧ère‧s')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)     


        } else if (word.toCheck.match(/(?<!q)ue?(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/ue?\b/g, 'u‧e')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)     
        } else if (word.toCheck.match(/(?<!q)ue?s(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/ue?s\b/g, 'u‧e‧s')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)     


        } else if (word.toCheck.match(/is?e?s?(?!(-))(?![^\x00-\x7F])\b/g)){
            if ( (word.originalWordNumb =="p" || word.originalWordNumb === '') && word.toCheck.match(/ise?s(?!(-))(?![^\x00-\x7F])\b/g)){
                correctedWord = word.toCheck.replace(/ise?s(?!(-))(?![^\x00-\x7F])\b/g, 'is‧e‧s')
                
            } else if ((word.originalWordNumb == "s" || word.originalWordNumb === '') && word.toCheck.match(/ise?(?!(-))(?![^\x00-\x7F])\b/g)){
                correctedWord = word.toCheck.replace(/ise?(?!(-))(?![^\x00-\x7F])\b/g, 'is‧e')

            } else  if (word.originalWordNumb == "p" && word.toCheck.match(/ie?s(?!(-))(?![^\x00-\x7F])\b/g)){
                correctedWord = word.toCheck.replace(/ie?s(?!(-))(?![^\x00-\x7F])\b/g, 'i‧e‧s')
            } else {                    
                correctedWord = word.toCheck.replace(/ie?(?!(-))(?![^\x00-\x7F])\b/g, 'i‧e')
                if (word.originalWordNumb === '')  {
                    console.log('youpi')
                    
                }
            }
            // console.log(correctedWord)                
            correctedWord = word.toCheck.replace(/ie?s(?!(-))(?![^\x00-\x7F])\b/g, 'i‧e‧s')
            correctedWords.push(correctedWord)

        } else if (word.toCheck.match(/(teur|trice)s?(?!(-))(?![^\x00-\x7F])\b/g)){

            if (word.originalWordNumb === 'p'){
                correctedWord = word.toCheck.replace(/(teur|trice)s(?!(-))(?![^\x00-\x7F])\b/g, 'teur‧trice‧s')
            } else {
                correctedWord = word.toCheck.replace(/(teur|trice)(?!(-))(?![^\x00-\x7F])\b/g, 'teur‧trice')                
            }
            correctedWords.push(correctedWord)
            // console.log(correctedWord)     
   
        } else if (word.toCheck.match(/teuse(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/teuse(?!(-))(?![^\x00-\x7F])\b/g, 'teur‧teuse')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)     


        
        } else if (word.toCheck.match(/te?s?(?!(-))(?![^\x00-\x7F])\b/g)){
            // console.log(correctedWord)    
            if (word.originalWordNumb === 'p'){
                correctedWord = word.toCheck.replace(/te?s(?!(-))(?![^\x00-\x7F])\b/g, 't‧e‧s')
            } else {
                correctedWord = word.toCheck.replace(/te?(?!(-))(?![^\x00-\x7F])\b/g, 't‧e')
                
            }
            correctedWords.push(correctedWord)
            // console.log(correctedWord)     


        } else if (word.toCheck.match(/ale?(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/al(?!(-))(?![^\x00-\x7F])\b/g, 'al‧le')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)     

        } else if (word.toCheck.match(/(aux|ales)(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/(aux|ales)(?!(-))(?![^\x00-\x7F])\b/g, 'aux‧ales')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)    


        } else if (word.toCheck.match(/(eux|euses?)(?!(-))(?![^\x00-\x7F])\b/g)) {
            if (word.originalWordNumb === 'p'){
                correctedWord = word.toCheck.replace(/(eux|euses)(?!(-))(?![^\x00-\x7F])\b/g, 'eux‧euses')
            } else {
                correctedWord = word.toCheck.replace(/(eux|euse)(?!(-))(?![^\x00-\x7F])\b/g, 'eux‧euse')
            }
            // console.log(correctedWord)
            correctedWords.push(correctedWord)


        } else if (word.toCheck.match(/ell?e?(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/ell?e?(?!(-))(?![^\x00-\x7F])\b/g, 'el‧le')
            correctedWords.push(correctedWord)
            // console.log(correctedWord) 

        } else if (word.toCheck.match(/ell?e?s(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/ell?e?s(?!(-))(?![^\x00-\x7F])\b/g, 'el‧le‧s')
            correctedWords.push(correctedWord)
            
 
        } else if (word.toCheck.match(/de?(?!(-))(?![^\x00-\x7F])\b/g)){
            if (!(word.toCheck.match(/de(?!(-))(?![^\x00-\x7F])\b/g) && word.originalWordGender == "m")){
                correctedWord = word.toCheck.replace(/de?(?!(-))(?![^\x00-\x7F])\b/g, 'd‧e')
                correctedWords.push(word.toCheck)
            }

        } else if (word.toCheck.match(/de?s(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/de?s(?!(-))(?![^\x00-\x7F])\b/g, 'd‧e‧s')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)   

        } else {
            correctedWords.push(correctedWord)
            emptyCells += 1;
        }
    })

    
    console.log(correctedWords)
    console.log(emptyCells)
});

