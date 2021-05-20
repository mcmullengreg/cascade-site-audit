<template>
  <div v-if="error === true">
    <h1 class="error">Unauthorized Access: You must be an employee of this institution to access this resource.</h1>
  </div>
  <div v-else>
    <h1>Individual Site List</h1>
    <ul>
      <li>
        <strong>Site:</strong> {{ site.siteName }}
        <Meta :page="site" />
      </li>
    </ul>
    <ul>
      <li v-for="child in site.children" :key="child.id">
        <Children :content="child" />
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Meta from '@/components/Meta.vue';
import Children from '@/components/Children.vue';

export default {
  name: 'Site',
  props: {
    id: String
  },
  data() {
    return {
      error: true,
      site: {},
      loading: false
    }
  },
  components: {
    Meta,
    Children
  },
  created() {
    if ( sessionStorage.length == 2 && ( sessionStorage.getItem("url") !== null && sessionStorage.getItem("apiKey") !== null ) ) {
      this.error = "false";
      this.getSite();  
    }
  },
  methods: {
    async getSite(){
      this.loading = true
      const url = sessionStorage.getItem('url');
      const key = sessionStorage.getItem('apiKey');
      
      try{
       const siteRoot = await axios.post(url + "/api/v1/read/site/" + this.id, {
          headers: {
          'Content-Type': 'application/json'
          },
          'authentication' : {
            'apiKey': key
          }
        }).then( response => {
          return response.data.asset.site.rootFolderId;
        });
        
        this.site = await axios.post(url + "/api/v1/read/folder/" + siteRoot, {
          header: {
            'Content-Type': 'application/json'
          },
          'authentication' : {
            'apiKey' : key
          }
        }).then( response => {
          return response.data.asset.folder;
        });
      } catch( error) {
        console.log(error.response.data);
      }
    }
  }
}
</script>

<style scoped>
  h1{ text-align: center; }
  .error{
    font-size: 38px;
    color: red;
  }
</style>