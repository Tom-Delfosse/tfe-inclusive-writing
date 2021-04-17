<template>
  <a
    v-if="isVisible"
    :href="scrollTo"
    class="btn-scroll"
    @click.prevent="scrollToSection"
  >
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
    >
      <circle
        class="circle circle--full"
        cx="40"
        cy="40"
        r="39"
        stroke="#2C2C2C"
        fill="#ECE9E5"
      />
      <path class="path" d="M53.66 35.31L43.18 51.37L45.48 54.65H40C40 54.65 28.36 38.28 26.27 35.31C24.2846 32.558 21.8224 30.1839 19 28.3L19 28H29.69V28.3C28 29.3 28.5 30.63 30.46 33.41L42.9 51L53.1 35.31C55.34 31.88 55.69 30.02 52.68 28.31V28H61V28.3C57.9755 29.9451 55.4424 32.3643 53.66 35.31Z" fill="#2C2C2C" />
    </svg>
  </a>
</template>

<script>
import zenscroll from 'zenscroll'
import { onMounted, ref } from 'vue'

export default {
  props: {
    scrollTo: {
      type: String,
      required: true
    },
    timeToScroll: {
      type: Number,
      required: true
    }
  },
  setup (props) {
    const isVisible = ref(true)

    const scrollToSection = () => {
      const el = document.querySelector(props.scrollTo)
      zenscroll.to(el, props.timeToScroll)
    }

    onMounted(() => {
      if (!document.querySelector('.section--hero')) {
        isVisible.value = !isVisible.value
      }
    })

    return {
      scrollToSection,
      ref,
      isVisible
    }
  }

}
</script>

<style lang="scss">
.btn-scroll{
  width: 100%;
  max-width: $s-mob--bigger;
  margin-bottom: $s-mob--smaller;

  @include sm{
    max-width: $s-mob--biggest;
    margin-bottom: $s-mob--small;
  }
  @include tb{
    margin-bottom: $s-tab--medium;
    max-width: $s-tab--big;
  }
  @include lg{
    max-width: $s-desk--medium*2;
    max-height: $s-desk--medium*2;
    margin-bottom: $s-desk--medium-small;
  }

  svg{
    display: block;
    margin-right: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;

    @include lg{
      stroke-width: 0.7px;
    }

    .circle, .path{
      transition: $t-smooth;
    }
  }

  &:hover{
    .circle, .path{
    transition: $t-fast;
  }
    .circle{
      fill: $c-black;
    }

    .path{
      fill: $c-white;
    }
  }

  &--dark{
    max-width: $s-mob--big;

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

    svg{
      margin-bottom: 0;
      margin-top: 0;
      transform: rotate(180deg);
      .circle{
        fill: $c-black;
        stroke: $c-white;
      }

      .path{
        fill: $c-white;
      }
      &:hover{
        .circle{
          fill: $c-white;
        }

        .path{
          fill: $c-black;
        }
      }
    }
  }
}
</style>
