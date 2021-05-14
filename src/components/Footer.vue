<template>
  <footer>
    <p>
      Originally developed by <a href="https://www.linkedin.com/in/gregmcmullen/">Greg McMullen</a> for use by Xavier University.
      <br />Made with <svg xmlns="http://www.w3.org/2000/svg" class="heart" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" /></svg> in 2021.
    </p>
  </footer>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Xavier University"
    }
  },
  computed : {
    year() {
      return new Date().getFullYear();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
  background: #000;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.heart {
  height: 1.5rem;
  width: 1.5rem;
}

a{
  color: white;
}

p {
  font-size: 1.6rem;
}
</style>
