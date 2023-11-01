<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.bg1.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center.mb-4.bg2.p-3.py-2(data-aos="flip-down")          
          .col-lg-auto.my-3  
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.svg', alt='')
          .col.my-3
            p(data-aos="fade-down").mb-0 Para comenzar con el estudio de la temática del componente formativo, lo invitamos a ver el siguiente video.  

        .row.justify-content-center.align-items-center         
          .col-lg-12(data-aos="fade-left")     
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/bkxr4xMfNJM?si=mirBOGMmecORUema" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
            figcaption Video. Gestión de recursos tecnológicos                           
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
