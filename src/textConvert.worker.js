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
          const regexToCheck = new RegExp('(\\b)(' + array[i].toCheck + ')(?!‧|[A-zÀ-ú])', 'gi')

          if (subEl.match(regexToCheck)) {
            console.log(array[i].toCheck)
            // subEl = subEl.replace(regexToCheck, ' ' + array[i].checked)
            // const firstLetter = subEl.charAt(0).toUpperCase()
            // console.log(firstLetter)
            // subEl = firstLetter + subEl.substring(1)

            // const regexAddSpan = new RegExp('\\b(' + array[i].checked + ')(?![A-zÀ-ú])(?!‧)', 'gi')
            subEl = subEl.replace(regexToCheck, '<span contenteditable="false" class="corrected corrected--' + array[i].wordID + '">' + array[i].checked + '<button ref="btnDelete" class="btn btn--delete">X</button></span>')
            // console.log(subEl)
            continue
          } else {
            const firstLetter = subEl.charAt(0).toUpperCase()
            subEl = firstLetter + subEl.substring(1)
            continue
          }
        }
        // subEl = subEl.substring(1)
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
