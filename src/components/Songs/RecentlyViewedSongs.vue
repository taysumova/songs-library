<template>
  <panel title="История просмотров">
      <v-data-table
        :headers="headers"
        :pagination.sync="pagination"
        :items="history">
        <template slot="items" slot-scope="props">
            <td class="text-xs-right">
                {{props.item.title}}
            </td>
            <td class="text-xs-right">
                {{props.item.artist}}
            </td>
        </template>
    </v-data-table>
  </panel>
</template>

<script>
import { mapState } from 'vuex'
import SongHistoryService from '@/services/SongHistoryService'
export default {
  data () {
    return {
      headers: [{
        text: 'Название',
        value: 'title'
      },
      {
        text: 'Исполнитель',
        value: 'artist'
      }],
      pagination: {
        sortBy: 'createdAt',
        descending: true
      },
      history: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.history = (await SongHistoryService.getHistory()).data
    }
  }
}
</script>

<style>
</style>
