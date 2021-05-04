<template>
  <ul class="list list--copy">
    <li class="list--copy__el">
      <small>Merci à <a href="http://www.lexique.org/"><span class="underline">Lexique</span></a>, une base de donnée réalisée par Boris&nbsp;New et Christophe&nbsp;Pallier, regroupant des milliers de mots venant de la langue&nbsp;française.</small>
    </li>
    <li class="list--copy__el">
      <a href="https://www.tomdelfosse.be/" class="img img--copy">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path d="M0.349609 0V4.22263H3.69263L6.13074 0H0.349609Z" fill="#ECE9E5" />
          <path d="M9.64905 0L7.21963 4.20762L7.21094 4.22263V12.1423L14.221 0H9.64905Z" fill="#ECE9E5" />
          <path d="M7.21094 19H11.7837V10.3105L7.21094 18.2303V19Z" fill="#ECE9E5" />
          <path d="M15.2969 4.22263H18.6517V0H17.735L15.2969 4.22263Z" fill="#ECE9E5" />
        </svg>
      </a>
      <small><a href="https://www.tomdelfosse.be/">©&nbsp;Tom&nbsp;Delfosse — DWM HEAJ&nbsp;2021</a></small>
    </li>
  </ul>
</template>
<style lang="scss">
.list--copy{
  border-top: 1px solid $c-white;
  margin: $s-mob--massive 0 0;
  padding: $s-mob--smaller 0 $s-mob--big;
  align-items: flex-start;

  @include tb{
    margin: $s-tab--biggest 0 0;
    padding: $s-tab--small 0 $s-tab--medium;
  }
  @include lg{
    margin: $s-desk--biggest 0 0;
    padding: $s-desk--small 0 $s-desk--medium;
  }

  &__el{
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    margin-bottom: $s-mob--smallest;
    max-width: 60%;
    line-height: 170%;
    font-weight: $w-reg;

    @include sm{
      margin-bottom: $s-mob--smaller;
    }
    @include tb{
      margin-bottom: $s-tab--smaller;
      max-width: 70%;
    }

    @include lg{
      margin-bottom: $s-desk--smallest;
      max-width: 70%;
    }

    @include xl{
      margin-bottom: $s-desk--smaller;
    }

    &:nth-child(1){
      font-weight: $w-light;
      max-width: 100%;

      @include sm{
        max-width: 80%;
      }

      @include lg{
        max-width: 75%;
      }

      @include xxl{
        max-width: 70%;
      }
    }

    &:nth-last-child(1){
      margin-bottom: 0;
      line-height: 100%;
    }
  }

  .underline{
    text-decoration: underline;
  }

  .img--copy {
    margin-right: $s-mob--smallest;
    transition: $t-smooth;
    border: 1px solid $c-white;

    @include sm{
      margin-right: $s-mob--smaller;
    }
    @include tb{
      margin-right: $s-tab--smallest;
    }
    @include lg{
      margin-right: $s-desk--tiny;
    }

    @include xl{
      margin-right: $s-desk--smallest;
    }

    &:hover{
      transition: $t-fast;
      background-color: $c-white;
      svg{
        // border: none;
        fill: $c-white;
        path{
          // stroke: $c-white;
          transition: $t-fast;
          fill: $c-black;
        }
      }
    }

    svg{
    padding: $s-mob--smallest/3;
    display: block;

    @include sm{
      padding: $s-mob--smallest/2;
    }
    @include tb{
      padding: $s-tab--smallest/3;
    }

    @include lg{
      padding: $s-desk--smallest/3;
    }
    }

  }

  small{
    display: inline-block;
    font-size: $s-mob--smallest;
    transition: $t-smooth;

    @include tb{
      max-width: inherit;
      font-size: $s-tab--tiny;
    }

    @include lg{
      font-size: $s-desk--smallest;
    }

    a{
      width: 100%;
      height: 100%;

      &:hover{
        transition: $t-fast;
        background-color: $c-white;
        color: $c-black;
      }
    }
  }
}
</style>
