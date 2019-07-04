<template> 
  <div class="main mx-4">
    <v-icon class="hidden-lg-and-up" @click="filterNav=!filterNav">filter_list</v-icon>
    <no-ssr>
      <v-navigation-drawer app v-model="filterNav" class="pa-2 hidden-lg-and-up" v-if="isMobile">
        <v-layout column wrap >
        <InsideDrawer></InsideDrawer>
      </v-layout>
      </v-navigation-drawer>
    </no-ssr>
    <v-layout row wrap class="ma-3" justify-end>
      <v-flex xs12>
        <a href="" class="color-blue">Startseite</a>
        <span class="px-2">></span>
        <a href="" class="color-grey">Ersatzteile finden</a>
      </v-flex>
      <v-flex xs6 lg7 class="mt-3">
        <p>{{ productStart }} - {{ productEnd }} of {{ products }} 
          <span class="hidden-md-and-down">Ergebnissen</span>
        </p>
      </v-flex>
      <v-flex xs6 lg5>
        <span>Sortieren nach</span> 
        <v-menu offset-y >
          <template flat slot="activator">
          <v-btn round depressed outline color="#707070" >
             <span class="text-capitalize">Relevanz</span>
             <v-icon>keyboard_arrow_down</v-icon>                  
            </v-btn>
          </template>
            <v-list>
              <v-list-tile avatar @click="sortDesProduct">
                <v-list-tile-title >High to low</v-list-tile-title>
              </v-list-tile>
              <v-list-tile avatar @click="sortAscProduct">
                <v-list-tile-title >Low to high</v-list-tile-title>
              </v-list-tile>
            </v-list>
        </v-menu>
      </v-flex>
    </v-layout> 
    <v-divider></v-divider>
    <v-layout row wrap>
      <v-flex sm12 md6 lg4 xl4 v-for="item in pageProducts">
        <v-card class="ma-2 pb-2" elevation=20>
         <img width="100%" :src="require(`@/assets/${item.img}`)">
          <div class="py-3">
            <v-card-title class="montserrat-font">
              <h4 class="font-weight-bold">{{item.titel}}</h4>
            </v-card-title>
            <v-card-text class="roboto-font" >
              <p>{{item.beschreibung}}</p>
            </v-card-text>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
    <template class="my-5">
      <div class="text-xs-center">
        <v-pagination circle color="black" v-model="page" :length="pageLength" 
         v-on:input="nextPage(page)"></v-pagination>
      </div>
    </template>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex';
  import InsideDrawer from './InsideDrawer'
  export default{
    data() {
      return{
        filterNav: false,
        page: 1, 
        pageLength: 0, 
        productStart: 0,
        productEnd: 0,
      }
    },
    components: {
      InsideDrawer,
    },
    computed: {
      isMobile(){
        return process.client
          && (navigator.userAgent.match(/Android/i)
          || navigator.userAgent.match(/webOS/i)
          || navigator.userAgent.match(/iPhone/i)
          || navigator.userAgent.match(/iPad/i)
          || navigator.userAgent.match(/iPod/i)
          || navigator.userAgent.match(/BlackBerry/i)
          || navigator.userAgent.match(/Windows Phone/i))
      },
      ...mapGetters({
        pageProducts: 'products/getItemList',
        products: 'products/getProductCount'
      }),
    },
    methods: {
      ...mapActions({
        inCreated: 'products/addToItemListAction',
        countProduct: 'products/countItemListAction',
        sortDesProduct: 'products/sortDesItemListAction',
        sortAscProduct: 'products/sortAscItemListAction',
        paginateProduct: 'products/paginateItemListAction',
      }),
      nextPage(page) {
        this.paginateProduct(page);
      }
    },
    created() {
      this.inCreated();
      this.countProduct();
    },
    watch: {
      products() {
        console.log(this.products)
        this.pageLength = this.products / 9;
        this.pageLength = this.pageLength + 1;
      },
      page() {
        console.log("pagination watch");
        // this.page
      }
    }
  }
</script>

<style scoped>
  .color-blue{
    color: #043073;
    text-decoration: none;
    font-family: roboto;
  }
  .color-grey{
    color: #8F8F8F;
    text-decoration: none;
    font-family: roboto;
  }
  .roboto-font{
     font-family: roboto; 

  }
  .montserrat-font{
    font-family: montserrat;
    line-height: 1;
  }
</style>