<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
     <userList> </userList>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import userList from '../components/userList'
export default {
  name: 'Home',
  components: {
    HelloWorld,userList
  }
}
</script>
