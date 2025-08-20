<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-5 La estructura corporal y el cuadro de tallas constituyen un eje fundamental en el diseño y la confección de prendas, ya que permiten comprender las proporciones y características del cuerpo humano para lograr un ajuste preciso y estético. Este enfoque integra disciplinas como la antropometría, la anatomía, la biomecánica, la morfología y la ergonomía, las cuales aportan datos esenciales para el desarrollo de patrones y la clasificación de medidas según normativas establecidas. Asimismo, se relaciona directamente con la tipología de prendas y la construcción de patrones base que sirven como punto de partida en la industria textil.    

    .row.justify-content-center.mb-5
      .col-lg-9
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El esquema organiza los conceptos en tres áreas principales: la estructura corporal femenina, el análisis y clasificación de las medidas con sus sistemas y normatividad, y la tipología de prendas con sus patrones básicos. Este enfoque integral permite unificar criterios técnicos para crear prendas funcionales y adaptadas a diversas siluetas, garantizando precisión en el tallaje y coherencia en el proceso de diseño.")
    
    .row.justify-content-center  
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
