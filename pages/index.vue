<template>
  <div>
    <v-layout row wrap justify-center>
      <v-flex xs0 lg3>
        <MainDrawer v-on:filterCat="filterkat($event)"></MainDrawer>
      </v-flex>
      <v-flex xs12 lg8>  
        <MainContent></MainContent>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-end class="my-5">
      <BottomContent></BottomContent>  
    </v-layout>
    <div>
      <h2>
        Write to Firestore.
      </h2>
      <div>
        <button @click="writeToFirestore" :disabled="writeSuccessful">
          <span v-if="!writeSuccessful">Write now</span>
          <span v-else>Successful!</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js'
import MainDrawer from '../components/MainDrawer'
import MainContent from '../components/MainContent'
import BottomContent from '../components/BottomContent'
export default {
  components: {
    MainDrawer,
    MainContent,
    BottomContent
  },
   data() {
      return {
        writeSuccessful: false,
        Pro: 0,
        kategory: '',
      }
    },
    methods: {
      async writeToFirestore() {
        const ref = fireDb.collection("products").doc("test")
        const document = {
          text: "Product",
        }
        try {
          await ref.set(document)
        } catch (e) {
          // TODO: error handling
          console.error(e)
        }
        this.writeSuccessful = true
      },
    }
}
</script>




<!--  <template>
  <section class="container">
<div>
      <h2>
        Write to Firestore.
      </h2>
      <div>
        <button @click="writeToFirestore" :disabled="writeSuccessful">
          <span v-if="!writeSuccessful">Write now</span>
          <span v-else>Successful!</span>
        </button>
      </div>
    </div>
</section>
</template>
<script>
  import {fireDb} from '~/plugins/firebase.js'
  export default {
    data() {
      return {
        writeSuccessful: false
      }
    },
    methods: {
      async writeToFirestore() {
        const ref = fireDb.collection("test").doc("test")
        const document = {
          text: "This is a test message."
        }
        try {
          await ref.set(document)
        } catch (e) {
          // TODO: error handling
          console.error(e)
        }
        this.writeSuccessful = true
      }
    }
  }
</script>
<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style> -->