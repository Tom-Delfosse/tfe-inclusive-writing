<template>
  <footer class="section section--dark section--footer">
    <div class="footer-nav">
      <svg width="11" height="9" viewBox="0 0 11 9" fill="none" class="img img--icon">
        <router-link to="/">
          <path d="M8.55957 5.41C8.4148 6.0532 8.11886 6.65265 7.69628 7.1587C7.2737 7.66475 6.73664 8.06284 6.12957 8.32H5.84957C5.7703 8.23111 5.71135 8.12603 5.67681 8.01205C5.64227 7.89807 5.63298 7.77793 5.64957 7.66V0.88C5.63444 0.766688 5.64261 0.651481 5.67356 0.541434C5.70451 0.431387 5.7576 0.328815 5.82957 0.24H6.12957C6.73808 0.500469 7.27585 0.902056 7.6984 1.41155C8.12095 1.92104 8.41614 2.52381 8.55957 3.17H8.63957L9.35957 2C8.78814 1.25119 8.0194 0.676366 7.13957 0.34C6.72241 0.141694 6.27072 0.0262261 5.80957 0L5.28957 0C4.37092 0.00295899 3.47634 0.294034 2.73184 0.832226C1.98734 1.37042 1.43044 2.12861 1.13957 3C1.02439 3.41978 0.977122 3.85528 0.999569 4.29C0.982376 4.70807 1.0296 5.12629 1.13957 5.53C1.42912 6.40221 1.98569 7.16125 2.73048 7.69965C3.47527 8.23806 4.37055 8.52855 5.28957 8.53C5.45275 8.54001 5.61639 8.54001 5.77957 8.53C6.23942 8.51031 6.69109 8.40164 7.10957 8.21C7.99074 7.89049 8.76847 7.33743 9.35957 6.61L8.63957 5.39L8.55957 5.41ZM1.99957 4.39C1.99957 4.39 1.99957 4.32 1.99957 4.29C1.99957 4.26 1.99957 4.23 1.99957 4.19C1.98426 3.3666 2.23338 2.55999 2.71035 1.88863C3.18733 1.21727 3.867 0.716547 4.64957 0.46C4.68599 0.596936 4.70282 0.738341 4.69957 0.88V7.68C4.70666 7.8291 4.68632 7.97824 4.63957 8.12C3.85887 7.86171 3.18138 7.36025 2.70632 6.68904C2.23126 6.01784 1.98358 5.21216 1.99957 4.39V4.39Z" fill="currentColor"/>
          <path d="M9.74938 3.8999C9.65216 3.91693 9.56256 3.96351 9.49277 4.03329C9.42298 4.10308 9.3764 4.19269 9.35938 4.2899C9.3764 4.38712 9.42298 4.47672 9.49277 4.54651C9.56256 4.6163 9.65216 4.66288 9.74938 4.6799C9.84659 4.66288 9.93619 4.6163 10.006 4.54651C10.0758 4.47672 10.1223 4.38712 10.1394 4.2899C10.1223 4.19269 10.0758 4.10308 10.006 4.03329C9.93619 3.96351 9.84659 3.91693 9.74938 3.8999V3.8999Z" fill="currentColor"/>
        </router-link>
      </svg>

      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" class="btn btn--scroll-down" v-on:click="scrollUp">
      <circle class="circle circle--full" cx="40" cy="40" r="39.5" stroke="#ECE9E5" fill="#2C2C2C"/>
      <path transform="rotate(180)" transform-origin="center" class="path" d="M53.66 35.31L43.18 51.37L45.48 54.65H40C40 54.65 28.36 38.28 26.27 35.31C24.2846 32.558 21.8224 30.1839 19 28.3L19 28H29.69V28.3C28 29.3 28.5 30.63 30.46 33.41L42.9 51L53.1 35.31C55.34 31.88 55.69 30.02 52.68 28.31V28H61V28.3C57.9755 29.9451 55.4424 32.3643 53.66 35.31Z" fill="#ECE9E5"/>
      </svg>
    </div>
    <div class="links">
      <h2 class="title title--medium">Liens externes</h2>

      <ul class="list list--links">
        <li class="list--links__el">Case studies</li>
        <li class="list--links__el"><a>&ndash;&nbsp;One last Ride&nbsp;·&nbsp;[1/4]&#8239;;</a></li>
        <li class="list--links__el"><a>&ndash;&nbsp;Deep Down We Go&nbsp;·&nbsp;[2/4]&#8239;;</a></li>
        <li class="list--links__el"><a>&ndash;&nbsp;The Belly of the Beast&nbsp;·&nbsp;[3/4]&#8239;;</a></li>
        <li class="list--links__el"><a>&ndash;&nbsp;The Clock is&nbsp;Ticking&nbsp;·&nbsp;[4/4].</a></li>
      </ul>
      <ul class="list list--links">
        <li class="list--links__el">Divers</li>
        <li class="list--links__el"><a>&ndash;&nbsp;Time Sheet&#8239;;</a></li>
        <li class="list--links__el"><a>&ndash;&nbsp;Bibliographie / Sources&#8239;;</a></li>
        <li class="list--links__el"><a>&ndash;&nbsp;Repository Github.</a></li>
      </ul>
    </div>

    <div class="copyright">
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" class="img img--copy">
        <path d="M0.349609 0V4.22263H3.69263L6.13074 0H0.349609Z" fill="#ECE9E5"/>
        <path d="M9.64905 0L7.21963 4.20762L7.21094 4.22263V12.1423L14.221 0H9.64905Z" fill="#ECE9E5"/>
        <path d="M7.21094 19H11.7837V10.3105L7.21094 18.2303V19Z" fill="#ECE9E5"/>
        <path d="M15.2969 4.22263H18.6517V0H17.735L15.2969 4.22263Z" fill="#ECE9E5"/>
      </svg>

      <small>©&nbsp;Tom&nbsp;Delfosse — DWM HEAJ&nbsp;2021</small>
    </div>

    <svg class="img img--deco" width="173" height="132" viewBox="0 0 173 132" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M173 6.56021V131H1.5C1.76948 58.8807 60.3165 0.5 132 0.5C146.265 0.5 159.535 2.62328 173 6.56021Z"/>
    </svg>
  </footer>    
</template>

<script>
// import zenscroll from "zenscroll"

export default {
  }
  // methods: {
  //   scrollDown : zenscroll.to(document.querySelector(".section--about"))
  //   }
  
</script>

<style lang="scss">

.section--footer{
    padding-bottom: $s-mob--smaller;
    margin-bottom: $s-mob--small;
    position: relative;

  .footer-nav{
    padding: $s-mob--medium-plus 0 $s-mob--medium;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

  .btn--scroll-down{
    flex-grow: 1;
    width: 100%;
    max-width: $s-mob--bigger;
    margin: 0;

    .circle, .path{
      transition: $t-smooth;
    }

    &:hover{
      .circle, .path{
        transition: $t-fast;
    }
      .circle{
        fill: $c-white;
      }

      .path{
        fill: $c-black;
      }
    }
  }
}

.list--links{
  border-left: 1px solid $c-white;
  padding: 0 0 0 $s-mob--smaller;
  margin-bottom: $s-mob--medium-plus;

    &:nth-last-child(1){
      margin-bottom: $s-mob--massive;
    }

    &__el{
      margin-bottom: $s-mob--smaller;
      cursor: pointer;
      
      a {
      box-shadow: inset 0 0 0 0.01px $c-white;
      transition: $t-smooth;
      -webkit-backface-visibility: hidden;

      &:hover{
        transition: $t-fast;
        color: $c-black;
        box-shadow: inset 220px 0 0 0 $c-white;
        }
      }

      &:nth-child(1){
        font-weight: 700;
        display: block;
        letter-spacing: $ls--smaller;
        text-transform: uppercase;
        margin-bottom: $s-mob--small;
        cursor: inherit;
      }

      &:nth-last-child(1){
        margin-bottom: inherit;
      }
    }
  }

  .img--deco{
    position: absolute;
    right: 0;
    stroke-width: 0;
    top:inherit;
    bottom: -1px;
    transform: inherit;
  }

  .title{
    border-bottom: 1px solid $c-white;
    padding-bottom: $s-mob--smaller;
    padding-top: 0;
    margin-bottom: $s-mob--medium-plus;
  }

  .img--icon{
    path{
      fill: $c-white;
    }

    &:hover{
      path{
        fill: rgba($color: #000000, $alpha: 0);
        stroke: $c-white;
      }
    }
  }
}

.copyright{
  display: flex;
  border-top: 1px solid $c-white;
  padding-top: $s-mob--small;
  // max-width: 60%;
  small{
    max-width: 40%;
  }

  .img--copy{
    border: 1px solid $c-white;
    padding: $s-mob--smallest/3;
    margin-right: $s-mob--smaller;
  }
}

</style>