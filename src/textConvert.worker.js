export const textConverter = async (textToConvert, array) => {
  try {
    textToConvert = textToConvert.replace(/\n?\n/g, '|').split('|').filter(function (el) {
      return el !== ''
    })

    textToConvert.forEach((el, index) => {
      el = el.replace(/(\.?\.?[.?!]\s?)/g, '$1|').split('|')
      el = el.filter(subEl => subEl === null || subEl.trim())
      textToConvert[index] = el
    })

    textToConvert.forEach((el, index) => {
      el.forEach((subEl, subIndex) => {
        for (let i = 0; i < array.length; i++) {
          const regexToCheck = new RegExp('\\b(' + array[i].toCheck + ')(?![A-zÀ-ú])(?!‧)', 'gi')

          if (subEl.match(regexToCheck)) {
            console.log(array[i].wordID + ' ____ ' + array[i].toCheck)
            subEl = subEl.replace(regexToCheck, array[i].checked)
            const firstLetter = subEl.charAt(0).toUpperCase()
            subEl = firstLetter + subEl.substring(1)
            // Comme je travaille en asynchrone sur un worker, je ne peux référencer le DOM ni le document lui même, et par conséquent, je ne peux créer de nouveaux éléments. Raison pour laquelle j'ai décidé d'utiliser Regex, bien qu'inadapté à cet usage, afin de parvenir à mes fins.
            const regexAddSpan = new RegExp('\\b(' + array[i].checked + ')(?![A-zÀ-ú])(?!‧)', 'gi')
            subEl = subEl.replace(regexAddSpan, '<span contenteditable="false" class="corrected corrected--' + array[i].wordID + '">$1<button ref="btnDelete" class="btn btn--delete">X</button></span>')
            continue
          } else {
            const firstLetter = subEl.charAt(0).toUpperCase()
            subEl = firstLetter + subEl.substring(1)
            continue
          }
        }
        textToConvert[index][subIndex] = subEl
      })
      textToConvert[index] = textToConvert[index].join(' ')
    })
    textToConvert = textToConvert.join('\n\n')
    console.log('on quitte le worker')
    return textToConvert
  } catch (e) {
    console.log(e)
  }
}
