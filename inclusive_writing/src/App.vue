<template>
  <div>
      <Header/>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="in-out">
          <component :is="Component" />
        </transition>
      </router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

  export default {
    name: 'Main',
    components: {
      Header
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
}

.fade-enter-from, .fade-leave-to{
  opacity: 0;
  transform: translateY(40vh);
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

.fade-enter-active, .fade-leave-active{
  transition: $t-smooth;
}

.section{
  padding: 0 $s-mob--smaller;
  box-sizing: content-box;

  &--white{
    margin-left: $s-mob--smaller;
    border-left: 1px solid $c-black;
  }

  &--dark{
    background-color : $c-black;
    color: $c-white;
    padding-left: $s-mob--smaller;
  }
}

.title{
  font-family: 'font1', serif;
  font-weight: inherit;
  line-height: 90%;
  margin: 0;
  letter-spacing: $ls--small;
  -webkit-text-stroke: 0.30px;

  &--big{
    font-size: $s-mob--big;
  }

  &--medium{
    font-size: $s-mob--medium;
    -webkit-text-stroke: 1px;
    letter-spacing: $ls--small;
    text-transform: uppercase;
    padding: $s-mob--bigger 0 $s-mob--medium ;
  }

  &--small{
    font-size: $s-mob--small;
    margin: ($s-mob--medium-plus ) 0 $s-mob--small ;
  }
}

p{
  font-size: $s-mob--smaller;
  line-height: 170%;
  letter-spacing: $ls--smaller;
  margin: 0 0 $s-mob--smaller 0;
}

a {
  color: inherit;
  text-decoration: none;
}

.list{
  list-style: none;
  padding: 0;
}

.no-break{
  white-space: nowrap;
}

.hide{
  display: none;
}
</style>
