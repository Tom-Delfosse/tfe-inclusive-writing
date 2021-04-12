<template>
  <div>
    <vHeader />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Grain />
  </div>
</template>

<script>
import vHeader from '@/components/vHeader.vue'
import Grain from '@/components/Grain.vue'

export default {
  components: {
    vHeader,
    Grain
  }
}
</script>

<style lang="scss">
body{
  background-color: $c-white;
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $c-black;
  margin: 0;
  padding: 0;
  border: 0;
  scroll-behavior: smooth;
}

.fade-enter-from, .fade-leave-to{
  opacity: 0;
  transform: translateY(40vh);
}

.fade-enter-active, .fade-leave-active{
  transition: $t-smooth;
}

// .fade-enter{
//   &-from, &-to, &-active{
//     background-color: green;
//   }
// }

// .fade-leave{
//   &-from, &-to, &-active{
//     background-color: red;
//   }
// }

.list{
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.img{
  &--bg, &--deco{
    width: 100%;

      @include sm{
        stroke-width: 0.5px;
      }

      @include lg{
        stroke-width: 0.3px;
      }
  }
}

.section{
  padding: 0 $s-mob--smaller;

  @include sm{
    padding: 0 $s-mob--medium;
  }

  @include tb{
    padding: 0 10%;
  }

  @include lg{
    padding: 0 15%;
  }

  &__content{
    border-left: 1px solid $c-black;
    border-right: 1px solid $c-black;
    padding: 0 $s-mob--smaller;

      @include sm{
      padding: 0 $s-mob--small;
    }

    @include tb{
      padding: 0 $s-tab--smaller;
    }

    @include lg{
      padding: 0 $s-desk--smaller;
    }

    @include xl{
      padding: 0 $s-desk--medium;
    }
    @include xxl{
      padding: 0 $s-desk--medium-plus;

    }
  }

  &--white{
    background-color: $c-white;
  }

  &--dark{
    background-color: $c-black;
    color: $c-white;

    .section__content{
      border-left: 1px solid $c-white;
      border-right: 1px solid $c-white;
    }
  }

  &--main{
    margin: 0;
    padding: 0;
  }
}

.title{
  font-family: 'font1', serif;
  font-weight: inherit;
  line-height: 95%;
  margin: 0;
  letter-spacing: $ls-small;
  -webkit-text-stroke: 0.25px;

  &--bigger{
    line-height: 90%;
    font-size: $s-mob--big;

    @include sm{
      font-size: $s-mob--bigger;
    }

    @include tb{
      font-size: $s-tab--bigger;
    }

    @include lg{
      font-size: $s-desk--big;
    }

    @include xl{
      font-size: $s-desk--bigger;
    }
  }

  &--big{
    -webkit-text-stroke: 0.8px;
    text-transform: uppercase;
    font-size: $s-mob--medium;

    @include sm{
      font-size: $s-mob--medium-plus;
    }
    @include tb{
      font-size: $s-tab--big;
    }
    @include lg{
      font-size: $s-desk--medium;
    }
    @include xl{
      font-size: $s-desk--medium-avg;
    }
    @include xxl{
      font-size: $s-desk--medium-plus;
    }
  }

  &--medium{
    font-size: $s-mob--medium;
    -webkit-text-stroke: 0.8px;
    text-transform: uppercase;
    padding: $s-mob--bigger 0 $s-mob--medium ;

    @include sm{
      font-size: $s-mob--medium;
    }

    @include tb{
      font-size: $s-tab--medium;
      padding: $s-tab--bigger 0 $s-tab--medium ;
    }

    @include lg{
      font-size: $s-desk--medium-small;
      padding: $s-desk--medium-big 0 $s-desk--medium-small ;

    }

    @include xl{
      font-size: $s-desk--medium;
      padding: $s-desk--big 0 $s-desk--medium-small ;
    }

    @include xxl{
      font-size: $s-desk--medium-plus;
    }
  }

  &--small{
    font-size: $s-mob--small;
    padding: calc(#{$s-mob--medium} - #{$s-mob--smaller})0 $s-mob--small ;

    @include tb{
      font-size: $s-tab--small;
      padding: calc(#{$s-tab--big} - #{$s-tab--smaller}) 0 $s-tab--smaller ;
      margin-left: $s-tab--small;
    }

    @include lg{
      font-size: $s-desk--small;
      padding: calc(#{$s-desk--medium-small} - #{$s-desk--smaller}) 0 $s-desk--smaller ;
      margin-left: $s-desk--medium-small;
    }

    @include xl{
      font-size: $s-desk--medium-small;
      padding: calc(#{$s-desk--medium-plus} - #{$s-desk--smaller}) 0 $s-desk--smaller ;
      margin-left: $s-desk--medium-plus;
    }

    @include xxl{
      font-size: $s-desk--medium;
      padding: calc(#{$s-desk--medium-plus} - #{$s-desk--small}) 0 $s-desk--small ;
      margin-left: $s-desk--big;
    }
  }
}

p{
    font-size: $s-mob--smaller;
    letter-spacing: $ls-smaller;
    line-height: 160%;
    margin: 0;
    padding-bottom: $s-mob--smallest;
    margin-left: $s-tab--small;
    max-width: 450px;

    @include tb{
      font-size: $s-tab--smaller;
      font-weight: 300;
      padding-bottom: $s-tab--smaller;
      margin-left: $s-tab--small;
      max-width: 600px;
    }

    @include lg{
      font-size: $s-desk--smallest;
      padding-bottom: $s-desk--smaller;
      margin-left: $s-desk--medium-small;

    }
    @include xl{
      font-size: $s-desk--smaller;
      padding-bottom: $s-desk--small;
      margin-left: $s-desk--medium-plus;
      max-width: 650px;
    }

    @include xxl{
      margin-left: $s-desk--big;
    }
}

.no-break{
  white-space: nowrap;
}

.hide{
  display: none;
  @include tb{
    display: inline;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

.grain{

}

</style>
