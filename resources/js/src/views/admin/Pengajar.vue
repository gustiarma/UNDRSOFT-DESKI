<template>
  <div>
    <div>
      <vs-table
        v-if="pengajar!= null"
        multiple
        v-model="selected"
        pagination
        max-items="10"
        search
        :data="pengajar"
      >
        <template slot="header">
          <h3>
            Users
          </h3>
        </template>
        <template slot="thead">
          <vs-th sort-key="email">
            Email
          </vs-th>
          <vs-th sort-key="name">
            Name
          </vs-th>
          <vs-th sort-key="photoUrl">
            Website
          </vs-th>
          <vs-th sort-key="id">
            Nro
          </vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr
            :data="tr"
            :key="indextr"
            v-for="(tr, indextr) in data"
          >
            <vs-td :data="data[indextr].email">
              {{data[indextr].email}}
            </vs-td>

            <vs-td :data="data[indextr].name">
              {{data[indextr].name}}
            </vs-td>

            <vs-td :data="data[indextr].id">
              {{data[indextr].website}}
            </vs-td>

            <vs-td :data="data[indextr].id">
              {{data[indextr].id}}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>

      <pre>{{ selected }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: [],
      pengajar: null

    }
  },
  computed: {

  },
  created () {
    this.fetchPengajar()

  },
  methods: {
    fetchPengajar () {
      var vm = this
      // this.$http.defaults.headers.common = { 'Authorization': `Bearer g0OcD4QsTWxsn5fNPQu9rvJCGSOYkfFSCl05nIHpcriEHEs6KcmGEQPKRDpa` }
      this.$http.get('/api/master/list/siswa')
        .then(function (response) {
          if (response.status == 200 && response.data.success == true) {
            vm.pengajar = response.data.data
          }
        }).catch(function (error) {
          console.log(error)
        })
    }

  },

}
</script>

<style>
</style>
