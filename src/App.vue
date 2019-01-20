<template>
  <v-app dark>
    <app-header></app-header>
    <v-content>
          <v-container>
        <v-layout>
            <v-flex xs12>
                <router-view></router-view>
            </v-flex>
        </v-layout>
    </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
  'appHeader': Header
  },
  data () {
    return {
      //
    }
  }
}
</script>

