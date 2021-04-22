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
              @input="canConvert = true"
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

          <!-- <p v-if="loading">
            LOADING...
          </p> -->

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
    const inputFeedback = ref('')
    const isConverted = ref(false)
    const canConvert = ref(false)
    const textInput = ref('')
    const feedbackActive = ref(false)

    const wordCounter = computed(() => textInput.value.match(/([^\s,!.? ;:]+)/g)?.length || 0)

    const isDisabled = computed(() => {
      const isWriting = wordCounter.value >= 1
      return {
        btnConvert: !isWriting || !canConvert.value,
        btnCopy: !isWriting,
        btnCancel: !isConverted.value,
        btnUndo: !isConverted.value,
        btnErase: !isWriting
      }
    })

    const strimHtml = (html) => {
      const tmp = document.createElement('DIV')
      tmp.innerHTML = html
      return tmp.textContent || tmp.innerText || ''
    }

    const userText = ref('')
    const timer = 3500

    const convertText = async () => {
      canConvert.value = !canConvert.value

      if (textInput.value === null || textInput.value === '') {
        if (feedbackActive.value === false) {
          FeedbackOutput('Veuillez inscrire au moins un mot avant de&nbsp;convertir.')
        }
      } else {
        const sanitizedText = strimHtml(textInput.value)
        userText.value = sanitizedText
        const textOutput = await textConverter(sanitizedText)
        textInput.value = textOutput
        isConverted.value = true
        if (textOutput === userText.value) {
          FeedbackOutput("Il n'y avait aucune modification à&nbsp;effectuer&nbsp;!")
        } else {
          FeedbackOutput('Le texte a été modifié avec&nbsp;succès&nbsp;!')
        }
      }
    }

    const undoConvert = (e) => {
    }

    const cancelChange = (e) => {
      textInput.value = userText.value
      FeedbackOutput('Les modifications ont été&nbsp;retirées.')
      isConverted.value = false
    }

    const eraseText = (e) => {
      FeedbackOutput('Le texte a bien été supprimé&nbsp;!')
      isConverted.value = false

      if (textInput.value !== null) {
        textInput.value = ''
        // isWriting()
      }
    }

    const copyText = (e) => {
      navigator.clipboard.writeText(textInput.value).then(function () {
        FeedbackOutput('Texte copié avec&nbsp;succès&nbsp;!')
      }, function () {
        FeedbackOutput('Une erreur est survenue, impossible de copier dans le&nbsp;presse-papier.')
      })
    }

    const FeedbackOutput = (text) => {
      inputFeedback.value = text
      const FeedbackVanish = setTimeout(() => { feedbackActive.value = !feedbackActive.value }, timer)

      if (feedbackActive.value === false) {
        feedbackActive.value = !feedbackActive.value
      } else {
        console.log('clearTimeout')
        clearTimeout(FeedbackVanish)
      }
    }

    const btnArray = [
      {
        class: 'convert',
        text: 'Convertir',
        action: convertText,
        ref: 'btnConvert'
      },
      {
        class: 'undo',
        text: 'Retour <span class="hide">en&nbsp;arrière</span>',
        action: undoConvert,
        ref: 'btnUndo'

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
    })

    return {
      isDisabled,
      // loading,
      canConvert,
      // convertText,
      // undoConvert,
      // cancelChange,
      // eraseText,
      // copyText,
      btnArray,
      wordCounter,
      textInput,
      userText,
      inputFeedback,
      feedbackActive
      // btnList
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
