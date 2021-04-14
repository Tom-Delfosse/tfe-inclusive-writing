<template>
  <div>
    <section class="section section--white section--tool">
      <div class="section__content">
        <div class="main">
          <!-- <textarea
            ref="txt"
            cols="30"
            rows="10"
            class="textarea"
            placeholder="Inscrivez votre texte&nbsp;ici&nbsp;!"
          /> -->
          <div ref="txt" class="textarea" contenteditable="true">
            Bonjour voyageur!
          </div>

          <p>Nombre de mots (à changer)</p>
          <vConvertBtn v-if="txt" :to-check="txt" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import vConvertBtn from '@/components/Tool/vConvertBtn.vue'
import { ref } from 'vue'

export default {
  components: {
    // vTxtArea,
    vConvertBtn
  },
  setup () {
    const txt = ref(null)

    return {
      txt
    }
  }
}
</script>

<style lang="scss" scoped>
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

      .main{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 600px;
        align-content: center;

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
          max-width: 450px;

          @include tb{
            font-size: $s-tab--smaller;
            font-weight: 300;
            max-width: 600px;
          }

          @include lg{
            font-size: $s-desk--smallest;
          }
          @include xl{
            font-size: $s-desk--smaller;
            max-width: 650px;
          }
        }

        p{
          padding: 0;
          margin: 0;
        }
    }
  }
}
</style>
