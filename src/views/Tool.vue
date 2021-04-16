<template>
  <div>
    <section class="section section--white section--tool">
      <div class="section__content">
        <div class="main">
          <textarea
            v-model="textInput"
            class="text-editor"
            placeholder="Inscrivez votre texte&nbsp;ci-dessous&nbsp;!"
            @input="isWriting"
          />
          <p v-if="inputFeedback" class="input-feedback" v-html="inputFeedback" />
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
            :class="`btn btn--${btn.class}`"
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
    let userText = ''
    let userTextMod = ''
    let inputFeedback = ref('')
    inputFeedback = ref('')

    const convertText = () => {
      console.log(textInput.value)
      if (textInput.value === null || textInput.value === '') {
        console.log('vide !')
        inputFeedback.value = 'Pas de&nbsp;contenu&nbsp;!'
      } else {
        userText = textInput.value
        textInArray()
      }
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

      // console.log('hello')
      textOutArray()
    }

    const textOutArray = () => {
      console.log('________3________')

      userTextMod.forEach((index) => {
        userTextMod[index] = userTextMod[index].join(' ')
      })

      userTextMod = userTextMod.join('\n\n')
      textInput.value = userTextMod
      // console.log(userTextMod)
    }

    const isWriting = () => {
      if (textInput.value === null || textInput.value === '') {
        wordCounter.value = 0
      } else {
        wordCounter.value = textInput.value.match(/([^\s]+)/g).length
      }
    }

    const undoChange = () => {
      // console.log("hey")
    }

    const cancelChange = () => {
      // console.log("haii")
    }

    const eraseText = () => {
      // console.log("heoi")
    }

    const copyText = () => {
    }

    const btnArray = [
      {
        class: 'convert',
        text: 'Convertir&nbsp;!',
        action: convertText
      },
      {
        class: 'undo',
        text: 'Retour <span class="hide">en&nbsp;arrière</span>',
        action: undoChange
      },
      {
        class: 'cancel',
        text: 'Annuler <span class="hide">les&nbsp;modifications</span>',
        action: cancelChange
      },
      {
        class: 'erase',
        text: 'Supprimer <span class="hide">le&nbsp;texte</span>',
        action: eraseText
      },
      {
        class: 'copy',
        text: 'Copier <span class="hide">le&nbsp;texte</span>',
        action: copyText
      }
    ]

    onMounted(() => {
      // console.log('Mounted !')s
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
      textInput
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
          max-height: 1000px;
          height: 55vh;
          border-bottom: 1px solid $c-black;
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
          width: 100%;
          position: relative;
          background-color: $c-black;
          display: block;
          color: $c-white;
          margin: 0;
          padding: $s-mob--smallest/2 $s-mob--smaller*2;
        }
    }

    .options{
      display: flex;
      // display: none;
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
