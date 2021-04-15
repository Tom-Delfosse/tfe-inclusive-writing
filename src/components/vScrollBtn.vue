<template>
  <a :href="scrolledTo" class="btn-scroll" @click.prevent="scrollToSection">
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

export default {
  props: {
    scrolledTo: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const scrollToSection = () => {
      const el = document.querySelector(props.scrolledTo)
      zenscroll.to(el, 1000)
    }

    return {
      scrollToSection
    }
  }
}
</script>

<style lang="scss">
.btn-scroll{
  width: 100%;
  height: auto;
  cursor: pointer;
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
    max-width: $s-desk--medium-plus;
    margin-bottom: $s-desk--medium-small;
  }

  .circle, .path{
    transition: $t-smooth;
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
    margin-bottom: 0;
    margin-top: 0;
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
</style>
