<template>
  <button v-bind="$attrs" />
</template>

<style lang="scss" scoped>
  .btn {
    display: block;
    background-color: inherit;
    font-family: 'Source Sans Pro', sans-serif;
    outline: 0;
    cursor: pointer;
    border: 0;
    font-size: $s-mob--smaller;
    letter-spacing: $ls-smaller;
    line-height: 160%;
    font-weight: $w-light;
    transition: $t-smooth;
    text-indent: 400px;
    white-space: nowrap;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
    background-repeat: no-repeat;
    background-image: url('/assets/img/svg/copy.svg');
    width: $s-mob--medium;
    height: $s-mob--medium;

    @include tb{
      font-size: $s-tab--smaller;
      width: inherit;
      height: inherit;
      overflow: inherit;
      text-indent: inherit;
    }

    @include lg{
      font-size: $s-desk--smallest;
      margin-top: $s-desk--smallest;

      &:nth-child(1){
        margin-top: 0;
      }
    }

    @include xl{
      font-size: $s-desk--smaller;
      margin-top: $s-desk--smaller;
    }

    &:nth-last-of-type(2){
      &::after{
        content: none;

        @include lg{
          content: '';
          display: block;
          height: 1px;
          width: 100%;
          background-color: $c-black;
          margin-top: $s-desk--smallest;
          margin-bottom: -1px;
          transition: $t-smooth;
          transform: inherit;
          }

        @include xl{
        margin-top: $s-desk--smaller;
        }
      }
    }

    &:hover{
      transform: scale(1.1);
      transition: $t-fast;

      @include tb{
        transform: inherit;
        margin-left: $s-mob--smaller;

        &::after{
          transition: $t-fast;
          margin-left: -$s-mob--smaller;
        }
      }
    }

    &--disable{
      opacity: 0;
      pointer-events: none;
    }

    &::before{
      content: none;
      @include tb{
        width: $s-tab--smaller;
        height: $s-tab--smaller;
        transition: $t-smooth;
        content: '';
        display: inline-block;
        vertical-align: middle;
        background-image: url('/assets/img/svg/copy.svg');
        background-repeat: no-repeat;
        margin-right: $s-tab--smallest/2;
      }

      @include lg{
        width: $s-desk--smaller;
        height: $s-desk--smaller;
        margin-right: $s-desk--smallest/2;
      }

      @include xl{
        width: $s-desk--small;
        height: $s-desk--small;
        margin-right: $s-desk--smallest/2;
      }

      @include xxl{
        margin-right: $s-desk--smallest;
      }
  }

    &--undo{
      background-image: url('/assets/img/svg/arrow-rewind.svg');

    &::before{
      background-image: url('/assets/img/svg/arrow-rewind.svg');
    }

    @include tb{
      background-image: inherit;
    }
  }

    &--erase{
      background-image: url('/assets/img/svg/dustbin.svg');

    &::before{
      background-image: url('/assets/img/svg/dustbin.svg');
    }

    @include tb{
      background-image: inherit;
    }
  }

    &--cancel{
      background-image: url('/assets/img/svg/cross.svg');

    &::before{
      background-image: url('/assets/img/svg/cross.svg');
    }

    @include tb{
      background-image: inherit;
    }
  }
    &--copy{
      background-image: url('/assets/img/svg/copy.svg');

    &::before{
      background-image: url('/assets/img/svg/copy.svg');
    }

    @include tb{
      background-image: inherit;
    }
  }

  &--convert{
    background-color: $c-black;
    color: $c-white;
    font-family: 'Source Sans Pro', sans-serif;
    color: $c-white;
    font-weight: $w-bold;
    text-indent: inherit;
    overflow: inherit;
    width: auto;
    background-image: inherit;
    height: inherit;
    margin-top: $s-mob--smallest;
    padding-left:  $s-mob--smallest/2;
    padding-right:  $s-mob--smallest/2;

    @include tb{
      margin-top: $s-tab--smaller;
      padding-left:  $s-tab--smallest/2;
      padding-right:  $s-tab--smallest/2;
    }

    @include lg{
      margin-top: $s-desk--smallest;
      padding-left:  $s-desk--smallest/2;
      padding-right:  $s-desk--smallest/2;
    }

    @include xl{
      margin-top: $s-desk--smaller;
    }

    &::before{
      content: none;
    }
  }
}

</style>
