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
    computed: {
        stocks(){
            return this.$store.getters.stocks;
        }
    }
}
</script>

