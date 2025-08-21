<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis y clasificación de las medidas

    .bloque-texto-g.bg-1.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/1.jpg')})`}")
      .bloque-texto-g__texto.tarjeta.p-4.py-5
        p.mb-0 El análisis de medidas es un paso esencial en el desarrollo de patrones, ya que consiste en interpretar las dimensiones del cuerpo humano y convertirlas en datos útiles para el trazado técnico de la moldería. El proceso comienza con la toma precisa de medidas corporales, que deben realizarse siguiendo una metodología estandarizada para asegurar la fiabilidad de los resultados.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p.mb-4 Una vez tomadas, estas medidas deben ser clasificadas según su función en el patronaje, lo que permite identificar cuáles son estructurales (como el contorno de busto, cintura y cadera, el largo de talle o el ancho de espalda) y cuáles son complementarias o de detalle, como el largo de pinza, el ancho de escote o la altura de cadera. Esta clasificación facilita su uso correcto en el diseño del patrón base y en la posterior transformación de modelos.
        .bg-color-adicional-1.p-4.mb-4
          .row.justify-content-center
            .col-lg-2.col-md-2.d-none.d-md-block
              img.px-lg-3(src='@/assets/curso/temas/t2/2.svg', alt='')              
            .col-lg-10.col-md-10
              p.mb-0 Además, es importante #[strong establecer un sistema claro de medidas], el cual puede ser individual (a medida) o estandarizado (por tallas). En ambos casos, el orden y la correcta interpretación de las medidas son fundamentales para garantizar la coherencia en la construcción de las piezas del patrón, asegurando que estas respondan a las proporciones reales del cuerpo y a las características funcionales y estéticas de la prenda.
        p Por tanto, una adecuada clasificación de las medidas, sustentada en parámetros normativos y acompañada de un análisis riguroso, permite optimizar el ajuste anatómico y la comodidad de las prendas. Asimismo, contribuye a mejorar la precisión y eficiencia en los procesos de diseño, trazado y confección, tanto en contextos de producción a pequeña escala como en entornos industriales del sector moda.
      .col-lg-4.col-md-8.col-9(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/3.jpg', alt='')

    .py-3

    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Clasificación - sistemas de medidas

    .row.justify-content-center.mb-4
      .col-lg-5.mb-3.mb-lg-0(data-aos="fade-right")
        .tarjeta.bg-2.p-4.px-lg-5.h-100
          p El sistema de medidas en el área de patronaje hace referencia al conjunto de técnicas y procesos que se utilizan para obtener y dar aplicación con los datos obtenidos de las medidas corporales, las cuales han de ser precisas en la elaboración de patrones de prendas de vestir. 
          p.mb-0 Del proceso de medición dependerá el ajuste y horma de una prenda sobre el cuerpo en donde la proporcionalidad, comodidad y estética se conjuguen con el objetivo de tener un resultado esperado. 
      .col-lg-7(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/4.png', alt='')
    
    .row.bgcta-1.align-items-center.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-12
              .tarjeta.color-secundario.p-3
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-1
                    img(src="@/assets/curso/temas/t2/pdf.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h4.mb-1.text-white Medidas anatómicas
                        p.mb-0 Consultar el siguiente PDF, donde ampliará la información de la temática tratada:
                      .col-sm-auto
                        a.boton.text-white(:href="obtenerLink('/downloads/Medidas_anatomicas.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download

    .py-3

    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Normatividad

    .bloque-texto-g.bg-3.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/5.jpg')})`}")
      .bloque-texto-g__texto.tarjeta.p-4
        p.mb-0 A nivel internacional y nacional se plantean diversas normas para la toma de medidas corporales, entre las que se encuentran: #[br] #[br]
        p Norma Técnica Colombiana NTC-ISO 8559:1995. Fabricación de vestuario y estudios antropométricos. Dimensiones corporales. #[br] #[br]
        p.mb-0 Norma UNE-EN 13402-3. Etiquetado de tallas de prendas de vestir, enfocadas al beneficio del consumidor. 

    .row.bgcta-1.align-items-center(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-12
              .tarjeta.color-secundario.p-3
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-1
                    img(src="@/assets/curso/temas/t2/pdf.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h4.mb-1.text-white Análisis de tallas y medidas
                        p.mb-0 Consultar el siguiente PDF, donde ampliará la información de la temática tratada:
                      .col-sm-auto
                        a.boton.text-white(:href="obtenerLink('/downloads/Analisis_de_tallas_y_medidas.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Tema2',
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
