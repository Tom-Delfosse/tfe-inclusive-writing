<template>
  <div class="grain" aria-hidden="true" />
</template>
<style lang="scss">
  .grain{
    position: fixed;
    z-index: 4;
    pointer-events: none;
    width: 250%;
    top: -25%;
    left: -50%;
    background-repeat: repeat;
    height: 150vh;

    &::before{
      content: '';
      background-image: url('/assets/img/grain-tile.png');
      opacity: 0.2;
      filter: brightness(0.5);
      position: absolute;
      width: 100%;
      height: 100%;
      animation: grainMove 0.0024s steps(8) infinite;

      @include lg {
        opacity: 0.45;
        filter: brightness(1.4);
      }

      @include retina{
        background-image: url('/assets/img/grain-tile@2x.png');
        filter: brightness(0.7);
        opacity: 0.3;
      }
    }
  }

  @keyframes grainMove {
    0% { transform: translate(0, 0);}
    12.5% { transform: translate(-5%, -5%);}
    25% { transform: translate(4%, 4%);}
    37.5% { transform: translate(12%, 3%);}
    50% { transform: translate(5%, -8%);}
    62.5% { transform: translate(6%, -10%);}
    75% { transform: translate(8%, -6%);}
    87.5% { transform: translate(10%, 9%);}
    100% { transform: translate(-5%, 10%);}
  }
</style>
