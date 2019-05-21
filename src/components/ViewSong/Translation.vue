<template>
  <panel title="Перевод">
    <textarea readonly v-model="translation" rows="30"></textarea>
  </panel>
</template>
<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'translation'
  ],
  components: {
    Panel
  }
}
</script>
