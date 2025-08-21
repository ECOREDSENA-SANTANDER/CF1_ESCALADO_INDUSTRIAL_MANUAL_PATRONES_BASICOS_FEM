<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tipología de prendas y patrones básicos femeninos

    .bloque-texto-g.bg-1.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/1.jpg')})`}")
      .bloque-texto-g__texto.tarjeta.p-4.py-5
        p.mb-0 Las tipologías de prendas de vestir femeninas permiten organizar el amplio espectro de opciones disponibles según su función, silueta y contexto de uso. Cada categoría, desde vestidos y faldas hasta blusas, pantalones y chaquetas, responden a criterios de forma, longitud, confección y materiales que definen estilos que van de lo casual a lo formal. Esta clasificación facilita el estudio de patrones, cortes y texturas, así como la adaptación de cada diseño a las necesidades estéticas y funcionales de la persona usuaria, garantizando coherencia en la planificación de colecciones, la elaboración de patrones y las pruebas de ajuste.

    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido
        h5 Tabla 1.
        span Tipologías de prendas femeninas   
      .tabla-a.tem3.color-acento-contenido
        table
          caption Fuente: SENA, s. f.
          thead
            tr.bg-6
              th Tipología
              th Subtipos representativos
              th Descripción y uso habitual
          tbody
            tr
              td Vestidos
              td Casual, de cóctel, de gala, camisero.
              td Prenda de una sola pieza que cubre torso y falda; varía en longitud y formalidad según la ocasión.
            tr
              td Faldas
              td Mini, midi, larga, plisada, tubo.
              td Prenda inferior separada; ofrece versatilidad desde #[em looks] informales hasta estilos más estructurados.
            tr
              td Blusas y #[em tops]
              td Camisas, blusas de manga larga, #[em crop tops], túnicas.
              td Prenda superior ligera; puede incorporar detalles de volantes, drapeados o cortes asimétricos para diferentes siluetas.
            tr
              td Pantalones
              td #[em Jeans], #[em palazzo], pitillo, #[em jogger].
              td Prenda inferior con múltiples cortes y tejidos; combina confort y estilo según el ajuste y el material.
            tr
              td Chaquetas y abrigos
              td #[em Blazer], #[em trench], #[em bomber], abrigo largo.
              td Prenda exterior destinada a aportar estructura y abrigo; su diseño define el nivel de formalidad y protección.
            tr
              td Monos y enterizos
              td #[em Jumpsuit], peto, overol.
              td Prenda de una sola pieza con torso y pantalón; combina funcionalidad y estética en un solo elemento.
            tr
              td Fajas y corsetería
              td Faja moldeadora, corsé, #[em body].
              td Prenda de ajuste que redefine la silueta; se emplea tanto como base estructural como prenda de exterior según el diseño.

    p El estudio de las figuras por tipología permite clasificar los distintos tipos de silueta corporal a partir de características morfológicas específicas, como la proporción entre hombros, cintura y caderas. La categorización es fundamental en el diseño de vestuario, ya que facilita la creación de prendas que se ajusten de manera armoniosa y funcional a las diferentes estructuras corporales.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos="fade-right")
        .bg-slider.tarjeta.p-4
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-md-10.col-lg-9
                h4 Vestidos
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 4.
                  span Tipologías de vestido
                figure
                  img(src='@/assets/curso/temas/t3/fig4.png', alt='Se presentan diferentes diseños de vestido clasificados según su tipología, considerando aspectos como el corte, la silueta, el largo, la estructura del escote y la presencia o ausencia de mangas. Esta clasificación permite identificar las variaciones en el diseño y funcionalidad de las prendas, lo cual es clave para el desarrollo de colecciones, el patronaje y la adecuación al tipo de cuerpo o contexto de uso.')
            .row.justify-content-center
              .col-md-10.col-lg-9
                h4 Faldas
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 5.
                  span Tipologías de faldas
                figure
                  img(src='@/assets/curso/temas/t3/fig5.svg', alt='Conjunto de catorce ilustraciones de faldas organizadas en tres filas. Cada imagen representa una tipología diferente, identificada con un nombre en la parte inferior. Las variaciones incluyen estructuras como línea A, godet, plisada, lápiz, asimétrica, cruzada, circular, con volantes o tipo sirena. Las formas abarcan desde diseños ajustados hasta voluminosos, con longitudes y caídas diversas.')
            .row.justify-content-center
              .col-md-10.col-lg-9
                h4 Blusas y #[em tops]
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 6.
                  span Tipologías de #[em tops] y blusas
                figure
                  img(src='@/assets/curso/temas/t3/fig6.svg', alt='Conjunto de dieciocho escotes femeninos representados mediante siluetas. Se incluyen formas cerradas, redondeadas, en punta, con aberturas pequeñas, líneas rectas, curvas suaves y estructuras asimétricas. Algunos cubren por completo el cuello, otros dejan los hombros libres o incorporan tiras delgadas. También hay diseños con cortes en diagonal, cruces frontales, curvas profundas o elementos que se ajustan desde el cuello, mostrando una variedad de estilos que modelan el área superior del torso.')
            .row.justify-content-center
              .col-md-10.col-lg-9
                h4 Pantalones
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 7.
                  span Tipologías de pantalones
                figure
                  img(src='@/assets/curso/temas/t3/fig7.svg', alt='Conjunto de doce ilustraciones de pantalones distribuidos en dos filas. Cada figura representa una silueta distinta, con variaciones en el ajuste, caída y largo. Hay modelos ajustados al cuerpo, rectos, con corte acampanado, amplios desde la cadera o de piernas anchas. También se incluyen versiones con el ruedo ceñido, formas relajadas, estructuras sueltas o versiones cortas por encima de la rodilla.')
            .row.justify-content-center
              .col-md-10.col-lg-9
                h4 Chaquetas y abrigos
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 8.
                  span Tipologías de chaquetas
                figure
                  img(src='@/assets/curso/temas/t3/fig8.png', alt='Nueve ilustraciones de chaquetas con distintas estructuras. Algunas tienen solapas anchas, otros cierres visibles, cortes rectos o ajustados. Variaciones en cuello, bolsillos y longitud definen cada diseño.')
            .row.justify-content-center
              .col-md-10.col-lg-9
                h4 Chaquetas y abrigos
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 9.
                  span Tipologías de abrigos
                figure
                  img(src='@/assets/curso/temas/t3/fig9.png', alt='Nueve ilustraciones de abrigos largos con variaciones en cuello, número de botones, bolsillos y proporción. Algunos tienen doble fila de cierre, otros capucha o solapas amplias. Las siluetas van desde entalladas hasta rectas.')
            .row.justify-content-center
              .col-md-10.col-lg-9
                h4 Monos y enterizos
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 10.
                  span Tipologías de enterizos
                figure
                  img(src='@/assets/curso/temas/t3/fig10.png', alt='Veinticuatro ilustraciones de enterizos femeninos distribuidos en tres filas. Incluyen versiones largas y cortas, con diferentes tipos de mangas, tirantes, escotes y cortes. Las siluetas varían entre ajustadas, rectas y amplias.')
            .row.justify-content-center
              .col-md-10.col-lg-9
                h4 Fajas y corsetería
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 11.
                  span Tipos de #[em corsets]
                figure
                  img(src='@/assets/curso/temas/t3/fig11.png', alt='Ocho ilustraciones técnicas de prendas superiores ajustadas tipo corsé, organizadas en dos filas. Cada una presenta variaciones en longitud, presencia o ausencia de tirantes, cortes verticales, estructura de copas y terminaciones inferiores.')
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/2.png', alt='')

    p En este punto, las prendas que se abordarán serán las básicas por cada tipología, es decir, blusa, falda, pantalón y complementos como la manga y cuellos. 

    .row.justify-content-center.mb-3
      .col-lg-6.mb-3.mb-lg-0(data-aos="fade-right")
        .bg-7.p-4.h-100.mb-3
          .titulo-sexto.color-acento-contenido
            h5 Figura 12.
            span Blusa básica sin manga
          .row.justify-content-center
            .col-lg-8.col-md-7
              figure
                img(src='@/assets/curso/temas/t3/fig12.svg', alt='Diseño de camisa sin mangas con corte entallado, cuello clásico, botonadura central y bolsillo en el pecho. La parte trasera incluye pinzas para ajuste y bajo levemente redondeado.')
      .col-lg-6.mb-3.mb-lg-0(data-aos="fade-left")
        .bg-7.p-4.h-100.mb-3
          .titulo-sexto.color-acento-contenido
            h5 Figura 13.
            span Camisa básica con manga
          .row.justify-content-center
            .col-lg-10.col-md-9
              figure
                img(src='@/assets/curso/temas/t3/fig13.svg', alt='Camisa de manga larga con corte entallado, cuello clásico, botonadura frontal y puños con abertura y cierre. La espalda incluye pinzas de ajuste y bajo curvo.')

    .row.justify-content-center
      .col-lg-6.mb-3.mb-lg-0(data-aos="fade-right")
        .bg-7.p-4.h-100.mb-3
          .titulo-sexto.color-acento-contenido
            h5 Figura 14.
            span Falda básica
          .row.justify-content-center
            .col-lg-12.col-md-10
              figure
                img(src='@/assets/curso/temas/t3/fig14.svg', alt='Falda recta de largo medio con pinzas en la parte delantera y trasera para ajuste. Cuenta con pretina en la cintura y cierre central posterior con cremallera y botón.')
      .col-lg-6.mb-3.mb-lg-0(data-aos="fade-left")
        .bg-7.p-4.h-100.mb-3
          .titulo-sexto.color-acento-contenido
            h5 Figura 15.
            span Pantalón básico
          .row.justify-content-center
            .col-lg-5.col-md-4.col-8
              figure
                img(src='@/assets/curso/temas/t3/fig15.svg', alt='Pantalón de silueta amplia y tiro alto, con pinza frontal para ajuste. Presenta costura central en ambas vistas y dobladillo sencillo en el bajo.')


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1  Tipología de patrones básicos femeninos

    p En el campo del diseño de moda y la confección, los patrones básicos femeninos constituyen la estructura base sobre la cual se construyen las distintas prendas de vestir. Los patrones permiten traducir las proporciones anatómicas en formas planas que, al ensamblarse, se ajustan adecuadamente al cuerpo femenino. 
    p La clasificación de estos patrones se realiza según la zona del cuerpo que cubren y su función estructural dentro del diseño de la prenda, por ejemplo:

    .py-3
  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5(data-aos="fade-right")
        .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
          .subt--img
            img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .subt--text
            h3.mb-0 Patrón base de torso
        p Es el molde esencial que representa el contorno del busto, la cintura y la cadera, sin incorporar detalles de estilo ni transformaciones de diseño. Su trazado se fundamenta en medidas clave como:
        .row.justify-content-center.align-items-center
          .col-lg-5.col-md-4.col-4
            img(src='@/assets/curso/temas/t3/4.svg', alt='')
          .col-lg-7.col-md-8.col-8
            ul.lista-ul--color.fa-lista.mb-0
              li
                i.fas.fa-check
                span.mb-0 La altura del busto. 
              li
                i.fas.fa-check
                span.mb-0 La profundidad de sisa.
              li
                i.fas.fa-check
                span.mb-0 La línea de cintura. 
              li
                i.fas.fa-check
                span.mb-0 La línea de cadera.
              li
                i.fas.fa-check
                span.mb-0 La inclinación del hombro.
      .col-lg-7.col-md-9(fade="fade-left")
        img(src='@/assets/curso/temas/t3/3.png', alt='')

    .bg-5.p-4
      .row.justify-content-center
        .col-lg-1.col-md-2.d-none.d-md-block
          img(src='@/assets/curso/temas/t3/5.svg', alt='')              
        .col-lg-11.col-md-10
          p Estas referencias permiten generar un patrón que respete las proporciones corporales y establezca una base precisa para futuras modificaciones estilísticas o funcionales.
          p.mb-0 Este patrón cumple una función #[strong anatómica y estructural], ya que permite desarrollar prendas ajustadas a la silueta femenina con precisión técnica, garantizando la correcta caída y adaptación del textil en las zonas más complejas del cuerpo.

    .row.bgc-2.align-items-center.p-4.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-12
              .titulo-sexto.color-acento-contenido
                h5 Figura 16.
                span Patrón base de torso 
            .col-lg-7.col-md-9.col-12
              figure.mb-3
                img(src='@/assets/curso/temas/t3/fig16.svg', alt='Esquema del trazo base superior femenino que integra las piezas delantera y trasera con distribución simétrica. Contiene divisiones proporcionales al cuerpo como el ancho de pecho, ancho de espalda, contorno de busto y profundidad de sisa. Incluye referencias para hombros, escote, costados, pinzas y línea de cintura, organizadas mediante fracciones.')
              figcaption Fuente: SENA, (2021)

    .py-3

    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Patrón base de falda

    p El patrón base de falda se diseña a partir de la medida de cintura y del contorno de cadera, definiendo dos piezas: la pieza frontal y la pieza posterior. La intersección de las líneas de desarrollo vertical y horizontal determina la amplitud del bajo y la caída del tejido, permitiendo configurar siluetas rectas, #[em evasé] o línea A. Las pinzas se reservan para ajustes de volumen y forma en etapas posteriores del proceso.

    .row.bgc-2.align-items-center.p-4.mb-4(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-12
              .titulo-sexto.color-acento-contenido
                h5 Figura 17.
                span Patrón base de falda
            .col-lg-10.col-md-10.col-12
              figure.mb-3
                img(src='@/assets/curso/temas/t3/fig17.svg', alt='Esquema técnico del trazo base de falda femenina compuesto por las piezas delantera y posterior. Cada parte está organizada con medidas proporcionales al cuerpo, como cintura dividida en cuatro menos la pinza, y cadera dividida en cuatro. El diseño incluye largo total, líneas de cadera, ubicación y profundidad de pinzas, así como curvatura en la cintura delantera.')
              figcaption Fuente: SENA, (2021)

    .py-3

    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Patrón base de pantalón

    p El patrón base de pantalón integra el trazado de la pernera, el tiro delantero y el tiro posterior, junto con la línea de cadera y la altura de cintura posterior. La geometría del molde se fundamenta en las medidas de contorno de cintura, cadera y muslo, y establece la posición de las costuras interna y externa de pernera. De este modo, se garantiza la funcionalidad mecánica al sentarse y al desplazarse sin incluir adiciones estilísticas.

    .row.bgc-2.align-items-center.p-4.mb-4(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-12
              .titulo-sexto.color-acento-contenido
                h5 Figura 18.
                span Patrón básico de pantalón
            .col-lg-5.col-md-8.col-10
              figure.mb-3
                img(src='@/assets/curso/temas/t3/fig18.svg', alt='Esquema técnico del trazo base posterior de pantalón femenino. Incluye pinza de ajuste en la cintura, curva anatómica para la línea de tiro y medidas proporcionales. Se señalan dimensiones específicas para largo de pinza, entrepierna, bajada de tiro y márgenes de confección en costados, cintura y bota.')
              figcaption Fuente: SENA, (2021)

    .py-3

    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Patrón base de manga montada

    p El patrón base de manga montada se construye mediante el cálculo del radio de hombro y de la profundidad de sisa para definir la copa de la manga. Esta curvatura superior se ajusta al contorno de la abertura de sisa, posibilitando rangos de movimiento en flexión y abducción. Sirve de referencia para variantes como la manga ranglán (con prolongación de costura hacia el cuello) y la manga francesa (de longitud tres cuartos) sin alterar la estructura básica que garantiza el encaje anatómico.

    .row.bgc-2.align-items-center.p-4.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-12
              .titulo-sexto.color-acento-contenido
                h5 Figura 19.
                span Patrón base de manga
            .col-lg-6.col-md-9.col-12
              figure.mb-3
                img(src='@/assets/curso/temas/t3/fig19.svg', alt='Esquema técnico del trazo base de una manga larga. Presenta forma curva en la parte superior correspondiente a la cabeza de manga, con diferenciación entre el largo de sisa delantero y trasero. Se indican medidas estándar para la altura de copa, el ancho del puño y el largo total de la manga. La estructura está centrada por un eje vertical que organiza simétricamente ambos lados.')
              figcaption Fuente: SENA, (2021)

    .py-3

    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Patrón base de cuello

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-8.col-9.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/t3/6.png', alt='')
      .col-lg-8
        p El patrón base de cuello se genera a partir de la medida del contorno de escote del patrón de torso y de la altura deseada del cuello. En primer lugar, se traza la línea inferior, que coincide con la línea de escote, y a continuación se determina la línea superior, definida por la altura del cuello en reposo. El contorno se cierra mediante líneas laterales que siguen la inclinación natural del hombro. Esta pieza básica incluye dos partes: la pieza de soporte o “#[em stand]” y la pieza de caída o “#[em fall]”, la curva del #[em stand] se ajusta al escote, mientras que la caída define el solape y la caída estética del cuello.
        .row.justify-content-center.align-items-center
          .col-lg-2.col-md-2.d-none.d-md-block
            img.px-lg-3(src='@/assets/curso/temas/t3/7.svg', alt='')              
          .col-lg-10.col-md-10
            p.mb-0 La correcta colocación de la línea de hilo garantiza el comportamiento adecuado del tejido. El patrón base de cuello sirve de referencia para variantes como el cuello camisero, el cuello mao o el cuello “Peter Pan”, todas ellas derivadas de la misma geometría fundamental.

    .row.bgc-2.align-items-center.p-4(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-12
              .titulo-sexto.color-acento-contenido
                h5 Figura 20.
                span 
            .col-lg-6.col-md-9.col-12
              figure.mb-3
                img(src='@/assets/curso/temas/t3/fig20.svg', alt='Esquema técnico del desarrollo de una copa de manga tipo sastre. Incluye dos piezas curvas con indicaciones métricas para elevación, largo y separación entre líneas. Se señalan puntos de rotación, marcas de montaje y referencias geométricas para guiar el armado de la estructura.')
              figcaption Fuente: SENA, (2021)



</template>

<script>
export default {
  name: 'Tema3',
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
