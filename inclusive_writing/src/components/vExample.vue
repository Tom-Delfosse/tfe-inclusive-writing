<template>
  <li v-for="example in examples" :key="example" class="list--example__el">
    <p v-html="example.explanation" />
    <div class="correction-example">
      <div class="correction-example__bef">
        <p v-for="word in example.before" :key="word" v-html="word" />
      </div>
      <img
        :src="require(`@/assets/img/svg/${example.img}`)"
        alt="flèche directionnelle"
        class="img img--arrow"
      >
      <div class="correction-example__aft">
        <p v-for="word in example.after" :key="word" v-html="word" />
      </div>
    </div>
  </li>
</template>
<script>
import examples from '@/assets/data/examples.json'

export default {
  data () {
    return {
      examples: examples
    }
  }
}
</script>
<style lang="scss" >

.list--example__el{
  margin-bottom: $s-mob--medium-plus;

  @include tb{
    margin-bottom: $s-tab--medium;
  }

  @include lg{
    margin-bottom: $s-desk--medium-small;
  }

  &:nth-last-child(1){
      margin-bottom: 0;
  }
}

.correction-example{
  outline: 1px solid $c-white;
  display: flex;
  justify-content: center;
  padding: $s-mob--smallest $s-mob--smallest/2;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;

  @include sm{
    display: inline-flex;
    padding: $s-mob--smallest $s-mob--smallest;
    margin-left: $s-mob--smaller;

  }
  @include tb{
    margin-left: $s-tab--small + $s-tab--small;
    max-width: inherit;
    padding: $s-tab--small;
  }

  @include lg{
    margin-left: $s-desk--medium-small + $s-desk--smaller;
    padding: $s-desk--smallest;
  }

  @include xl{
    margin-left: $s-desk--big + $s-desk--medium;
  }
  @include xxl{
    margin-left: $s-desk--big + $s-desk--medium-plus;
  }

  p{
    font-size: $s-mob--smallest;
    margin: 0;
    padding: 0;

    @include tb{
      font-size: $s-tab--smallest;
    }

    @include lg{
      font-size: $s-desk--smallest;
    }

    @include xxl{
      font-size: $s-desk--smaller;
    }
  }

  .img{
    width: 100%;
    height: 100%;
    transition: $t-smooth;
    max-width: $s-mob--big;
    flex-grow: 1;
    padding: 0 $s-mob--smallest/2;

    @include sm{
    padding: 0 $s-mob--smallest;
    }
    @include tb{
        padding: 0 $s-tab--small;
        max-width: $s-tab--big;
    }
    @include lg{
      max-width: $s-desk--medium-plus;
      padding: 0 $s-desk--smallest;
    }
    @include xl{
      max-width: $s-desk--medium-plus;
      padding: 0 $s-desk--small;

    }
  }

  &__bef, &__aft{
    width: min-content;

    @include tb{
      width: auto;
    }
  }
}

</style>
