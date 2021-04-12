<template>
  <div class="grain" />
</template>
<script>
export default {

}
</script>
<style lang="scss">
  .grain{
    position: fixed;
    pointer-events: none;
    // cursor: crosshair;
    width: 100%;
    top: 0;
    left: 0;
    // background-image: url('../assets/img/grain-tile.png');
    background-repeat: repeat;
    height: 100vh;
    animation: grainMove 1s steps(5);

    &::before{
      content: '';
      background-image: url("~@/assets/img/grain-tile.png");
      opacity: 30%;
      position: absolute;
      width: 100%;
      height: 100%;
      animation: grainMove 4s steps(4) infinite;
    }
  }

  @keyframes grainMove {
    // 0% { transform: rotate(180deg);}
    0% {
      transform: rotate(360deg);
      }
    // 75% {transform: rotate(90deg);}
    100% {
      transform: rotate(0deg);
      }
  }
</style>
