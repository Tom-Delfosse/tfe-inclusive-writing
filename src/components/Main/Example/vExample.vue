<template>
  <ul class="list list--example">
    <li v-for="example in examples" :key="example" class="list--example__el">
      <p v-html="example.explanation" />
      <div class="correction-example">
        <div class="correction-example__bef">
          <p v-for="word in example.before" :key="word" v-html="word" />
        </div>
        <img
          :src="(`/assets/img/svg/${example.img}`)"
          alt="flèche directionnelle"
          class="img img--arrow"
        >
        <div class="correction-example__aft">
          <p v-for="word in example.after" :key="word" v-html="word" />
        </div>
      </div>
    </li>
  </ul>
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
  border-bottom: 1px solid $c-white;
  display: flex;
  justify-content: space-around;
  padding: $s-mob--smallest $s-mob--smallest/4;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @include sm{
    width: fit-content;
    max-width: 250px;
    margin-left: $s-mob--medium * 2;
  }
  @include tb{
    border-bottom: none;
    border-left: 1px solid $c-white;
    max-width: inherit;
    margin-left: $s-tab--small * 2;
    padding: $s-tab--smallest/4 $s-tab--smallest;
  }
  @include lg{
    margin-left: $s-desk--medium-small * 2;
    width: 100%;
    max-width: 400px;
    justify-content: space-between;
    padding: 0 $s-desk--small;

  }
  @include xl{
    margin-left: $s-desk--medium-plus + $s-desk--medium-small;
    max-width: 500px;

  }
  @include xxl{
    margin-left: $s-desk--big + $s-desk--medium-small;
    max-width: 700px;
    justify-content: flex-start;
  }

  p{
    font-size: $s-mob--smallest;
    margin: 0;
    font-style: italic;

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
    max-width: $s-mob--big;
    user-select: none;
    flex-grow: 1;
    padding: 0 $s-mob--smallest/2;

    @include sm{
    padding: 0 $s-mob--smallest;
    max-width: $s-mob--bigger;
    }
    @include tb{
      padding: 0 $s-tab--small;
      max-width: $s-tab--big;
    }
    @include lg{
      max-width: $s-desk--medium-plus;
      padding: 0 $s-desk--smallest;
      // display: block;
    }
    @include xl{
      max-width: $s-desk--medium-plus;
      padding: 0 $s-desk--small;
    }

    @include xxl{
      max-width: $s-desk--medium-big;
      padding: 0 $s-desk--medium-small;
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
