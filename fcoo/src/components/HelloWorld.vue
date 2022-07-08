<template>
  <div class="hello">
    <div id="box">
       
    <!-- <h1 id="title">{{ msg }}</h1> -->
        <p id="par">
      
First Choice of Ohio provides the best quality care to Individuals with Developmental Disabilities while living in the Community.
    </p>
   <Slideshow></Slideshow>

    </div>
  </div>
</template>

<script>
import Slideshow from '@/components/Slideshow.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String  
  },
  components:{
    Slideshow
  }
}
</script>
<style scoped>
.hello{
  /* background:rgb(255, 20, 20); */
  /* border-radius:5px; */
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width:100%;


}
#box{
height:inherit;
width:inherit;
background-color:rgb(194, 194, 194);



}
#par{
  padding:5px;
}


</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
