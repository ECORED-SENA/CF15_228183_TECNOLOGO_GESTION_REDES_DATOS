<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Herramientas de monitoreo de red

    p(data-aos="fade-down") De acuerdo con #[b Junco Romero y Rabelo Padua] (2018), existe un gran número de herramientas para resolver el problema del monitoreo de una red. Las hay tanto comerciales como basadas en #[i software] libre. La elección depende de varios factores, tanto humanos, económicos como de infraestructura:

    .row.justify-content-center.align-items-center.mb-4        
      .col-lg-4.my-3
        .bg6(data-aos="zoom-in")
          .row.justify-content-center           
            .col-lg-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/12.svg', alt='')
            .col
              .p-4.text-white 
                p(data-aos="fade-down").mb-0 El perfil de los administradores y sus conocimientos en determinados sistemas perativos.         
      .col-lg-4.my-3
        .bg6(data-aos="zoom-in")
          .row.justify-content-center           
            .col-lg-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt='')
            .col
              .p-4.text-white 
                p(data-aos="fade-down").mb-0 El perfil de los administradores y sus conocimientos en determinados sistemas perativos.         
      .col-lg-4.my-3
        .bg6(data-aos="zoom-in")
          .row.justify-content-center           
            .col-lg-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/14.svg', alt='')
            .col
              .p-4.text-white 
                p(data-aos="fade-down").mb-0 El perfil de los administradores y sus conocimientos en determinados sistemas perativos.    



    .row.bg7.align-items-center.py-4.pb-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row       
          .col-auto.bg3.p-2.p-top(data-aos="fade-right")
            h5(data-aos="fade-down").mb-0 ¿Cómo se debe seleccionar una herramienta de monitoreo de red?      
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-auto.my-3  
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/16.svg', alt='')
          .col.my-3
            p(data-aos="fade-down").mb-0 Claramente, la selección de la herramienta óptima para monitorear la red debe tener en cuenta los aspectos mencionados anteriormente, como también los alcances deseados, sin olvidar su importancia como herramienta valiosa para todos los procesos de seguridad, gestión, planeación y control; es claro afirmar que la robustez de la herramienta escogida será directamente proporcional al retorno de inversión obtenido por la empresa así como a la estabilidad ofrecida por los sistemas. Así las cosas, en el mercado existen múltiples opciones tanto pagas como de software libre para el desarrollo de esta labor, el reto consiste en definir la más adecuada para las condiciones de la empresa.
        .bg8.brad.p-4.mb-5
          p(data-aos="fade-down").mb-0 #[b Características básicas:] las herramientas de diagnóstico y monitoreo de red deben ofrecer requisitos básicos de monitoreo, incluyendo factores como el monitoreo de mensajes syslog, el monitoreo del ancho de banda, la disponibilidad o el uso; sin embargo, deben tenerse en cuenta además características como la comunicación de las alertas e informes y que estos sean configurables, el soporte a la mayor cantidad de protocolos comunes #[i (SNMP, WMI, CLI) y tecnologías (NetFlow, sFlow, jFlow y Packet sniffing)], la seguridad, la flexibilidad para adaptarse a herramientas o software específico, la usabilidad de manera que proporcione el panel de control con presentación de datos óptima y personalizable. 
     
        p(data-aos="fade-down").mb-5 Un software de monitoreo de red / solución de problemas de red con estas características, mejorará la tarea de monitoreo de red. Estas son características esenciales, sin embargo, también pueden buscarse atributos adicionales que optimicen el trabajo del personal de auditoría de la red, tales como:  

        SlyderF.px-3(columnas="col-lg-4")(data-aos="fade-left")
          .tarjeta.color-acento-botones.bg9.p-4
            img.img-t.mb-4(src='@/assets/curso/temas/17.svg' alt='')
            h5 Control remoto 
            p.mb-0 De manera que la herramienta se pueda usar en diferentes equipos de forma remota, sin tener que desplazarse al espacio físico en el que se encuentra el dispositivo.  
          .tarjeta.color-acento-botones.bg9.p-4
            img.img-t.mb-4(src='@/assets/curso/temas/18.svg' alt='')
            h5 Inventario de #[i hardware] y #[i software] 
            p.mb-0 La capacidad de autogestión le permite ir descubriendo los nuevos dispositivos o elementos de la red, a la par que va guardando el estado y situación de cada uno en su inventario, registrando datos como el sistema operativo, IP, bios, memoria, CPU y #[i drivers], en el caso de #[i hardware] o programas instalados, parches y versiones, si se habla de #[i software]. 
          .tarjeta.color-acento-botones.bg9.p-4
            img.img-t.mb-4(src='@/assets/curso/temas/19.svg' alt='')
            h5 Geolocalización y monitorización en la nube 
            p.mb-0 Con la expansión y el incremento en la accesibilidad a servicios ofrecidos en la nube por parte de los grandes de la industria como Amazon, diariamente un gran número de empresas mueven sus servidores y aplicaciones a la nube, por lo que es importante comprobar que la herramienta de monitoreo de red tenga la posibilidad de monitorizar aplicaciones en la nube. 
          .tarjeta.color-acento-botones.bg9.p-4
            img.img-t.mb-4(src='@/assets/curso/temas/20.svg' alt='')
            h5 Inteligencia artificial y aprendizaje automático 
            p.mb-0 Característica muy deseable para una herramienta de monitoreo, porque a partir de los datos, puede incorporarse inteligencia artificial y aprendizaje automático, con los cuales las herramientas de supervisión de la red pueden adaptarse al entorno de la red y proporcionar sugerencias basadas en los datos disponibles. 
          .tarjeta.color-acento-botones.bg9.p-4
            img.img-t.mb-4(src='@/assets/curso/temas/21.svg' alt='')
            h5 Automatización 
            p.mb-0 De la mano de la inteligencia artificial, la automatización hace posible la reacción de la herramienta de monitoreo a partir de los datos recabados, los umbrales definidos o el conjunto de reglas / criterios enmarcados que se cumplan. La herramienta de monitoreo puede, mediante la automatización, detectar y solucionar problemas automáticamente (monitoreo proactivo), así como enviar notificaciones de alerta o proporcionar sugerencias para mejorar el rendimiento y mantenimiento de la red, basado en el uso y la prioridad. 
          .tarjeta.color-acento-botones.bg9.p-4
            img.img-t.mb-4(src='@/assets/curso/temas/22.svg' alt='')
            h5 Alcance
            p.mb-0 Será útil que la herramienta de monitoreo de red proporcione visibilidad completa y detallada de varios aspectos de monitoreo de la red de manera consolidada. Además de brindar la flexibilidad para elegir lo que se desea ver, es lo que ayuda al administrador a mantenerse al tanto de la red. Es deseable que la información pueda presentarse en una pantalla común con cuadros de un vistazo y gráficos intuitivos, como herramienta de monitorización de red, se puede mejorar para realizar operaciones más avanzadas con la ayuda de complementos y opciones para integrar otras herramientas. 
          .tarjeta.color-acento-botones.bg9.p-4
            img.img-t.mb-4(src='@/assets/curso/temas/23.svg' alt='')
            h5 Escalabilidad 
            p.mb-0 En tiempos recientes, donde las redes son virtuales y eternas es importante que una herramienta de monitoreo de red pueda ser escalable en la medida en que sea adaptable a las necesidades o demandas cambiantes de la empresa o los usuarios. Esta escalabilidad ayuda a una red a mantenerse a la par del aumento de la productividad, las tendencias, las necesidades cambiantes y las nuevas adaptaciones.

    p(data-aos="fade-down").mb-4 En el siguiente video, se presenta un resumen de los aspectos más relevantes que deben poseer las herramientas de monitoreo de red: 
    .row.justify-content-center.align-items-center         
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    
        figcaption Video. 
    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 ¿Qué es el monitoreo de red en tiempo real?             
    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.png', alt='')
      .col-lg-8.my-3
        p(data-aos="fade-down") El administrador de la red realiza las labores de monitoreo del estado de la red y demás verificaciones de manera periódica para garantizar su funcionamiento; sin embargo, al presentarse problemas técnicos resulta muy conveniente poder examinar los datos en tiempo real, directamente con la herramienta de monitoreo de manera que no sea necesario utilizar otra herramienta para acceder remotamente al dispositivo que presente el problema. A manera de ejemplo, se puede considerar el consumo de ancho de banda que puede ser elevado y ante esta situación el administrador de la red deberá cotejar los datos estadísticos en tiempo real del uso del puerto por donde se aumenta el ancho de banda, y así cerciorarse de la recurrencia del problema y sus potenciales causas. 

    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido.mb-4(data-aos="zoom-in-left")
      h2 2.2 ¿Qué es la gestión de servidores?
    .row.bg10.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center         
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.png', alt='')
          .col-lg-8
            .px-5.j
              p(data-aos="fade-down") La gestión o gerencia de un servidor puede ser definida como el proceso mediante el cual se verifica y monitorea en busca de problemas la infraestructura de cualquier servidor sin importar su naturaleza. El monitoreo y control constante del rendimiento del servidor permite que las aplicaciones alojadas y ofrecidas en este tengan un mejor desempeño y por lo tanto, unas mejoras en las prestaciones de los servicios ofrecidos a los usuarios que las requieren.

              p(data-aos="fade-down") En el mercado se identifican herramientas de monitoreo de red ampliamente reconocidas tanto de software libre como Nagios, Zabbix o Pandora con versión libre, o pagas como BMC, Opmanager o Solarwinds, las cuales por lo general utilizan el protocolo SNMP.     

    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 ¿Qué es SNMP? 

    p(data-aos="fade-down").mb-4 #[i Simple Network Management Protocol] (SNMP) es el protocolo simple de administración de redes, es un protocolo de capa 7 o de aplicación, desarrollado para recolectar información del desempeño y funcionalidad de los componentes de una red informática. Es uno de los miembros del grupo de protocolos TCP / IP (Protocolo de control de transmisión / Protocolo de Internet), uno de los protocolos más populares y generosamente usados para tareas de administración y monitoreo de redes de computadores y está compuesto por: 

    .row.bg11.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        ul.lista-ul.fa-ul.mb-0.mt-4.ps-3
          li 
            i.fas.fa-project-diagram.c1
            | El administrador SNMP responsable de gestionar la comunicación eficientemente con base en los datos recibidos del agente.
          li 
            i.fas.fa-project-diagram.c1
            | Los dispositivos administrados son todos los elementos de la red a los que se monitorea.
          li 
            i.fas.fa-project-diagram.c1
            span.mb-0 El #[i software] agente SNMP, #[i software] especial diseñado para la recopilación de información incluyendo la de su entorno local, almacenar y recuperar la información de gestión definida en la MIB, señalar eventos al gerente y actuar como #[i proxy] para algunos nodos de red administrables no SNMP.
          li 
            i.fas.fa-project-diagram.c1
            | La base de información de gestión (MIB) almacena los objetos identificados para la gestión con sus tipos y relaciones en una entidad gestionada.
                                  
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
