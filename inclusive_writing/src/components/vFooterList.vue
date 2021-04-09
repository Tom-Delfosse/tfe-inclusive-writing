<template>
  <div v-for="link in Links" :key="link" class="links__el">
    <template
      v-for="linkEl in link"
      :key="linkEl"
    >
      <h3 v-if="linkEl.isTitle" class="title title--small" v-html="linkEl.title" />
    </template>
    <ul class="list list--links">
      <template
        v-for="linkEl in link"
        :key="linkEl"
      >
        <li v-if="!linkEl.isTitle" class="list--links__el">
          <a :href="linkEl.link" v-html="linkEl.title" />
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
import Links from '@/assets/data/links.json'

export default {
  data () {
    return {
      Links: Links
    }
  }
}
</script>
<style lang="scss" scoped>
  .title--small{
    font-family: 'Source Sans Pro', sans-serif;
    text-transform: uppercase;
    padding: 0;
    margin-bottom: $s-mob--medium;
    margin-left: 0;
    margin-top: 0;
    font-weight: $w-bold;

    @include tb{
      font-size: $s-tab--smaller;
    }

    @include lg{
      font-size: $s-desk--smaller;
    }
  }

  .links__el{
    border-left: 1px solid $c-white;
    padding-left: $s-mob--smaller;
    margin-top: $s-mob--medium-plus;

    @include tb{
      margin-top: $s-tab--big;
      padding-left: $s-tab--smaller;
    }

    @include lg{
      padding-left: $s-desk--smaller;
      margin-top: $s-desk--medium-plus;

      &:nth-child(2){
        margin-left: $s-desk--medium-plus;
      }
    }

    @include xxl{
      padding-left: $s-desk--small;
    }
  }

  .list--links{
    &__el{
      margin-bottom: $s-mob--smaller;

      @include tb{
        font-size: $s-tab--smallest;
        margin-bottom: $s-tab--smaller;
      }

      @include lg{
        font-size: $s-desk--smallest;
        margin-bottom: $s-desk--smallest;
      }
      a{
        transition: $t-smooth;
        box-shadow: inset 0 0 0 0.01px  $c-black;
      }

      a:hover{
        transition: $t-fast;
        color: $c-black;
        box-shadow: inset 300px 0 0 0 $c-white  ;
      }
    }
  }
</style>
