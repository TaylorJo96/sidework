<template>
  <div class="home">

    <HelloWorld msg="Welcome to Your Vue.js App"/>


    
  </div>

  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
.home{
  /* background:red; */
  height:100%;
  

}

</style>
