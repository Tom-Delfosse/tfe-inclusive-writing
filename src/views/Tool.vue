<template>
  <div>
    <section class="section section--white section--tool">
      <div class="section__content">
        <div class="main">
          <div class="input-container">
            <div
              ref="textEditor"
              class="text-editor"
              contenteditable="true"
              placeholder="Inscrivez votre texte ici&nbsp;!"
              @keyup="TextWriting"
              @paste="TextPasting"
            />

            <p
              ref="inputFeedback"
              class="input-feedback"
              :class="{'input-feedback--active' : feedbackActive}"
            />
          </div>

          <p class="word-counter">
            {{ wordCounter }}&nbsp;mot<span v-if="wordCounter > 1">s</span>
          </p>

          <vBtn
            v-for="btn in btnArray.slice(0, 1)"
            :key="btn.ref"
            :ref="btn.ref"
            :disabled="isDisabled[btn.ref]"
            :class="[`btn--${btn.class}`]"
            @click="btn.action"
            v-html="btn.text"
          />
        </div>

        <div ref="btnList" class="options">
          <vBtn
            v-for="btn in btnArray.slice(1)"
            :key="btn.ref"
            :ref="btn.ref"
            :disabled="isDisabled[btn.ref]"
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
import { ref, onMounted, computed } from 'vue'
import { textConverter } from '@/textConvert.worker'

export default {
  components: {
    vBtn,
    vFooter
  },

  setup () {
    // const timer = 3500
    let CorrectorArray = ''
    let feedbackBye = null
    const inputFeedback = ref('')
    const canConvert = ref(false)
    const feedbackActive = ref(false)
    const textEditor = ref('')
    const wordCounter = ref(0)
    const spanList = ref('')
    const btnDeleteList = ref('')
    const isDisabled = computed(() => {
      const isWriting = wordCounter.value >= 1
      return {
        btnConvert: !isWriting || !canConvert.value,
        btnCopy: !isWriting,
        btnCancel: btnDeleteList.value.length < 1,
        // btnUndo: !isConverted.value,
        btnErase: !isWriting
      }
    })

    const convertText = async () => {
      canConvert.value = !canConvert.value
      if (textEditor.value === null || textEditor.value === '') {
        if (feedbackActive.value === false) {
          FeedbackOutput('Veuillez inscrire au moins un mot avant de&nbsp;convertir.')
        }
      } else {
        const btnDeleteListPrev = btnDeleteList.value.length
        const textToConvert = textEditor.value.innerText.replace(/\nX\n/g, 'X')
        const textOutput = await textConverter(textToConvert, CorrectorArray)
        textEditor.value.innerHTML = textOutput
        spanList.value = document.querySelectorAll('.corrected')

        // La raison pour laquelle j'utilise getElementByClassName au lieu d'un QuerySelector est tout simplement parce que QuerySelectorAll() renvoie une liste statique et non dynamique du contenu du DOM.
        if (document.getElementsByClassName('btn--delete').length > 0) {
          btnDeleteList.value = document.getElementsByClassName('btn--delete')
          btnDeleteList.value.forEach((btn) => {
            btn.addEventListener('click', (e) => {
              const span = e.currentTarget.parentNode
              const spanId = span.className.replace('corrected corrected--', '')
              span.parentNode.replaceChild(document.createTextNode(CorrectorArray[spanId].toCheck), span)
              canConvert.value = true

              if (btnDeleteList.value.length < 1) {
                btnDeleteList.value = ''
              }
            })
          })
        } else {
          canConvert.value = true
        }

        if (btnDeleteList.value.length <= btnDeleteListPrev) {
          FeedbackOutput("Il n'y avait aucune modification à&nbsp;effectuer&nbsp;!")
          canConvert.value = true
        } else {
          FeedbackOutput('Le texte a été modifié avec&nbsp;succès&nbsp;!')
        }
      }
    }

    const cancelChange = (e) => {
      canConvert.value = true
      for (let i = 0; i < spanList.value.length; i++) {
        spanList.value[i].replaceWith(CorrectorArray[spanList.value[i].className.replace(/[^0-9]/g, '')].toCheck)
        continue
      }
      btnDeleteList.value = ''
      textEditor.value.innerHTML = textEditor.value.textContent
      FeedbackOutput('Les modifications ont été&nbsp;retirées.')
    }

    const eraseText = (e) => {
      if (textEditor.value.innerHTML !== null) {
        textEditor.value.innerHTML = ''
      }
      FeedbackOutput('Le texte a bien été supprimé&nbsp;!')
      btnDeleteList.value = ''
      wordCounter.value = 0
    }

    const copyText = (e) => {
      const textCopied = textEditor.value.innerText.replace((/\n(X)\n/g), (''))
      navigator.clipboard.writeText(textCopied).then(function () {
        FeedbackOutput('Texte copié avec&nbsp;succès&nbsp;!')
      }, function () {
        FeedbackOutput('Une erreur est survenue, impossible de copier dans le&nbsp;presse-papier.')
      })
    }

    const FeedbackOutput = (text) => {
      clearTimeout(feedbackBye)

      if (feedbackActive.value === true) {
        feedbackActive.value = false
        setTimeout(() => {
          feedbackActive.value = true
          inputFeedback.value.innerHTML = text
        }, 150)
      } else {
        feedbackActive.value = true
        inputFeedback.value.innerHTML = text
      }
      feedbackBye = setTimeout(() => { feedbackActive.value = !feedbackActive.value }, 3000)
    }

    const TextWriting = () => {
      // console.log('isWriting!')
      canConvert.value = true
      wordCounter.value = textEditor.value.textContent.match(/([^\s,!.? ;:]+)/g)?.length || 0
    }

    const TextPasting = (e) => {
      // console.log('pasted')
      e.stopPropagation()
      e.preventDefault()
      const clipboardData = e.clipboardData || window.clipboardData
      const ClipboardText = clipboardData.getData('Text')
      textEditor.value.focus()
      console.log(ClipboardText)
      textEditor.value.innerText = textEditor.value.innerText + ClipboardText

      TextWriting()
      // source : https://stackoverflow.com/questions/2176861/javascript-get-clipboard-data-on-paste-event-cross-browser Solution 1
    }

    // const undoConvert = (e) => {
    //   console.log('j"ai essayé au moins')
    // }

    const btnArray = [
      {
        class: 'convert',
        text: 'Convertir',
        action: convertText,
        ref: 'btnConvert'
      },
      // {
      //   class: 'undo',
      //   text: 'Retour <span class="hide">en&nbsp;arrière</span>',
      //   action: undoConvert,
      //   ref: 'btnUndo'

      // },
      {
        class: 'cancel',
        text: 'Annuler <span class="hide">les&nbsp;modifications</span>',
        textTrig: 'Annulé&nbsp;!',
        action: cancelChange,
        ref: 'btnCancel'

      },
      {
        class: 'erase',
        text: 'Supprimer <span class="hide">le&nbsp;texte</span>',
        action: eraseText,
        ref: 'btnErase'

      },
      {
        class: 'copy',
        text: 'Copier <span class="hide">le&nbsp;texte</span>',
        textTrig: 'Copié&nbsp;!',
        action: copyText,
        ref: 'btnCopy'
      }
    ]

    onMounted(async () => {
      console.clear()
      console.log('____Mounted_____')

      wordCounter.value = textEditor.value.textContent.match(/([^\s,!.? ;:']+)/g)?.length || 0

      await fetch('./assets/data/CorrectorMini.json')
        .then(function (response) { return response.json() })
        .then(function (data) {
          CorrectorArray = data
        }).catch(function (error) {
          console.error(error)
        })
    })

    return {
      isDisabled,
      canConvert,
      btnArray,
      inputFeedback,
      feedbackActive,
      textEditor,
      TextWriting,
      wordCounter,
      CorrectorArray,
      TextPasting
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
          overflow-y: auto;
          height: 100%;
          white-space: pre-line;
          word-wrap: break-word;

          font-size: $s-mob--smaller;
          letter-spacing: $ls-smaller;
          line-height: 160%;
          // line-height: 100px;

          &:empty::before{
            content: attr(placeholder);
            pointer-events: none;
            display: block;
            opacity: .7;
          }

          &::selection{
            background-color: $c-black;
            color: $c-white;
          }

          & div::selection{
          background-color: $c-black;
          color: $c-white;
              br{
                background-color: $c-black;
              }
          }

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

          p{
            margin-left: 0;

            &:focus-visible{
              outline: 0;
            }
          }
        }

        .corrected{
          white-space: nowrap;
          border: 1px solid $c-black;
          display: inline-flex;
          justify-content: space-between;
          height: auto;
          margin: 0;
          padding-left: $s-mob--smallest/6;
          @include sm{
            padding-left: $s-mob--smallest/3;
          }
          @include tb{
            padding-left: $s-tab--smallest/3;
          }
          @include lg{
            padding-left: $s-desk--smallest/4;
          }

          .btn--delete{
            background-color: $c-black;
            font-family: font1;
            color: $c-white;
            cursor: pointer;
            border: none;
            padding: 0;
            margin: 0;
            align-self: stretch;
            display: inline;
            width: 100%;
            border: 1px solid $c-black;
            box-sizing: content-box;
            padding: 0 ;
            max-width: $s-desk--smallest;
            font-size: $s-mob--smallest/1.20;
            padding: 0 $s-mob--smallest/6;
            margin-left: $s-mob--smallest/6;
            user-select: none;

            @include sm{
              font-size: $s-mob--smallest;
              padding: 0 $s-mob--smallest/3;
              margin-left: $s-mob--smallest/3;

            }
            @include tb{
              padding: 0 $s-tab--tiny/4;
              font-size: $s-tab--tiny;
              margin-left: $s-tab--smallest/3;

            }
            @include lg{
              font-size: $s-desk--tiny;
              padding: 0 $s-desk--smallest/4;
              margin-left: $s-desk--smallest/4;

            }
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
          bottom: -15px;
          color: $c-white;
          margin: 0;
          padding: $s-mob--smallest/2 $s-mob--smaller*2;
          transition: $t-fast;
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
            bottom: 0;
            transition: $t-fast;
            pointer-events: inherit;

          }
        }
    }

    .options{
      display: flex;
      justify-content: flex-end;
      // border-top: 1px solid $c-black;
      margin-left: auto;
      margin-right: auto;
      margin-top: $s-mob--medium;
      position: relative;

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
