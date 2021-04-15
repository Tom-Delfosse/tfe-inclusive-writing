<template>
  <div class="footer-nav">
    <vIcon class="img--icon-dark" />

    <vScrollBtn
      scroll-to="#section--hero"
      class="btn-scroll btn-scroll--dark"
      :time-to-scroll="2400"
    />
  </div>
</template>
<script>
import vScrollBtn from '@/components/vScrollBtn.vue'
import vIcon from '@/components/vIcon.vue'

export default {
  components: {
    vScrollBtn,
    vIcon
  }
}
</script>
<style lang="scss" scoped>
    .footer-nav{
    display: flex;
    justify-content: space-between;
    padding: $s-mob--medium-plus 0 $s-mob--medium;
    @include sm{
      padding: $s-mob--big 0 auto ;
    }

    @include tb{
      padding: $s-tab--big 0 $s-tab--small;
      width: calc(100% + #{$s-tab--big});
    }

    @include lg{
      padding: $s-mob--medium-plus 0 $s-desk--smaller;
      width: calc(100% + #{$s-desk--medium});
    }

    @include xl{
      padding: $s-desk--medium-avg 0 $s-desk--smaller;
    }

    .btn-scroll{
      max-width: $s-mob--big;
      transform: rotate(180deg);
      @include tb{
        max-width: $s-tab--big;
        position: relative;
        left: -$s-tab--big;
      }

      @include lg{
        max-width: $s-desk--medium;
        left: -$s-desk--medium;
      }

      @include xl{
        max-width: $s-desk--medium-avg;
      }
    }
  }
</style>
