<template>
  <header>
    <h1>Cascade Site List</h1>    
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'Home' }">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <title>Home</title>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </router-link>
        </li>
        <li v-if="sessionStorage.length == 2">
          <router-link :to="{ name: 'Sites' }">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <title>Site List</title>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <title>About the tool</title>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </router-link>
        </li>
        <li v-if="sessionStorage.length == 2"><a href="?logout" @click.prevent="logout">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <title>Log out</title>
            <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
          </svg>
        </a></li>
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
  props: {},
  methods: {
    logout(){
      window.sessionStorage.removeItem("url");
      window.sessionStorage.removeItem("apiKey");
      this.$router.push("{ name: 'Home' }");
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

.icon {
  height: 24px;
  width: 24px;
  margin-bottom: -1.5rem;
  display: block;
}
</style>
