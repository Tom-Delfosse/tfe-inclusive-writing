<template>
    <div class="CTA-container">
        <svg width="192" height="192" viewBox="0 0 192 192" fill="none">
            <router-link class="CTA-btn" to="/tool" exact>
                <circle  class="circle circle--full" cx="96" cy="96" r="82.5" fill="currentColor"/>
                <circle class="circle circle--stroke" cx="96" cy="96" r="95.5" stroke="currentColor"/>
            </router-link>
        </svg>
        <p>Corriger mon texte</p>
    </div>
</template>


<style lang="scss" scoped>

.CTA-container{
  width: calc(100% + (#{$s-mob--smaller} * 4));
  left: -$s-mob--smaller*2;
  position: relative;
  border-top: 1px solid $c-white;
  border-bottom: 1px solid $c-white;

  &:hover{
    svg{
    transform: translateX(-50%) scale(1.1) ;
      .circle--stroke{
          transition: $t-fast;
          stroke: $c-black;
      }
    }
  }

  svg{
  position: relative;
  margin: $s-mob--medium auto;
  left: 50%;
  transform: translateX(-50%);
  transition: $t-smooth;

  .circle{
    transition: $t-smooth;
    transform-origin: center;
      &--full{
        fill: $c-white;
      }

      &--stroke{
        stroke: $c-white;
      }
    }
  }

  p{
    position: absolute;
    top: 50%;
    text-align: center;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $c-black;
    width: 50%;
    max-width: 120px;
    margin: 0;
    text-transform: uppercase;
    font-weight: $w-bold;
    font-size: $s-mob--small;
    pointer-events: none;
  }


  &--dark {
    border-top: 1px solid $c-black;
    // margin-top: $s-mob--smaller ;

    &::before{
      content: " ";
      display: block;
      border-bottom: 1px solid $c-black;
      border-top: 1px solid $c-black;
      margin-top: $s-mob--smaller;
      width: auto;
      height: $s-mob--smaller;
    }

    &::after{
      content: " ";
      display: block;
      border-top: 1px solid $c-black;
      margin-top: $s-mob--smaller;
      width: auto;
      height: $s-mob--smaller;
    }
    &:hover{
      svg{
        transform: translateX(-50%) scale(1.1) ;
        .circle--stroke{
          transition: $t-fast;
          stroke: $c-white;
        }
      }
    }
    p{
      color: $c-white;
    }
    a{
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