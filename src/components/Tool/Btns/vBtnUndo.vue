<template>
  <button class="btn btn--undo" @click="eraseContent">
    Retour <span class="hide">en&nbsp;arrière</span>
  </button>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.btn--undo{
  background-image: url('~@/assets/img/svg/arrow-rewind.svg');

  @include tb{
    background-image: inherit;
  }
}
  .btn--undo::before{
    background-image: url('~@/assets/img/svg/arrow-rewind.svg');
  }
</style>
