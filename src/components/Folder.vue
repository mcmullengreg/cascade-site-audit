<template>
  <strong>Folder:</strong> {{ folder.name }}
  <ul>
    <li><strong>Created:</strong> {{ folder.lastModifiedDate }}</li>
    <li><strong>Created By:</strong> {{ folder.createdBy }}</li>
    <li v-if="folder.lastModifiedDate"><strong>Last Modified:</strong> {{ folder.lastModifiedDate }}</li>
    <li v-if="folder.lastModifiedBy"><strong>Last Editor:</strong> {{ folder.lastModifiedBy }}</li>
    <li v-if="folder.lastPublishedDate"><strong>Last Publish:</strong> {{ folder.lastPublishedDate }}</li>
    <li v-if="folder.lastPublishedBy"><strong>Last Publisher:</strong> {{ folder.lastPublishedBy }}</li>
  </ul>
  <ul>
    <li v-for="child in folder.children" :key="child.id">
      <Folder v-if="child.type == 'folder'" :id="child.id" />
      <File v-else-if="child.type== 'file'" :id="child.id" />
      <Page v-else-if="child.type== 'page'" :id="child.id" />
      <Reference v-else-if="child.type== 'reference'" :id="child.id" />
      <Block v-else-if="child.type.includes('block')" :id="child.id" />
      <span v-else>{{ child }}</span>
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import File from '@/components/File.vue';
import Page from '@/components/Page.vue';
import Reference from '@/components/Reference.vue';
import Block from '@/components/Block.vue';
export default {
  name: 'Folder',
  props: {
    id: String
  },
  data() {
    return {
      folder: {}
    }
  },
  components: {
    File,
    Page,
    Reference,
    Block
  },
  created(){
    this.getFolder();
  },
  methods: {
    async getFolder() {
      const url = sessionStorage.getItem('url');
      const key = sessionStorage.getItem('apiKey');
      this.folder = await axios.post(url + "/api/v1/read/folder/" + this.id, {
          header: {
            'Content-Type': 'application/json'
          },
          'authentication' : {
            'apiKey' : key
          }
        }).then( response => {
          return response.data.asset.folder;
        });
    }
  }
  
}
</script>

<style scoped>
</style>