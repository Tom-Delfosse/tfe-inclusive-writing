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

            // if (word.originalWordNumb === 'p'){
            // } else {
            // }

        } else if (word.toCheck.match(/(u|i)ne?s?(?!(-))(?![^\x00-\x7F])\b/g)){
            if (word.originalWordNumb === 'p'){
                correctedWord = word.toCheck.replace(/ne?s(?!(-))(?![^\x00-\x7F])\b/g, 'n‧e‧s')
            } else {
                correctedWord = word.toCheck.replace(/ne?(?!(-))(?![^\x00-\x7F])\b/g, 'n‧e')
            }
            correctedWords.push(correctedWord)
            
            
            
        } else if (word.toCheck.match(/oise?s?(?!(-))(?![^\x00-\x7F])\b/g)){
            if (word.toCheck.match(/oise?s(?!(-))(?![^\x00-\x7F])\b/g)) {
                correctedWord = word.toCheck.replace(/oise?s(?!(-))(?![^\x00-\x7F])\b/g, 'ois‧e‧s')
            } else {
                correctedWord = word.toCheck.replace(/oise?(?!(-))(?![^\x00-\x7F])\b/g, 'ois‧e')
            }
            correctedWords.push(correctedWord)
            
            // } else if (word.toCheck.match(/(f|ve)(?!(-))(?![^\x00-\x7F])\b/g)){
                //     correctedWords.push(correctedWord)
                
            } else if (word.toCheck.match(/(ve|f)s?(?!(-))(?![^\x00-\x7F])\b/g)){
                
                if (word.originalWordNumb === 'p'){
                    correctedWord = word.toCheck.replace(/(ve|f)s(?!(-))(?![^\x00-\x7F])\b/g, 'f‧ve‧s')
                } else {
                    correctedWord = word.toCheck.replace(/(f|ve)(?!(-))(?![^\x00-\x7F])\b/g, 'f‧ve')
                }
                correctedWords.push(correctedWord)
                // console.log(correctedWord)  
            

        } else if (word.toCheck.match(/aises?(?!(-))(?![^\x00-\x7F])\b/g)){
            if (word.originalWordNumb === 'p'){
                correctedWord = word.toCheck.replace(/aises(?!(-))(?![^\x00-\x7F])\b/g, 'ais‧e‧s')
            } else {
                correctedWord = word.toCheck.replace(/aise?(?!(-))(?![^\x00-\x7F])\b/g, 'ais‧e')
            }
            correctedWords.push(correctedWord)
            // console.log(correctedWord)  

        } else if (word.toCheck.match(/nn?e?s?(?!(-))(?![^\x00-\x7F])\b/g)){
            if (word.originalWordNumb === 'p'){
                correctedWord = word.toCheck.replace(/nn?e?s(?!(-))(?![^\x00-\x7F])\b/g, 'n‧ne‧s')
            } else {
                correctedWord = word.toCheck.replace(/nn?e?(?!(-))(?![^\x00-\x7F])\b/g, 'n‧ne')
            }
            correctedWords.push(correctedWord)
            // console.log(correctedWord)  

            
        } else if (word.toCheck.match(/(er|ère)s?(?!(-))(?![^\x00-\x7F])\b/g)){
            
            if (word.originalWordNumb === 'p'){
                correctedWord = word.toCheck.replace(/(er|ère)s(?!(-))(?![^\x00-\x7F])\b/g, 'er‧ère‧s')
            } else {
                correctedWord = word.toCheck.replace(/(er|ère)(?!(-))(?![^\x00-\x7F])\b/g, 'er‧ère')
            }
            // console.log(correctedWord)     
            correctedWords.push(correctedWord)


        } else if (word.toCheck.match(/(?<!q)ue?s?(?!(-))(?![^\x00-\x7F])\b/g)){
            if (word.originalWordNumb === 'p'){
                correctedWord = word.toCheck.replace(/ue?s\b/g, 'u‧e‧s')
            } else {
                correctedWord = word.toCheck.replace(/ue?\b/g, 'u‧e')
            }
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
            }
            correctedWords.push(correctedWord)
            // console.log(correctedWord)                

        } else if (word.toCheck.match(/(teur|trice)s?(?!(-))(?![^\x00-\x7F])\b/g)){

            if (word.originalWordNumb === 'p'){
                correctedWord = word.toCheck.replace(/(teur|trice)s(?!(-))(?![^\x00-\x7F])\b/g, 'teur‧trice‧s')
            } else {
                correctedWord = word.toCheck.replace(/(teur|trice)(?!(-))(?![^\x00-\x7F])\b/g, 'teur‧trice')                
            }
            correctedWords.push(correctedWord)
            // console.log(correctedWord)     
   
        } else if (word.toCheck.match(/(euse|eur)s?(?!(-))(?![^\x00-\x7F])\b/g)){
            
            if (word.originalWordNumb === 'p'){
                correctedWord = word.toCheck.replace(/(euse|eur)s(?!(-))(?![^\x00-\x7F])\b/g, 'eur‧euse‧s')
            } else {
                correctedWord = word.toCheck.replace(/(euse|eur)(?!(-))(?![^\x00-\x7F])\b/g, 'eur‧euse')
            }
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
            correctedWord = word.toCheck.replace(/ale?(?!(-))(?![^\x00-\x7F])\b/g, 'al‧le')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)     

        } else if (word.toCheck.match(/(aux|ales)(?!(-))(?![^\x00-\x7F])\b/g)){
            correctedWord = word.toCheck.replace(/(aux|ales)(?!(-))(?![^\x00-\x7F])\b/g, 'aux‧ales')
            correctedWords.push(correctedWord)
            // console.log(correctedWord)    


        } else if (word.toCheck.match(/ell?e?s?(?!(-))(?![^\x00-\x7F])\b/g)){
            if (word.originalWordNumb === 'p'){
                correctedWord = word.toCheck.replace(/ell?e?s(?!(-))(?![^\x00-\x7F])\b/g, 'el‧le‧s')
            } else {
                correctedWord = word.toCheck.replace(/ell?e?(?!(-))(?![^\x00-\x7F])\b/g, 'el‧le')
            }
            correctedWords.push(correctedWord)
            // console.log(correctedWord) 
            
 
        } else if (word.toCheck.match(/de?s?(?!(-))(?![^\x00-\x7F])\b/g)){
            if (word.originalWordNumb === "p") {
                correctedWord = word.toCheck.replace(/de?s(?!(-))(?![^\x00-\x7F])\b/g, 'd‧e‧s')
            } else {
                correctedWord = word.toCheck.replace(/de?(?!(-))(?![^\x00-\x7F])\b/g, 'd‧e')

            }
            correctedWords.push(correctedWord)
            // console.log(correctedWord)
        
        } else if (word.toCheck.match(/eill?e?s?(?!(-))(?![^\x00-\x7F])\b/g)){
            if (word.originalWordNumb === 'p'){
                correctedWord = word.toCheck.replace(/(eill?e?)s(?!(-))(?![^\x00-\x7F])\b/g, 'eil‧le‧s')
            } else {
                correctedWord = word.toCheck.replace(/(eill?e?)(?!(-))(?![^\x00-\x7F])\b/g, 'eil‧le')
            }
            correctedWords.push(correctedWord) 
            
        } else if (word.toCheck.match(/(i|o)(le?s?)(?!(-))(?![^\x00-\x7F])\b/g)){
            if (word.originalWordNumb === 'p'){
                correctedWord = word.toCheck.replace(/(le?)s(?!(-))(?![^\x00-\x7F])\b/g, 'l‧e‧s')
            } else {
                correctedWord = word.toCheck.replace(/(le?)(?!(-))(?![^\x00-\x7F])\b/g, 'l‧e')
            }
            correctedWords.push(correctedWord)
            // console.log(correctedWord)   

        } else if (word.toCheck.match(/(aître|aîtresse)s?(?!(-))(?![^\x00-\x7F])\b/g)){
            if (word.originalWordNumb === 'p'){
                correctedWord = word.toCheck.replace(/(aître|aîtresse)s(?!(-))(?![^\x00-\x7F])\b/g, 'aître‧esse‧s')
            } else {
                correctedWord = word.toCheck.replace(/(aître|aîtresse)(?!(-))(?![^\x00-\x7F])\b/g, 'aître‧esse')
            }
            correctedWords.push(correctedWord)
 
            
        // } else if (word.toCheck.match(/(uë)s?(?!(-))(?![^\x00-\x7F])\b/g)){

        //     correctedWords.push(correctedWord)
        //     console.log(word.toCheck)   
            
        } else if (word.toCheck.match(/(c|che)s?(?!(-))(?![^\x00-\x7F])\b/g)){
            
            if (word.originalWordNumb === 'p'){
                correctedWord = word.toCheck.replace(/(c|che)s(?!(-))(?![^\x00-\x7F])\b/g, 'c‧che‧s')
            } else {
                correctedWord = word.toCheck.replace(/(c|che)(?!(-))(?![^\x00-\x7F])\b/g, 'c‧che')
            }
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



// let regex = new RegExp(('/que?s(?!(-))(?![^\x00-\x7F])\b/g'));
// let regex = new RegExp(('ques\b', 'g'));
// console.log(regex)