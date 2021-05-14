<template>
  <strong>Template:</strong> {{ page.name }}
  <ul>
    <li><strong>Created:</strong> {{ page.createdDate }}</li>
    <li><strong>Created By:</strong> {{ page.createdBy }}</li>
    <li v-if="page.lastModifiedDate"><strong>Last Modified:</strong> {{ page.lastModifiedDate }}</li>
    <li v-if="page.lastModifiedBy"><strong>Last Editor:</strong> {{ page.lastModifiedBy }}</li>
    <li v-if="page.lastPublishedDate"><strong>Last Publish:</strong> {{ page.lastPublishedDate }}</li>
    <li v-if="page.lastPublishedBy"><strong>Last Publisher:</strong> {{ page.lastPublishedBy }}</li>
  </ul>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'Page',
  props: {
    id: String
  },
  data() {
    return {
      page: {}
    }
  },
  components: {
  },
  created(){
    this.getPage();
  },
  methods: {
    async getPage() {
      const url = sessionStorage.getItem('url');
      const key = sessionStorage.getItem('apiKey');
      this.page = await axios.post(url + "/api/v1/read/template/" + this.id, {
          header: {
            'Content-Type': 'application/json'
          },
          'authentication' : {
            'apiKey' : key
          }
        }).then( response => {
          return response.data.asset.template;
        });
    }
  }
}
</script>

<style scoped>
</style>