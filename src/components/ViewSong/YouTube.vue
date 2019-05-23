<template>
  <panel title="Видеоклип">
    <youtube :video-id="youtubeId" player-width="680" player-height="400"></youtube>
  </panel>
</template>
<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>
<style>
</style>
