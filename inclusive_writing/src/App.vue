<template>
  <div id="app">
      <teleport to="head">
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap" rel="stylesheet">
      </teleport>
    <Header/>
    <Landing/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Landing from './components/Landing.vue'

export default {
  name: 'App',
  components: {
    Header,
    Landing
  }
}
</script>

<style lang="scss">
body{
  background-color: $c-white;
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $c-black;
}

.title{
  font-family: 'font1', serif;
}


a {
  color: inherit;
  text-decoration: none;
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
