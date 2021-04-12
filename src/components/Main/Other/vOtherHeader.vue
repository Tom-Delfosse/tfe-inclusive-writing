<template>
  <div class="title-wrap">
    <h2 class="title title--big">
      Iels aussi ont adopté l'écriture inclusive.
    </h2>

    <svg
      width="288"
      height="111"
      viewBox="0 0 288 111"
      fill="none"
      class="img img--bg"
    >
      <path d="M288 111H0C22.1668 46.2693 78.2461 0 144 0.5C209.754 0 265.833 46.2693 288 111Z" stroke="#2C2C2C" />
      <path d="M194.5 55C194.5 85.1357 171.855 111 144 111C116.145 111 93.5 85.1357 93.5 55C93.5 24.8643 116.145 0.5 144 0.5C171.855 0.5 194.5 24.8643 194.5 55Z" stroke="#2C2C2C" />
    </svg>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
    .title-wrap{
      position: absolute;
      width: 100%;
      color: $c-black;
      bottom: 100%;
      left: 0;

      .title{
        position: absolute;
        bottom: $s-mob--small;
        padding: 0;
        margin: 0 $s-mob--smaller;
        width: 100%;

        @include sm{
          margin: 0 $s-mob--small;
          bottom: $s-mob--medium;
        }

        @include tb{
          margin: 0 $s-tab--smaller;
          bottom: $s-tab--smaller;
        }

        @include lg{
          margin: 0 $s-desk--smaller;
          bottom: 50%;
          transform: translateY(50%);
        }

        @include xl{
          margin: 0 $s-desk--medium;
        }

        @include xxl{
          margin: 0 $s-desk--medium-plus;
        }

        @include xxxl{
          margin: 0 auto;
          text-align: center;
        }
      }

      .img--bg{
        position: relative;
        bottom: -5px;
        height: auto;
        pointer-events: none;
        max-height: $s-desk--bigger*3;
      }
    }

</style>
