<template>
  <div class="copyright">
    <a href="https://www.tomdelfosse.be/">
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        class="img img--copy"
      >
        <path d="M0.349609 0V4.22263H3.69263L6.13074 0H0.349609Z" fill="#ECE9E5" />
        <path d="M9.64905 0L7.21963 4.20762L7.21094 4.22263V12.1423L14.221 0H9.64905Z" fill="#ECE9E5" />
        <path d="M7.21094 19H11.7837V10.3105L7.21094 18.2303V19Z" fill="#ECE9E5" />
        <path d="M15.2969 4.22263H18.6517V0H17.735L15.2969 4.22263Z" fill="#ECE9E5" />
      </svg>
    </a>

    <small><a href="https://www.tomdelfosse.be/">©&nbsp;Tom&nbsp;Delfosse — DWM HEAJ&nbsp;2021</a></small>
  </div>
</template>
<style lang="scss">
.copyright{
  display: flex;
  border-top: 1px solid $c-white;
  margin: $s-mob--massive 0 0;
  padding: $s-mob--smaller 0 $s-mob--big;

  @include tb{
    margin: $s-tab--biggest 0 0;
    padding: $s-tab--small 0 $s-tab--medium;
  }
  @include lg{
    margin: $s-desk--biggest 0 0;
    padding: $s-desk--small 0 $s-desk--medium;
  }

  .img--copy {
    border: 1px solid $c-white;
    padding: $s-mob--smallest/3;
    margin-right: $s-mob--smaller;
    transition: $t-smooth;

    @include tb{
      padding: $s-tab--smallest/3;
      margin-right: $s-tab--smaller;
    }
    @include lg{
      padding: $s-desk--smallest/3;
      margin-right: $s-desk--smaller;
    }
    &:hover{
      transition: $t-fast;
    }
  }

  small{
    font-size: $s-mob--smallest;
    transition: $t-smooth;
    vertical-align: middle;
    max-width: 50%;

    @include tb{
      max-width: inherit;
      font-size: $s-tab--tiny;
    }

    @include lg{
      font-size: $s-desk--smallest;
    }

    &:hover{
      transition: $t-fast;
      background-color: $c-white;
      color: $c-black;
    }
  }
}
</style>
