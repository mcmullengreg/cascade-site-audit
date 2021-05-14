<template>
  <header>
    <h1>{{ title }}</h1>
    
    <nav>
      <ul>
        <li v-if="sessionStorage.length == 2">
          <router-link :to="{ name: 'Sites' }">Sites List</router-link>
        </li>
        <li><router-link to="/about">About This Tool</router-link></li>
        <li><a href="?logout" @click.prevent="logout">Logout</a></li>
      </ul>
    </nav>
    
  </header>
</template>

<script>
export default {
  data() {
    return {
      sessionStorage: window.sessionStorage
    }
  },
  props: {
    title: {
      type: String,
      default: "Xavier University"
    }
  },
  methods: {
    logout(){
      sessionStorage.removeItem("url");
      sessionStorage.removeItem("apiKey");
      this.$router.push('/');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background: #0c2340;
  color: white;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
}

h1 {
  font-size: 2.2rem;
  padding: 0;
  margin: 0;
}

ul{
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}

li a{
  color: white;
  padding: 2rem; 
}
</style>
