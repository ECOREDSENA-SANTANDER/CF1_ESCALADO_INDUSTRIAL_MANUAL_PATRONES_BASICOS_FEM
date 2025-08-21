<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estructura corporal femenina 

    .bloque-texto-g.bg-1.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.jpg')})`}")
      .bloque-texto-g__texto.tarjeta.p-4.py-5
        p.mb-0 La estructura corporal se entiende como la arquitectura del cuerpo humano en relación con su composición y capacidad de movimiento. El concepto es fundamental para el patronaje, ya que permite entender cómo se organizan y articulan los segmentos del cuerpo, lo cual incide directamente en la forma en que una prenda debe ajustarse, adaptarse y responder a las necesidades funcionales y estéticas de quien la usa.

    p Según Norton (2019), la estructura corporal se define a partir de la organización y disposición de los segmentos corporales, considerando su función y biomecánica. Lo cual implica la integración de factores anatómicos, morfológicos y posturales que influyen en el movimiento, la estabilidad y la ergonomía del cuerpo humano, especialmente en contextos como el diseño de vestuario, donde es necesario comprender estas variables para lograr prendas funcionales, cómodas y estéticamente apropiadas.
    p.mb-4 A continuación, se presentan los conceptos clave relacionados con la estructura corporal:

    .row.bgcta-1.align-items-center.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-12
              .tarjeta.color-secundario.p-3
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-1
                    img(src="@/assets/curso/temas/t1/video.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h4.mb-1.text-white Estructura del cuerpo
                        p.mb-0 Se invita a explorar el video, donde se abordan nociones básicas de la estructura corporal:
                      .col-sm-auto
                        a.boton.text-white(:href="obtenerLink('/downloads/Medidas_anatomicas.pdf')" target="_blank")
                          span Ir al sitio
                          i.fas.fa-play

    .py-3

    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Antropometría

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        img.mb-4(src='@/assets/curso/temas/t1/2.png', alt='')
        .bg-color-adicional-1.mb-4.p-4
          p.mb-0 La antropometría es la ciencia encargada de medir y analizar las dimensiones y proporciones del cuerpo humano en sus distintas etapas de desarrollo. La disciplina también se aplica en áreas como la ergonomía, la nutrición y la medicina, con el fin de evaluar el estado físico y de salud de las personas.
        p En el campo del diseño y confección de vestuario, la antropometría se emplea para realizar análisis ergonómicos que permitan crear prendas adaptadas a la morfología corporal, facilitando el movimiento y garantizando confort y funcionalidad. El conocimiento de estas medidas es esencial para lograr patrones precisos y bien ajustados, adecuados a diferentes tipos de cuerpo y contextos de uso.
      .col-lg-6(data-aos="fade-left")
        .bg-4.p-4
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            span Antropometría femenina 
          .row.justify-content-center
            .col-lg-6.col-md-5.col-9
              figure
                img(src='@/assets/curso/temas/t1/fig1.png', alt='Esquema anatómico de una mujer con medidas antropométricas, destacando proporciones corporales clave. Estos datos son esenciales para el diseño ergonómico, el patronaje y estudios biomecánicos.')

    .py-3

    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Anatomía

    .bloque-texto-g.bloque-texto-g--inverso.bg-1.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/3.jpg')})`}")
      .bloque-texto-g__texto.tarjeta.p-4.py-5
        p.mb-0 La anatomía es vista como una rama de la biología que estudia la estructura de todos los seres vivos, focalizada principalmente en la forma, ubicación y la relación que tienen los órganos y los sistemas (Cabrera, 2016). #[br] #[br]
        p.mb-0 Esta rama tiene relación en la elaboración de prendas dada que está enfocada para lograr una adaptación y funcionalidad al cuerpo humano.

    .row.bgc-1.align-items-center.p-4.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-12
              .titulo-sexto.color-acento-contenido
                h5 Figura 2.
                span Antropometría femenina
            .col-lg-4.col-md-5.col-9
              figure
                img(src='@/assets/curso/temas/t1/fig2.png', alt='Cuerpo femenino con los músculos expuestos en vista frontal y posterior. Se distinguen los principales grupos musculares del torso, brazos y piernas, evidenciando su estructura y distribución en el cuerpo.')

    .py-3

    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Biomecánica

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-8.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/t1/4.png', alt='')
      .col-lg-8
        p.mb-0 La biomecánica es la disciplina que estudia los principios mecánicos que regulan el movimiento y la estructura del cuerpo humano. Se centra en analizar las fuerzas internas y externas que actúan sobre el cuerpo, así como la respuesta del sistema musculoesquelético ante dichas fuerzas. Sus aplicaciones abarcan áreas como el diseño de prótesis ortopédicas, el deporte y la rehabilitación.
        p La relación entre la anatomía y la biomecánica aplicada al diseño de prendas de vestir se basa en los principios de adaptación y funcionalidad.
        .row.justify-content-center.align-items-center
          .col-lg-2.col-md-2.d-none.d-md-block
            img.px-lg-3(src='@/assets/curso/temas/t1/5.svg', alt='')              
          .col-lg-10.col-md-10
            p.mb-0 Comprender la anatomía, biomecánica y ergonomía del cuerpo permite que se puedan diseñar prendas que respondan a las necesidades físicas de una persona, lo que facilita la interacción entre el cuerpo y una prenda de vestir (Sierra y Mosquera, 2013).

    .py-3

    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Morfología

    p La morfología del cuerpo humano hace referencia a la forma y estructura del cuerpo a partir de la relación y disposición de sus partes, esta rama resulta esencial en otras áreas y disciplinas como la anatomía, y fisiología.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 3.
      span Morfología femenina
    figure.mb-5
      img(src='@/assets/curso/temas/t1/fig3.png', alt='Cinco mujeres de pie, en ropa interior representan diferentes tipos morfológicos femeninos. Sus siluetas evidencian variaciones en proporciones corporales como la forma del tronco, distribución del tejido graso, longitud de piernas y estructura ósea.')

    .py-3

    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Ergonomía

    p La ergonomía es contemplada como una disciplina científica que se encarga de estudiar las interacciones entre seres humanos y elementos de un sistema (International Ergonomics Association, 2000), aplicada a partir de teorías, principios y métodos cuyo fin es el bienestar humano.

    .bloque-texto-g.bg-3.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/6.jpg')})`}")
      .bloque-texto-g__texto.tarjeta.p-4
        p.mb-0 La relación de la ergonomía y las prendas de vestir está dada a partir del confort que estas pueden darle al cuerpo humano con el objetivo de mejorar el rendimiento en relación al desempeño de las actividades diarias, su propósito es que se pueda desenvolver a partir de la comodidad, funcionalidad y adaptabilidad, también incluye la prevención de molestias o enfermedades que puedan derivarse de un mal uso de una prenda que no esté elaborada y pensada para el movimiento, por ejemplo: un pantalón que no permita el movimiento de la rodilla puede acarrear molestias o dolores articulares.

    p.mb-5 Es por lo anterior, que en la moda uno de los objetivos a perseguir es poder proporcionar modelos de prendas ergonómicos con procesos de confección, en donde el estudio de materiales para su construcción resulta ser uno de los puntos tácticos en este proceso.

    p La relación entre los conceptos y la estructura corporal es la siguiente:

    .row.justify-content-center.align-items-center
      .col-lg-4.col-md-6.col-8.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/7.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .row
          .col-lg-6.col-md-6.mb-3
            .tarjeta.bg-5.p-4.py-3.h-100
              .row.justify-content-center.align-items-center
                .col-lg-4.col-md-4.col-4
                  img(src='@/assets/curso/temas/t1/tarj1-1.png', alt='')
                .col-lg-8.col-md-8.col-8
                  .bg-color-acento-contenido.w-fit.text-white.py-1.px-3.mb-2.mb-lg-3
                    h4.mb-0 Antropometría
                  p.mb-0 Se relaciona con las medidas corporales.
          .col-lg-6.col-md-6.mb-3
            .tarjeta.bg-5.p-4.py-3.h-100
              .row.justify-content-center.align-items-center
                .col-lg-4.col-md-4.col-4
                  img(src='@/assets/curso/temas/t1/tarj1-2.png', alt='')
                .col-lg-8.col-md-8.col-8
                  .bg-color-acento-contenido.w-fit.text-white.py-1.px-3.mb-2.mb-lg-3
                    h4.mb-0 Anatomía
                  p.mb-0 Se refiere a la estructura del cuerpo.
          .col-lg-6.col-md-6.mb-3
            .tarjeta.bg-5.p-4.py-3.h-100
              .row.justify-content-center.align-items-center
                .col-lg-4.col-md-4.col-4
                  img(src='@/assets/curso/temas/t1/tarj1-3.png', alt='')
                .col-lg-8.col-md-8.col-8
                  .bg-color-acento-contenido.w-fit.text-white.py-1.px-3.mb-2.mb-lg-3
                    h4.mb-0 Biomecánica
                  p.mb-0 Corresponde al movimiento corporal.
          .col-lg-6.col-md-6.mb-3
            .tarjeta.bg-5.p-4.py-3.h-100
              .row.justify-content-center.align-items-center
                .col-lg-4.col-md-4.col-4
                  img(src='@/assets/curso/temas/t1/tarj1-4.png', alt='')
                .col-lg-8.col-md-8.col-8
                  .bg-color-acento-contenido.w-fit.text-white.py-1.px-3.mb-2.mb-lg-3
                    h4.mb-0 Morfología
                  p.mb-0 Hace referencia a la geometría del cuerpo (huesos y uniones).
          .col-lg-6.col-md-6.mb-3
            .tarjeta.bg-5.p-4.py-3.h-100
              .row.justify-content-center.align-items-center
                .col-lg-4.col-md-4.col-4
                  img(src='@/assets/curso/temas/t1/tarj1-5.png', alt='')
                .col-lg-8.col-md-8.col-8
                  .bg-color-acento-contenido.w-fit.text-white.py-1.px-3.mb-2.mb-lg-3
                    h4.mb-0 Ergonomía
                  p.mb-0 Abarca la postura.



  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
