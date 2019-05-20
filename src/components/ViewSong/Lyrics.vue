<template>
  <panel title="Lyrics">
      <textarea readonly v-model="lyrics" cols="40" rows="30">
      </textarea>
  </panel>
</template>
<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'lyrics'
  ],
  components: {
    Panel
  }
}
</script>
<style>
</style>
