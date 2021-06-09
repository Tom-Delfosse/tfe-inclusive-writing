<template>
  <div>
    <section class="section section--white section--404">
      <div class="section__content">
        <h1 class="title title--bigger">
          <span class="full">404</span>Page non trouvée.
        </h1>
      </div>
    </section>
    <vFooter />
  </div>
</template>
<script>
import vFooter from '@/components/Footer/vFooter.vue'
export default {
  components: {
    vFooter
  }
}
</script>
<style lang="scss" scoped>
.section--404{
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
      height: 100%;

      @include lg{
        display: block;
      }

      .full{
        width: 100%;
        display: block;
        border-bottom: 1px solid $c-black ;
        padding-bottom: $s-mob--smaller*2;
        margin-bottom: $s-mob--smaller;

        @include tb{
          padding-bottom: $s-tab--smallest*2;
          margin-bottom: $s-tab--smallest;
        }

        @include lg{
          padding-bottom: $s-desk--smallest*2;
          margin-bottom: $s-desk--smallest;
        }

        @include xl{
          padding-bottom: $s-desk--small;
          margin-bottom: $s-desk--smaller;
        }
      }
  }
}
</style>
