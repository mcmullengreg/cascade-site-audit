<template>
  <span class="text__cap">{{ type }}:</span> <a :href="session.url + '/entity/open.act?id=' + result.id + '&type=' + type" target="_blank">{{ result.name }} <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor"><title>This link opens in a new window</title><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg></a>
  <Meta :page="result" />
  <ul v-if="result.children">
    <li v-for="child in result.children" :key="child.id">
      <Children :content="child" />
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Meta from '@/components/Meta.vue';

export default {
  name: 'Children',
  props: {
    content: Object
  },
  data() {
    return {
      response: {},
      result: {},
      session: sessionStorage
    };
  },
  components: {
    Meta
  },
  created() {
    this.getChild();
  },
  methods: {
    async getChild(){
      const url = sessionStorage.getItem('url');
      const key = sessionStorage.getItem('apiKey');
      
      this.response = await axios.post(url + "/api/v1/read/"+this.type+"/"+this.content.id, {
        headers: {
          'Content-Type': 'application/json'
          },
          'authentication' : {
            'apiKey': key
          }
      }).then( response => {
        return this.processResponse(response.data.asset)
      });
    },
    processResponse (response) {      
      if ( "xhtmlDataDefinitionBlock" in response ) {
        this.result = response.xhtmlDataDefinitionBlock;
      } else if ( "indexBlock" in response ) {
        this.result = response.indexBlock;
      } else if ( "textBlock" in response ) {
        this.result = response.textBlock;
      } else if ( "xhtml" in response) {
        this.result = response.xhtml; 
      } else if ( 'symlink' in response ) {
        this.result =  response.symlink;
      } else if ( 'scriptFormat' in response ) {
        this.result =  response.scriptFormat;
      } else if ( 'template' in response ) {
        this.result =  response.template;
      } else if ( this.content.type == 'folder' ) {
        this.result =  response.folder;
      } else if ( this.content.type == 'page'  ) {
        this.result =  response.page;
      } else if ( 'file' in response ){
        this.result = response.file;
      } else if ( 'reference' in response ) {
        this.result = response.reference;
      } else {
        this.result = response;
      }
    }
  },
  computed: {
    type() {
      if ( this.content.type.includes('block') ) {
        return "block";
      } else if ( this.content.type.includes('symlink') ) {
        return "symlink";
      } else if ( this.content.type.includes('format') ) {
        return "format";
      } else if ( this.content.type.includes('template') ) {
        return "template";
      } else {
        return this.content.type;
      }
    }
  }
}
</script>

<style scoped>
  .text__cap{
    text-transform: capitalize;
    font-weight: bold;
  }
  
  a[target="_blank"]{
  }
  .icon{
    height: 1.8rem;
    width: 1.8rem;
    margin-bottom: -0.45rem;
  }
</style>