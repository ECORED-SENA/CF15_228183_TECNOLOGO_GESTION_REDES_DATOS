export default {
  global: {
    componenteFormativo: 'Gestión de recursos tecnológicos',
    descripcionCurso:
      'A través de este componente formativo, el aprendiz debe apropiar los elementos y conceptos necesarios para la gestión de los recursos tecnológicos, empleando herramientas de administración y monitoreo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
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
        titulo: 'Conceptos básicos de la supervisión de redes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '¿Qué es el monitoreo de red?',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: '¿Qué es la gestión de redes?',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Gestión del rendimiento de la red',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas de monitoreo de red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '¿Qué es el monitoreo de red en tiempo real?',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: '¿Qué es la gestión de servidores?',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: '¿Qué es SNMP?',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de servidor virtual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: '¿Qué es la gestión de servidores virtuales?',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: '¿Qué es la supervisión de red sin agentes?',
            hash: 't_3_2',
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
        download: 'downloads/228183_CF15_DU.pdf',
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
      tema: '¿Qué es SNMP?',
      referencia:
        'Briceño, C. R. (2004). Protocolo SNMP (protocolo sencillo de administración de redes). <i>Télématique</i>, 3(1), p. 90-102. ',
      tipo: 'Artículo',
      link: 'https://www.redalyc.org/pdf/784/78430108.pdf',
    },
    {
      tema: 'Gestión de servidor virtual',
      referencia:
        'Chahin-Noreña, J. A. (2015). <i>Metodología ACRD para la gestión de seguridad en entornos virtuales (Master&lsquo;s thesis)</i>. Repositorio digital UNIR.',
      tipo: 'Tesis de maestría',
      link: 'https://reunir.unir.net/handle/123456789/3510',
    },
  ],
  glosario: [
    {
      termino: 'Agente',
      significado:
        '<i>software</i> programado para realizar una función específica.',
    },
    {
      termino: 'Administración dentro de banda',
      significado:
        'se utiliza para monitorear y realizar cambios en la configuración de un dispositivo de red.',
    },
    {
      termino: 'Dirección IP',
      significado:
        '32 <i>bytes</i> que identifican a un equipo en una red. Se representa en notación decimal punteada.',
    },
    {
      termino: 'Dispositivo',
      significado:
        'pieza de un equipo informático que realiza una función específica.',
    },
    {
      termino: '<i>Hardware</i>',
      significado:
        'dispositivo, equipo, aparato. Parte física o tangible del ordenador.',
    },
    {
      termino: '<i>Host</i>',
      significado:
        'dispositivo que participa directamente en la comunicación de la red.',
    },
    {
      termino: 'Internet',
      significado:
        'conjunto de redes a nivel mundial interconectadas entre sí.',
    },
    {
      termino: 'SNMP',
      significado:
        'es un protocolo de la capa de aplicación que facilita el intercambio de información y de administración entre dispositivos de red.',
    },
    {
      termino: 'URL',
      significado:
        'localización uniforme de recursos. Cadena alfanumérica en un formato específico que representa un dispositivo.',
    },
    {
      termino: 'WAN',
      significado:
        'redes que abarcan regiones, países, por ejemplo, empresas de telecomunicaciones.',
    },
    {
      termino: 'WPAN',
      significado:
        'es la red inalámbrica más pequeña, utilizada para conectar varios dispositivos periféricos como <i>mouse</i>, teclados y PDA a una computadora.',
    },
  ],
  referencias: [
    {
      referencia:
        'Beekman, G. (2005). <i>Introducción a la informática</i> (traductor Díaz Martín, José Manuel). Pearson Educación.',
    },
    {
      referencia:
        'Briceño, C. R. (2004). <i>Protocolo SNMP (protocolo sencillo de administración de redes). Télématique</i>, 3(1), p. 90-102. ',
      link: 'https://www.redalyc.org/pdf/784/78430108.pdf',
    },
    {
      referencia:
        'Ding, J. (2016). <i>Advances in network management</i>. CRC Press.',
    },
    {
      referencia:
        'Junco, G., y Rabelo, S. (2018). Los recursos de red y su monitoreo. <i>Revista Cubana de Informática Médica</i>, 10(1), p. 76-83.',
    },
    {
      referencia:
        'Lorge, F., Ricci, S., Iglesias, A., Meloni, M., & Fernández, M. (2020). <i>Protocolo SNMP</i>.',
    },
    {
      referencia:
        'Parra, A., y Mendieta, S. (2005). <i>Protocolo SNMP simple network management protocol.</i>',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Eliécer Loaiza Muñoz',
          cargo: 'Instructor',
          centro: 'Centros de Servicios y Gestión Empresarial - Antioquia',
        },
        {
          nombre: 'Carlos Mauricio Tovar Artunduaga',
          cargo: 'Instructor',
          centro: 'Centros de Servicios y Gestión Empresarial - Antioquia',
        },
        {
          nombre: 'Heidi Zuleyma Gil Castañeda',
          cargo: 'Experta temática',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Huila',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodólogo para formación virtual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
