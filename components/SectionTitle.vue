<template>
  <div v-if="$vuetify.breakpoint.xs" class="section-title">
    <h2 class="text-center" style="font-family: 'Caveat'; font-size: 3rem; color: #323232">
      {{ title }}
    </h2>
    <p class="text-center caption mb-0" style="margin: -8px">
      {{ subtitle }}
    </p>
  </div>
  <div v-else-if="$vuetify.breakpoint.sm" class="section-title">
    <h2 class="text-center" style="font-family: 'Caveat'; font-size: 4rem; color: #323232">
      {{ title }}
    </h2>
    <p class="text-center body-2 mb-0" style="margin: -8px">
      {{ subtitle }}
    </p>
  </div>
  <div v-else class="section-title">
    <h2 class="text-center" style="font-family: 'Caveat'; font-size: 5rem; color: #323232">
      {{ title }}
    </h2>
    <p class="text-center mb-0" style="margin: -8px">
      {{ subtitle }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>
