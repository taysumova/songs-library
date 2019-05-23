<template>
  <panel title="Текст песни">
      <textarea readonly v-model="lyrics" rows="30">
      </textarea>
  </panel>
</template>
<script>
export default {
  props: [
    'lyrics'
  ]
}
</script>
<style>
textarea {
  width: 100%;
  outline: none;
}
</style>
