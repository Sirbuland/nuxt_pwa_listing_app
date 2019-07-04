<template >
  <div class="navbar-drawer">
    <v-list >
      <v-list-tile-title>
        <p class="font-weight-bold montserrat-font">Kategorie</p>
      </v-list-tile-title>
      <v-list-tile active-class="font-weight-bold" v-for="item in Kategorie" 
       @click="showFiltered(item)" class="color-blue" >    
        <v-list-tile-content >
          {{item}}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
</div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default{
    data(){
      return{
        Kategorie: [
        'Abfüllanlagen', 'Reinigungstechnik', 'Inspektionstechnik',
        'Leerflaschenkontrolle',' Vollflaschenkontrolle','Fülltechnik', 'Bloc-Technik (Kombi)', 
        'Verschliesstechnik', 'Etikettiertechnik', 'Packtechnik'
        ],
        kategorieList: [],
      }
    },
    methods: {
      ...mapActions({
        showFiltered : 'products/setItemListAction'
      }),
    }
  }
</script>

<style scoped>
  .color-blue{
    color: #043073;
    text-decoration: none;
    font-family: roboto;
    padding: 0px !important;
  }
  .montserrat-font{
    font-family: montserrat;
    
  }
</style>