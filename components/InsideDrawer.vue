<template >
  <div class="mobile-drawer">
    <v-flex >
      <h4 class="montserrat-font">Direktsuche</h4> 
      <v-text-field placeholder="Modell oder Typbezeichnung" solo-inverted append-icon="search" 
      color="white" @keyup.enter.native="searchFilter($event.target.value)" class="mr-5 mt-3">
      </v-text-field>
      <v-divider class="mb-4 mr-5"></v-divider>
      <Kategorie></Kategorie>
      <v-divider class="mb-5 mt-3 mr-5"></v-divider>
      <Hersteller></Hersteller>
      <v-divider class="mr-5 my-4"></v-divider>
      <Produktionsjahr></Produktionsjahr>
      <v-divider class="mr-5 my-4"></v-divider>
      <FilterPrice></FilterPrice>
    </v-flex> 
</div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Kategorie from './drawercomponents/Kategorie'
  import Hersteller from './drawercomponents/Hersteller'
  import Produktionsjahr from './drawercomponents/Produktionsjahr'
  import FilterPrice from './drawercomponents/FilterPrice'

  export default{
    components: {
      Kategorie,
      Hersteller,
      Produktionsjahr,
      FilterPrice
    },
    methods: {
      ...mapActions({
        searchFilter : 'products/filterItemListByTitelAction'
      }),
    }
  }
</script>
<style scoped>
.montserrat-font{
  font-family: montserrat;
}
</style>