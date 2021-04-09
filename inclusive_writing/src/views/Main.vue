<template>
  <div>
    <section class="section section--hero section--white">
      <div class="section__content">
        <div class="title-wrap">
          <h1 class="title title--bigger">
            Correction inclusive
          </h1>
          <p class="baseline">
            Outil de grammaire inclusive à la portée de&nbsp;<span class="no-break">tous‧tes</span>.
          </p>
        </div>
        <vScrollBtn v-if="sectionAboutRef" :scroll-to-ref="sectionAboutRef" />
      </div>
    </section>

    <main class="section section--main">
      <section ref="sectionAboutRef" class="section section--about section--dark">
        <div class="section__content">
          <svg
            class="img img--deco"
            width="171"
            height="262"
            viewBox="0 0 171 263"
            fill="none"
          >
            <circle
              r="131"
              transform="matrix(-1 0 0 1 131.5 131.5)"
              fill="#ECE9E5"
              stroke="#2C2C2C"
            />
          </svg>
          <div class="text-short">
            <h2 class="title title--medium">
              De quoi <span class="no-break">s'agit-iel&nbsp;?</span>
            </h2>
            <p>«&#8239;Correction inclusive&#8239;» est un outil visant à modifier des articles déjà rédigés pour ajouter une forme d’écriture inclusive en fonction du&nbsp;contexte.</p>
          </div>

          <h3 class="title title--small">
            Qu'est-ce que l'écriture inclusive&nbsp;?
          </h3>
          <p>L’écriture dite inclusive, non genrée, dégenrée ou encore neutre, désigne une forme d’écriture progressiste qui veut en premier lieu émanciper le rôle du genre grammatical féminin dans la langue&nbsp;française.</p>
          <p>Puis, comme toute chose vivante, elle a fortement évolué depuis son arrivée pour à présent utiliser des formulations neutres où le genre n’a plus d’influence sur la terminaison des&nbsp;mots.</p>

          <h3 class="title title--small">
            Pourquoi utiliser l'écriture&nbsp;inclusive&nbsp;?
          </h3>
          <p>Utiliser l’écriture inclusive, c’est avant toute chose une forme de respect envers le récipient ou le lecteur‧trice qui lira le texte : elle permet non seulement de s’adresser aux hommes comme aux femmes sans directement faire référence à leur identité de genre comme on le faisait dans le passé, mais aussi d’accepter l’existence des personnes qui ne s’identifient pas dans cette binarité femme / homme et de les inclure dans la langue&nbsp;française.</p>

          <h3 class="title title--small">
            Comment fonctionne-t-elle&nbsp;?
          </h3>
          <p>L’écriture neutre se base sur quelques formulations précises afin de mettre d’éviter dans la mesure du possible de mentionner le genre du groupe&nbsp;sujet&#8239;:</p>

          <vExample />

          <h2 class="title title--medium">
            Pourquoi <span class="no-break">existe-iel&nbsp;</span>?
          </h2>
          <p>Correction inclusive a pour objectif de faciliter l’emploi de l’écriture inclusive sur Internet et de favoriser son usage auprès des personnes non concerné‧e‧s par son&nbsp;utilisation.</p>
          <p>Avec une base de données d’approximativement 20 000 mots, ce correcteur peut convertir toute une large panoplie de sujets différents, tout en laissant la possibilité aux utilisateur‧trices de modifier le texte final à&nbsp;leur&nbsp;guise.</p>
          <p>Voici un exemple de ce que l’outil puisse&nbsp;faire.</p>
          <vExampleBig />
          <vCTA />
        </div>
      </section>
      <section class="section section--white section--tem">
        <!-- <svg
          class="img img--bg"
          width="263"
          height="132"
          viewBox="0 0 263 132"
          fill="none"
        >
          <path d="M132 0C59.2 0 0 59.2 0 132H263C263 59.2 203.8 0.5 132 0Z" fill="#ECE9E5" stroke="#2C2C2C" /> -->
        <!-- </svg> -->
        <div class="section__content">
          <div class="title-wrap">
            <div class="title-wrap__text">
              <h2 class="title title--big">
                Témoignages
              </h2>
              <p>de personnes concerné‧e‧s par l'écriture&nbsp;inclusive.</p>
            </div>
          </div>

          <ul class="list list--tem">
            <vTem />
          </ul>
        </div>
      </section>
      <section class="section section--dark section--other">
        <div class="section__content">
          <div class="title-wrap">
            <h2 class="title title--big">
              Iels aussi ont adopté l'écriture inclusive.
            </h2>

            <svg
              width="288"
              height="111"
              viewBox="0 0 288 111"
              fill="none"
              class="img img--bg"
            >
              <path d="M288 111H0.692943C22.1668 46.2693 78.2461 0 144 0.5C209.754 0 265.833 46.2693 288 111Z" stroke="#2C2C2C" />
              <path d="M194.5 55C194.5 85.1357 171.855 111 144 111C116.145 111 93.5 85.1357 93.5 55C93.5 24.8643 116.145 0.5 144 0.5C171.855 0.5 194.5 24.8643 194.5 55Z" stroke="#2C2C2C" />
            </svg>
          </div>
          <vOther />
        </div>
        <div class="section--other__outro">
          <p class="title title--false">
            Et plein&nbsp;d'autres&nbsp;!
          </p>
          <svg
            width="288"
            height="111"
            viewBox="0 0 288 111"
            fill="none"
            class="img img--bg img--bg-outer"
          >
            <path d="M288 111H0C22.1668 46.2693 78.2461 0 144 0C209.754 0 265.833 46.2693 288 111Z" stroke="#ECE9E5" />
          </svg>
        </div>
      </section>
      <section class="section section--CTA section--white">
        <div class="section__content">
          <vCTA class="CTA-container--dark" />
        </div>
      </section>
      <vFooter />
    </main>
  </div>
</template>

<script>
import vFooter from '@/components/vFooter.vue'
import vScrollBtn from '@/components/vScrollBtn.vue'
import vCTA from '@/components/vCTA.vue'
import vExample from '@/components/vExample.vue'
import vExampleBig from '@/components/vExampleBig.vue'
import vTem from '@/components/vTem.vue'
import vOther from '@/components/vOther.vue'
import { ref } from 'vue'

export default {
  components: {
    vCTA,
    vFooter,
    vExample,
    vExampleBig,
    vTem,
    vOther,
    vScrollBtn
  },

  setup () {
    const sectionAboutRef = ref(null)
    return {
      sectionAboutRef
    }
  }
}
</script>

<style lang="scss">

.section{
  &--hero{
    padding-top: 30vh;
    height: 70vh;

    @include sm{
      font-size: $s-mob--small
    }

    @include tb{
      font-size: $s-tab--smaller;
      font-weight: 300;
      padding-top: 20vh;
      height: 80vh;
    }

    @include lg{
      font-size: $s-desk--smaller;
      padding-top: 20vh;
      height: 80vh;
    }

    .section__content{
      border-right: inherit;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }

    .title-wrap{
      .baseline{
        text-transform: uppercase;
        letter-spacing: 0.085rem;
        margin: 0;

        @include sm{
          font-size: $s-mob--small
        }

        @include tb{
          font-size: $s-tab--smaller;
          font-weight: 300;
        }

        @include lg{
          font-size: $s-desk--smaller;
        }
      }
    }
  }

  &--about{
    .section__content{
      padding-top: $s-mob--massive;
      // padding-bottom: 49.1vw;

      // @include tb{
      //   padding-bottom: 49.7vw;
      // }

      @include sm{
        padding-top: $s-mob--bigger;
      }
      @include tb{
        padding-top: calc(#{$s-tab--bigger} + #{$s-desk--medium});
      }
      @include lg{
        padding-top: $s-desk--medium-plus;
      }
      @include xl{
        padding-top: $s-desk--medium-plus;
      }
      @include xxl{
        padding-top: calc(#{$s-desk--big} + #{$s-desk--medium-plus});
      }

      .text-short{
        .title{
          margin-top: inherit;
          padding-top: inherit;
          max-width: 50%;
        }

        @include tb{
          p{
            max-width: 80%;
          }
        }
        @include lg{
          p{
            max-width: 60%;
          }
        }
        @include xl{
          p{
            max-width: 70%;
          }

          .title{
            max-width: inherit;
          }

          max-width: 80%;
        }
        @include xxl{
          p{
            max-width: inherit;
          }

          max-width: 65%;
        }
      }
    }
  }

  &--tem{

    .section__content{
      // position: relative;
      // top: -100px;
      padding-bottom: $s-mob--massive*3;

      @include sm{
        // padding-bottom: $s-mob--massive*4;
      }
      @include tb{
      padding-bottom: $s-tab--biggest*3;

      }
      @include lg{
        padding-bottom: $s-desk--big*3;

      }
      @include xl{
        padding-bottom: $s-desk--big*4;

      }
      @include xxl{
        padding-bottom: $s-desk--big*5;
      }
    }
    position: relative;
    .img--bg{
        display: block;
        position: absolute;
        stroke-width: 0px;
        width: 100%;
        height: auto;
        bottom: 100%;
        z-index: 0;
        left: 0;
        max-height: 100vw;

        path{
          width: 100vw;
          height: 100vh;
        }
      }

    .title-wrap{
      &__text{
        // position: absolute;
        // bottom: 100%;
        // text-align: center;
        // left: 50%;
        // transform: translateX(-50%);
        padding: $s-mob--bigger 0;
        // width: 100%;

        @include tb{
          padding: $s-tab--big*2 $s-tab--big;
        }
        @include lg{
          padding: $s-desk--small*2 $s-desk--small;
        }
        @include xl{
          padding: $s-desk--medium*2 $s-desk--medium;

        }
        @include xxl{
          padding: $s-desk--big*2 $s-desk--big;
        }
        // border-left: 1px solid $c-black;
        // border-right: 1px solid $c-black;
        // margin:  0 $s-mob--smaller;
        // padding: $s-mob--big $s-mob--smaller;
        // width: calc(100% - (#{$s-mob--smaller} * 4));

        //   @include sm{
        //     margin: 0 $s-mob--medium;
        //     padding: $s-mob--medium*2 $s-mob--small $s-mob--big;
        //     width: calc(100% - (#{$s-mob--medium} * 2 + #{$s-mob--small} *2));
        //   }

        //   @include tb{
        //     margin: 0 10%;
        //     padding: $s-tab--big*2 $s-tab--smaller $s-tab--big;
        //     width: calc(100% - 20vw - (#{$s-tab--smaller} * 2));
        //   }

        //   @include lg{
        //     margin: 0 15%;
        //     padding: $s-desk--big*2 $s-desk--smaller $s-desk--big;
        //     width: calc(100% - 30vw - (#{$s-desk--smaller} * 2));
        //   }

        //   @include xl{
        //     padding: $s-desk--big*2 $s-desk--medium $s-desk--big;
        //     width: calc(100% - 30vw - (#{$s-desk--medium} * 2));
        //   }

        //   @include xxl{
        //     padding: $s-desk--big*2 $s-desk--medium-plus $s-desk--big;
        //     width: calc(100% - 30vw - (#{$s-desk--medium-plus} * 2));
        //   }

        .title, p{
          margin: 0;
          margin: 0 auto;
          padding: 0;
          text-align: center;
        }
      }

    }
  }

  &--other{
    position: relative;

    .section__content{
      position: relative;
      // padding-bottom: $s-mob--bigger*3;

      // @include sm{
      //   padding-bottom: $s-mob--biggest * 4;
      // }
      // @include tb{
      //   padding-bottom: $s-tab--bigger * 3.5;
      // }
      // @include lg{
      //   padding-bottom: $s-desk--big * 3;
      // }
      // @include xl{
      //   padding-bottom: $s-desk--big * 3.5;
      // }
      // @include xxl{
      //   padding-bottom: $s-desk--big * 4;
      // }
      // @include xxxl{
      //   padding-bottom: $s-desk--big * 5;
      // }
    }

    .title-wrap{
      position: absolute;
      width: 100%;
      color: $c-black;
      bottom: 100%;
      left: 0;

      .title{
        position: absolute;
        bottom: $s-mob--small;
        padding: 0;
        margin: 0 $s-mob--smaller;
        width: 100%;

        @include sm{
          margin: 0 $s-mob--small;
          bottom: $s-mob--medium;
        }

        @include tb{
          margin: 0 $s-tab--smaller;
          bottom: $s-tab--smaller;
        }

        @include lg{
          margin: 0 $s-desk--smaller;
          bottom: 50%;
          transform: translateY(50%);
        }

        @include xl{
          margin: 0 $s-desk--medium;
        }

        @include xxl{
          margin: 0 $s-desk--medium-plus;
        }

        @include xxxl{
          margin: 0 auto;
          text-align: center;
        }
      }

      .img--bg{
        position: relative;
        bottom: -5px;
        height: auto;
        stroke-width: 0.5px;
        pointer-events: none;
        max-height: $s-desk--bigger*3;
      }

    }

    &__outro{
      position: absolute;
      border-top: 1px solid $c-white;
      width: 100%;
      bottom: 0;
      left: 0;
      bottom: -5px;

      .img--bg{
        position: relative;
        height: auto;
        pointer-events: none;
        margin: 0 $s-mob--smaller;
        max-width: calc(100% - #{$s-mob--smaller * 2});

        @include sm{
          margin: 0 $s-mob--medium;
          max-width: calc(100% - #{$s-mob--medium * 2});
          stroke-width: 0.5px;
        }

        @include tb{
          margin: 0 10%;
          max-width: calc(100% - 20%);

        }

        @include lg{
          margin: 0 15%;
          max-width: calc(100% - 30%);
          stroke-width: 0.3px;
        }

        @include xxl{
          margin: 0 15%;
          max-height: $s-desk--big * 4;
        }

      }

      .title{
        position: absolute;
        display: inline;
        padding: 0;
        white-space: nowrap;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: $s-mob--small;

        @include sm{
          font-size: $s-mob--medium;
        }
        @include tb{
          font-size: $s-tab--medium;
        }
        @include lg{
          font-size: $s-desk--medium;
        }
        @include xl{
          font-size: $s-desk--medium-avg;
        }
        @include xxl{
          font-size: $s-desk--medium-plus;
        }
      }
    }
  }
}

.img{
  &--deco{
    position: absolute;
    transform: translateY( calc(-50% - #{$s-mob--massive}));
    right: 0;
    stroke-width: 0.5px;
    height: auto;
    width: 100%;
    max-width: $s-mob--bigger * 3;

    @include tb{
      max-width: $s-tab--bigger * 3;
      transform: translateY( calc(-50% - (#{$s-tab--bigger} + #{$s-desk--medium})));

    }
    @include lg{
      max-width: $s-desk--big * 3;
      transform: translateY( calc(-50% - #{$s-desk--medium-plus}));

    }
    @include xl{
      max-width: $s-desk--big * 4;
      // display: none;
      transform: translateY( calc(-50% - #{$s-desk--medium-plus}));
    }
    @include xxl{
      max-width: $s-desk--bigger * 5;
      transform: translateY( calc(-50% - (#{$s-desk--big} + #{$s-desk--medium-plus})));
    }
  }
}

// .section{
//   &--main{
//     padding: 0;
//     background-color: $c-white;
//   }

//   &--hero{
//     position: relative;
//     border-right: inherit;
//     height: auto;
//     height: 70vh;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: flex-start;
//     box-sizing: content-box;
//   }

//   &--about{
//     position: relative;
//     padding-bottom: $s-mob--bigger*5;
//     p{
//       margin-left: $s-mob--smaller
//     }
//   }

//   &--tem{
//     padding-bottom: $s-mob--massive*2;
//     background-color: inherit;
//     position: relative;

//     .title-wrap{
//       position: absolute;
//       display: block;
//       bottom: calc(100%);
//       display: none;

//       &__text{
//         bottom: 0;
//         padding: 0 $s-mob--smaller;
//         display: block;
//         position: absolute;
//         z-index: 1;
//         text-align: center;
//         // left: calc(-#{$s-mob--smaller} - 1px);
//         // border-right: 1px solid $c-black;
//         // border-left: 1px solid $c-black;
//         // left: 50%;
//         // transform: translateX(-50%);
//         // margin:0 $s-mob--smaller;
//         // height: $s-mob--bigger;
//         // max-width: calc(100% + #{$s-mob--smaller *3 });
//         // padding: $s-mob--bigger $s-mob--smaller;
//         // left: calc((-#{$s-mob--smaller} * 2) - 1px) ;
//         // right: 1px

//         .title, p {
//           padding: 0;
//           margin: 0;
//         }
//       }

//       svg{
//         // display: block;
//         // position: relative;
//         // height: auto;
//         // max-height:  $s-mob--bigger *3;
//         // width: 100vw;
//         // max-width: calc(100% + #{$s-mob--smaller *3 } + 1px);
//         // left: calc((-#{$s-mob--smaller} * 2)) ;
//         // stroke-width: 1px;
//         // bottom: -1px;

//       }
//     }

//   &--others{
//     position: relative;

//     &__outro{
//       position: relative;
//       bottom: -1px;
//       left: -$s-mob--smaller * 2;

//         .title--false{
//           text-align: center;
//           position: absolute;
//           bottom: $s-mob--smaller;
//           left: $s-mob--smaller*2;
//           font-size: $s-mob--medium;
//           width: 100%;
//       }
//     }

//     .list--other{
//       margin: 0;

//       .list--other__el{
//         margin-top: $s-mob--bigger;

//         &:nth-of-type(1){
//           margin-top: 0;
//         }

//         a{
//           display: flex;
//           justify-content: space-between;
//           align-items: bottom;
//           margin-bottom: $s-mob--small;
//           transition: $t-smooth;

//           &:hover{
//             color: $c-black;
//             svg{
//               left: 0;
//             }
//             .title{
//               box-shadow: inset 150px 0 0 0 $c-white;
//             }
//           }
//         }

//         .title{
//           padding: 0;
//           margin: 0 $s-mob--small 0 0;
//           transition: $t-smooth;
//           display: block;
//           flex: initial;
//           box-shadow: inset 0 0 0 0.01px $c-white;
//           -webkit-backface-visibility: hidden;
//         }

//         p{
//           border-top: 1px solid $c-white;
//           font-weight: 300;
//           padding-top: $s-mob--smaller;
//         }
//       }
//     }
//   }
// }

// .img{
//   &--arrow{
//     max-width: 50px;
//     fill: $c-white;
//   }

//   &--avatar{
//     display: block;
//     margin-left: auto;
//     margin-right: auto;
//     width: 100%;
//     max-width: $s-mob--medium-plus * 4;
//   }

//   &--bg{
//     width: 100%;
//     max-width:  calc(100% - #{$s-mob--smaller}) ;
//     height: 100%;
//     stroke-width: 1px;

//     @include lg{
//       stroke-width: 0.5px;
//     }

//     &-outer{
//       max-width: inherit;
//       width: calc(100% + #{$s-mob--smaller * 4} + 1px);
//       display: block;
//       position: inherit;
//       left: 0 ;
//     }
//   }

//   &--link{
//     max-height: $s-mob--medium;
//     max-height: auto;
//     transition: $t-smooth;
//     cursor: pointer;
//     fill: $c-white;
//     position: relative;
//     left: -$s-mob--small;
//   }

//     &--deco{
//     position: absolute;
//     right: 0;
//     stroke-width: 0.5px;
//     top: 0;
//     transform: translateY(-50%);
//     width: auto;
//     path{
//       fill: $c-white;
//       width: 100%;
//       max-width: $s-mob--biggest*3;
//     }
//   }
// }

// .list--example__el{
//   margin-top: $s-mob--smaller;
//   margin-bottom: $s-mob--medium-plus;

//   &:nth-last-child(1){
//       margin-bottom: 0;
//   }
// }

// .correction-example{
//   outline: 1px solid $c-white;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   p{
//     font-size: $s-mob--smallest;
//     margin: 0;
//     padding: 0;
//   }

//   svg{
//     flex-shrink: 1;
//   }

//   &__bef, &__aft{
//     padding: $s-mob--smaller/2;
//   }

//   &--big{
//     flex-direction: column;
//     padding: $s-mob--small;
//     margin-bottom: $s-mob--biggest;

//     svg{
//       transform: rotate(90deg);
//       margin: $s-mob--smaller 0 ;
//     }
//   }
// }

// .word-corrected {
//   border: 1px solid $c-white;
//   padding: 0 $s-mob--smallest/3;
// }
</style>
