<template>
  <footer class="section section--dark section--footer">
    <vFooterNav />
    <div class="section__content">
      <h2 class="title title--medium">
        Liens externes
      </h2>
      <div class="links">
        <vFooterList />
      </div>
      <vCopyright />
      <svg
        class="img img--deco img--deco-dark"
        width="173"
        height="132"
        viewBox="0 0 173 132"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M173 6.56021V132H0C0 58.8807 60.3165 0 132 0C146.265 0 159.535 2.62328 173 6.56021Z" fill="#ECE9E5" />
      </svg>
    </div>
  </footer>
</template>
<script>
import vFooterList from '@/components/Footer/vFooterList.vue'
import Links from '@/assets/data/links.json'
import vCopyright from '@/components/Footer/vFooterCopyright.vue'
import vFooterNav from '@/components/Footer/vFooterNav.vue'

export default {
  components: {
    vFooterList,
    vFooterNav,
    vCopyright
  },

  data () {
    return {
      Links: Links
    }
  }
}
</script>

<style lang="scss" scoped>
.section--footer{
  position: relative;
  .section__content{
    border: 0;
  }
}

.title--medium{
  padding: 0;
  padding-bottom: $s-mob--smaller;
  display: inline-block;
  width: 100%;

  @include sm{
    padding-bottom: $s-mob--smaller;
  }
  @include tb{
    padding-bottom: $s-tab--smaller;
  }
  @include lg{
    padding-bottom: $s-desk--smallest;
  }
  @include xxl{
    padding-bottom: $s-desk--smallest;
  }
}

.links{
  border-top: 1px solid $c-white;
  @include lg{
    display: -webkit-inline-flex;
    display: inline-flex;
    display: -ms-inline-flexbox;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
}

.img--deco-dark{
  stroke-width: 0;
  top:inherit;
  bottom: 0px;
  transform: inherit;
  max-width: $s-mob--big*2.8;

    @include sm{
      max-width: $s-mob--bigger*2.8;
    }

    @include tb{
      max-width: $s-tab--bigger * 3;
    }
    @include lg{
      max-width: $s-desk--big * 3;
    }

    @include xl{
      max-width: $s-desk--big * 4;

    }
    @include xxl{
      max-width: $s-desk--bigger * 5;
    }
}

</style>
