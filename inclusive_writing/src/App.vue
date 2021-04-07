<template>
  <div>
      <vHeader/>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
  </div>
</template>

<script>
import vHeader from '@/components/vHeader.vue'

  export default {
    name: 'Main',
    components: {
      vHeader
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
}

.img{
  // width: 100%;

  &--bg{
    width: 100%;
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

  @include xxl{
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
  line-height: 90%;
  margin: 0;
  letter-spacing: $ls-small;
  -webkit-text-stroke: 0.25px;

  &--big{
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

  &--medium{
    font-size: $s-mob--medium;
    -webkit-text-stroke: 0.8px;
    text-transform: uppercase;
    // padding: $s-mob--bigger 0 $s-mob--medium ;
    padding: 0;


    @include sm{
      font-size: $s-mob--medium;
    }

    @include tb{
      font-size: $s-tab--big;
    }

    @include lg{
      font-size: $s-desk--medium-small;
    }

    @include xl{
      font-size: $s-desk--medium;
    }

    @include xxl{
      font-size: $s-desk--medium-plus;
    }
  }

  &--small{
    font-size: $s-mob--small;
    // padding: ($s-mob--medium-plus ) 0 $s-mob--small ;
    padding: 0;

    @include tb{
      font-size: $s-tab--small;
    }

    @include lg{
      font-size: $s-desk--medium-small;
    }

    
    @include xl{
      font-size: $s-desk--small;
    }

    @include xxl{
      font-size: $s-desk--medium;
    }
  }
}

p{
    font-size: $s-mob--smaller;
    letter-spacing: $ls-smaller;
    line-height: 160%;

    @include tb{
      font-size: $s-tab--smaller;
      font-weight: 300;
    }
    @include lg{
      font-size: $s-desk--smallest;
    }
    @include xl{
      font-size: $s-desk--smaller;
    }
}

.no-break{
  white-space: nowrap;
}

// .section{
//   // padding: 0 $s-mob--smaller;
//   // box-sizing: content-box;
//   background-color: red;

//   &--white{
//     margin-left: $s-mob--smaller;
//     margin-right: $s-mob--smaller;
//     border-left: 1px solid $c-black;
//     border-right: 1px solid $c-black;
//     background-color: $c-white;

//     p, .title{
//       &::selection{
//         background-color: #2c2c2ca4;
//         color: $c-white;
//       }
//     }
//   }

//   &--dark{
//     background-color : $c-black;
//     color: $c-white;
//     padding-left: $s-mob--smaller;
//     padding-right: $s-mob--smaller;

//     &__content{
//       padding: 0 $s-mob--smaller;
//     padding-top: $s-mob--big;
//     border-left: 1px solid $c-white;
//     border-right: 1px solid $c-white;


//   }

//       p, .title{
//         &::selection{
//         background-color: #ece9e5c4;
//         color: $c-black; 
//       }
//     }
//   }
// }



// p{
//   font-size: $s-mob--smaller;
//   line-height: 170%;
//   letter-spacing: $ls-smaller;
//   padding: 0 0 $s-mob--smaller 0;
//   margin: 0;
// }

a {
  color: inherit;
  text-decoration: none;
}

// .list{
//   list-style: none;
//   padding: 0;
// }

// .no-break{
//   white-space: nowrap;
// }

// .hide{
//   display: none;
// }
</style>
