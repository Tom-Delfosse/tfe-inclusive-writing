<template>
  <div>
    <header class="section section--header">
        <HeaderTop/>
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