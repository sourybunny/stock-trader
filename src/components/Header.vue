<template>
  <v-toolbar color=primary >
    <v-toolbar-side-icon class="title secondary--text"  ></v-toolbar-side-icon>
    <v-toolbar-title class="headline text-uppercase secondary--text" >Stock Trader</v-toolbar-title>
        <v-toolbar-items>
        <v-btn flat class="title secondary--text" to="/">Home</v-btn>
        <v-btn flat class="title secondary--text" to="/portfolio">Portfolio</v-btn>
        <v-btn flat class="title secondary--text"  to="/stocks">Stocks</v-btn>
        </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat class="title secondary--text"  >End Day</v-btn>
      
      <v-menu :nudge-width="80">
        <v-toolbar-title slot="activator"  >
        <v-btn flat class="title secondary--text"  >Save & Load</v-btn>
          <v-icon color=secondary >arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item"
            @click=""
          >
            <v-list-tile-title v-text="item"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn color="secondary" class="primary--text title">funds: {{funds | currency}}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    data: () => ({
      items: [
        'Save', 'Load'
      ]
    }),
    computed: {
      funds(){
        return this.$store.getters.funds;
      }
    }
  }
</script>