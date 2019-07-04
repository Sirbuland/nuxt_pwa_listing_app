<template >
  <div class="filter-price">
    <h4 class="montserrat-font">Price in €</h4>
    <v-range-slider v-model="price" min="0" max="6000" step="10" 
    thumb-label="always"  color="#69C9CB"> 
    </v-range-slider>            
    <!-- <v-card class="mr-5" color="#69C9CB" > -->
      <v-menu>
        <template slot="activator">
          <v-btn block height="500" depressed color="#69C9CB" class="mx-2" id="montserrat-font">
              133 Ersatzteile anzeigen
              <v-icon right>keyboard_arrow_right</v-icon>                  
          </v-btn>
        </template>
      </v-menu>
    <!-- </v-card> -->
</div>
</template>

<script>
  export default{
    data(){
      return{
        price: [ 1000, 5000 ],
      }
    },
  }
</script>
<style scoped>
  .montserrat-font{
    font-family: montserrat;
    line-height: 1;
  }
</style>