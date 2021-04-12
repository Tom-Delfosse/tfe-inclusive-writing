<template>
  <div class="title-wrap">
    <div class="title-wrap__text">
      <h2 class="title title--big">
        Témoignages
      </h2>
      <p>de personnes concerné‧e‧s par l'écriture&nbsp;inclusive.</p>
    </div>
    <!-- <svg
      class="img img--bg"
      width="263"
      height="132"
      viewBox="0 0 263 132"
      fill="none"
    >
      <path d="M132 0C59.2 0 0 59.2 0 132H263C263 59.2 203.8 0.5 132 0Z" fill="#ECE9E5" stroke="#2C2C2C" /> -->
    <!-- </svg> -->
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.title-wrap{
  &__text{
    // position: absolute;
    // bottom: 100%;
    // text-align: center;
    // left: 50%;
    // transform: translateX(-50%);
    padding: $s-mob--bigger 0;
    // width: 100%;

    @include tb{
      padding: $s-tab--big*2 $s-tab--big;
    }
    @include lg{
      padding: $s-desk--small*2 $s-desk--small;
    }
    @include xl{
      padding: $s-desk--medium*2 $s-desk--medium;
    }

    @include xxl{
      padding: $s-desk--big*2 $s-desk--big;
    }
    // border-left: 1px solid $c-black;
    // border-right: 1px solid $c-black;
    // margin:  0 $s-mob--smaller;
    // padding: $s-mob--big $s-mob--smaller;
    // width: calc(100% - (#{$s-mob--smaller} * 4));

    //   @include sm{
    //     margin: 0 $s-mob--medium;
    //     padding: $s-mob--medium*2 $s-mob--small $s-mob--big;
    //     width: calc(100% - (#{$s-mob--medium} * 2 + #{$s-mob--small} *2));
    //   }

    //   @include tb{
    //     margin: 0 10%;
    //     padding: $s-tab--big*2 $s-tab--smaller $s-tab--big;
    //     width: calc(100% - 20vw - (#{$s-tab--smaller} * 2));
    //   }

    //   @include lg{
    //     margin: 0 15%;
    //     padding: $s-desk--big*2 $s-desk--smaller $s-desk--big;
    //     width: calc(100% - 30vw - (#{$s-desk--smaller} * 2));
    //   }

    //   @include xl{
    //     padding: $s-desk--big*2 $s-desk--medium $s-desk--big;
    //     width: calc(100% - 30vw - (#{$s-desk--medium} * 2));
    //   }

    //   @include xxl{
    //     padding: $s-desk--big*2 $s-desk--medium-plus $s-desk--big;
    //     width: calc(100% - 30vw - (#{$s-desk--medium-plus} * 2));
    //   }

    .title, p{
      margin: 0;
      margin: 0 auto;
      padding: 0;
      text-align: center;
    }
  }
}
</style>
