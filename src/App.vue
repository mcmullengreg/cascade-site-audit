<template>
  <Header />
  <main class="flex-column">
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>
<style>
html, body {
  margin: 0;
  font-size: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.flex-column{
  flex-direction: column;
}

main {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 800px;
  max-width: 100%;
  margin: 3rem auto;
}

p, label, input, ul{
  font-size: 1.8rem;
}

h1{
  text-align: center;
}
</style>
