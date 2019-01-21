<template>
    <v-card 
    class="ma-auto primary--text elevation-2"
    max-width="400"
  >
    <v-card-title>
      <span class="display-1 ml-3 font-weight-light text-center">{{stock.name}}</span>
    </v-card-title>

    <v-card-text class="headline ml-3 font-weight-bold">
        {{stock.price}}
    </v-card-text>

    <v-card-actions>
        <v-layout row justify-space-around >
        <v-flex xs4 md4>
            <v-text-field 
                label="quantity"
                outline
                v-model="quantity"
                type="number"
                class="mt-0"
                autofocus >
            </v-text-field>
        </v-flex>
            <v-btn 
            :disabled="quantity<=0" 
            color=primary depressed large
            @click ="buyStock" 
            class="mt-3 secondary--text subheading" >Buy Now</v-btn>
        </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    data(){
        return {
            quantity: 0
        }
    },
    props: ['stock'],
    methods: {
        buyStock(){
            const order= {
                stockid: this.stock.id,
                quantity: this.quantity,
                price: this.stock.price
            }
            console.log(order);
            this.$store.dispatch('buyStock', order);
            this.quantity = null;
        }
    }
}
</script>

