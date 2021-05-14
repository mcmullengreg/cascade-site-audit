<template>
  <h1>Welcome! Enter in your Cascade URL and API Key and we'll get started</h1>
  <form id="loginForm" @submit="submitForm" class="flex-column">
      <label>Cascade URL</label>
      <input type="text" v-model="url" placeholder="https://cascade.yourinstitute.com" required="" />
      <p class="descr">We'll take care of the API destination.</p>
        
      <label>API Key</label>
      <input type="password" v-model="key" required="" />
      <p class="descr">Directions on how to <a href="https://www.hannonhill.com/cascadecms/latest/cascade-basics/account-settings.html#UserApiKey" target="_blank">generate an API Key</a>.</p>  
      <button
        type="submit"
        class="btn">
        Get Sites
      </button>
    </form>  
</template>

<script>
export default {
  data(){
    return {
      url: null,
      key: null
    }
  },
  methods: {
    submitForm(){
      sessionStorage.setItem("url", this.url);
      sessionStorage.setItem("apiKey", this.key);
      this.$router.push({
        name : 'Sites'
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form{
  display: flex;
  border: solid 0.1rem #e8e8e8;
  margin: 4rem auto;
  padding: 2rem 5rem;
}

label, input {
  display: block;
}

label{
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

input{
  box-shadow: none;
  border: solid 0.1rem #e8e8e8;
  padding: 0.5rem 1rem;
  margin: 0;
}

.btn {
  font-size: 2.4rem;
  display: block;
  margin: 3rem auto;
  padding: 2rem;
  background: #0c2340;
  color: white;
  border: none;
  cursor: hand;
}

.descr{
  font-size: 1.4rem;
  color: #333;
}
</style>
