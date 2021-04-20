<template>
  <div>
    <section class="section section--white section--tool">
      <div class="section__content">
        <div class="main">
          <div class="input-container">
            <textarea
              v-model="textInput"
              class="text-editor"
              placeholder="Inscrivez votre texte&nbsp;ci-dessous&nbsp;!"
              @input="isWriting"
            />
            <p
              class="input-feedback"
              :class="{'input-feedback--active' : feedbackActive}"
              v-html="inputFeedback"
            />
          </div>

          <p class="word-counter">
            {{ wordCounter }}&nbsp;mot<span v-if="wordCounter > 1">s</span>
          </p>

          <vBtn
            v-for="btn in btnArray.slice(0, 1)"
            :key="btn"
            :ref="btn.ref"
            class="btn"
            :class="[`btn--${btn.class}`, {'btn--convert-enabled' : canConvert}]"
            @click="btn.action"
            v-html="btn.text"
          />
        </div>

        <div class="options">
          <vBtn
            v-for="btn in btnArray.slice(1)"
            :key="btn"
            :ref="btn.ref"
            class="btn"
            :class="`btn--${btn.class}`"
            @click="btn.action"
            v-html="btn.text"
          />
        </div>
      </div>
    </section>
    <vFooter />
  </div>
</template>
<script>
import vBtn from '@/components/Tool/vBtn.vue'
import vFooter from '@/components/Footer/vFooter.vue'
import { ref, onMounted } from 'vue'
import { textConverter } from '@/textconverter.worker'
export default {
  components: {
    vBtn,
    vFooter
  },

  setup () {
    const wordCounter = ref(0)
    const inputFeedback = ref('')
    const textInput = ref(null)
    const btnConvert = ref(null)
    const canConvert = ref(false)
    const feedbackActive = ref(false)
    const BtnCopyActive = ref(false)
    const BtnEraseActive = ref(false)
    const BtnCancelActive = ref(false)
    const BtnUndoActive = ref(false)
    let userText = null
    let userTextMod = null
    let correctorArray = null

    const convertText = () => {
      // console.clear()
      if (canConvert.value === true) {
        canConvert.value = !canConvert.value
      }

      if (textInput.value === null || textInput.value === '') {
        if (feedbackActive.value === false) {
          inputFeedback.value = 'Veuillez rédigez un mot ou deux avant de modifier le&nbsp;texte.'
          feedbackActive.value = !feedbackActive.value
          setTimeout(() => { feedbackActive.value = !feedbackActive.value }, 4000)
        }

        if (canConvert.value === false) {
          setTimeout(function () { canConvert.value = !canConvert.value }, 4000)
        }
      } else {
        let isModified = false

        // if (feedbackActive.value === false) {
        //   inputFeedback.value = 'Modifications en cours&nbsp;!'
        //   feedbackActive.value = !feedbackActive.value
        // }
        userText = textInput.value
        userTextMod = userText.replace(/\n?\n/g, '|').split('|').filter(function (el) {
          return el !== ''
        })
        userTextMod.forEach((el, index) => {
          el = el.replace(/([.?!])\s*(?=[a-z])?(?=[A-Z])?(?=[0-9])?/g, '$1|').split('|')
          el = el.filter(subEl => subEl.trim() || subEl === null)
          userTextMod[index] = el
        })

        userTextMod.forEach((el, index) => {
          el.forEach((subEl, subIndex) => {
          // console.log(subEl)

            // if (subEl.match(/\b(je|on|il|elle|le|la|iel|ellui|l'|là|son|sa|ma|ta)(?![A-zÀ-ú])/gi)) {
            // console.log('singulier')
            // } else {
            // console.log('masculin')
            // }

            for (let i = 0; i < correctorArray.length; i++) {
              const regexChecked = new RegExp('\\b(' + correctorArray[i].checked + ')(?![A-zÀ-ú])', 'gi')
              const regexToCheck = new RegExp('\\b(' + correctorArray[i].toCheck + ')(?![A-zÀ-ú])', 'gi')

              if (subEl.match(regexChecked)) {
                console.log('déjà inclusif !')
                // console.log(regexChecked + ' ' + correctorArray[i].toCheck)
                continue
              // console.log(correctorArray[i].wordID + ' ' + correctorArray[i].toCheck)
              } else if (subEl.match(regexToCheck)) {
                console.log('ping !')
                console.log(correctorArray[i].wordID + ' ' + correctorArray[i].checked)
                subEl = subEl.replace(regexToCheck, correctorArray[i].checked)
                isModified = true
                continue
              }
            }

            // correctorArray.forEach((word) => {
            //   const regexChecked = new RegExp('\\b(' + word.checked + ')(?![A-zÀ-ú])', 'gi')
            //   const regexToCheck = new RegExp('\\b(' + word.toCheck + ')(?![A-zÀ-ú])', 'gi')

            //   if (subEl.match(regexChecked)) {
            //     console.log('déjà inclusif !')
            //   //   // console.log(word.checked)
            //   } else if (subEl.match(regexToCheck)) {
            //     console.log('ping !')
            //     console.log(word.wordID + ' ' + word.toCheck)
            //     subEl = subEl.replace(regexToCheck, word.checked)
            //     const firstLetter = subEl.charAt(0).toUpperCase()
            //     subEl = firstLetter + subEl.substring(1)
            //   // isModified = true
            //   }
            // })
            userTextMod[index][subIndex] = subEl
          })
          // console.log(userTextMod)
          console.log('fin de ConvertText')
          userTextMod[index] = userTextMod[index].join(' ')
        })

        userTextMod = userTextMod.join('\n\n')
        textInput.value = userTextMod

        if (isModified === true) {
          inputFeedback.value = 'Le texte a été modifié avec succès&nbsp;!'
          setTimeout(() => { feedbackActive.value = !feedbackActive.value }, 4000)
        } else {
          inputFeedback.value = 'Aucune modification effectuée&nbsp;!'
          setTimeout(() => { feedbackActive.value = !feedbackActive.value }, 4000)
        }

      // feedbackActive.value = !feedbackActive.value
      }
    }

    const isWriting = () => {
      if (textInput.value.match(/([^\s,!.;:]+)/g)) {
        wordCounter.value = textInput.value.match(/([^\s,!.;:]+)/g).length
      } else {
        wordCounter.value = 0
      }

      if (canConvert.value === false) {
        canConvert.value = !canConvert.value
      }
    }

    const undoConvert = (e) => {
      console.log(canConvert.value)
    }

    const cancelChange = (e) => {
      textInput.value = userText
      if (canConvert.value === false) {
        canConvert.value = !canConvert.value
      }

      if (feedbackActive.value === false) {
        inputFeedback.value = 'Les modifications ont été&nbsp;retirées.'
        feedbackActive.value = !feedbackActive.value
      } else {
        feedbackActive.value = !feedbackActive.value
        setTimeout(() => { feedbackActive.value = !feedbackActive.value }, 300)
        setTimeout(() => { inputFeedback.value = 'Les modifications ont été&nbsp;retirées.' }, 300)
      }
      setTimeout(() => { feedbackActive.value = !feedbackActive.value }, 4000)
    }

    const eraseText = (e) => {
      // console.log(textInput.value)
      if (textInput.value !== null) {
        textInput.value = ''
        wordCounter.value = 0

        if (feedbackActive.value === false) {
          inputFeedback.value = 'Le texte a été&nbsp;supprimé.'
          feedbackActive.value = !feedbackActive.value
          setTimeout(() => { feedbackActive.value = !feedbackActive.value }, 4000)
        } else {
          setTimeout(() => { feedbackActive.value = !feedbackActive.value }, 100)
          // setTimeout(() => {
          inputFeedback.value = 'Le texte a été&nbsp;supprimé.'
          feedbackActive.value = !feedbackActive.value
          // }, 4000)
        }
      }
    }

    const copyText = (e) => {
      navigator.clipboard.writeText(textInput.value).then(function () {
        inputFeedback.value = 'Copié avec succès !'
      }, function () {
        inputFeedback.value = 'Une erreur est survenue, impossible de copier dans le presse-papier :(.'
      })

      if (feedbackActive.value === false) {
        feedbackActive.value = !feedbackActive.value
        setTimeout(() => { feedbackActive.value = !feedbackActive.value }, 4000)
      }
    }

    const btnArray = [
      {
        class: 'convert',
        text: 'Convertir',
        textTrig: 'Converti&nbsp;!',
        ref: 'BtnConvert',
        action: convertText
      },
      {
        class: 'undo',
        text: 'Retour <span class="hide">en&nbsp;arrière</span>',
        ref: 'BtnUndo',
        action: undoConvert
      },
      {
        class: 'cancel',
        text: 'Annuler <span class="hide">les&nbsp;modifications</span>',
        textTrig: 'Annulé&nbsp;!',
        ref: 'BtnCancel',
        action: cancelChange
      },
      {
        class: 'erase',
        text: 'Supprimer <span class="hide">le&nbsp;texte</span>',
        ref: 'BtnErase',
        action: eraseText
      },
      {
        class: 'copy',
        text: 'Copier <span class="hide">le&nbsp;texte</span>',
        textTrig: 'Copié&nbsp;!',
        ref: 'BtnCopy',
        action: copyText
      }
    ]

    onMounted(async () => {
      console.clear()
      // async function demo () {
      // await textConverter('dog')
      // }

      // demo()
      // await fetch('https://tomdelfosse.be/projets/tfe/api/tfe.php', {
      //   method: 'GET',
      //   credentials: 'same-origin',
      //   headers: {
      //     // 'Content-Type': 'application/json',
      //     // Accept: 'application/json'
      //   }
      // })
      await fetch('/assets/data/CorrectorMini.json')
        .then(function (response) { return response.json() })
        .then(function (data) {
          correctorArray = data
          // console.log(data)
        }).catch(function (error) {
          console.error(error)
          console.log('triste')
        })
    })

    return {
      convertText,
      undoConvert,
      cancelChange,
      BtnCancelActive,
      eraseText,
      BtnEraseActive,
      BtnUndoActive,
      copyText,
      BtnCopyActive,
      btnArray,
      wordCounter,
      textInput,
      userText,
      userTextMod,
      correctorArray,
      isWriting,
      inputFeedback,
      feedbackActive,
      canConvert,
      btnConvert,
      textConverter
    }
  }
}

</script>

<style lang="scss">
.section--tool{
    padding-top: 20vh;
    height: 80vh;

    @include sm{
      padding-top: 15vh;
      height: 85vh;
    }

    @include tb{
      padding-top: 20vh;
      height: 80vh;
    }

    .section__content{
      border-right: inherit;

      @include lg{
        display: flex;
      }

      .main{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: center;

        @include tb{
          max-width: 600px;
          max-width: inherit;

        }

        @include lg{
          flex-grow: 1;
          flex-shrink: 0;
          max-width: 600px;
          width: 100%;

        }

        @include xl{
          max-width: 650px;
        }

        .input-container{
          // display: block;
          width: 100%;
          position: relative;
          border-bottom: 1px solid $c-black;
          height: 55vh;
          max-height: 1000px;

        }

        .text-editor{
          background-color: inherit;
          border: none;
          border-radius: inherit;
          font-family: 'Source Sans Pro', sans-serif;
          resize: none;
          outline: none;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          white-space: pre-line;

          font-size: $s-mob--smaller;
          letter-spacing: $ls-smaller;
          line-height: 160%;

          @include tb{
            font-size: $s-tab--smaller;
            font-weight: 300;
          }

          @include lg{
            font-size: $s-desk--smallest;
          }
          @include xl{
            font-size: $s-desk--smaller;
          }
        }

        .word-counter{
          padding: 0;
          margin: 0;
          margin-top: $s-mob--smallest;

          @include tb{
            margin-top: $s-tab--smallest;
          }

          @include lg{
            margin-top: $s-desk--smallest;
          }
        }

        .input-feedback{
          width: inherit;
          max-width: 100%;
          position: absolute;
          background-color: $c-black;
          bottom: 0;
          color: $c-white;
          margin: 0;
          padding: $s-mob--smallest/2 $s-mob--smaller*2;
          transition: $t-smooth;
          box-sizing: border-box;

          @include tb{
            padding: $s-tab--smallest/3 $s-tab--smaller;
          }
          @include lg{
            padding: $s-desk--smaller/4 $s-desk--smaller;
          }

            opacity: 0;
            pointer-events: none;
          &--active{
            opacity: 1;
            transition: $t-fast;
            pointer-events: inherit;
          }
        }
    }

    .options{
      display: flex;
      justify-content: space-between;
      margin-left: auto;
      margin-right: auto;
      margin-top: $s-mob--medium;

      @include sm{
        margin-top: $s-mob--medium;
        margin-left: auto;
      }

      @include tb{
        margin: inherit;
        margin-top: $s-tab--smallest;
        border-top: 1px solid $c-black;
        padding-top: $s-tab--smallest;
      }

      @include lg{
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        border-top: inherit;
        border-left: 1px solid $c-black;
        margin-left: $s-desk--smaller;
        padding-left: $s-desk--smallest;
      }
    }
  }
}

.hide{
  display: none;

  @include xl{
    display: inline-block;
  }
}
</style>
