<template>
  <v-card elevation="0">
    <div v-if="$vuetify.breakpoint.xs" class="">
      <div class="d-flex flex-column align-center pt-3 px-3">
        <div style="width: 100px;" class="mr-2">
          <v-img :src="imgUrl" style="width: 100%;" />
        </div>
        <h3 class="text-center font-weight-bold">
          {{ title }}
        </h3>
      </div>
      <v-card-text class="pt-1">
        <span v-for="(d, index) in description" :key="index" class="d-inline-block">
          {{ d }}
        </span>
      </v-card-text>
    </div>
    <div v-else-if="$vuetify.breakpoint.sm" class="">
      <div class="d-flex justify-center align-center pa-3">
        <div style="width: 150px;" class="mr-2">
          <v-img :src="imgUrl" style="width: 100%;" />
        </div>
        <div>
          <h3 class="px-4 font-weight-bold">
            {{ title }}
          </h3>
          <v-card-text class="pt-1 pb-0">
            <span v-for="(d, index) in description" :key="index" class="d-inline-block">
              {{ d }}
            </span>
          </v-card-text>
        </div>
      </div>
    </div>
    <div v-else>
      <v-row justify="center">
        <v-col cols="6">
          <v-img :src="imgUrl" />
        </v-col>
      </v-row>
      <h3 class="text-center font-weight-bold">
        {{ title }}
      </h3>
      <v-card-text class="text-center">
        <span v-for="(d, index) in description" :key="index" class="d-inline-block">
          {{ d }}
        </span>
      </v-card-text>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: '/feature-1.svg'
    },
    title: {
      type: String,
      default: 'Test'
    },
    description: {
      type: Array,
      default () {
        return []
      }
    }

  }
}
</script>
