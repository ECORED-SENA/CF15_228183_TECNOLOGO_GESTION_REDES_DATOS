<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Gestión de servidor virtual

    p(data-aos="fade-down") Es el proceso mediante el cual se verifica la disponibilidad, desempeño y funcionalidad de los servidores virtualizados, para así garantizar los servicios ofrecidos por estos.      

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido.mb-3(data-aos="zoom-in-left")
      h2 3.1 ¿Qué es la gestión de servidores virtuales?

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/28.png', alt='')
      .col-lg-7.my-3
        p(data-aos="fade-down") Con el objetivo de reducir costos y optimizar el uso de recursos tecnológicos, muchas empresas han optado por la virtualización. La virtualización de servidores trae consigo una serie de ventajas como lo son reducción de hardware, reducción en el consumo de energía eléctrica, entre otros; sin embargo, los procesos de virtualización también traen algunas desventajas, por ejemplo, la adquisición de un nuevo software para correr los procesos virtualizados, puede suponer un gasto extra, también la instalación de varias máquinas virtuales en un solo servidor puede suponer una disminución en el rendimiento.

        p(data-aos="fade-down") A continuación, se enumeran algunos de los desafíos más comunes de la administración de servidores virtuales:    

    .row.bg12.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4 
        p(data-aos="fade-down").mb-4 A continuación, se enumeran algunos de los desafíos más comunes de la administración de servidores virtuales:   
        .row.justify-content-center.mb-5           
          .col-lg-2
            .bg14.p-3.brad.h-100
              img.img-t.mb-4(src='@/assets/curso/temas/30.svg' alt='')
              p.mb-0 #[b A.] Reducción de hardware. 
          .col-lg-2
            .bg14.p-3.brad.h-100
              img.img-t.mb-4(src='@/assets/curso/temas/31.svg' alt='')
              p.mb-0 #[b B.] Consumo de energía. 
          .col-lg-2
            .bg14.p-3.brad.h-100
              img.img-t.mb-4(src='@/assets/curso/temas/32.svg' alt='')
              p.mb-0 #[b C.] Incremento en costos de software. 
          .col-lg-2
            .bg14.p-3.brad.h-100
              img.img-t.mb-4(src='@/assets/curso/temas/33.svg' alt='')
              p.mb-0 #[b D.] Aumenta carga de servidores por múltiples máquinas virtuales. 
          .col-lg-2
            .bg14.p-3.brad.h-100
              img.img-t.mb-4(src='@/assets/curso/temas/34.svg' alt='')
              p.mb-0 #[b E.]  Incremento en tráfico al servidor. 

        p(data-aos="fade-down").mb-4 También es importante tener en cuenta:

        .row.justify-content-center      
          .col-lg-4
            .bg6.h-100.brad.text-white
              img.img-t.mb-4(src='@/assets/curso/temas/35.png' alt='')
              .p-3
                h4 Expansión de VM (Virtual Machine)
                p.mb-0 La ejecución de máquinas virtuales puede significar una serie de ventajas; sin embargo, la instalación de demasiadas VM puede convertirse en una tarea engorrosa, y la implementación de tantas VM puede reducir o agotar considerablemente los recursos tecnológicos. El alto índice de implementación de VM puede obligar a las empresas a adquirir un nuevo hardware para su alojamiento. Las herramientas de monitoreo de servidores virtuales pueden abordar de manera efectiva el problema de la expansión de VM en la red.         
          .col-lg-4
            .bg6.h-100.brad.text-white
              img.img-t.mb-4(src='@/assets/curso/temas/36.png' alt='')
              .p-3
                h4 Congestión del tráfico de la red
                p.mb-0 Alojar varias máquinas virtuales en un solo servidor, sabiendo que este solo cuenta con un puerto físico de red (NIC), puede aumentar considerablemente el tráfico de información. Las cargas de trabajo sensibles a la latencia de la red, pueden informar errores o incluso bloquearse, esto puede resultar un asunto costoso que se puede evitar con la ayuda de una solución de administración de red virtual adecuada.      
          .col-lg-4
            .bg6.h-100.brad.text-white
              img.img-t.mb-4(src='@/assets/curso/temas/37.png' alt='')
              .p-3
                h4 Problemas de hardware del servidor
                p.mb-0 La virtualización de servidores proporciona una gran flexibilidad en términos de continuidad empresarial y recuperación ante desastres; sin embargo, los recursos físicos subyacentes aún pueden verse afectados negativamente por la consolidación de servidores virtuales. La administración del servidor virtual ayuda a mantener estos recursos en una óptima utilización, así como a monitorear su estado y rendimiento.  
    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido.mb-4(data-aos="zoom-in-left")
      h2 3.2 ¿Qué es la supervisión de red sin agentes? 
    .row.bg15.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/39.svg', alt='')
          .col-lg-8
            .px-5.pt-4 
              p(data-aos="fade-down") El monitoreo de red sin agentes es una técnica en la que el servidor de monitoreo sondea directamente los dispositivos en la red periódicamente, para monitorear su estado y rendimiento.

              p(data-aos="fade-down").mb-5 Esta técnica resulta más eficiente y práctica que aquella donde se implementan agentes donde son estos los que recopilan información sobre el estado de los dispositivos y la envían al respectivo software de monitoreo de la red.
                
              .row.mb-4          
                .col-auto.bg3.p-2(data-aos="fade-right")
                  h5(data-aos="fade-down").mb-0 ¿Por qué la supervisión de redes sin agentes? 
              p(data-aos="fade-down") El debate entre el monitoreo basado en agentes y sin agentes, es uno que se viene produciendo desde hace mucho tiempo en la industria de la gestión de redes; sin embargo, la mayoría de las empresas prefieren la monitorización de red sin agentes, porque domina las siguientes ventajas:   

    .row.justify-content-center
      .col-lg-6.my-3
        .bg8.brad.p-4.h-100(data-aos="zoom-in")
          .row.justify-content-center           
            .col-lg-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/40.svg', alt='')
            .col
            
              h4(data-aos="fade-down") Reducción del tiempo de implementación 
              p(data-aos="fade-down").mb-0 Dado que no hay agentes involucrados, solo es necesario configurar el servidor de monitoreo y, por lo tanto, implementar una herramienta de monitoreo de red sin agentes, que es un proceso sin complicaciones. Puede hacer que la infraestructura de monitoreo de red funcione en poco tiempo sin tener que pasar por complejos procesos de configuración.        
      .col-lg-6.my-3
        .bg8.brad.p-4.h-100(data-aos="zoom-in")
          .row.justify-content-center           
            .col-lg-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/41.svg', alt='')
            .col
            
              h4(data-aos="fade-down") Gastos generales de administración reducidos 
              p(data-aos="fade-down").mb-0 La ausencia de agentes hace que la infraestructura de monitoreo de red sea más fácil de mantener.    
    .row.justify-content-center.mb-4  
      .col-lg-6.my-3
        .bg8.brad.p-4.h-100(data-aos="zoom-in")
          .row.justify-content-center           
            .col-lg-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/42.svg', alt='')
            .col
            
              h4(data-aos="fade-down") Fácil de actualizar 
              p(data-aos="fade-down").mb-0 En el caso de una infraestructura de monitoreo de red basada en agentes, cada vez que se actualiza la herramienta de monitoreo de red o un componente de red, todos los agentes de la red deben actualizarse. Los entornos de supervisión de redes sin agentes no tienen este problema.        
      .col-lg-6.my-3
        .bg8.brad.p-4.h-100(data-aos="zoom-in")
          .row.justify-content-center           
            .col-lg-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/43.svg', alt='')
            .col
            
              h4(data-aos="fade-down") Reducción de la sobrecarga de fallas 
              p(data-aos="fade-down").mb-0 En el caso de la supervisión basada en el agente, la falla de un agente detendrá el proceso de supervisión de todos los dispositivos conectados a ese agente. Este problema no ocurre en el monitoreo sin agentes donde el monitoreo de dispositivos no se ve afectado por factores externos.   

    p(data-aos="fade-down").mb-4 En el siguiente video, se presenta una explicación de las diferencias de usar un sistema basado en agentes y otro sin agentes:
    .row.justify-content-center.align-items-center       
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
        figcaption Video. 
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
