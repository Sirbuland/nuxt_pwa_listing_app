<template>
  <v-app>
    <Toolbar></Toolbar>
    <v-content>
      <v-container fluid class="contains">
        <nuxt />
      </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>
<script>
  import Toolbar from '../components/Toolbar'  
  import Footer from '../components/Footer'
export default {
  data() {
    return {
      
    }
  },
  components: {
    Toolbar,
    Footer
  }
}
</script>
<style scoped>
  .contains{
    padding: 0px !important;
    margin-top: 2px;
  }
</style>