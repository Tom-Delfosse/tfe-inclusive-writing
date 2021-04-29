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
          const regexToCheck = new RegExp('(?:\\s)(' + array[i].toCheck + ')(?!‧|[A-zÀ-ú])', 'gi')

          if (subEl.match(regexToCheck)) {
            console.log(array[i].toCheck)
            subEl = subEl.replace(regexToCheck, ' ' + array[i].checked)
            const firstLetter = subEl.charAt(0).toUpperCase()
            console.log(firstLetter)
            subEl = firstLetter + subEl.substring(1)

            const regexAddSpan = new RegExp('(?:\\s)(' + array[i].checked + ')(?!<button)', 'gi')
            // console.log(regexAddSpan)
            subEl = subEl.replace(regexAddSpan, ' <span contenteditable="false" class="corrected corrected--' + array[i].wordID + '">$1<button ref="btnDelete" class="btn btn--delete">X</button></span>')
            console.log(subEl)
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
