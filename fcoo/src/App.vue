<template>
  <div id="container1">
    <nav id="navbar">
      <div id="firstchoice"></div>
      <div id="navlinks">
        <router-link id="home" class="navigation" to="/">Home</router-link>
        <router-link id="about" class="navigation" to="/about"
          >About</router-link
        >
        <img id="fclogo" src="@/assets/FirstChoiceLogo.png" alt="" />
        <router-link id="career" class="navigation" to="/careers"
          >careers</router-link
        >
        <router-link id="contact" class="navigation" to="/contact"
          >contactus</router-link
        >
      </div>
    </nav>
    <div id="router">
    
    <router-view />
    </div>
    <!-- <div id="footer">this is footer
      
    </div> -->
  </div>
</template>

<style>
#app{
  height:100%;
}
#firstchoice {
  display: flex;
  text-transform: capitalize;
}

#fclogo {
  height: 18vh;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 1vh;
  padding-top: 1vh;
  max-height:250px;
}
#navbar {
  background: white;

  width: 100%;
  
  

  /* padding: 20px; */
}
body {
  margin: 0 !important;
  height: 100vh;
}
.navigation {
  font-size:20px;
  text-transform: capitalize;
  text-decoration: none;
  color: black;
  width: inherit;
  justify-content: center;
  height: 20%;
 
  display: flex;
  align-items: center;
  

}
#navlinks {
  display: flex;
  width: 70vw;
  justify-content: space-between;

  align-items: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 600;
  width:inherit;
}
#home {
  /* background: red;
  align-content: center;
  border-color: darkred; */
}
#about {
  /* background: yellow;
  border-color: darkgoldenrod; */
}
#career {
  /* background: green;
  border-color: darkgreen; */
}
#contact {
  /* background: rgb(85, 139, 255);
  border-color: rgb(38, 78, 255); */
}
#container1 {
height:100vh;
  /* display: flex;
  flex-direction: column;
  
  justify-content:space-between; */
}
h1 {
  margin: 0;
}
#router{
  /* height:inherit; */
  height:83vh;

}
</style>
