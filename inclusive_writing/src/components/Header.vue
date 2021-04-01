<template>
  <header class="section section--header">
    <img src="@/assets/img/svg/icon.svg" alt="logo">

    <nav class="nav">
      <router-link to="/">Accueil</router-link>
      <router-link to="/tool">Corriger mon texte</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
