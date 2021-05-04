<template>
  <ul class="list list--other">
    <li v-for="other in others" :key="other" class="list--other__el">
      <a :href="other.link" class="link">
        <h3 class="title title--small" v-html="other.name" />

        <img class="img img--arrow" :src="(`/assets/img/svg/${other.img}`)" alt="flèche directionnelle">
        <!-- <img class="img img--arrow" :src="require(`/assets/img/svg/${other.img}`)" alt="flèche directionnelle"> -->
      </a>
      <p v-html="other.explanation" />
    </li>
  </ul>
</template>

<script>
import others from '@/assets/data/others.json'
export default {
  data () {
    return {
      others: others
    }
  }
}
</script>
<style lang="scss" scoped>
.list--other{
  padding: $s-mob--big 0 ($s-mob--bigger*3);
  @include sm{
    padding: $s-mob--big 0 ($s-mob--biggest*4);
  }
  @include tb{
    padding: $s-tab--big 0 ($s-tab--bigger*3.5);
  }
  @include lg{
    padding: $s-desk--medium 0 ($s-desk--big*3);
  }
  @include xl{
    padding: $s-desk--medium-plus 0 ($s-desk--big*3.5);
  }
  @include xxl{
    padding: $s-desk--medium-big 0 ($s-desk--big*4);
  }
  @include xxxl{
    padding-bottom: $s-desk--big*5;
  }

  .list--other__el{
    margin-top: $s-mob--big;

    @include tb{
      margin-top: $s-tab--big;
    }
    @include lg{
      margin-top: $s-desk--medium;
    }
    @include xl{
      margin-top: $s-desk--medium-plus;
    }
    @include xxl{
      margin-top: $s-desk--medium-big;
    }

    &:nth-child(1){
      margin-top: 0;
    }

    .title,p {
      margin: 0;
      padding: 0;
    }

    .title{
      max-width: min-content;
    }

    .link{
      display: flex;
      align-items: center;
      border-bottom: 1px solid $c-white;
      justify-content: space-between;
      margin-bottom: $s-mob--smaller/2;

      @include tb{
        margin-bottom: $s-tab--smallest;
        display: -webkit-inline-flex;
        display: inline-flex;
        display: -ms-inline-flexbox;
        justify-content: flex-start;
      }

      @include lg{
        margin-bottom: $s-desk--smaller;
      }

      .img, .title{
        transition: $t-smooth;
        margin-bottom: $s-mob--small;
        // flex-shrink: 0;

        @include tb{
          margin-bottom: $s-tab--small;
        }
        @include lg{
          margin-bottom: $s-desk--smaller;
        }
      }

      &:hover{

        .img{
          @include tb{
            margin-left: $s-tab--medium;
          }

          @include lg{
            margin-left: $s-desk--medium-plus;
          }

          @include xl{
            margin-left: $s-desk--medium-big;
          }
        }
      }
    }

    .img{
      width: 100vw;
      height: 100%;
      max-width: $s-mob--big;
      padding: 0;
      flex-shrink: 0;
      min-width: 0;

      @include tb{
        max-width: $s-tab--big;
        margin-left: $s-tab--small;

      }
      @include lg{
        max-width: $s-desk--medium-plus;
        margin-left: $s-desk--medium-small;

      }
      @include xl{
        max-width: $s-desk--medium-plus;
        margin-left: $s-desk--medium;

      }

      @include xxl{
        max-width: $s-desk--medium-big;
      }
    }
  }
}

</style>
