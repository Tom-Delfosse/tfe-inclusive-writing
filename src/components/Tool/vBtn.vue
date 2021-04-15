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
    text-indent: 190%;
    white-space: nowrap;
    overflow: hidden;
    background-repeat: no-repeat;
    background-image: url('/assets/img/svg/copy.svg');
    width: $s-mob--medium;
    height: $s-mob--medium;

    &:hover{
      transform: scale(1.1);
      transition: $t-fast;

      @include lg{
        transform: inherit;
        // border-bottom: 1px solid $c-black;
        &::before{
          padding-right: $s-desk--smaller;
          
        }
      }
    }

    @include tb{
      font-size: $s-tab--smaller;
      width: inherit;
      height: inherit;
      // background-image: inherit;
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

    &--disable{
      opacity: 0;
      pointer-events: none;
    }

    &::before{
      content: none;
      @include tb{
        width: $s-tab--smaller;
        height: $s-tab--smaller;
        content: '';
        display: inline-block;
        vertical-align: middle;
        background-image: url('/assets/img/svg/copy.svg');
        background-repeat: no-repeat;
        margin-right: $s-tab--smallest/4;
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
    margin-top: $s-mob--smaller;

    &::before{
      content: none;
    }
  }
}

</style>
