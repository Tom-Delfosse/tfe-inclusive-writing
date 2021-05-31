export const textConverter = async (textToConvert, array) => {
  try {
    textToConvert = textToConvert.replace(/\n?\n\n+/g, '|').split('|').filter(function (el) {
      return el !== ''
    })

    textToConvert.forEach((el, index) => {
      el = el.replace(/(\.?\.?[.?!]\s?\s+|\n)/g, '$1|').split('|')
      el = el.filter(subEl => subEl === null || subEl.trim())
      textToConvert[index] = el
    })

    textToConvert.forEach((el, index) => {
      el.forEach((subEl, subIndex) => {
        subEl = ' ' + subEl.charAt(0).toUpperCase() + subEl.substring(1)
        let firstLetter = subEl.charAt(0).toUpperCase()
        subEl = subEl.replace(/\s\s+/g, ' ')
        for (let i = 0; i < array.length; i++) {
          const regexToCheck = new RegExp('(?:\\s)(' + array[i].toCheck + ')(?!‧|[A-zÀ-ú])', 'gi')

          if (subEl.match(regexToCheck)) {
            subEl = subEl.replace(regexToCheck, ' <span contenteditable="false" class="corrected corrected--' + array[i].wordID + '"><button class="btn btn--delete">X</button>' + array[i].checked + '</span>')
            continue
          }
        }

        // Rajoute une majuscule à chaque phrase.
        if (subEl.startsWith(' <span')) {
          firstLetter = subEl.match(/(?:\s<.*?>)([^\s,!.?X ;:<]+)/)[1].charAt(0).toUpperCase()
          subEl = subEl.replace(/(\s<.*?>)([^\s,!.?X ;:<]+)/,
            '$1' + firstLetter + subEl.match(/(?:\s<.*?>)([^\s,!.?X ;:<]+)/)[1].substring(1))
        } else {
          subEl = firstLetter + subEl.substring(1)
        }

        // retire les espaces en fin de ligne.
        if (subEl.match(/(?!\s[^*])\s/g)) {
          subEl = subEl.slice(0, -1)
        }

        // rajoute un point s'il n'y en a pas déjà un.
        if (!subEl.match(/\.?[.,;?!](?!.)/g)) {
          subEl = subEl + '.'
        }
        textToConvert[index][subIndex] = subEl
      })

      textToConvert[index] = textToConvert[index].join('')
    })
    textToConvert = textToConvert.join('\n\n')
    return textToConvert
  } catch (e) {
    console.log(e)
  }
}
