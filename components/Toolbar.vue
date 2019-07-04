<template >
  <div class="toolbar">
    <v-toolbar app clipped-left fixed color="white" height="80px">  
      <v-badge color="white" class="hidden-md-and-down ml-5" >
        <template v-slot:badge >
          <v-icon medium>settings</v-icon>        
        </template>
        <v-toolbar-title  class="sans ml-4" @click="reloadPage">logo</v-toolbar-title>
      </v-badge> 
      <v-spacer></v-spacer>
      <v-toolbar-items id="montserrat_font" >
        <div class="margin-toolbar">
        <v-tabs  fixed height="80px" slider-color="#69C9CB">
          <v-tab active-class="primary--text">
            ERSATZTEILE FINDEN
          </v-tab>
          <v-tab active-class="primary--text">
            ERSATZTEILE VERKAUFEN
          </v-tab>    
          <v-tab ripple active-class="primary--text">
            ÜBER UNS
          </v-tab>
          <v-tab active-class="primary--text">
            KONTAKT
          </v-tab>
          <v-tab>
            <v-chip color="white" >
              <v-avatar> <img :src="img" ></v-avatar>
              <span class="grey--text font-weight-medium text-capitalize">  Mein Konto</span>
            </v-chip>
          </v-tab>                    
        </v-tabs>
        </div>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script scoped>
  export default{
    data(){
      return {
        img: require('~/assets/avatar-1.png'),
      }
    },
    methods: {
      reloadPage(){
        window.location.reload();
      }
    }
  }
</script>
<style scoped>
  /* Desktops and laptops ----------- */
  @media only screen 
  and (min-width : 1224px) {
    /* Styles */
    .margin-toolbar{margin-right: 50px;}
  }
  .sans{
    font-family: Uni Sans; 
  }
</style>