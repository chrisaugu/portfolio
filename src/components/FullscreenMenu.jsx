<header>
  <div className="menu-cont" id="toggle">
      <span className='menu-txt' data-text='CLOSE-'>
        -MENU
      </span>
  </div>
</header>
<div className="overlay" id="overlay">
  <nav className="overlay-menu">
    <ul>
      <li ><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Work</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</div>
<div className="rotate center-vertical">
  <div id="inner" className="inner">
    <p>Hello.</p>
    <p>I</p>
    <p>Am</p>
    <p>Sofiya</p>
    <p>And</p>
    <p>I'm</p>
    <p>A</p>
    <p>UX</p>
    <p>Designer</p>
    <p>Hello.</p>
  </div>
</div>
<div className="transparent"></div>
<section id="about"></section>


<style>
@import url(https://fonts.googleapis.com/css?family=Righteous);

html, body { 
  height:100%;
top:0;
left:0;
  overflow-y:hidden;
}
body {
  margin:auto 0;
  background:url("https://res.cloudinary.com/dnhwxgf8i/image/upload/c_scale,h_718,q_100/v1487689941/kamil-lehmann-379_lz8idf.jpg") no-repeat;
  background-size:cover ;
  background-position:center;
  text-align:center;
}
.transparent{
  background:rgba(11, 31, 65,0.5);
  position:absolute;
  top:0;
  left:0;
  height:100%;
  width:100%;
  margin:0;
}
.menu-cont {
  position:fixed;
  float:left;
  top:4%;
  display: block;
  cursor: pointer;
  padding:4px;
  cursor:pointer;
  z-index:200;
}

.menu-txt {
  display: inline-block;
  position: relative;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 6px;
  font-weight: 700;
  font-family:'Righteous';
  text-overflow:ellipsis;
  background-image:-webkit-linear-gradient(#FA2300,#E1037C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor:pointer;
}

.overlay {
  position: fixed;
  background:rgba(0,0,0,0.9);
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: opacity .35s, visibility .35s, height .35s;
  transition: opacity .35s, visibility .35s, height .35s;
  overflow: hidden;
  z-index:100;
}
.overlay.open {
  opacity: .9;
  visibility: visible;
  height: 100%;
}
.overlay.open li {
  -webkit-animation: fadeInRight .5s ease forwards;
          animation: fadeInRight .5s ease forwards;
  -webkit-animation-delay: .35s;
          animation-delay: .35s;
}
.overlay.open li:nth-of-type(2) {
  -webkit-animation-delay: .4s;
          animation-delay: .4s;
}
.overlay.open li:nth-of-type(3) {
  -webkit-animation-delay: .45s;
          animation-delay: .45s;
}
.overlay.open li:nth-of-type(4) {
  -webkit-animation-delay: .50s;
          animation-delay: .50s;
}
.overlay nav {
  position: relative;
  height: 70%;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  font-size: 50px;
  font-family: 'Righteous', serif;
  font-weight: 400;
  text-align: center;
}
.overlay ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  height: 100%;
}
.overlay ul li {
  display: block;
  height: 25%;
  height: calc(100% / 4);
  min-height: 50px;
  position: relative;
  opacity: 0;
  
}
.overlay ul li a {
  display: block;
  position: relative;
  text-overflow:ellipsis;
  background-image: -webkit-linear-gradient(#FA2300,#E1037C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  overflow: hidden;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.overlay ul li a:hover:after, .overlay ul li a:focus:after, .overlay ul li a:active:after {
  width: 100%;
}
.overlay ul li a:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  height: 3px;
  
  -webkit-transition: .35s;
  transition: .35s;
}

@-webkit-keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}
.overlay ul li a:hover{
-webkit-transform: scale(1.6);
          transform: scale(1.6);
}
.overlay ul li a:hover:before{
-webkit-transform: scaleX(1);
          transform: scaleX(1);
}
.overlay ul li a:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  height: 3px;
  
  -webkit-transition: .35s;
  transition: .35s;
}
.overlay ul li a:before{
-webkit-transform: scaleX(0);
          transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}

.rotate {
  font-family: "Righteous";
  font-size: 8.5em;
  height:180px;
  overflow:hidden;
  position:relative;
  z-index:30;

}

.inner {
  height:170px;
  -webkit-transition:-webkit-transform 0.3s ease;
  -webkit-backface-visibility:hidden;
  
}

p {
  margin:0;
  padding:0;
  height:170px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis; 
  background-image:-webkit-linear-gradient(#FA2300,#E1037C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>


<script>
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
$('.menu-cont').on('click', function() {
  
  var menu = $('.menu-txt').text();
  var close = $('.menu-txt').attr('data-text');
  
  $('.menu').toggleClass('active');
  
  if ($('.menu-txt').text(menu)) {
    $('.menu-txt').text(close);
  } else {
    $('.menu-txt').text(menu);
  } 
    $('.menu-txt').attr('data-text',menu);
})
var findNCenter = function() {
  var elems = document.querySelectorAll('.center-vertical');

  for(var i =0; i<elems.length; i++) {
    elems[i].style.marginTop = (elems[i].parentNode.offsetHeight - elems[i].offsetHeight)/2 + 'px';
  }
};

document.addEventListener && document.addEventListener('DOMContentLoaded', findNCenter);
window.addEventListener && window.addEventListener('resize', findNCenter);

$(document).ready(function() {

  var count = $('#inner p').length;
  var i = 1;
    
setInterval(function() {
  if (i < count) {
    $('#inner').css('-webkit-transform','translate3d(0,-' + i + '00%,0)');
      i++;
  }
}, 800);
});

</script>
