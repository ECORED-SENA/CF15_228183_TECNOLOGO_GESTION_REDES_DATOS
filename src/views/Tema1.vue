<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Conceptos básicos de la supervisión de redes
      
    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.svg', alt='')
      .col-lg-9.my-3
        p(data-aos="fade-down") Partamos de la premisa de que una red de datos es tan sólida como su eslabón más débil y, en general, la capa 2 del modelo OSI se presenta como ese eslabón en las redes de datos. Esto representa para el administrador de la red un reto específico en la labor de monitoreo.

        p(data-aos="fade-down") La monitorización de redes informáticas ha surgido como una norma obligatoria para mantener en óptimas condiciones este recurso tecnológico. Supervisar la red de datos es un proceso, mediante el cual los encargados escudriñan periódicamente componentes tales como enrutadores, conmutadores, servidores, etc., en busca de posibles fallos de funcionamiento que puedan distorsionar las tareas fundamentales de la red de información. 

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 ¿Qué es el monitoreo de red?  
    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')
      .col-lg-9.my-3
        p(data-aos="fade-down") Consiste en el proceso permanente de vigilancia al funcionamiento de la red, empleando herramientas como #[i software] de monitoreo, encargados de buscar fallos en la red con proactividad, debido a que es de suma importancia detectarlos tempranamente o de ser posible, antes que ocurran. Así, los tiempos de réplica ante una eventualidad, pueden ser ampliamente reducidos, lo que genera mayor disponibilidad de los servicios ofrecidos por la red, al mismo tiempo que la reducción de costos económicos.

        p(data-aos="fade-down") En la planificación del proceso de monitoreo de red, es importante tener en cuenta: 

    .row.justify-content-center.mb-4 
      .col-lg-8.my-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg13")
          div(titulo="Seguimiento de lo esencial") En una supervisión de red adecuada se deben establecer los dispositivos y las métricas de rendimiento relacionadas que serán supervisadas, para seguidamente proceder a decretar los tiempos de rastreo. El rendimiento de la red puede verse reducido o comprometido por todos aquellos elementos que presenten alguna falla. De ahí la importancia de la detección temprana de las falencias funcionales (proactividad), que se puede lograr con la programación periódica de un monitoreo exhaustivo. Los servidores, enrutadores y conmutadores representan la columna vertebral de la red, lo que significa que son los dispositivos que requieren de manera inmediata y esencial la monitorización de su comportamiento y funcionalidad, a la par que algunos otros dispositivos de la red no son críticos para su funcionamiento, lo que significa que no es necesario invertir tanto tiempo y recursos en su supervisión, por ejemplo, los computadores de escritorio, portátiles e impresoras hacen parte de este grupo.
          div(titulo="Intervalo de seguimiento") 
            p El intervalo de monitoreo determina la frecuencia con la que se sondean los dispositivos de red y sus métricas relacionadas para identificar el estado de rendimiento y disponibilidad. La ordenación de los tiempos en los cuales se monitorea la red ayuda a sobrellevar la carga del sistema y aligerar recursos.
            p El lapso establecido de monitoreo para un determinado elemento de la red depende del elemento en sí y de los parámetros a supervisar. La disponibilidad de cierto dispositivo debe monitorearse en la menor cantidad de tiempo posible periódicamente, pero sin abusar del recurso tiempo, es decir, entre menos tiempo pase entre un monitoreo y otro, mejor; pero, tampoco es práctico monitorear en intervalos de tiempo demasiado cortos pues esto significa que se está relegando otros dispositivos y consumiendo demasiados recursos en la monitorización. Los dispositivos no críticos pueden ser verificados a intervalos amplios de tiempo, mientras que los críticos deben tener intervalos más cortos.
          div(titulo="Protocolo y sus tipos") Es indispensable implementar o adoptar protocolos seguros y de bajo consumo de recursos a la hora de iniciar un proceso de monitoreo, pues el protocolo en sí también consumirá ancho de banda, un preciado recurso en la transmisión de datos. El protocolo SNMP (#[i Simple Network Management Protocol]) es uno de los ampliamente aceptados y difundidos por los administradores de redes informáticas para tareas de administración y control, así como el protocolo Syslog y NetFlow, protocolos muy populares que a su vez poseen tanto puntos fuertes como puntos débiles. Estos a su vez, juntos, constituyen un buen conjunto de herramientas para comprender qué sucede en una red, también el protocolo NTP permite sincronizar la hora a través de los dispositivos, aspecto especialmente importante cuando se desea comparar archivos de registro en diferentes dispositivos.

      .col-lg-4.my-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.svg', alt='')

    .row.justify-content-center.mb-4     
      .col-lg-4.my-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.svg', alt='')     

      .col-lg-8.my-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg13")
          div(titulo="Monitoreo proactivo y umbrales") Cuando un usuario informa al administrador sobre un problema con la red, se está presentando un caso de monitoreo proactivo deficiente, esto significa que la falla ya ha ocurrido y es hora de enmendarla; esta situación puede acarrear tiempo y dinero en la implementación de la solución. La clave para una buena monitorización, es alertar sobre los posibles fallos o cuellos de botella antes de su ocurrencia o en el menor tiempo posible desde que suceden. Los umbrales juegan un papel definitivo en la proactividad del monitoreo, son ellos los que determinan dichos tiempos. Estos umbrales varían según el dispositivo, para un servidor de correos se puede determinar un bajo umbral por ser un dispositivo crítico, porque su funcionamiento no debe verse interrumpido, y cuando esto suceda, la interrupción debe durar el menor tiempo posible. Los umbrales también pueden ser usados para generar avisos o alertas en casos en los cuales el dispositivo alcance una condición preocupante y que pueda comprometer su funcionamiento o servicio prestado.             
          div(titulo="Cuadros de mando y personalización") La representación visual de los datos y estadísticas recolectadas en los procesos de monitorización, son útiles cuando se presentan de manera adecuada a las personas adecuadas. Un panel visual de control es muy acertado y necesario cuando brinda una descripción del estado actual de los dispositivos de red con métricas y umbrales críticos, que ayuden a tomar decisiones sobre la situación funcional de la red de información. Algunas herramientas visuales tales como #[i widgets] pueden facilitar la tarea del administrador, ya sea de manera local o remota.             
          div(titulo="Alta disponibilidad y conmutación por error") La disponibilidad de los recursos y servicios ofrecidos por la red deben ser totales y constantes. La alta disponibilidad de la gestión y monitoreo de la red debe ser continua e ininterrumpida, esto garantiza una supervisión constante de la infraestructura en aras de mantener sus servicios activos para cuando los usuarios los requieran. La funcionalidad de conmutación por error, significa que habrá un segundo servidor presto a ofrecer todos los procesos que la monitorización y control requieran, en caso que el servidor primario falle en la realización de esta tarea. El sistema de conmutación por error proporciona beneficios como:
            ul.lista-ul.fa-ul.mb-0.mt-4.ps-3
              li 
                i.fas.fa-project-diagram.c1
                | El sistema reconoce instantáneamente la falla del servidor primario.
              li                
                i.fas.fa-project-diagram.c1
                | Notificación inmediata por correo electrónico en caso de falla del servidor primario.
              li                
                i.fas.fa-project-diagram.c1
                | 100 % de tiempo de actividad y gestión de red ininterrumpida.
              li                
                i.fas.fa-project-diagram.c1
                | Conmutación automatizada y sin problemas entre el servidor primario y el servidor en espera y viceversa.                        
          div(titulo="Soluciones de monitorización de redes") 
            p Para que haya una buena monitorización de la red, no solo es necesario el conocimiento y experticia de un administrador, sino también la ayuda de un #[i software] especializado de supervisión de red, que permita un régimen de monitoreo, lo que es primordial para enfrentar los cuellos de botella y contrariedades que podrían poner en riesgo la robustez del rendimiento de la red. 
            p El incremento de la supervisión en las redes por parte de empresas y organizaciones, ha generado una amplia gama de servicios y productos creados para este fin, que pueden encontrarse en el mercado. Una óptima herramienta lógica o #[i software] de monitoreo de red puede ayudar en los procesos de verificación de red, al mismo tiempo que reduce la carga de trabajo, brindando metodologías de solución de problemas.             

    .row.mb-4          
      .col-auto.bg3.p-2(data-aos="fade-right")
        h5(data-aos="fade-down").mb-0 Características de un #[i software] de monitorización de red eficaz 
    p(data-aos="fade-down").mb-4 A continuación, se presenta un video, en el cual se explican las características que debe tener un sistema de monitorización de red: 

    .row.bg4.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center         
          .col-lg-12(data-aos="fade-left")     
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/epSHHqRHJkY?si=sBpK8tT9YbPY0Un1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)   
            figcaption Video. Características: software monitoreo 
    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido.mb-3(data-aos="zoom-in-left")
      h2 1.2 ¿Qué es la gestión de redes?

    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-8.my-3
        .row.justify-content-center.align-items-center
          .col-lg-auto.my-3  
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.svg', alt='')
          .col.my-3
            p(data-aos="fade-down").mb-0 Según Ding (2016), la gestión de redes y servicios de las telecomunicaciones se basa en el monitoreo y control de los recursos y servicios de la misma, para aumentar su disponibilidad, eficiencia, rendimiento y favorecer la relación costo-beneficio en su diseño y operación.       
        p(data-aos="fade-down") La gestión de red exitosa tiene como tareas clave el monitoreo y control de todos los elementos de la red aplicadas a las áreas funcionales del modelo FCAPS: gestión de fallos, gestión de configuración, gestión de contabilidad, gestión de prestaciones o calidad del servicio y gestión de seguridad.                
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')
     
    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido.mb-3(data-aos="zoom-in-left")
      h2 1.3 Gestión del rendimiento de la red

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.png', alt='')       
      .col-lg-8.my-3
        p(data-aos="fade-down") Así como el monitoreo proporciona la información necesaria para obtener una visión global del funcionamiento de la red en determinado momento o en tiempo real, la gestión de red a su vez permite ejecutar las acciones necesarias sobre la red en la búsqueda continua del óptimo rendimiento, la solución a los problemas detectados, el cumplimiento de los acuerdos de niveles de servicio, la proyección de crecimiento de la red y la optimización de la eficiencia versus la inversión realizada.

        p(data-aos="fade-down") La red informática es la columna vertebral de la organización que la implementa y las aplicaciones informáticas basadas en el acceso a Internet, son primordiales para el libre desarrollo de las tareas y procesos al interior de la organización, por eso es vital que los usuarios de la red no se vean perjudicados debido a inconvenientes relacionados con los servicios de la red. Entonces, monitorear, preservar y mejorar el rendimiento de los servicios de la red se vuelve un objetivo principal para toda empresa que desea mantenerse comunicada en todos los aspectos.      
        .row.justify-content-center.align-items-center.bg5.p-3.py-2.brad
          .col-lg-auto.my-3  
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.svg', alt='')
          .col.my-3
            p(data-aos="fade-down").mb-0 Gestión de rendimiento de la red consiste entonces en las acciones necesarias para garantizar la calidad de servicio desde el punto de vista del usuario, lo cual implica medición de indicadores de servicio como disponibilidad, latencia, anchos de banda, #[i throughput] o tasa real de información transmitida, entre otros.
   
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
