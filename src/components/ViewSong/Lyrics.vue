<template>
  <panel title="Текст песни">
      <textarea readonly v-model="lyrics" rows="30">
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
textarea {
  width: 100%;
  outline: none;
}
</style>
