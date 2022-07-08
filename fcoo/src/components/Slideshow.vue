<template>
 
<div class="container2">
	<div class="slideshow">
		<div id="slide-1" class="slide">
			<a href="#slide-7"></a>
			<a href="#slide-2"></a>
			<img src= "@/assets/fc1.jpg"/>
		</div>
		<div id="slide-2" class="slide">
			<a href="#slide-1"></a>
			<a href="#slide-3"></a>
			<img src="@/assets/fc2.jpg" />
		</div>
		<div id="slide-3" class="slide">
			<a href="#slide-2"></a>
			<a href="#slide-4"></a>
			<img src="@/assets/fc3.jpg" />
		</div>
		<div id="slide-4" class="slide">
			<a href="#slide-3"></a>
			<a href="#slide-5"></a>
			<img src="@/assets/fc8.jpg" />
		</div>
		<div id="slide-5" class="slide">
			<a href="#slide-4"></a>
			<a href="#slide-6"></a>
			<img src="@/assets/fc5.jpg"/>
		</div>
		<div id="slide-6" class="slide">
			<a href="#slide-5"></a>
			<a href="#slide-7"></a>
			<img src="@/assets/fc6.jpg" />
		</div>
		<div id="slide-7" class="slide">
			<a href="#slide-6"></a>
			<a href="#slide-1"></a>
			<img src="@/assets/fc7.jpg" />
		</div>
	</div>
  <div class="pagination">
    <a href="#slide-1"><span>1</span></a>
    <a href="#slide-2"><span>2</span></a>
    <a href="#slide-3"><span>3</span></a>
    <a href="#slide-4"><span>4</span></a>
    <a href="#slide-5"><span>5</span></a>
    <a href="#slide-6"><span>6</span></a>
    <a href="#slide-7"><span>7</span></a>
  </div>
</div>
</template>

<script>
</script>

<style scoped>



@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap");


body {
  background: linear-gradient(-45deg, #83a4d4, #b6fbff);
  font-family: "Open Sans", sans-serif;
}

h1 {
  text-align: center;
}


aside,
.container2 {
  margin: 0 auto 20px;
  height:70vh;

}

.container2 {
  border-radius: 5px;
  margin: 0 auto;
  position: relative;
  transition: box-shadow 200ms;
  background-color:gray;

}
.container2:hover {
  box-shadow: 0 10px 50px -10px rgba(0, 0, 0, 0.25);
}

.slideshow {
 
background: gray;
  width:80vw;
  height: 100%;

}
.slideshow:after {
  content: "";
  display: block;
 
}
.slideshow:hover a {
  opacity: 1;
}
.slideshow a {
  opacity: 0;
  position: relative;
  text-decoration: none;
  transition: opacity 0.5s;
}
.slideshow a:after {
  border-color: #fff #fff transparent transparent;
  border-style: solid;
  border-width: 2px;
  color: black;
  display: block;
  height: 10px;
  position: absolute;
  top: calc(50% - 5px);
  width: 10px;
}
.slideshow a:first-child:after {
  content: "";
  left: 10px;
  transform: rotate(-135deg);
}
.slideshow a:nth-child(2):after {
  content: "";
  right: 10px;
  transform: rotate(45deg);
}
.slideshow .slide {
background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='80' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 1)'/><path d='M-5 5L5.1 15 15 5l10 10'  stroke-linecap='square' stroke-width='1.5' stroke='hsla(4, 85%, 48%, 1)' fill='none'/><path d='M-5 25L5.1 35 15 25l10 10'  stroke-linecap='square' stroke-width='1.5' stroke='hsla(122, 39%, 49%, 1)' fill='none'/><path d='M-5 45L5.1 55 15 45l10 10'  stroke-linecap='square' stroke-width='1.5' stroke='hsla(199, 100%, 36%, 1)' fill='none'/><path d='M-5 65L5.1 75 15 65l10 10'  stroke-linecap='square' stroke-width='1.5' stroke='hsla(47,80.9%,61%,1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  box-sizing: border-box;
  display: none;
  height: 100%;
  position: absolute;
width:100%
}
.slideshow .slide:first-child, .slideshow .slide:target {
  display: block;
}
.slideshow .slide a {
  display: block;
  height: 100%;
  position: absolute;
  width: 50%;
}
.slideshow .slide a:nth-child(2) {
  left: 50%;
}
.slideshow .slide img {
  border-radius: 5px;
  height: 100%;
  width:100%;
  object-fit:scale-down;
}

.pagination {
  display: flex;
  bottom: 10px;
  justify-content: center;
  position: absolute;
  width: 100%;
}
.pagination a {
  background: rgba(255, 255, 255, 0.75);
  border-radius: 50%;
  display: block;
  height: 10px;
  width: 10px;
}
.pagination a:not(:last-child) {
  margin-right: 5px;
}
.pagination a span {
  display: none;
}

a:target {
  color: red;
}
</style>