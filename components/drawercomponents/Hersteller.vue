<template >
  <div class="hersteller">
    <h4 class="montserrat-font">Hersteller</h4>
    <!-- <v-card class="mr-5 mt-3 px-4" elevation=10> -->
      <v-menu>
        <template flat slot="activator">
          <v-btn  block large color="white" class="mx-4" elevation=20>
            <span id="roboto-font">Alle Hersteller</span>
            <v-icon right>expand_more</v-icon>                  
          </v-btn>
        </template>
      </v-menu>
    <!-- </v-card> -->
  </div>
</template>

<script></script>
<style scoped>
  .montserrat-font{
    font-family: montserrat;
    line-height: 1;
  }
</style>