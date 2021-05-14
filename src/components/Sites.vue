<template>
  <h1>Sites List</h1>
  <p>Total Sites: {{ sites.length }}</p>
  <table v-if="sites.length > 0">
    <thead>
      <tr>
        <th scope="col">Site Name</th>
        <th scope='col'>Site ID</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="site in sites" :key="site.id">
        <td><router-link :to="{ name: 'Site', params: { type: 'site', id: site.id } }" >{{ site.path.path }}</router-link></td>
        <td>{{ site.id }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Sites',
  data() {
    return {
      sites: {}
    };
  },
  components: {
    
  },
  created(){
    this.getSites();
  },
  methods: {
    async getSites(){
      const url = window.sessionStorage.getItem("url");
      const key = window.sessionStorage.getItem("apiKey"); 
      
      this.sites = await axios.post(url + "/api/v1/listSites", {
        headers: {
        'Content-Type': 'application/json'
        },
        'authentication' : {
          'apiKey': key
        }
      }).then( response => {
        return response.data.sites
      });
    }
  }
}
</script>

<style scoped>
  h1, p{ text-align: center; }
  table {
    max-width: 100%;
    width: 800px;
    margin: 0 auto;
  }
  table{
    font-size: 1.8rem;
  }
  table tr:nth-child(even) {
    background: #e8e8e8;
  }
</style>