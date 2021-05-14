<template>
  <strong>File:</strong> {{ file.name }}
  <ul>
    <li><strong>Created:</strong> {{ file.createdDate }}</li>
    <li><strong>Created By:</strong> {{ file.createdBy }}</li>
    <li v-if="file.lastModifiedDate"><strong>Last Modified:</strong> {{ file.lastModifiedDate }}</li>
    <li v-if="file.lastModifiedBy"><strong>Last Editor:</strong> {{ file.lastModifiedBy }}</li>
    <li v-if="file.lastPublishedDate"><strong>Last Publish:</strong> {{ file.lastPublishedDate }}</li>
    <li v-if="file.lastPublishedBy"><strong>Last Publisher:</strong> {{ file.lastPublishedBy }}</li>
  </ul>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'File',
  props: {
    id: String
  },
  data() {
    return {
      file: {}
    }
  },
  components: {
  },
  created(){
    this.getFile();
  },
  methods: {
    async getFile() {
      const url = sessionStorage.getItem('url');
      const key = sessionStorage.getItem('apiKey');
      this.file = await axios.post(url + "/api/v1/read/file/" + this.id, {
          header: {
            'Content-Type': 'application/json'
          },
          'authentication' : {
            'apiKey' : key
          }
        }).then( response => {
          return response.data.asset.file;
        });
    }
  }
}
</script>

<style scoped>
</style>