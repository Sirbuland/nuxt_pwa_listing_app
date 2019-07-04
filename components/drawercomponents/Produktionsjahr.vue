<template >
  <div class="produktionsjahr">
    <h4 class="montserrat-font">Produktionsjahr</h4>
    <v-menu class="mt-3" elevation=10>
      <template slot="activator">
        <v-btn  color="white" id="roboto-font">2008</v-btn>
        <span class="mx-3">bis</span>
        <v-btn  color="white" id="roboto-font">2014</v-btn>
      </template>
    </v-menu>
</div>
</template>
<script></script>
<style scoped>
    .montserrat-font{
        font-family: montserrat;
        line-height: 1;
    }
</style>