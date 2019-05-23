<template>
  <panel title="Перевод">
    <textarea readonly v-model="translation" rows="30"></textarea>
  </panel>
</template>
<script>
export default {
  props: [
    'translation'
  ]
}
</script>
