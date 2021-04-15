<template>
  <button class="btn btn--erase" @click="eraseContent">
    Supprimer <span class="hide">le&nbsp;texte</span>
  </button>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>

.btn--erase{
  background-image: url('~@/assets/img/svg/dustbin.svg');

  @include tb{
    background-image: inherit;
  }
}
.btn--erase::before{
  background-image: url('~@/assets/img/svg/dustbin.svg');
}
</style>
