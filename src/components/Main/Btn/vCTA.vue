<template>
  <div class="CTA-container">
    <svg
      width="192"
      height="192"
      viewBox="0 0 192 192"
      fill="none"
    >
      <router-link class="CTA-btn" to="/tool" exact>
        <circle
          class="circle circle--full"
          cx="96"
          cy="96"
          r="82.5"
          fill="currentColor"
        />
        <circle
          class="circle circle--stroke"
          cx="96"
          cy="96"
          r="95.5"
          stroke="currentColor"
        />
      </router-link>
    </svg>
    <p>Corriger mon&nbsp;texte</p>
  </div>
</template>

<style lang="scss" scoped>
.CTA-container{
  z-index: 1;
  width: 100%;
  position: relative;
  border-top: 1px solid $c-white;
  border-bottom: 1px solid $c-white;
  left: -$s-mob--smaller*2;
  width: calc(100% + (#{$s-mob--smaller} * 4));
  padding: $s-mob--medium 0;

  @include sm{
    left: -$s-mob--medium - $s-mob--small;
    width: calc(100% + (#{$s-mob--medium} * 2 + #{$s-mob--small} *2));
  }

  @include tb{
    left: calc(-10vw - (#{$s-tab--smaller}));
    padding: $s-tab--small 0;
    width: calc(100% + 20vw - 2px + (#{$s-tab--smaller} * 2));
  }

  @include lg{
    left: calc(-15vw - (#{$s-desk--smaller}));
    padding: $s-desk--small 0;
    width: calc(100% + 30vw - 2px + (#{$s-desk--smaller} * 2));
  }

  @include xl{
    left: calc(-15vw - (#{$s-desk--medium}));
    padding: $s-desk--medium-small 0;
    width: calc(100% + 30vw - 2px + (#{$s-desk--medium} * 2));
  }

  @include xxl{
    left: calc(-15vw - (#{$s-desk--medium-plus}));
    width: calc(100% + 30vw - 2px + (#{$s-desk--medium-plus} * 2));
  }

  svg{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    transition: $t-smooth;
    width: 100%;
    height: 100%;
    max-width: 200px;

    @include tb{
      max-width: 250px;
    }

    @include lg{
      max-width: 250px;
    }

    @include xl{
      max-width: 350px;
    }

    @include xxl{
      max-width: 350px;
    }

    &:hover{
      transform: translateX(-50%) scale(1.1) ;

      .circle--stroke{
          transition: $t-fast;
          stroke: $c-black;
          pointer-events: none;
      }
    }

    .circle{

      &--stroke{
        stroke: $c-white;
      }

      &--full{
        fill: $c-white;
        cursor: pointer;
      }
    }

  }
  .CTA-btn{
    width: 100%;
    height: 100%;
    cursor: inherit;
  }

  p{
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    color: $c-black;
    width: min-content;
    margin: 0;
    text-transform: uppercase;
    font-weight: $w-bold;
    font-size: $s-mob--small;
    pointer-events: none;
    padding: 0;

    @include tb{
      font-size: $s-tab--small;
    }
    @include lg{
      font-size: $s-desk--smaller;
    }

    @include xl{
      font-size: $s-desk--small;
    }

    @include xxl{
      // font-size: $s-desk--medium-small;
    }
  }

  &--dark {
    border-top: 1px solid $c-black;
    padding: 0;
    border-bottom: inherit;

    p{
      top: calc(50% + #{$s-mob--smaller/2});

      @include tb{
        top: calc(50% + #{$s-tab--small/2});
      }
      @include lg{
        top: calc(50% + #{$s-desk--small/2});
      }
    }

    &::before{
      content: " ";
      display: block;
      border-bottom: 1px solid $c-black;
      border-top: 1px solid $c-black;
      width: auto;
      margin-top: $s-mob--smaller;
      height: $s-mob--smaller;
      margin-bottom: $s-mob--medium;

      @include tb{
        margin-top: $s-tab--small;
        margin-bottom: $s-tab--small;
        height: $s-tab--small;
      }
      @include lg{
        margin-top: $s-desk--small;
        margin-bottom: $s-desk--small;
        height: $s-desk--small;
      }
    }

    &::after{
      content: " ";
      display: block;
      border-top: 1px solid $c-black;
      width: auto;
      margin-top: $s-mob--medium;
      height: $s-mob--smaller;

      @include tb{
        margin-top: $s-tab--small;
        height: $s-tab--small;
      }
      @include lg{
        margin-top: $s-desk--small;
        height: $s-desk--small;
      }
    }

    p{
      color: $c-white;
    }
    svg{
      &:hover{
        transform: translateX(-50%) scale(1.1) ;
        .circle--stroke{
          transition: $t-fast;
          stroke: $c-white;
        }
      }
      .circle{
        &--full{
          fill: $c-black;
        }

        &--stroke{
          stroke: $c-black;
        }
      }
    }
  }
}
</style>
