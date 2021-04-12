<template>
  <ul class="list list--example">
    <li v-for="tem in tems" :key="tem" class="list--tem__el">
      <figure class="tem-group">
        <img :src="require(`@/assets/img/svg/${tem.img}`)" alt="Avatar d'une personne concerné‧e." class="img img--avatar">
        <figcaption>
          <p class="tem-group__quote" v-html="tem.explanation" />
          <p v-html="tem.author" />
        </figcaption>
      </figure>
    </li>
  </ul>
</template>
<script>
import tems from '@/assets/data/temoignages.json'

export default {
  data () {
    return {
      tems: tems
    }
  }
}
</script>
<style lang="scss" scoped >

.list--tem__el{
  margin-top: $s-mob--big;

  @include tb{
    margin-top: $s-tab--big;
  }
  @include xl{
    margin-top: $s-desk--medium-big;
  }

  &:nth-child(1){
    margin-top: 0;
  }

  &:nth-child(even){
    .tem-group{

      @include tb{
        flex-direction: row-reverse;
        border-right: inherit;
      }
    }
  }
  .tem-group{
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin: 0;
    flex-wrap: wrap;
    max-width: $s-desk--massive*4;
    margin-left: auto;
    margin-right: auto;

    @include tb{
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }

    @include lg {
      border-bottom: inherit;
      // align-items: center;
    }

    .img--avatar{
      max-width: $s-mob--biggest*3;
      flex: 1;
      height: auto;
      margin-bottom: $s-mob--medium;

      @include tb{
        margin-bottom: 0;
        max-width: $s-tab--biggest;
      }
      @include lg{
        max-width: $s-desk--bigger;

      }
      @include xl{
        max-width: $s-desk--biggest;

      }
      @include xxl{
        max-width: $s-desk--biggest * 1.5;
      }
    }

    figcaption{
      border-bottom: 1px solid $c-black;

      @include tb{
        max-width: 60%;
        margin-top: 0;
      }

      @include lg{
      }
      .tem-group__quote{
        font-weight: $w-bold;
        font-size: $s-mob--small;
        padding-bottom: $s-mob--small;

        @include tb{
          font-size: $s-tab--smallest;
          padding-bottom: $s-mob--small;
        }
        @include lg{
          padding-bottom: $s-desk--smaller;
          font-size: $s-desk--smaller;
        }
        @include xl{
          padding-bottom: $s-desk--smaller;
          font-size: $s-desk--smaller;
        }
        @include xxl{
          font-size: $s-desk--small;
        }
      }
      p{
        margin: 0;
        padding-bottom: $s-mob--smallest;

        @include tb{
          padding-bottom: $s-mob--smallest;
          font-size: $s-tab--tiny;
          width: 100%;
        }
        @include lg{
          padding-bottom: $s-mob--smallest;
          font-size: $s-desk--smallest;
        }

        @include xl{
          padding-bottom: $s-mob--smaller;
          font-size: $s-desk--smallest;
        }
      }
    }
  }
}

    // .list--tem{
    //   margin-top: 0 ;
    // }
    // .tem-group{
    //   border-bottom: 1px solid $c-black;
    //   margin: $s-mob--bigger 0 $s-mob--smallest;

    //   &:nth-child(1){
    //     margin-top: 0;
    //     padding-top: $s-mob--bigger;

    //   }
    //   &:nth-last-child(1){
    //     margin-bottom: 0;

    //   }

    //   &__quote{
    //     font-weight: 700;
    //     font-size: $s-mob--small;
    //     margin: $s-mob--medium 0 $s-mob--small ;
    //   }

    //   .img--avatar{
    //     display: block;
    //     margin-left: auto;
    //     margin-right: auto;
    //   }
    // }

</style>
