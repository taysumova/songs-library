<template>
  <panel title="Translation">
    <textarea readonly v-model="translation" cols="40" rows="30"></textarea>
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
