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
        subEl = ' ' + subEl.charAt(0).toUpperCase() + subEl.substring(1)
        console.log(subEl)
        // subEl = ' ' + subEl
        // console.log(subEl)
        const firstLetter = subEl.charAt(1).toUpperCase()
        console.log(firstLetter)
        // console.log(subEl)
        for (let i = 0; i < array.length; i++) {
          const regexToCheck = new RegExp('(?:\\s)(' + array[i].toCheck + ')(?!‧|[A-zÀ-ú])', 'gi')
          const regexSpanCheck = new RegExp('(?:\\s)' + array[i].checked + '(X)(?!‧|[A-zÀ-ú])', 'gi')

          if (subEl.match(regexSpanCheck)) {
            subEl = subEl.replace(regexSpanCheck, ' ' + array[i].checked)

            const regexAddSpan = new RegExp('(' + array[i].checked + ')(?!X)(?!<button)', 'gi')
            subEl = subEl.replace(regexAddSpan, '<span contenteditable="false" class="corrected corrected--' +
                  array[i].wordID +
                  '">$1<button class="btn btn--delete">X</button></span>')

            continue
          } else if (subEl.match(regexToCheck)) {
            subEl = subEl.replace(regexToCheck, ' ' + array[i].checked)

            const regexAddSpan = new RegExp('(' + array[i].checked + ')(?!X)(?!<button)', 'gi')
            subEl = subEl.replace(regexAddSpan, ' ' + '<span contenteditable="false" class="corrected corrected--' +
              array[i].wordID +
              '">$1<button class="btn btn--delete">X</button contenteditable="false"></span>')
            continue
          }
        }
        // console.log(subEl.charAt(0))
        subEl = ' ' + firstLetter + subEl.substring(2)
        textToConvert[index][subIndex] = subEl
      })
      // console.log(textToConvert)
      textToConvert[index] = textToConvert[index].join('')
    })
    textToConvert = textToConvert.join('\n\n')
    console.log('_on quitte le worker_')
    return textToConvert
  } catch (e) {
    console.log(e)
  }
}
