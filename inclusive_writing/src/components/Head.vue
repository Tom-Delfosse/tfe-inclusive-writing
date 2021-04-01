<template>
  <div>
    <teleport to="head">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="icon" href="@/assets/img/svg/favicon.svg" type="image/x-icon">
    <title>Correction Inclusive — Outil de grammaire inclusive</title>
    </teleport>
  </div>
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
