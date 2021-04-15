<template>
  <div>
    <section class="section section--white section--tool">
      <div class="section__content">
        <div class="main">
          <div ref="txt" class="textarea" contenteditable="true">
            Bonjour voyageur!
          </div>
          <p>1000 mots</p>

          <vBtn v-for="btn in btnArray.slice(0, 1)" :key="btn"
            :class="`btn btn--${btn.class}`"
            v-html="btn.text" @click="btn.action"/>
        </div>

        <div class="options">
          <vBtn
            v-for="btn in btnArray.slice(1)"
            :key="btn"
            :class="`btn btn--${btn.class}`"
            v-html="btn.text" @click="btn.action"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import vBtn from '@/components/Tool/vBtn.vue'

export default {
  components: {
    vBtn
  },
  setup () {
    // const txt = ref(null)
    const convertText = () => {
      // console.log("hi")
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
      // console.log("ougiboui")
    }

    const btnArray = [
      {
        class: 'convert',
        text: 'Convertir&nbsp;!',
        action : convertText
      },
      {
        class: 'undo',
        text: 'Retour <span class="hide">en&nbsp;arrière</span>',
        action : undoChange
      },
      {
        class: 'cancel',
        text: 'Annuler <span class="hide">les&nbsp;modifications</span>',
        action : cancelChange
      },
      {
        class: 'erase',
        text: 'Supprimer <span class="hide">le&nbsp;texte</span>',
        action : eraseText
      },
      {
        class: 'copy',
        text: 'Copier <span class="hide">le&nbsp;texte</span>',
        action : copyText
      }
    ]


    return {
      convertText,
      convertText,
      undoChange,
      cancelChange,
      eraseText,
      copyText,
      btnArray
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
      // max-width: 600px;

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
        }

        @include lg{
          max-width: inherit;
          flex-grow: 1;
          flex-shrink: 0;
        }

        @include xl{
          max-width: 650px;
        }

        .textarea{
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
          height: 60vh;
          border-bottom: 1px solid $c-black;

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

        p{
          padding: 0;
          margin: 0;
        }
    }

    .options{
      display: flex;
      justify-content: space-between;
      max-width: 300px;
      margin-left: auto;
      margin-right: auto;
      margin-top: $s-mob--smaller;

      @include sm{
        margin-top: $s-mob--small;
        margin-left: auto;
      }

      @include tb{
        margin: inherit;
        max-width: inherit;
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
