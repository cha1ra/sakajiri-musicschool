<template>
  <div class="d-block d-sm-flex">
    <div class="font-weight-bold pt-4" style="width: 160px;">
      {{ label }}
    </div>
    <v-text-field
      style="max-width: 300px"
      outlined
      :type="type"
      :name="label"
      hide-details="auto"
      :placeholder="placeholder"
      :rules="rules"
    />
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: 'お名前'
    },
    placeholder: {
      type: String,
      default: '坂尻 くにえ'
    },
    type: {
      type: String,
      default: 'text'
    },
    rules: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
