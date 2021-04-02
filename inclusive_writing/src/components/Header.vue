<template>
  <header class="section section--header">
    <router-link to="/"><img src="@/assets/img/svg/icon.svg" alt="logo" exact></router-link>

    <nav class="nav">
      <router-link class="nav__link" to="/" exact>Accueil</router-link>
      <router-link class="nav__link" to="/tool" exact>Corriger mon texte</router-link>
    </nav>
  </header>
</template>

<style scoped lang="scss">

.section--header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: $s-mob--small;
  margin-bottom: $s-mob--big;

  .nav{
    display: inline-flex;
    flex-direction: column;
    text-align: center;
    flex-direction: flex-end;
    align-items: flex-end;
    text-transform: uppercase;
  }

  .nav__link{
    font-size: $s-mob--smaller;
    letter-spacing: $ls--small;
    transition: $t-smooth;
    box-shadow: 0 0px 0.01px 0.01px inset $c-black ;

    &:hover{
      transition: $t-fast;
      box-shadow: 200px 0 0 0px inset $c-black ;
      color: $c-white;
    }

    &--active{
    font-weight: $w-bold;
    }

    &:nth-child(1){
      margin-bottom: $s-mob--smaller;
    }

    &:nth-child(2){
      outline: 1px solid $c-black;
      padding: 5px;
    }
  }
}

</style>
