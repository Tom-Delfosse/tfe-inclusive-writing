<template>
  <button class="btn btn--cancel" @click="eraseContent">
    Annuler <span class="hide"> les&nbsp;modifications</span>
  </button>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.btn--cancel{
  background-image: url('/assets/img/svg/cross.svg');

  @include tb{
    background-image: inherit;
  }
}

  .btn--cancel::before{
    background-image: url('/assets/img/svg/cross.svg');
  }
</style>
