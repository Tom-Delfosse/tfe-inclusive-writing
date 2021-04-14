<template>
  <button class="btn btn--convert" @click="convertFunct">
    Convertir&nbsp;!
  </button>
</template>
<script>
import { onMounted } from 'vue'
export default {

  props: {
    toCheck: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    let words = ''

    const convertFunct = () => {
      if (!props.toCheck.textContent) {
        console.log('pas de contenu !')
      } else {
        const userText = (props.toCheck.textContent).replace(/\n?\n/g, '$1|').split('$1|')
        userText.forEach((e, index) => {
          userText[index] = e.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|')
          userText[index].forEach((subElement, subIndex) => {
            console.log(subElement)
            // words.forEach((word) => {
            // console.log(word.toCheck)

            //       // const regex = new RegExp('(' + word.toCheck + ')(?!(-))(?![^\x00-\x7F])\s', 'g')
            //       const regex = new RegExp('\\b' + '(' + word.toCheck + ')' + '(?=\\W)', 'g')
            //       if (subElement.match(regex)) {
            //         console.log(word.checked)
            //         console.log(regex)
            //         subElement = subElement.replace(regex, word.checked)
            //         // subElement = subElement.replace(regex, '<span class="corrected corrected--' + word.wordID + '">' + word.checked + '</span>')
            // }
            // })

            //     userText[index][subIndex] = subElement
          })

        //   userText[index] = userText[index].join(' ')
        })

        // props.toCheck.value = userText
      }
    }

    onMounted(async () => {
      console.clear()
      await fetch('./assets/data/newChecker.json')
        .then(function (response) { return response.json() })
        .then(function (data) {
          words = data
        }).catch(function (error) {
          console.error("Il y'a eu un problème avec l'obtention des données.")
          console.error(error)
        })
    })
    return {
      convertFunct, words
    }
  }
}
</script>
<style lang="scss">
.btn--convert{
  display: block;
  background-color: $c-black;
  color: $c-white;
  font-family: 'Source Sans Pro', sans-serif;
  color: $c-white;
  font-weight: $w-bold;
  outline: 0;
  border: 0;
  cursor: pointer;

  font-size: $s-mob--smaller;
  letter-spacing: $ls-smaller;
  line-height: 160%;
  outline: none;

  @include tb{
    font-size: $s-tab--smaller;

  }

  @include lg{
    font-size: $s-desk--smallest;
  }
  @include xl{
    font-size: $s-desk--smaller;
  }
}
</style>
