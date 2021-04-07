<template>
  <div>

    <section class="section section--hero section--white">
      <div class="section__content">

      <div class="title-wrap">
        <h1 class="title title--big">Correction inclusive</h1>
        <p class="baseline">Outil de grammaire inclusive à la portée de&nbsp;tous‧tes.</p>
      </div>
      <vScrollBtn/>
      </div>
    </section>

    <main class="section section--main">

      <section class="section section--about section--dark" ref="sectionAbout">
        <div class="section__content">
          <svg class="img img--deco" width="171" height="262" viewBox="0 0 171 263" fill="none" >
              <circle r="131" transform="matrix(-1 0 0 1 131.5 131.5)" fill="#ECE9E5" stroke="#2C2C2C"/>
          </svg>
          <div class="text-short">
            <h2 class="title title--medium">De quoi <span class="no-break">s'agit-iel&nbsp;?</span></h2>
            <p>«&#8239;Correction inclusive&#8239;» est un outil visant à modifier des articles déjà rédigés pour ajouter une forme d’écriture inclusive en fonction du&nbsp;contexte.</p>
          </div>
          
          <h3 class="title title--small">Qu'est-ce que l'écriture inclusive&nbsp;?</h3>
          <p>L’écriture dite inclusive, non genrée, dégenrée ou encore neutre, désigne une forme d’écriture progressiste qui veut en premier lieu émanciper le rôle du genre grammatical féminin dans la langue&nbsp;française.</p>
          <p>Puis, comme toute chose vivante, elle a fortement évolué depuis son arrivée pour à présent utiliser des formulations neutres où le genre n’a plus d’influence sur la terminaison des&nbsp;mots.</p>

          <h3 class="title title--small">Pourquoi utiliser l'écriture&nbsp;inclusive&nbsp;?</h3>
          <p>Utiliser l’écriture inclusive, c’est avant toute chose une forme de respect envers le récipient ou le lecteur‧trice qui lira le texte : elle permet non seulement de s’adresser aux hommes comme aux femmes sans directement faire référence à leur identité de genre comme on le faisait dans le passé, mais aussi d’accepter l’existence des personnes qui ne s’identifient pas dans cette binarité femme / homme et de les inclure dans la langue&nbsp;française.</p>

          <h3 class="title title--small">Comment fonctionne-t-elle&nbsp;?</h3>
          <p>L’écriture neutre se base sur quelques formulations précises afin de mettre d’éviter dans la mesure du possible de mentionner le genre du groupe&nbsp;sujet&#8239;:</p>

          <ul class="list list--example">
            <li class="list--example__el">
              <p>Les doubles flexions (également appelés doublets), qui consistent simplement d’associer les formes masculines et féminines d’un même&nbsp;mot&#8239;;</p>
              <div class="correction-example">
                <div class="correction-example__bef">
                  <p>Les&nbsp;acteurs.</p>
                </div>
                <svg class="img img--arrow" viewBox="0 0 20.56 8.11">
                  <path d="M20.56,4.06V3.11l-1,.4-5.05-1.8C13.36,1.31,10.62,0,10.62,0l0,.09a4,4,0,0,1,1.58,3.1V3.5H5.58A1.65,1.65,0,0,0,4.16,2c-.68-.05-1,.47-1.3,1.11a1.65,1.65,0,0,0-1.42-.78A1.49,1.49,0,0,0,0,3.94,1.73,1.73,0,0,0,1.72,5.7a1.42,1.42,0,0,0,.69-.18,1.49,1.49,0,0,0,.76-.83,1.5,1.5,0,0,1,.54-.08h8.45v.31A4.06,4.06,0,0,1,10.58,8l0,.08Zm-7.65-.75h2.23a1.18,1.18,0,0,1,1.14,1.44h0l-2.4.92-.1,0a1.82,1.82,0,0,1-.81-1A2.48,2.48,0,0,1,12.91,3.31Zm6.5.25L16.36,4.74a1.28,1.28,0,0,0-.86-1.42h.8a1.43,1.43,0,0,0-.94-1.21Zm-3.73-.3-2.75,0a1.52,1.52,0,0,1,1.13-1.18A1.37,1.37,0,0,1,15.68,3.26ZM12.27,1.88h0c.54-.52,1.13-.46,2.21-.07l.73.26A2.11,2.11,0,0,0,14.44,2,2.35,2.35,0,0,0,12.27,3.5ZM.12,4.44C-.1,3.7.45,3.09,1.23,2.86a1.5,1.5,0,0,1,1.59.33v0a5.45,5.45,0,0,1-.92,2C1.12,5.37.33,5.17.12,4.44ZM4.63,2.32c.41.06.75.53.82,1.18H3.6C3.82,2.81,4.06,2.24,4.63,2.32Zm7.64,2.39a1.84,1.84,0,0,0,1,1.19c-.5.15-.79.15-1-.08h0Z"/>
                </svg>
                <div class="correction-example__aft">
                  <p>Les&nbsp;acteurs et les&nbsp;actrices.</p>
                </div>
              </div>
            </li>
          </ul>

          <h2 class="title title--medium">Pourquoi existe-iel&nbsp;?</h2>
          <p>Correction inclusive a pour objectif de faciliter l’emploi de l’écriture inclusive sur Internet et de favoriser son usage auprès des personnes non concerné‧e‧s par son&nbsp;utilisation.</p>
          <p>Avec une base de données d’approximativement 20 000 mots, ce correcteur peut convertir toute une large panoplie de sujets différents, tout en laissant la possibilité aux utilisateur‧trices de modifier le texte final à&nbsp;leur&nbsp;guise.</p>
          <p>Voici un exemple de ce que l’outil puisse&nbsp;faire.</p>
          <div class="correction-example correction-example--big">
            <div class="correction-example__bef">
              <p>L’écriture inclusive est accesible à tous, y compris aux personnes non&nbsp;concernées.</p>
            </div>
            <svg class="img img--arrow" viewBox="0 0 20.59 8.11">
              <path d="M20.59,4.06V3.11l-1,.39L10.64,0l0,.09A4.7,4.7,0,0,1,12,2a2.64,2.64,0,0,0-.71,1.34.49.49,0,0,1,0,.12H5.59A1.65,1.65,0,0,0,4.16,2c-.67-.05-1,.47-1.3,1.1a1.67,1.67,0,0,0-1.42-.78A1.5,1.5,0,0,0,0,3.94,1.73,1.73,0,0,0,1.72,5.7a1.36,1.36,0,0,0,.69-.18,1.5,1.5,0,0,0,.77-.83,1.4,1.4,0,0,1,.53-.08h7.64a2.46,2.46,0,0,0,.72,1.19A4.46,4.46,0,0,1,10.6,8l0,.08ZM13.37,2.2c1.18-.1,2.28.42,2.38,1.54a1.63,1.63,0,0,1-.83,1.56l-.83.31-.39.06a2.73,2.73,0,0,1-1.41-.22V2.5A2.83,2.83,0,0,1,13.37,2.2Zm6.07,1.35L15.6,5a3.09,3.09,0,0,0,.17-.54,2.63,2.63,0,0,0-1-2.59Zm-7.31-1a3.83,3.83,0,0,1,0,.6V3.5H11.4A1.68,1.68,0,0,1,12.13,2.59ZM.12,4.44C-.1,3.7.45,3.09,1.24,2.86a1.51,1.51,0,0,1,1.58.32v0a5.37,5.37,0,0,1-.92,2C1.12,5.37.33,5.17.12,4.44ZM4.63,2.32c.41.05.76.53.83,1.18H3.61C3.83,2.81,4.06,2.23,4.63,2.32Zm6.81,2.29h.74v.31a3.33,3.33,0,0,1,0,.46A1.52,1.52,0,0,1,11.44,4.61Z"/>
            </svg>
            <div class="correction-example__aft">
              <p>L'écriture inclusive est accessible à <span class="word-corrected">tous·te·s</span>, y compris aux personnes non&nbsp;<span class="word-corrected">concerné·e·s</span>.</p>
            </div>
          </div>

          <vCTA/>
        </div>
      </section>
      <section class="section section--white section--tem">
        <div class="section__content">
          <div class="title-wrap">
            <div class="title-wrap__text">
              <h2 class="title title--medium">Témoignages</h2>
              <p>de personnes concerné‧e‧s par l'écriture&nbsp;inclusive.</p>
            </div>
            <svg class="img img--bg" width="263" height="132" viewBox="0 0 263 132" fill="none">
              <path d="M132 0C59.2 0 0 59.2 0 132H262.5C262.5 59.2 203.8 0.5 132 0Z" fill="#ECE9E5" stroke="#2C2C2C"/>
            </svg>
          </div>

          <ul class="list list--tem">
            <li class="list--tem__el">
              <figure class="tem-group">
                <img src="@/assets/img/svg/avatar-1.svg" alt="Avatar d'une personne concerné‧e." class="img img--avatar">
                <figcaption>
                  <p class="tem-group__quote">«&#8239;Je m’identifie plus facilement avec [l’écriture inclusive] que&nbsp;sans.&#8239;»</p>
                  <p>Jess, personne non-binaire et partisan‧ne de l'écriture&nbsp;inclusive.</p>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </section>
      <section class="section section--dark section--others">
        <div class="section__content">

        <div class="title-wrap">
          <h2 class="title title--medium">Iels aussi ont adopté l'écriture inclusive.</h2>

          <svg width="288" height="111" viewBox="0 0 288 111" fill="none" class="img img--bg">
            <path d="M287.307 110.5H0.692943C22.1668 46.2693 78.2461 0.5 144 0.5C209.754 0.5 265.833 46.2693 287.307 110.5Z" stroke="#2C2C2C"/>
            <path d="M194.5 55C194.5 85.1357 171.855 109.5 144 109.5C116.145 109.5 93.5 85.1357 93.5 55C93.5 24.8643 116.145 0.5 144 0.5C171.855 0.5 194.5 24.8643 194.5 55Z" stroke="#2C2C2C"/>
          </svg>
        </div> 
        <ul class="list list--other">
          <li class="list--other__el">
              <div class="link">
                <a href="https://www.instagram.com/bye.byebinary/?hl=fr">
                  <h3 class="title title--small">Bye Bye&nbsp;Binary</h3>
                  <svg viewBox="0 0 20.52 8.21" class="img img--link">
                    <path d="M20.52,4.11v-1l-1,.4L10.54,0l0,.09a4.1,4.1,0,0,1,1.58,3.14v.32H.9c-.48,0-.68-.12-.8-.33H0V5H.1c.12-.22.32-.33.8-.33H12.08V5A4.12,4.12,0,0,1,10.5,8.13l0,.08ZM12.24,5.92a1.66,1.66,0,0,1,.44-.49l1.55-1.18.3.24c.36.28.62.48.82.67l-1.54.6C13,6.09,12.55,6.18,12.24,5.92Zm3.55-2.47h0V4.81h0c-.15.31-.58.14-1.29-.41l-.24-.18,1.08-.81C15.6,3.21,15.74,3.33,15.79,3.45Zm3.58.15L15.91,4.94V2.36Zm-5-1.78,1.29.47a1.66,1.66,0,0,1-.44.49L14,3.74l-.59-.45a3.7,3.7,0,0,1-1.22-1.2V1.9h0C12.74,1.37,13.33,1.44,14.41,1.82ZM12.19,2.93c.19-.23.59-.06,1.25.44l.52.4L12.59,4.82c-.2.14-.32.1-.4,0Z"/>
                  </svg>
                </a>
            </div>
            <p>Collective qui réalise des créations typographiques autour de l'écriture&nbsp;inclusive.</p>
          </li>
        </ul>
        <div class="section--others__outro">
          <p class="title title--false">Et plein&nbsp;d'autres&nbsp;!</p>
          <svg width="288" height="111" viewBox="0 0 288 111" fill="none" class="img img--bg img--bg-outer">
            <path d="M287.307 110.5H0.692943C22.1668 46.2693 78.2461 0.5 144 0.5C209.754 0.5 265.833 46.2693 287.307 110.5Z" stroke="#ECE9E5"/>
          </svg>
        </div>
      </div>
      </section>
      <section class="section section--CTA section--white">
        <div class="section__content">
          <vCTA class="CTA-container--dark"/>
        </div>
      </section>
      <vFooter/>
    </main>
  </div>
</template>

<script>
import vFooter from "@/components/vFooter.vue"
import vScrollBtn from "@/components/vScrollBtn.vue"
import vCTA from "@/components/vCTA.vue"

export default {
  components:{
    vCTA,
    vFooter,
    vScrollBtn
  }
  // methods: {
  //   scrollDown() {zenscroll.to(this.$refs.sectionAbout), 800}
  //   }
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
          max-width: 50%;

        }
        @include sm{
          .title{
            // max-width: inherit;
          }
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
            max-width: inherit;
          }

          .title{
            max-width: inherit;
          }

          max-width: 80%;
        }
        @include xxl{
          max-width: 65%;

        }
      }

      p{
        max-width: 450px;

        @include tb{
          max-width: 600px; 
        }

        @include lg{
          max-width: 650px;

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

//     .list--tem{
//       margin-top: 0 ;
//     }
//     .tem-group{
//       border-bottom: 1px solid $c-black;
//       margin: $s-mob--bigger 0 $s-mob--smallest;

//       &:nth-child(1){
//         margin-top: 0;
//         padding-top: $s-mob--bigger;
        
//       }
//       &:nth-last-child(1){
//         margin-bottom: 0;
        
//       }

//       &__quote{
//         font-weight: 700;
//         font-size: $s-mob--small;
//         margin: $s-mob--medium 0 $s-mob--small ;
//       }

//       .img--avatar{
//         display: block;
//         margin-left: auto;
//         margin-right: auto;
//       }
//     }
//   }

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