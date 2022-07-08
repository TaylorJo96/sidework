<template>
  <div class="home">

    <div id = logobox>
     
    <img id=jefflogo src ="@/assets/JeffLogo.png"/> 
    
    <!-- <div>
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
      </div> -->
    </div>
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
  position: absolute;
  top: 0px;
  /* top:0px; */
  height:100%;
  width: 100%;

    background-blend-mode: overlay;
  background: url("C:\Users\Taylor\git\sidework\jeff\jeffrey\src\assets\DA-looking.jpg") center center no-repeat,
    linear-gradient(to bottom, rgba(94, 89, 83, 0.5), rgba(26, 25, 25, 0.8));

  background-size: cover;
  background-position: top;
  display:flex;
  flex-direction: column;

 align-content: space-between;
 
 
}

#jefflogo{

width: 65%;
max-width:650px;


 /* -webkit-filter: drop-shadow(5px 5px 8px rgb(5, 5, 5) ); */
  filter: drop-shadow(4px 4px 2px rgb(17, 17, 17));



}
h3{

  padding:30px;
}
#logobox{
width:100%;
height:70%;
display: flex;
flex-direction: column;
justify-content:space-around;
align-items: center;
margin-top:25vh;
opacity: 70%;


}
</style>
