<template>
  <footer class="section section--dark section--footer">
    <div class="footer-nav">
      <vIcon class="img--icon-dark" />

      <vScrollBtn
        :scroll-to-ref="sectionAboutRef"
        class="btn-scroll--dark"
      />
    </div>
    <div class="section__content">
      <h2 class="title title--medium">
        Liens externes
      </h2>
      <div class="links">
        <vFooterList />
      </div>
      <vCopyright />
      <!-- <svg
        class="img img--deco"
        width="173"
        height="132"
        viewBox="0 0 173 132"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M173 6.56021V131H1.5C1.76948 58.8807 60.3165 0.5 132 0.5C146.265 0.5 159.535 2.62328 173 6.56021Z" fill="#ECE9E555" />
      </svg> -->
    </div>
  </footer>
</template>
<script>
import vScrollBtn from '@/components/vScrollBtn.vue'
import vFooterList from '@/components/vFooterList.vue'
import vIcon from '@/components/vIcon.vue'
import Links from '@/assets/data/links.json'
import vCopyright from '@/components/vCopyright.vue'
import { ref } from 'vue'

export default {
  components: {
    vScrollBtn,
    vFooterList,
    vCopyright,
    vIcon
  },
  setup () {
    const sectionAboutRef = ref(null)
    return {
      sectionAboutRef
    }
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

  @include sm{}
  @include tb{}
  @include lg{}
  @include xl{}
  @include xxl{}
  @include xxxl{}

  .footer-nav{
    display: flex;
    justify-content: space-between;
    padding: $s-mob--medium-plus 0 $s-mob--medium;
    @include sm{
      padding: $s-mob--big 0 auto ;
    }

    @include tb{
      padding: $s-tab--big 0 $s-tab--small;
      width: calc(100% + #{$s-tab--big});
    }

    @include lg{
      padding: $s-mob--medium-plus 0 $s-desk--smaller;
      width: calc(100% + #{$s-desk--medium});
    }

    @include xl{
      padding: $s-desk--medium-avg 0 $s-desk--smaller;
    }

    .btn-scroll{
      max-width: $s-mob--big;
      transform: rotate(180deg);
      @include tb{
        max-width: $s-tab--big;
        position: relative;
        left: -$s-tab--big;
      }

      @include lg{
        max-width: $s-desk--medium;
        left: -$s-desk--medium;
      }

      @include xl{
        max-width: $s-desk--medium-avg;
      }
    }
  }

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

//   .img--deco{
//     position: absolute;
//     right: 0;
//     stroke-width: 0;
//     top:inherit;
//     bottom: -1px;
//     transform: inherit;
//   }

</style>

          <!-- v-if="sectionAboutRef" -->
