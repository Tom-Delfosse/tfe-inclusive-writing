<template>
  <div class="correction-example correction-example--big">
    <div class="correction-example__bef">
      <p>L’écriture inclusive est accesible à tous, y compris aux personnes non&nbsp;concernées.</p>
    </div>
    <img src="/assets/img/svg/arrow-long-curly_5.svg" class="img img--arrow" alt="flèche directionnelle">
    <div class="correction-example__aft">
      <p>L'écriture inclusive est accessible à <span class="word-corrected no-break">tous·te·s</span>, y compris aux personnes non&nbsp;<span class="word-corrected no-break">concerné·e·s</span>.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .correction-example--big{
    flex-direction: column;
    padding: $s-mob--small;
    margin: $s-mob--small auto $s-mob--biggest ;
    max-width: inherit;
    width: auto;

    @include sm{
      margin-left: $s-mob--smaller;
    }

    @include tb{
      flex-direction: row;
      margin-left: inherit;
      margin: $s-tab--small 0 $s-mob--biggest $s-mob--smaller;
    }

    @include lg{
      margin-left: 0;
    }

    .correction-example__bef, .correction-example__aft{
      width: 100%;

      @include tb{
        width: auto;
      }
    }

    .img{
      transform: rotate(90deg);
      padding: $s-mob--medium 0;
      @include sm{
        padding: $s-mob--medium-plus 0;
      }

      @include tb{
        transform: inherit;
        padding: 0 $s-tab--small;
      }
    }
  }

  .word-corrected{
    border: 1px solid $c-white;
    padding: 0 $s-mob--smallest/3;

    @include tb{
      padding: 0 $s-tab--tiny/3;
    }
    @include lg{
      padding: 0 $s-desk--smallest/4;
    }
  }

</style>
