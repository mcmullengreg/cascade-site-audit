<template>
  <Login v-if="sessionStorage.length == 0" />
  <Sites v-else />
</template>

<script>
// @ is an alias to /src
import Login  from '@/components/Login.vue'
import Sites  from '@/components/Sites.vue'

export default {
  name: 'Home',
  data() {
    return {
      sessionStorage: sessionStorage
    }
  },
  components: {
    Login,
    Sites
  }
}
</script>

<style scoped>
  h1{ text-align: center; }
</style>