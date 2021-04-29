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
          const regexSpanCheck = new RegExp('(?:\\s)(' + array[i].checked + 'X)(?!‧|[A-zÀ-ú])', 'gi')

          if (subEl.match(regexSpanCheck)) {
            subEl = subEl.replace(regexSpanCheck, ' ' + array[i].checked)
            const firstLetter = subEl.charAt(0).toUpperCase()
            subEl = firstLetter + subEl.substring(1)

            const regexAddSpan = new RegExp('(?:\\s)(' + array[i].checked + ')(?!X)(?!<button)', 'gi')
            subEl = subEl.replace(regexAddSpan, ' ' + '<span contenteditable="false" class="corrected corrected--' +
              array[i].wordID +
              '">$1<button ref="btnDelete" class="btn btn--delete">X</button></span>')

            continue
          } else if (subEl.match(regexToCheck)) {
            subEl = subEl.replace(regexToCheck, ' ' + array[i].checked)
            const firstLetter = subEl.charAt(0).toUpperCase()
            subEl = firstLetter + subEl.substring(1)

            const regexAddSpan = new RegExp('(?:\\s)(' + array[i].checked + ')(?!X)(?!<button)', 'gi')
            subEl = subEl.replace(regexAddSpan, ' ' + '<span contenteditable="false" class="corrected corrected--' +
            array[i].wordID +
            '">$1<button ref="btnDelete" class="btn btn--delete">X</button></span>')

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
    console.log('_on quitte le worker_')
    return textToConvert
  } catch (e) {
    console.log(e)
  }
}
