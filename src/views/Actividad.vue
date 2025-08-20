<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Estructura corporal y tipologías de patrones básicos.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar elementos conceptuales de la estructura corporal y tipologías de patrones básicos. ',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'La estructura corporal se define únicamente a partir de la apariencia externa del cuerpo humano. ',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La selección indica comprensión adecuada de los conceptos relacionados con la estructura corporal y la tipología de patrones básicos, esenciales en el diseño de prendas ergonómicas y funcionales. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 2,
          texto:
            'La antropometría permite analizar las proporciones del cuerpo humano y es útil en el diseño de prendas ergonómicas. ',
          imagen: require('@/assets/actividad/imagen2.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La selección indica comprensión adecuada de los conceptos relacionados con la estructura corporal y la tipología de patrones básicos, esenciales en el diseño de prendas ergonómicas y funcionales. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 3,
          texto:
            'La anatomía estudia únicamente los órganos internos del cuerpo humano, sin relación con la confección de vestuario. ',
          imagen: require('@/assets/actividad/imagen3.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La selección indica comprensión adecuada de los conceptos relacionados con la estructura corporal y la tipología de patrones básicos, esenciales en el diseño de prendas ergonómicas y funcionales. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 4,
          texto:
            'La biomecánica analiza las fuerzas que actúan sobre el cuerpo y su relación con el sistema musculoesquelético. ',
          imagen: require('@/assets/actividad/imagen4.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La selección indica comprensión adecuada de los conceptos relacionados con la estructura corporal y la tipología de patrones básicos, esenciales en el diseño de prendas ergonómicas y funcionales. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 5,
          texto:
            'La ergonomía aplicada al diseño de prendas busca principalmente la estética, sin considerar la comodidad del cuerpo. ',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La selección indica comprensión adecuada de los conceptos relacionados con la estructura corporal y la tipología de patrones básicos, esenciales en el diseño de prendas ergonómicas y funcionales. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 6,
          texto:
            'El patrón base de torso contempla desde su trazado inicial pliegues de estilo y variaciones de diseño. ',
          imagen: require('@/assets/actividad/imagen2.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La selección indica comprensión adecuada de los conceptos relacionados con la estructura corporal y la tipología de patrones básicos, esenciales en el diseño de prendas ergonómicas y funcionales. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 7,
          texto:
            'El patrón base de falda se estructura a partir de las medidas de cintura y cadera, y permite construir distintas siluetas como línea A o <em>evasé</em>. ',
          imagen: require('@/assets/actividad/imagen3.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La selección indica comprensión adecuada de los conceptos relacionados con la estructura corporal y la tipología de patrones básicos, esenciales en el diseño de prendas ergonómicas y funcionales. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 8,
          texto:
            'El patrón base de pantalón considera la integración de costuras, tiros, y medidas anatómicas para asegurar funcionalidad sin incluir elementos estéticos. ',
          imagen: require('@/assets/actividad/imagen4.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La selección indica comprensión adecuada de los conceptos relacionados con la estructura corporal y la tipología de patrones básicos, esenciales en el diseño de prendas ergonómicas y funcionales. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 9,
          texto:
            'La copa de la manga montada no está relacionada con la profundidad de la sisa ni con el contorno del brazo. ',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La selección indica comprensión adecuada de los conceptos relacionados con la estructura corporal y la tipología de patrones básicos, esenciales en el diseño de prendas ergonómicas y funcionales. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 10,
          texto:
            'El patrón base de cuello se compone de una sola pieza que define la caída del escote. ',
          imagen: require('@/assets/actividad/imagen2.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La selección indica comprensión adecuada de los conceptos relacionados con la estructura corporal y la tipología de patrones básicos, esenciales en el diseño de prendas ergonómicas y funcionales. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
      ],
      mensaje_final_aprobado:
        'Ha captado con claridad los conceptos de “Estructura corporal y cuadro de tallas”. ¡Continúe aprendiendo y explorando este apasionante tema!',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica. ',
    },
  }),
}
</script>
