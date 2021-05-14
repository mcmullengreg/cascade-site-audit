<template>
  <div v-if="error === true">
    <h1 class="error">Unauthorized Access: You must be an employee of this institution to access this resource.</h1>
  </div>
  <div v-else>
    <h1>Individual Site List</h1>
    <ul>
      <li>
        <strong>Site:</strong> {{ site.siteName }}
        <ul>
          <li>Site creation: {{ site.createdDate }}</li>
        </ul>
      </li>
      <li v-for="child in site.children" :key="child.id">
        <Folder v-if="child.type == 'folder'" :id="child.id" />
        <File v-else-if="child.type == 'file'" :id="child.id" />
        <Page v-else-if="child.type == 'page'" :id="child.id" />
        <Reference v-else-if="child.type== 'reference'" :id="child.id" />
        <Block v-else-if="child.type.includes('block')" :id="child.id" />
        <Link v-else-if="child.type.includes('symlink')" :id="child.id" />
        <Format v-else-if="child.type.includes('format')" :id="child.id" />
        <Template v-else-if="child.type.includes('template')" :id="child.id" />
        <span v-else>{{ child }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Folder from '@/components/Folder.vue';
import File from '@/components/File.vue';
import Page from '@/components/Page.vue';
import Reference from '@/components/Reference.vue';
import Block from '@/components/Block.vue';
import Link from '@/components/Link.vue';
import Format from '@/components/Format.vue';
import Template from '@/components/Template.vue';
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
    Folder,
    File,
    Page,
    Reference,
    Block,
    Link,
    Format,
    Template
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
  ul {
    font-size: 16px;
  }
  .error{
    font-size: 38px;
    color: red;
  }
</style>