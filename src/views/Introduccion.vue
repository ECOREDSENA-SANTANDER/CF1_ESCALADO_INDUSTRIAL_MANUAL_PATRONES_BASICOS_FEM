<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4(data-aos="fade") En este espacio se desarrollan de manera integrada los fundamentos esenciales para adaptar el vestuario a las características morfoestructurales del cuerpo humano, a partir de enfoques anatómicos, antropométricos, biomecánicos, morfológicos y ergonómicos. La comprensión profunda de las proporciones, dinámicas corporales y particularidades del cuerpo femenino no solo permite diseñar prendas funcionales y estéticamente armoniosas, sino que también sustenta la aplicación de procesos técnicos de graduación con altos estándares de precisión, acordes con las exigencias de la producción industrial.
    
    .row.justify-content-center.mb-4
      .col-lg-3.col-md-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-lg-9(data-aos="fade-left")
        .bg-color-adicional-1.h-100.p-4
          .row.justify-content-center
            .col-lg-2.col-md-2.d-none.d-md-block
              img.px-lg-3(src='@/assets/curso/temas/intro/2.svg', alt='')              
            .col-lg-10.col-md-10
              p.mb-0 El estudio se inicia con el análisis de la estructura corporal femenina desde cinco perspectivas complementarias: la #[strong antropometría], que aporta métodos de medición estandarizada; la #[strong anatomía], que describe la forma y disposición de las partes del cuerpo; la #[strong biomecánica], que interpreta los movimientos corporales; la #[strong morfología], que permite clasificar las siluetas; y la #[strong ergonomía], que orienta la adecuación funcional de las prendas al uso cotidiano. Con base en estos fundamentos, se avanza hacia la clasificación de medidas, la identificación de los sistemas de medición utilizados en la industria de la confección, y el reconocimiento de las normativas que regulan la estandarización del tallaje en contextos nacionales e internacionales.

    p.mb-4(data-aos="fade") A través de esta integración temática, el SENA fortalece la formación del talento humano, dotándolo de capacidades para intervenir en procesos de escalado industrial orientados al diseño y confección de prendas femeninas. Se brindan bases conceptuales y operativas que permiten a los y las aprendices consolidar competencias técnicas, comunicativas y analíticas, en sintonía con las exigencias del sector moda y con los estándares de calidad institucional que distinguen a la Entidad

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
