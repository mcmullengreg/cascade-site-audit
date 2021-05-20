<template>
  <h1>Sites List</h1>
  <content-loader
    viewBox="0 0 1200 400"
    backgroundColor="#e8e8e8"
    foregroundColor="#e3e3e3"
    :speed="3"
    v-if="!sites"
  >
    <rect x="27" y="139" rx="4" ry="4" width="20" height="20" />
    <rect x="67" y="140" rx="10" ry="10" width="85" height="19" />
    <rect x="188" y="141" rx="10" ry="10" width="169" height="19" />
    <rect x="402" y="140" rx="10" ry="10" width="85" height="19" />
    <rect x="523" y="141" rx="10" ry="10" width="169" height="19" />
    <rect x="731" y="139" rx="10" ry="10" width="85" height="19" />
    <rect x="852" y="138" rx="10" ry="10" width="85" height="19" />

    <rect x="26" y="196" rx="4" ry="4" width="20" height="20" />
    <rect x="66" y="197" rx="10" ry="10" width="85" height="19" />
    <rect x="187" y="198" rx="10" ry="10" width="169" height="19" />
    <rect x="401" y="197" rx="10" ry="10" width="85" height="19" />
    <rect x="522" y="198" rx="10" ry="10" width="169" height="19" />
    <rect x="730" y="196" rx="10" ry="10" width="85" height="19" />
    <rect x="851" y="195" rx="10" ry="10" width="85" height="19" />

    <rect x="26" y="258" rx="4" ry="4" width="20" height="20" />
    <rect x="66" y="259" rx="10" ry="10" width="85" height="19" />
    <rect x="187" y="260" rx="10" ry="10" width="169" height="19" />
    <rect x="401" y="259" rx="10" ry="10" width="85" height="19" />
    <rect x="522" y="260" rx="10" ry="10" width="169" height="19" />
    <rect x="730" y="258" rx="10" ry="10" width="85" height="19" />
    <rect x="851" y="257" rx="10" ry="10" width="85" height="19" />

    <rect x="26" y="316" rx="4" ry="4" width="20" height="20" />
    <rect x="66" y="317" rx="10" ry="10" width="85" height="19" />
    <rect x="187" y="318" rx="10" ry="10" width="169" height="19" />
    <rect x="401" y="317" rx="10" ry="10" width="85" height="19" />
    <rect x="522" y="318" rx="10" ry="10" width="169" height="19" />
    <rect x="730" y="316" rx="10" ry="10" width="85" height="19" />
    <rect x="851" y="315" rx="10" ry="10" width="85" height="19" />

    <rect x="26" y="379" rx="4" ry="4" width="20" height="20" />
    <rect x="66" y="380" rx="10" ry="10" width="85" height="19" />
    <rect x="187" y="381" rx="10" ry="10" width="169" height="19" />
    <rect x="401" y="380" rx="10" ry="10" width="85" height="19" />
    <rect x="522" y="381" rx="10" ry="10" width="169" height="19" />
    <rect x="730" y="379" rx="10" ry="10" width="85" height="19" />
    <rect x="851" y="378" rx="10" ry="10" width="85" height="19" />

    <rect x="978" y="138" rx="10" ry="10" width="169" height="19" />
    <rect x="977" y="195" rx="10" ry="10" width="169" height="19" />
    <rect x="977" y="257" rx="10" ry="10" width="169" height="19" />
    <rect x="977" y="315" rx="10" ry="10" width="169" height="19" />
    <rect x="977" y="378" rx="10" ry="10" width="169" height="19" />

    <rect x="523" y="23" rx="5" ry="5" width="153" height="30" />
  </content-loader>
  <div v-else>
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
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import { ContentLoader } from "vue-content-loader"
export default {
  name: 'Sites',
  data() {
    return {
      sites: null
    };
  },
  components: {
    ContentLoader
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
  table td{
    padding: 0.25rem 0.5rem;
  }
</style>