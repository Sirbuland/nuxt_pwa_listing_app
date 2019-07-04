<template >
  <div>
    <v-flex xs12 lg12 class="bottom-flex">
      <v-flex xs12 lg6 class="py-5 px-3" >
        <p class="font-weight-bold display-1" id="montserrat_font" >
          NICHT DAS PASSENDE GEFUNDEN?  
        </p>
        <p class=" hidden-md-and-down" id="roboto_font">{{bottom_content}}</p> 
        <p class=" hidden-lg-and-up" id="roboto_font">{{bottom_content_m}}</p>                   
        <v-btn outline class="my-4 text-capitalize" id="montserrat_font">
          <span class="font-weight-black caption">Kontaktieren Sie uns</span>  
          <v-icon right>keyboard_arrow_right</v-icon>
        </v-btn> 
      </v-flex>
      </v-flex>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        bottom_content: 'Blindtext Sie das einmalige Mietmaschinenangebot von Blindtext Rental & Used. Hier finden Sie Ersatzteile zu Abfüllanlagen, Reinigungstechnik,.',
        bottom_content_m: 'Blindtext durch die schnelle Suche finden Sie direkt zu Ihrem Ersatzteil auf schnellstem Weg mit noch mehr Blindtext. Blindtext durch die schnelle Suche.'
      }
    }
  }
</script>
<style scoped>
    .bottom-flex{
    background-color: #69C9CB;
  }
</style>