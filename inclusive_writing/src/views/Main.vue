<template>
  <div>
    <section class="section section--hero section--white">
      <div class="section__content">
        <div class="title-wrap">
          <h1 class="title title--big">
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

          <ul class="list list--example">
            <vExample />
          </ul>

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
        <div class="section__content">
          <div class="title-wrap">
            <svg
              class="img img--bg"
              width="263"
              height="132"
              viewBox="0 0 263 132"
              fill="none"
            >
              <path d="M132 0C59.2 0 0 59.2 0 132H263C263 59.2 203.8 0.5 132 0Z" fill="#ECE9E5" stroke="#2C2C2C" />
            </svg>
            <div class="title-wrap__text">
              <h2 class="title title--medium">
                Témoignages
              </h2>
              <p>de personnes concerné‧e‧s par l'écriture&nbsp;inclusive.</p>
            </div>
          </div>
          <!-- <div class="title-wrap">
            <div class="title-wrap__text">
              <h2 class="title title--medium">
                Témoignages
              </h2>
              <p>de personnes concerné‧e‧s par l'écriture&nbsp;inclusive.</p>
            </div> -->
          <!-- <svg
              class="img img--bg"
              width="263"
              height="132"
              viewBox="0 0 263 263"
              fill="none"
            >
              <path d="M132 0C59.2 0 0 59.2 0 132H262.5C262.5 59.2 203.8 0.5 132 0Z" fill="#ECE9E5" stroke="#2C2C2C" />
            </svg> -->
          <!-- </div> -->

          <ul class="list list--tem">
            <vTem />
          </ul>
        </div>
      </section>
      <section class="section section--dark section--others">
        <div class="section__content">
          <div class="title-wrap">
            <h2 class="title title--medium">
              Iels aussi ont adopté l'écriture inclusive.
            </h2>

            <svg
              width="288"
              height="111"
              viewBox="0 0 288 111"
              fill="none"
              class="img img--bg"
            >
              <path d="M287.307 110.5H0.692943C22.1668 46.2693 78.2461 0.5 144 0.5C209.754 0.5 265.833 46.2693 287.307 110.5Z" stroke="#2C2C2C" />
              <path d="M194.5 55C194.5 85.1357 171.855 109.5 144 109.5C116.145 109.5 93.5 85.1357 93.5 55C93.5 24.8643 116.145 0.5 144 0.5C171.855 0.5 194.5 24.8643 194.5 55Z" stroke="#2C2C2C" />
            </svg>
          </div>
          <ul class="list list--other">
            <li class="list--other__el">
              <div class="link">
                <a href="https://www.instagram.com/bye.byebinary/?hl=fr">
                  <h3 class="title title--small">Bye Bye&nbsp;Binary</h3>
                  <svg viewBox="0 0 20.52 8.21" class="img img--link">
                    <path d="M20.52,4.11v-1l-1,.4L10.54,0l0,.09a4.1,4.1,0,0,1,1.58,3.14v.32H.9c-.48,0-.68-.12-.8-.33H0V5H.1c.12-.22.32-.33.8-.33H12.08V5A4.12,4.12,0,0,1,10.5,8.13l0,.08ZM12.24,5.92a1.66,1.66,0,0,1,.44-.49l1.55-1.18.3.24c.36.28.62.48.82.67l-1.54.6C13,6.09,12.55,6.18,12.24,5.92Zm3.55-2.47h0V4.81h0c-.15.31-.58.14-1.29-.41l-.24-.18,1.08-.81C15.6,3.21,15.74,3.33,15.79,3.45Zm3.58.15L15.91,4.94V2.36Zm-5-1.78,1.29.47a1.66,1.66,0,0,1-.44.49L14,3.74l-.59-.45a3.7,3.7,0,0,1-1.22-1.2V1.9h0C12.74,1.37,13.33,1.44,14.41,1.82ZM12.19,2.93c.19-.23.59-.06,1.25.44l.52.4L12.59,4.82c-.2.14-.32.1-.4,0Z" />
                  </svg>
                </a>
              </div>
              <p>Collective qui réalise des créations typographiques autour de l'écriture&nbsp;inclusive.</p>
            </li>
          </ul>
          <div class="section--others__outro">
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
              <path d="M287.307 110.5H0.692943C22.1668 46.2693 78.2461 0.5 144 0.5C209.754 0.5 265.833 46.2693 287.307 110.5Z" stroke="#ECE9E5" />
            </svg>
          </div>
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
import { ref } from 'vue'

export default {
  components: {
    vCTA,
    vFooter,
    vExample,
    vExampleBig,
    vTem,
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
      padding-bottom: 49.1vw;

      @include tb{
        padding-bottom: 49.7vw;
      }

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

    position: relative;

    .title-wrap{
      // position: relative;

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

      &__text{
        position: absolute;
        bottom: 100%;
        text-align: center;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
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

//     .title-wrap{
//       position: absolute;
//       bottom: calc(100% - 7px);
//       color: $c-black;
//       display: block;
//       left: $s-mob--smaller;

//       .title{
//         padding: 0 $s-mob--smaller*2 $s-mob--smaller $s-mob--smaller;
//         position: absolute;
//         bottom: 5px;
//         &::selection{
//           background-color: #ece9e5c4;
//           color: $c-black;
//         }
//       }
//     }

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
