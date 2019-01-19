<template>
  <v-toolbar >
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Stock Trader</v-toolbar-title>
        <v-toolbar-items>
        <v-btn flat to="/portfolio">Portfolio</v-btn>
        <v-btn flat to="/stocks">Stocks</v-btn>
        </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat >End Day</v-btn>
      
      <v-menu :nudge-width="80">
        <v-toolbar-title slot="activator">
        <v-btn flat >Save & Load</v-btn>
          <v-icon >arrow_drop_down</v-icon>
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
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    data: () => ({
      items: [
        'Save', 'Load'
      ]
    })
  }
</script>