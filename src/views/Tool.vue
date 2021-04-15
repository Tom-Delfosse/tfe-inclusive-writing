<template>
  <div>
    <section class="section section--white section--tool">
      <div class="section__content">
        <div class="main">
          <div ref="txt" class="textarea" contenteditable="true">
            Bonjour voyageur!
          </div>
          <p>1000 mots</p>
          <vBtnConvert v-if="txt" :to-check="txt" />
        </div>

        <div class="options">
          <vBtnCopy />
          <vBtnUndo />
          <vBtnCancel />
          <vBtnErase />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import vBtnConvert from '@/components/Tool/Btns/vBtnConvert.vue'
import vBtnCopy from '@/components/Tool/Btns/vBtnCopy.vue'
import vBtnCancel from '@/components/Tool/Btns/vBtnCancel.vue'
import vBtnUndo from '@/components/Tool/Btns/vBtnUndo.vue'
import vBtnErase from '@/components/Tool/Btns/vBtnErase.vue'
import { ref } from 'vue'

export default {
  components: {
    vBtnConvert,
    vBtnCopy,
    vBtnUndo,
    vBtnErase,
    vBtnCancel
  },
  setup () {
    const txt = ref(null)

    return {
      txt
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
      max-width: 600px;

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
        }

        @include xl{
          flex-grow: 1;
          flex-shrink: 0;
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
          // max-width: 450px;

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

  .btn {
    display: block;
    background-color: inherit;
    font-family: 'Source Sans Pro', sans-serif;
    outline: 0;
    cursor: pointer;
    border: 0;
    font-size: $s-mob--smaller;
    letter-spacing: $ls-smaller;
    line-height: 160%;
    font-weight: $w-light;
    transition: $t-smooth;
    text-indent: 150%;
    white-space: nowrap;
    overflow: hidden;
    background-repeat: no-repeat;
    background-image: url('/assets/img/svg/copy.svg');
    width: $s-mob--medium;
    height: $s-mob--medium;

    .hide{
      display: none;
    }

    &:hover{
      transform: scale(1.1);
      transition: $t-fast;

      @include lg{
        transform: inherit;
        outline: 1px solid $c-black;
      }
    }

    @include tb{
      font-size: $s-tab--smaller;
      width: inherit;
      height: inherit;
      background-image: inherit;
      overflow: inherit;
      text-indent: inherit;
    }

    @include lg{
      font-size: $s-desk--smallest;
      margin-top: $s-desk--smallest;

      &:nth-child(1){
        margin-top: 0;
      }

    }

    @include xl{
      font-size: $s-desk--smaller;
      margin-top: $s-desk--smaller;

      .hide{
        display: inline-block;
      }

    }

    &--disable{
      opacity: 0;
      pointer-events: none;
    }

    &::before{
      content: none;
      @include tb{
        width: $s-tab--smaller;
        height: $s-tab--smaller;
        content: '';
        display: inline-block;
        vertical-align: middle;
        background-image: url('/assets/img/svg/copy.svg');
        background-repeat: no-repeat;
        margin-right: $s-tab--smallest/4;
      }

      @include lg{
        width: $s-desk--smaller;
        height: $s-desk--smaller;
        margin-right: $s-desk--smallest/2;
      }

      @include xl{
        width: $s-desk--small;
        height: $s-desk--small;
        margin-right: $s-desk--smallest/2;

      }
  }
}
</style>
