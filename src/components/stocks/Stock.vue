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
                type="number" min="1" max="10"
                class="mt-0"
                autofocus >
            </v-text-field>
        </v-flex>
            <v-btn color=primary depressed large class="mt-3 secondary--text subheading" >Buy Now</v-btn>
        </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: ['stock']
}
</script>

