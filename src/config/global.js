export default {
  global: {
    Name: 'Estructura corporal y cuadro de tallas',
    Description:
      'El componente formativo estructura corporal y cuadro de tallas proporciona fundamentos anatómicos, antropométricos, biomecánicos, morfológicos y ergonómicos para la interpretación del cuerpo femenino en contextos de diseño y confección. A partir de estos saberes, el o la aprendiz desarrolla competencias técnicas para clasificar medidas, aplicar sistemas de tallaje y proyectar escalado industrial con base en normativas y criterios de precisión propios del sector moda.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estructura corporal femenina',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis y clasificación de las medidas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tipología de prendas y patrones básicos femeninos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipología de patrones básicos femeninos',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tipología de prendas y patrones básicos femeninos.',
      referencia:
        'Turnes, C. (2021). Moda y Vestuario: universos paralelos con infinitas posibilidades de encuentro. Cuadernos Del Centro de Estudios de Diseño y Comunicación, (100), 138–148. ',
      tipo: 'Artículo.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=TN_cdi_dialnet_primary_oai_dialnet_unirioja_es_ART0001435054&context=PC&vid=SENA&lang=es_ES&search_scope=sena_completo&adaptor=primo_central_multiple_fe&tab=sena_completo&query=any,contains,universos%20del%20vestuario&mode=Basic',
    },
  ],
  glosario: [
    {
      termino: 'Antropometría',
      significado:
        'disciplina que estudia y aplica las mediciones del cuerpo humano para su análisis estructural y funcional, especialmente útil en el diseño de prendas y sistemas de tallaje.',
    },
    {
      termino: 'Anatomía',
      significado:
        'ciencia que describe la estructura, forma y organización de los órganos y sistemas del cuerpo humano, utilizada como base para el diseño técnico del vestuario.',
    },
    {
      termino: 'Biomecánica',
      significado:
        'campo de estudio que analiza el movimiento y las fuerzas que actúan sobre el cuerpo, relevante en el diseño de prendas que respeten la movilidad y funcionalidad corporal.',
    },
    {
      termino: 'Cuadro de tallas',
      significado:
        'herramienta técnica que organiza y sistematiza medidas estandarizadas para clasificar prendas según diferentes tallas dentro de procesos de producción industrial.',
    },
    {
      termino: 'Deducción de medidas',
      significado:
        'operación mediante la cual se ajustan las medidas base para definir tallas más pequeñas dentro del cuadro de progresiones del escalado.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'disciplina que adapta productos y entornos a las características fisiológicas y psicológicas del ser humano, garantizando funcionalidad, confort y seguridad en el uso de prendas.',
    },
    {
      termino: 'Escalado industrial',
      significado:
        'proceso técnico mediante el cual se amplían o reducen patrones base para generar distintas tallas manteniendo las proporciones y ajustes originales.',
    },
    {
      termino: 'Línea de cadera',
      significado:
        'referencia horizontal en los patrones básicos que marca el contorno más ancho del cuerpo femenino en la zona pélvica.',
    },
    {
      termino: 'Línea de sisa',
      significado:
        'curva del patrón base que se corresponde con la articulación del hombro y permite el ensamblaje de la manga, garantizando el movimiento del brazo.',
    },
    {
      termino: 'Medidas anatómicas',
      significado:
        'valores métricos que representan dimensiones corporales específicas tomadas directamente del cuerpo humano mediante instrumentos de medición.',
    },
    {
      termino: 'Morfologia',
      significado:
        'estudio de la forma externa del cuerpo, incluyendo siluetas y proporciones, que permite clasificar y adaptar patrones a diferentes biotipos.',
    },
    {
      termino: 'Patrón base',
      significado:
        'molde inicial que representa las medidas y proporciones del cuerpo sin transformaciones estilísticas, utilizado como referencia para el diseño y escalado de prendas. ',
    },
    {
      termino: 'Patrón de cuello',
      significado:
        'pieza complementaria que se construye a partir del contorno del escote del patrón base de torso y cuya función es dar forma estructural a la zona superior de la prenda.',
    },
    {
      termino: 'Progresión de tallas',
      significado:
        'secuencia de ampliaciones o reducciones aplicadas a un patrón base para generar una serie completa de tallas de manera técnica y proporcional. ',
    },
    {
      termino: 'Sistema de medidas',
      significado:
        'conjunto organizado de criterios y normas que definen cómo se toman, clasifican y aplican las medidas corporales en la industria del vestuario. ',
    },
  ],
  referencias: [
    {
      referencia:
        "Aldrich, W. (2015). Metric pattern cutting for women's wear (6ª ed.). Bloomsbury Publishing.",
    },
    {
      referencia:
        "Cooklin, G. (2008). Pattern grading for women's clothes: The technology of sizing. OM Books.",
    },
    {
      referencia:
        "Handford, J. (2001). Professional pattern grading for women's, men's, and children's apparel. TechStyle Publishing.",
    },
    {
      referencia:
        'Inexmoda (2023). Informe sectorial del sistema moda: industria textil y confección en Colombia. Observatorio de Moda Inexmoda. ',
    },
    {
      referencia:
        'Joseph-Armstrong, H. (2014). Patternmaking for fashion design (5ª ed.). Pearson Education. ',
    },
    {
      referencia:
        'Mallet, K. K., & Zamkoff, B. (2002). Grading techniques for fashion design. Fairchild Books. ',
    },
    {
      referencia:
        'Müller & Sohn. (2020). Grading for women’s and children’s clothing. Verlag Müller & Sohn. ',
    },
    {
      referencia:
        'Muñoz, A. (2019). Manual de patronaje industrial para hombre: Trazado y escalado. Editorial Textil. ',
    },
    {
      referencia:
        'Price, J., & Zamkoff, B. (2002). Concepts of pattern grading: Techniques for manual and computer grading. Fairchild Books. ',
    },
    {
      referencia:
        'Rodríguez, L. (2020). Patronaje industrial de prendas de vestir: Estudios y aplicaciones. Editorial Bogotá. ',
    },
    {
      referencia:
        'Sew Heidi. (2024). Ultimate guide to grading garments for production. Successful Fashion Designer. ',
    },
    {
      referencia:
        'Studio Faro. (2022). Grading women’s patterns. Studio Faro. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar ',
          cargo: 'Experta temática ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
