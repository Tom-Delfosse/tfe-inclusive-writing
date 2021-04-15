<template>
  <div>
    <section id="section--hero" class="section section--hero section--white">
      <div class="section__content">
        <div class="title-wrap">
          <h1 class="title title--bigger">
            Correction inclusive
          </h1>
          <p class="baseline">
            Outil de grammaire inclusive à la portée de&nbsp;<span class="no-break">tous‧tes</span>.
          </p>
        </div>
        <vScrollBtn v-if="sectionAboutRef" scrolled-to="#section--about" />
      </div>
    </section>

    <main class="section section--main">
      <section id="section--about" ref="sectionAboutRef" class="section section--about section--dark">
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
        <div class="section__content">
          <vTemHeader />
          <ul class="list list--tem">
            <vTem />
          </ul>
        </div>
      </section>
      <section class="section section--dark section--other">
        <div class="section__content">
          <vOtherHeader />
          <vOther />
        </div>
        <vOtherOutro />
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
import vFooter from '@/components/Footer/vFooter.vue'
import vScrollBtn from '@/components/vScrollBtn.vue'
import vCTA from '@/components/Main/Btn/vCTA.vue'
import vExample from '@/components/Main/Example/vExample.vue'
import vExampleBig from '@/components/Main/Example/vExampleBig.vue'
import vTem from '@/components/Main/Tem/vTem.vue'
import vOther from '@/components/Main/Other/vOther.vue'
import vOtherHeader from '@/components/Main/Other/vOtherHeader.vue'
import vOtherOutro from '@/components/Main/Other/vOtherOutro.vue'
import vTemHeader from '@/components/Main/Tem/vTemHeader.vue'

export default {
  components: {
    vCTA,
    vFooter,
    vExample,
    vExampleBig,
    vTem,
    vTemHeader,
    vOther,
    vOtherHeader,
    vOtherOutro,
    vScrollBtn
  },

  setup () {
    const sectionAboutRef = '#section--about'
    return {
      sectionAboutRef
    }
  }
}
</script>

<style lang="scss">

.section{
  &--hero{
    padding-top: 20vh;
    height: 80vh;

    @include sm{
      padding-top: 15vh;
      height: 85vh;
    }

    @include tb{
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
      padding-bottom: $s-mob--massive*3;

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
  }

  &--other{
    position: relative;

    .section__content{
      position: relative;
    }
  }
}

.img{
  &--deco{
    position: absolute;
    transform: translateY( calc(-50% - #{$s-mob--massive}));
    right: 0;
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
</style>
