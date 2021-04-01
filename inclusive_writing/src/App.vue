<template>
  <div>
    <Head/>
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Head from '@/components/Head.vue'
import Header from '@/components/Header.vue'

export default {
  components : {
    Head,
    Header
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
  font-weight: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
