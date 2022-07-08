<template>

<div id= "page">
  <nav id= "navbar" class="navbar-fixed-top" data-spy="affix">
    <div id=jefflogo>
     <!-- <img  id= mainlogo src ="@/assets/JeffLogo.png"/> -->
    </div>
    <div id="linksonpage">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/about" class="link">About</router-link>
   <div class="dropdown">
  <button class="dropbtn">Portfolio</button>
  <div class="dropdown-content">
    <a href="/senior-photos">Senior-Photos</a>
    <a href="/sports">Sport-Photography</a>
    <a href="/nature">Nature</a>
    <a href="/headshots">Headshots</a>
  </div>

</div>
    
    </div>

  </nav>
  <div id="footer">
  <div id="socials">

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

<ul id= "socialmedia">
  <li>
    <a href="https://www.facebook.com/JeffBarnesPhotography">
      <i class="fab fa-facebook-f icon"></i>    </a>
  </li>
  <li>
    <a href="#"><i class="fab fa-twitter icon"></i></a>
  </li>
  <li>
    <a href="#"><i class="fab fa-linkedin-in icon"></i></a></li>

</ul>
    
  </div>

   <a href="https://jeffbarnesphotography.zenfolio.com/" id="prints">click here to order prints!</a>
  </div>
  <router-view id= "thisview"/>

</div>

</template>

<style>


 #socialmedia {
  display: flex;
  /* justify-items: flex-end; */
  position: absolute;
  /* top: -25px;
  left: 20%; */
right:30px;
bottom:-5px;

  /* transform: translate(170%, -70%); */

}

ul li {
  list-style: none;
}

ul li a {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.6);
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  margin:  5px;
  margin-bottom:0px;
  display: block;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.6);
  z-index: 1;
}

ul li a .icon {
  position: relative;
  color: #3f3f3f;
  transition: .5s;
  z-index: 3;
}

ul li a:hover .icon {
  color: #fff;
  transform: rotateY(360deg);
}

ul li a:before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f00;
  transition: .5s;
  z-index: 2;
}

ul li a:hover:before {
  top: 0;
}

ul li:nth-child(1) a:before{
  background: #3b5999;
}

ul li:nth-child(2) a:before{
  background: #55acee;
}

ul li:nth-child(3) a:before {
  background: #0077b5;
}

ul li:nth-child(4) a:before {
  background: #dd4b39;
}



.btn-2 {
    letter-spacing: 0;
}

.btn-2:hover,
.btn-2:active {
  letter-spacing: 5px;
}

.btn-2:after,
.btn-2:before {
  backface-visibility: hidden;
  border: 1px solid rgba(#fff, 0);
  bottom: 0px;
  content: " ";
  display: block;
  margin: 0 auto;
  position: relative;
  transition: all 280ms ease-in-out;
  width: 0;
}

.btn-2:hover:after,
.btn-2:hover:before {
  backface-visibility: hidden;
  border-color: #fff;
  transition: width 350ms ease-in-out;
  width: 70%;
}

.btn-2:hover:before {
  bottom: auto;
  top: 0;
  width: 70%;
}


#prints{
  text-decoration: none;
  background:rgba(173, 145, 189, 0.5);
  font-size: 18px;
  font-weight: bold;
  padding:6px;
  color: white;
  border-radius:15px;
  margin-bottom: 15px;
  text-shadow: 2px 2px 3px black;
  text-transform: capitalize;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
#prints:hover{
   background:rgba(207, 173, 226, 0.7);
}
#footer{
  width:100%;
  display: flex;
  
position:fixed;
bottom:0px;
justify-content: center;

z-index: 1;
}

/* Dropdown Button */
.dropbtn {
  background-color: none;

 
  font-size: 16px;
  border: none;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
  color:white;
  width:220px;
  
 
  text-decoration: none;
  font-size: 24px;
  background: none;
   
  padding:8px;
  text-decoration: none;
  font-size: 24px;
  text-shadow: 2px 2px 4px black;

  /* filter: drop-shadow(2px 2px 2px black); */
  display: flex;
  align-items: center;
  justify-content: center;

}
#linksonpage > div{
  padding:8px;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
 
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  /* position: absolute; */
  margin-top:7px;;
background: rgba(75, 75, 75, .7);
 
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
  color:white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
   text-shadow: 2px 2px 3px black;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background: rgba(158, 155, 155, 0.7);}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;

}

/* Change the background color of the dropdown button when the dropdown content is shown */
#linksonpage > div:hover {  
  background: rgba(75, 75, 75, .7);
  
  }



#app{
 
}
body{
  margin:0px;
 height: 90%;
  
  
}

#mainlogo{
  max-height: 100px;
  filter: drop-shadow(3px 3px 1.5px #222);
}
#navbar{
  width: 100%;
  background: rgba(110, 109, 109, .55);
  display: flex;

align-content: center;
position:fixed;

z-index: 1;
display: flex;
height:60px;

}
#linksonpage{


width: 100%;
display: flex;
justify-content: center;
align-content: center;
}
.link{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
  color:white;
  width:220px;
  
  padding:8px;
  text-decoration: none;
  font-size: 24px;
  text-shadow: 2px 2px 4px black;
  /* filter: drop-shadow(2px 2px 2px black); */
  display: flex;
  align-items: center;
  justify-content: center;



}
.link:hover{
  background: rgba(75, 75, 75, .7);
}
html{
  width:100%;
  

}


</style>
