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
            :class="`btn btn--${btn.class}`"
            @click="btn.action"
            v-html="btn.text"
          />
        </div>

        <div class="options">
          <vBtn
            v-for="btn in btnArray.slice(1)"
            :key="btn"
            ref="btn.ref"
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
export default {
  components: {
    vBtn,
    vFooter
  },

  setup () {
    const wordCounter = ref(0)
    const textInput = ref(null)
    const inputFeedback = ref('')
    let userText = null
    let userTextMod = null
    let CorrectorArray = null
    const feedbackActive = ref(false)

    const convertText = (e) => {
      // console.log(textInput.value)

      // À remplacer avec une balise VUE
      e.currentTarget.innerHTML = 'Converti&nbsp;!'
      if (textInput.value === null || textInput.value === '') {
        console.log('vide !')
        inputFeedback.value = 'Pas de&nbsp;contenu&nbsp;!'
      } else {
        userText = textInput.value
        textInArray()
      }

      e.target.classList.add('btn--convert-disabled')
      e.target.setAttribute('disabled', 'disabled')
    }

    const textInArray = () => {
      console.log('________1________')
      userTextMod = userText.replace(/\n?\n/g, '|').split('|')
      userTextMod = userTextMod.filter(function (el) {
        return el !== ''
      })
      userTextMod.forEach((el, index) => {
        userTextMod[index] = el.replace(/([.?!])\s*(?=[a-z])?(?=[A-Z])?(?=[0-9])?/g, '$1|').split('|')
        userTextMod[index] = userTextMod[index].filter(function (el) {
          return el !== ''
        })
        // console.log(userTextMod[index])
      })
      // console.log(userTextMod)

      textCheck()
    }

    const textCheck = () => {
      console.log('________2________')
      // ici tout le code pour convertir le bazar une fois que l'array est chargé
      // console.log(CorrectorArray)
      userTextMod.forEach((el, index) => {
        el.forEach((subEl, subIndex) => {
          // console.log(subEl)
          CorrectorArray.forEach((word, index) => {
            const regex = new RegExp('\\b(' + word.toCheck + ')(?![A-zÀ-ú])', 'gi')

            if (subEl.match(regex)) {
              console.log('ping !')
              console.log(word.wordID + ' ' + word.toCheck)
              subEl = subEl.replace(regex, word.checked)
              // console.log(subEl)
            }
          })
          userTextMod[index][subIndex] = subEl
        })
      })
      console.log(userTextMod)
      textOutArray()
    }

    const textOutArray = () => {
      console.log('________3________')
      console.log(userTextMod.length)
      console.log(userTextMod)

      userTextMod.forEach((el, index) => {
        userTextMod[index] = userTextMod[index].join(' ')
        // console.log(userTextMod[index])
      })
      userTextMod = userTextMod.join('\n\n')
      textInput.value = userTextMod
    }

    const isWriting = () => {
      if (textInput.value === null || textInput.value === '') {
        wordCounter.value = 0
      } else {
        wordCounter.value = textInput.value.match(/([^\s]+)/g).length
      }
    }

    const undoChange = (e) => {
      // console.log("hey")
    }

    const cancelChange = (e) => {
      textInput.value = userText
    }

    const eraseText = (e) => {
      textInput.value = ''
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
        text: 'Convertir&nbsp;!',
        textTrig: 'Converti&nbsp;!',
        ref: 'BtnConvert',
        action: convertText
      },
      {
        class: 'undo',
        text: 'Retour <span class="hide">en&nbsp;arrière</span>',
        ref: 'BtnUndo',
        action: undoChange
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
      await fetch('./assets/data/newChecker.json')
        .then(function (response) { return response.json() })
        .then(function (data) {
          CorrectorArray = data
        }).catch(function (error) {
          console.error(error)
        })
    })

    return {
      convertText,
      undoChange,
      cancelChange,
      eraseText,
      copyText,
      btnArray,
      wordCounter,
      userText,
      isWriting,
      inputFeedback,
      userTextMod,
      textOutArray,
      textCheck,
      textInput,
      CorrectorArray,
      feedbackActive
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
            margin-top: $s-tab--smaller;
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
