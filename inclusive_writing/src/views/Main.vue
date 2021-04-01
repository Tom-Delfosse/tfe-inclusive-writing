<template>
<div>
  <header class="section section--header">
    <HeaderTop/>
    <h1 class="title title--big">Correction inclusive</h1>
    <p class="catchphrase">Outil de grammaire inclusive à la portée de&nbsp;tous·tes.</p>
    <input type="image" src="/assets/img/svg/btn.svg">
  </header>
</div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop.vue'

  export default {
    name: 'Main',
    components: {
      HeaderTop,
    }
  }
</script>

<style lang="scss">
  .title{
    // font-size: 150px;
    -webkit-text-stroke: 0;
    line-height: 90%;
    margin: 0;
  }

  .catchphrase{
    text-transform: uppercase;
    letter-spacing: 0.15rem;
  }
</style>