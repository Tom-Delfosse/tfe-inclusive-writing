<template>
  <div class="correction-example correction-example--big">
    <div class="correction-example__bef">
      <p>L’écriture inclusive est accesible à tous, y compris aux personnes non&nbsp;concernées.</p>
    </div>
    <img src="@/assets/img/svg/Arrow-long-curly_5.svg" class="img img--arrow" alt="flèche directionnelle">
    <div class="correction-example__aft">
      <p>L'écriture inclusive est accessible à <span class="word-corrected">tous·te·s</span>, y compris aux personnes non&nbsp;<span class="word-corrected">concerné·e·s</span>.</p>
    </div>
  </div>
</template>

<style lang="scss">

.list--example__el{
  margin-top: $s-mob--smaller;
  margin-bottom: $s-mob--medium-plus;

  &:nth-last-child(1){
      margin-bottom: 0;
  }
}

.correction-example{
  outline: 1px solid $c-white;
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    font-size: $s-mob--smallest;
    margin: 0;
    padding: 0;
  }

  .img{
    // flex-shrink: 1;
    width: 100%;
    height: 100%;
    max-width: $s-mob--smaller;
  }

  &__bef, &__aft{
    padding: $s-mob--smaller/2;
  }

  &--big{
    flex-direction: column;
    padding: $s-mob--small;
    margin-bottom: $s-mob--biggest;

    .img{
      transform: rotate(90deg);
      margin: $s-mob--smaller 0 ;
    }
  }
}

</style>
