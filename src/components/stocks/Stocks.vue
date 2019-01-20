<template>
    
        <v-container grid-list-xl fluid >
          <v-layout row wrap fill-height>
            <v-flex
              v-for="stock in stocks" 
              xs12 sm6 md6 lg4
            >
                <app-stock :stock = "stock"></app-stock>
            </v-flex>
          </v-layout>
        </v-container>
</template>

<script>
import Stock from './Stock.vue';
export default {
    components: {
        'appStock': Stock
    },
    data(){
        return {
            stocks: [
                {id: 1, name: 'Apple', price: 200},
                {id: 2, name: 'Google', price: 250},
                {id: 3, name: 'Microsoft', price: 400},
                {id: 4, name: 'Amazon', price: 380}
                ]
        }
    }
}
</script>

