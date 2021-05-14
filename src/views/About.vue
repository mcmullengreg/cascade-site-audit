<template>
  <h1>About this tool</h1>
  <p>This tool is to help audit sites within your institution. You will be required to have
    administrative access to your instance of Cascade to get the full benefit of this tool.
  </p>
  
  <p>In order to access the system, you will need to <a href="https://www.hannonhill.com/cascadecms/latest/cascade-basics/account-settings.html#UserApiKey" target="_blank">generate an API Key</a> through your 
    Cascade CMS System. The site list will then automatically generate based on your specific user access.</p>
    
  <p>Once the site list loads, select the site you wish to see the folder/file tree off.</p>
  
  <p>We are using SessionStorage to temporarily setup your access, so as to not really save anything within the application long term. YOU are responsible for the safety of your API Key.</p>
  
  <p><strong>The developers of this project will not and do not take any responsibility for lost or stolen information due to security breaches within this tool or your personal/professional networks</strong>.</p>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'About',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>

<style scoped>
  h1{ text-align: center; }
</style>