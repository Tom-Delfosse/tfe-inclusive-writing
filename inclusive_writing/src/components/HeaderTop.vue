<template>
  <div class="header-top">
    <router-link to="/"><img src="@/assets/img/svg/icon.svg" alt="logo"></router-link>

    <nav class="nav">
      <router-link to="/">Accueil</router-link>
      <router-link to="/tool">Corriger mon texte</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderTop',
}
</script>

<style scoped lang="scss">

.header-top{
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav{
    border-bottom: 1px solid;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;
    text-transform: uppercase;
    align-content: flex-end;
  }
}
</style>
