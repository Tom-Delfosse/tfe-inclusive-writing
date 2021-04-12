<template lang="">
  <div class="section--other__outro">
    <p class="title title--false">
      Et plein&nbsp;d'autres&nbsp;!
    </p>
    <svg
      width="288"
      height="111"
      viewBox="0 0 288 111"
      fill="none"
      class="img img--bg img--bg-outer"
    >
      <path d="M288 111H0C22.1668 46.2693 78.2461 0 144 0C209.754 0 265.833 46.2693 288 111Z" stroke="#ECE9E5" />
    </svg>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.section--other__outro{
  position: absolute;
  border-top: 1px solid $c-white;
  width: 100%;
  bottom: 0;
  left: 0;
  bottom: -5px;

  .img--bg{
    position: relative;
    height: auto;
    pointer-events: none;
    margin: 0 $s-mob--smaller;
    max-width: calc(100% - #{$s-mob--smaller * 2});

    @include sm{
      margin: 0 $s-mob--medium;
      max-width: calc(100% - #{$s-mob--medium * 2});
    }

    @include tb{
      margin: 0 10%;
      max-width: calc(100% - 20%);

    }

    @include lg{
      margin: 0 15%;
      max-width: calc(100% - 30%);
    }

    @include xxl{
      margin: 0 15%;
      max-height: $s-desk--big * 4;
    }

  }

  .title{
    position: absolute;
    display: inline;
    padding: 0;
    white-space: nowrap;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: $s-mob--small;

    @include sm{
      font-size: $s-mob--medium;
    }
    @include tb{
      font-size: $s-tab--medium;
    }
    @include lg{
      font-size: $s-desk--medium;
    }
    @include xl{
      font-size: $s-desk--medium-avg;
    }
    @include xxl{
      font-size: $s-desk--medium-plus;
    }
  }
}
</style>
