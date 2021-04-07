<template>
  <header class="section section--header">
    <vIcon />
    <nav class="nav">
      <router-link class="nav__link" to="/" exact>
        Accueil
      </router-link>
      <router-link class="nav__link" to="/tool" exact>
        Corriger mon texte
      </router-link>
    </nav>
  </header>
</template>

<script>
import vIcon from '@/components/vIcon.vue'
export default {
  components: {
    vIcon
  }
}
</script>

<style lang="scss">

.section--header{
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  max-width: calc(100% - #{$s-mob--smaller} * 2);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  margin-top: $s-mob--bigger;

  @include sm{
    max-width: calc(100% - #{$s-mob--medium} * 2);
  }
  @include tb{
    margin-top: $s-tab--medium;
    max-width: 80%;

  }

  @include lg{
    margin-top: $s-desk--medium-small;
    max-width: 70%;

  }

  .nav{
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: $s-mob--smaller;

    @include tb{
      font-size: $s-tab--smallest;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      border-bottom: 1px solid $c-black;
      padding-bottom: $s-tab--smallest;
      padding-left: $s-tab--small;
    }

    @include lg{
      font-size: $s-desk--smallest;

    }

    &__link{
      text-transform: uppercase;
      letter-spacing: $ls-small;
      transition: $t-smooth;
      box-shadow: 0 0 0 0.0001px inset $c-black ;

      &--active{
        font-weight: 700;
      }

      &:nth-child(1){
        margin-bottom: $s-mob--smallest/2;
        box-shadow: inherit;

        @include sm{
          margin-bottom: $s-mob--smallest;
        }

        @include tb{
          margin-bottom: 0;
        }

        &:hover{
          padding: 0 $s-mob--smaller;
          background-color: $c-black;
          box-shadow: inherit;

          @include tb{
            padding: 0 $s-tab--smallest;

          }
          @include lg{
            padding: 0 $s-desk--tiny;

          }
        }
      }
      &:nth-last-child(1){
        border: 1px solid $c-black;
        padding:  $s-mob--smallest/3;
        white-space: nowrap;

        @include tb{
          margin-left: $s-tab--smallest;
          padding:  $s-tab--tiny/3;
        }

        @include lg{
          margin-left: $s-desk--smallest;
          padding:  $s-desk--tiny/3;
        }

        &:hover{
          padding-left:  $s-mob--smallest;
          padding-right:  $s-mob--smallest;

          @include tb{
            padding-left:  $s-tab--tiny;
            padding-right:  $s-tab--tiny;
          }

          @include lg{
            padding-left:  $s-desk--tiny;
            padding-right:  $s-desk--tiny;
          }

        }
      }

      &:hover{
        transition: $t-fast;
        box-shadow: 250px 0 0 0px inset $c-black ;
        color: $c-white;
      }
    }
  }
}

</style>
