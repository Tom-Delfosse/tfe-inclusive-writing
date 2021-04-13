<template>
  <div class="title-wrap">
    <div class="title-wrap__text">
      <h2 class="title title--big">
        Témoignages
      </h2>
      <p>de personnes concerné‧e‧s par l'écriture&nbsp;inclusive.</p>
    </div>
    <div class="img-container">
      <svg
        id="clip"
        width="262"
        height="131"
        viewBox="0 0 262 131"
        fill="none"
        class="img img--bg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M131 0H0V131C0 58.7002 58.6992 0 131 0ZM262 131V0H131C203.301 0 262 58.7002 262 131Z"
          fill="#2C2C2C"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.title-wrap{
  &__text{
    padding: $s-mob--big*2 0 $s-mob--bigger;

    @include sm {
      padding: $s-mob--bigger*2 0;
    }

    @include tb{
      padding: $s-tab--big*2 0 $s-tab--big;
    }
    @include lg{
      padding: $s-desk--small*2 0 $s-desk--small;
    }
    @include xl{
      padding: $s-desk--medium*4 0 $s-desk--medium*2;
    }

    @include xxl{
      padding: $s-desk--big*2  0 $s-desk--big;
    }

    .title, p{
      margin: 0;
      margin: 0 auto;
      padding: 0;
      text-align: center;
    }
  }

  .img-container{
    position: absolute;
    left: 0;
    width: 100%;
    height: auto;
    top: 0;

    &::before{
      content: "";
      height: 100%;
      position: absolute;
      border-left: 1px solid $c-white;
      border-right: 1px solid $c-white;
      width: 100%;
      // clip-path: url(#clip);
      box-sizing: border-box;
      margin:  0 $s-mob--smaller;
      max-width: calc(100% - #{$s-mob--smaller} * 2);
      max-height: 53.5%;

      @include sm{
        margin:  0 $s-mob--medium;
        max-width: calc(100% - #{$s-mob--medium}* 2);
        max-height: 55%;
      }
      @include tb{
        margin:  0 10%;
        max-width: 80%;
        max-height: 39.5%;

      }

      @include lg{
        margin: 0 15%;
        max-width: 70%;
        max-height: 28.5%;
      }
    }

    svg{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
