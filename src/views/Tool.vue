<template>
  <div>
    <section class="section section--white section--tool">
      <div class="section__content">
        <div class="main">
          <div class="input">
            <div
              ref="inputText"
              class="input__text"
              :class="{'input__text--disabled' : isDeactivated}"
              :contenteditable="[ isDeactivated ? false : true]"
              placeholder="Inscrivez votre texte ici&nbsp;!"
              @keyup="TextWriting"
              @paste="TextPasting"
            />

            <p
              ref="inputFeedback"
              class="input__feedback"
              :class="{'input__feedback--active' : feedbackActive}"
            />
          </div>

          <p class="word-counter">
            {{ wordCounter }}&nbsp;mot<span v-if="wordCounter != 1">s</span>
          </p>

          <vBtn
            v-for="btn in btnArray.slice(0, 1)"
            :key="btn.ref"
            :ref="btn.ref"
            :disabled="isDisabled[btn.ref]"
            :class="[`btn btn--${btn.class}`]"
            @click="btn.action"
            v-html="btn.text"
          />
        </div>

        <ul ref="btnList" class="list list--btn" :class="{'list--deactivated' : isDeactivated}">
          <li
            v-for="btn in btnArray.slice(1)"
            :key="btn.ref"
            class="list--btn__el"
            :class="{'list--btn__el-disabled' : isDisabled[btn.ref]}"
          >
            <vBtn
              :ref="btn.ref"
              :disabled="isDisabled[btn.ref] || isDeactivated"
              :class="[`btn btn--${btn.class}`, {'btn--deactivated' : isDeactivated && !isDisabled[btn.ref]}]"
              @click="btn.action"
              v-html="btn.text"
            />
          </li>
        </ul>
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
    let CorrectorArray = ''
    let feedbackBye = null
    const inputFeedback = ref('')
    const canConvert = ref(false)
    const feedbackActive = ref(false)
    const inputText = ref('')
    const wordCounter = ref(0)
    const isDeactivated = ref(false)
    const spanList = ref('')
    const btnDeleteList = ref('')
    const isDisabled = computed(() => {
      const isWriting = wordCounter.value >= 1
      return {
        btnConvert: !isWriting || !canConvert.value || isDeactivated.value,
        btnCopy: !isWriting,
        btnCancel: btnDeleteList.value.length < 1,
        btnErase: !isWriting
      }
    })

    const convertText = async () => {
      canConvert.value = !canConvert.value
      if (inputText.value === null || inputText.value === '') {
        if (feedbackActive.value === false) {
          inputFeedbackMessage('Veuillez inscrire au moins un mot avant de&nbsp;convertir.')
        }
      } else {
        const btnDeleteListPrev = btnDeleteList.value.length
        const textToConvert = inputText.value.innerText.replace(/\n?X\n/gi, 'X')
        const loadingMsg = 'En cours de&nbsp;modification<span class="animated">.</span><span class="animated">.</span><span class="animated">.</span>'
        clearTimeout(feedbackBye)
        if (feedbackActive.value === true) {
          feedbackActive.value = false
          setTimeout(() => {
            feedbackActive.value = true
            inputFeedback.value.innerHTML = loadingMsg
          }, 150)
        } else {
          feedbackActive.value = true
          inputFeedback.value.innerHTML = loadingMsg
        }

        isDeactivated.value = true
        const textOutput = await textConverter(textToConvert, CorrectorArray)
        inputText.value.innerHTML = textOutput
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
          inputFeedbackMessage("Il n'y a aucune modification à&nbsp;effectuer&nbsp;!")
          canConvert.value = true
        } else {
          inputFeedbackMessage('Le texte a été modifié avec&nbsp;succès&nbsp;!')
        }
        isDeactivated.value = false
      }
    }

    const cancelChange = () => {
      canConvert.value = true
      for (let i = 0; i < spanList.value.length; i++) {
        spanList.value[i].replaceWith(CorrectorArray[spanList.value[i].className.replace(/[^0-9]/g, '')].toCheck)
        continue
      }

      btnDeleteList.value = ''
      inputText.value.innerHTML = inputText.value.innerText.replace((/\n(X)\n?/g), (''))
      inputFeedbackMessage('Les modifications ont été&nbsp;retirées.')
    }

    const eraseText = () => {
      if (inputText.value.innerHTML !== null) {
        inputText.value.innerHTML = ''
      }

      inputFeedbackMessage('Le texte a bien été supprimé&nbsp;!')
      btnDeleteList.value = ''
      wordCounter.value = 0
    }

    const copyText = () => {
      console.log(inputText.value.innerText)
      const textCopied = inputText.value.innerText.replace((/\n(X)\n?/g), (''))
      console.log(textCopied)
      navigator.clipboard.writeText(textCopied).then(function () {
        inputFeedbackMessage('Texte copié avec&nbsp;succès&nbsp;!')
      }, function () {
        inputFeedbackMessage('Une erreur est survenue, impossible de copier dans le&nbsp;presse-papier.')
      })
    }

    const inputFeedbackMessage = (text) => {
      clearTimeout(feedbackBye)
      feedbackBye = setTimeout(() => { feedbackActive.value = !feedbackActive.value }, 3000)

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
    }

    const TextWriting = () => {
      canConvert.value = true
      wordCounter.value = inputText.value.textContent.match(/([^\s,!.? ;:]+)/g)?.length || 0
    }

    const TextPasting = (e) => {
      e.stopPropagation()
      e.preventDefault()
      const clipboardData = e.clipboardData || window.clipboardData
      let clipboardText = clipboardData.getData('Text')
      const tmp = document.createElement('div')
      tmp.innerHTML = clipboardText
      clipboardText = tmp.innerText
      console.log(clipboardText)
      inputText.value.innerHTML = inputText.value.innerHTML + clipboardText
      const range = document.createRange()
      range.selectNodeContents(inputText.value)
      range.collapse(false)
      const selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)
      TextWriting()

      // source : https://stackoverflow.com/questions/2176861/javascript-get-clipboard-data-on-paste-event-cross-browser Solution 1
      // source : https://stackoverflow.com/questions/12305269/move-caret-position-after-focus-for-contenteditable-div
    }

    const btnArray = [
      {
        class: 'convert',
        text: 'Convertir',
        action: convertText,
        ref: 'btnConvert'
      },
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

      wordCounter.value = inputText.value.textContent.match(/([^\s,!.? ;:']+)/g)?.length || 0

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
      inputText,
      TextWriting,
      wordCounter,
      CorrectorArray,
      TextPasting,
      isDeactivated
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

        .input{
          width: 100%;
          position: relative;
          border-bottom: 1px solid $c-black;
          height: 55vh;
          max-height: 1000px;
          // user-select: none;
        }

        .input__text{
          background-color: inherit;
          border: none;
          border-radius: inherit;
          font-family: 'Source Sans Pro', sans-serif;
          resize: none;
          outline: none;
          padding: 0;
          margin: 0;
          width: 100%;
          overflow-x: visible;
          overflow-y: auto;
          height: 100%;
          white-space: pre-line;
          word-wrap: break-word;
          font-size: $s-mob--smaller;
          letter-spacing: $ls-smaller;
          line-height: 180%;

          &--disabled{
            cursor: wait;
            opacity: 0.8;

            span{
              pointer-events: none;
            }
          }

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
            font-weight: $w-light;
            line-height: 240%;
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
          position: relative;
          display: inline-flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          padding-left: $s-mob--smaller/4;
          margin: $s-mob--smaller/4 0;

          @include tb{
            display: inline;
            padding: $s-tab--smallest/6 $s-tab--smallest/3;

            &:hover{
              .btn--delete{
                transform: translate(50%, -50%) rotate(15deg);
                transition: $t-fast;
              }
            }
          }

          @include lg{
            padding: $s-desk--smallest/6 $s-desk--smallest/3;
          }

          @include xl{
            padding: $s-desk--smallest/5 $s-desk--smallest/2.5;
          }

          .btn--delete{
            font-family: font1;
            color: $c-white;
            background-color: $c-black;
            margin-left: $s-mob--smaller/4;
            font-size: $s-mob--smallest/1.20;
            cursor: pointer;
            border: none;
            user-select: none;
            padding: 0 $s-mob--smallest/4;
            vertical-align: center;

            @include sm{
              padding: 0 $s-mob--smallest/2;
            }

            @include tb{
              font-size: $s-tab--smallest/1.125;
              position: absolute;
              right: 0;
              top: 0;
              padding: $s-tab--smallest/3;
              background-color: $c-white;
              color: $c-black;
              transform: translate(50%, -50%);
              -webkit-text-stroke: 1px;
              transition: $t-smooth;

              &:hover{
                transition: $t-smooth;
                transform: translate(50%, -50%) rotate(180deg);
              }
            }

            @include lg{
              font-size: $s-desk--tiny/1.25;
              padding: $s-desk--tiny/3;
            }

            @include xl{
              font-size: $s-desk--tiny;
              padding: $s-desk--tiny/3;
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

        .input__feedback{
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
          opacity: 0;
          pointer-events: none;

          @include tb{
            padding: $s-tab--smallest/3 $s-tab--smaller;
          }
          @include lg{
            padding: $s-desk--smaller/4 $s-desk--smaller;
          }

          &--active{
            opacity: 1;
            bottom: 0;
            transition: $t-fast;
            pointer-events: inherit;
          }

          .animated{
            animation: loading 0.8s infinite;

            &:nth-child(2){
              animation-delay: 0.2s;
            }

            &:nth-child(3){
              animation-delay: 0.4s;
            }
          }
        }
    }

    .list--btn{
      display: flex;
      justify-content: flex-end;
      margin-left: auto;
      margin-right: auto;
      margin-top: $s-mob--medium;
      position: relative;
      list-style-type: none;

      &__el{
        margin-left: $s-mob--medium-plus;
        display: inline;
        transition: $t-smooth;

        &-disabled{
          opacity: 1;
        }

        &:hover{
          transform: scale(1.1);
          transition: $t-fast;
        }

        @include sm{
          margin-left: $s-mob--big;
        }

        &:nth-child(1){
          margin-left: 0;
        }

        @include tb{
          margin-left: $s-tab--smaller;
        }

        @include lg{
          margin-left: 0;
          margin-top: $s-desk--smallest;

          &:hover{
            transform: inherit;
            margin-left: $s-desk--smaller/2;

            &:hover{
              &::after{
                margin-left: -$s-desk--smaller/2;
                transition: $t-fast;
              }
            }
          }

          &:nth-child(1){
            margin-top: 0;
          }

          &:nth-last-of-type(2){
            &::after{
              content: '';
              display: block;
              height: 1px;
              width: 100%;
              background-color: $c-black;
              margin-top: $s-desk--smallest;
              margin-bottom: -1px;
              transition: $t-smooth;
              transform: inherit;
            }
          }
        }

        @include xl{
          margin-top: $s-desk--smaller;
        }
      }

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

// .list--deactivated {
//   pointer-events: none;
//   .btn{
//     pointer-events: none;
//     cursor: not-allowed;
//   }
//   .list--btn__el{
//     opacity: 0.3;
//     cursor: not-allowed;
//     // pointer-events: none;
//     &:hover{
//       // opacity: 0.8;
//     }
//   }

// }

.hide{
  display: none;

  @include xl{
    display: inline-block;
  }
}

@keyframes loading {
  to{
    opacity: 0;
  }
}

</style>
