<template>
  <div>
    <v-footer height="auto" color="#171717">
      <v-container class="my-5 white--text text-xs-center">
        <v-badge color="#171717" >
          <template v-slot:badge >
            <v-icon dark medium class="hidden-md-and-down">settings</v-icon>
            <v-icon dark large class="hidden-lg-and-up">settings</v-icon>
          </template>
          <span class="sans">logo</span> 
        </v-badge>
        <v-layout row wrap class="my-5">         
          <v-flex xs6 lg3 class="mb-5">
            <div>
              <div class="subheading mt-3 mb-4" ><h4>First</h4></div>
              <div ><p v-for="list in lists" >{{list}}</p></div>
            </div>
          </v-flex>
          <v-flex xs6 lg3 class="mb-5">
            <div>
              <div class="subheading mt-3 mb-4" ><h4>Second</h4></div>
              <div ><p v-for="list in lists" >{{list}}</p></div>
            </div>
          </v-flex>
          <v-flex xs6 lg3 class="mb-5">
            <div>
              <div class="subheading mt-3 mb-4" ><h4>Third</h4></div>
              <div ><p v-for="list in lists" >{{list}}</p></div>
            </div>
          </v-flex>
          <v-flex xs6 lg3 class="mb-5">
            <div>
              <div class="subheading mt-3 mb-4" ><h4>Kontakt</h4></div>
              <div >
                <p>adresse</p>
                <p ><a href="/" class="mail">hello@hello.com</a></p>
                <p>+49 800 000000</p>
              </div>
            </div>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="grey--text">
          <v-flex xs4 lg1>
            Impressum
          </v-flex>
          <v-flex xs4 lg1>
           AGB
          </v-flex>
          <v-flex xs4 lg1>
            Datenschutz
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
    <v-card color="#69C9CB" height="5px"></v-card>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        lists: ['First','Second','Third','Fourth','Fifth','Sixth']
      }
    }
  }
</script>

<style scoped>
  .mail{
    text-decoration: none;
    color: #69C9CB;
  }
  .sans{
    font-family: uni-sans;
  }
</style>