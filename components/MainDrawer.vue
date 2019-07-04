<template >
  <div class="navbar-drawer">
   <v-navigation-drawer class="hidden-md-and-down py-4">
      <v-layout column wrap justify-end>
        <InsideDrawer></InsideDrawer>
      </v-layout>
    </v-navigation-drawer> 
  </div>
</template>

<script>
  import InsideDrawer from './InsideDrawer'

  export default{
    components: {
      InsideDrawer
    },
    data() {
      return{
        clipped: true,
      }
    },
  }
</script>
<style scoped>
.navbar-drawer .v-navigation-drawer{
  width: 400px !important;
}
</style>