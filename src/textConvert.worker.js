export const textConverter = async (textToConvert) => {
  let array = []
  try {
    const response = await fetch('/assets/data/CorrectorMini.json')
    array = await response.json()
  } catch (error) {
    console.error(error)
    console.log("le fetch n'a pas fonctionné.")
  }

  try {
    textToConvert = textToConvert.replace(/\n?\n/g, '|').split('|').filter(function (el) {
      return el !== ''
    })

    textToConvert.forEach((el, index) => {
      el = el.replace(/([.?!])\s*(?=[a-z])?(?=[A-Z])?(?=[0-9])?/g, '$1|').split('|')
      el = el.filter(subEl => subEl.trim() || subEl === null)
      textToConvert[index] = el
    })

    textToConvert.forEach((el, index) => {
      el.forEach((subEl, subIndex) => {
        // if (subEl.match(/\b(je|on|il|elle|le|la|iel|ellui|l'|là|son|sa|ma|ta)(?![A-zÀ-ú])/gi)) {
        // console.log('singulier')
        // } else {
        // console.log('masculin')
        // }

        // console.log(subEl + ' __')
        for (let i = 0; i < array.length; i++) {
          const regexToCheck = new RegExp('\\b(' + array[i].toCheck + ')(?![A-zÀ-ú])(?!‧)', 'gi')

          if (subEl.match(regexToCheck)) {
            subEl = subEl.replace(regexToCheck, '<span contenteditable="false" class="corrected corrected--' + array[i].wordID + '">' + array[i].checked + '<button @click="bing" class="btn btn--delete">X</button></span>')
            const firstLetter = subEl.charAt(0).toUpperCase()
            subEl = firstLetter + subEl.substring(1)
            continue
          }
        }
        textToConvert[index][subIndex] = subEl
      })
      console.log('fin de ConvertText')
      textToConvert[index] = textToConvert[index].join(' ')
    })
    textToConvert = textToConvert.join('\n\n')
    console.log('on quitte le worker')
    return textToConvert
  } catch (e) {
    console.log(e)
  }
}
