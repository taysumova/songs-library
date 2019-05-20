<template>
  <panel title="YouTube video">
    <youtube :video-id="youtubeId" player-width="280" player-height="200"></youtube>
  </panel>
</template>
<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>
<style>
</style>
