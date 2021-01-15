import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCYDqboAOCOOqR0ZozLQIxNUQ2cfwoF5vo',
    libraries: 'places'
  }
})
