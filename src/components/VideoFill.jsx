
const VideoFill = () => {
  
  const video = document.querySelector("video");
  if (window.matchMedia('(prefers-reduced-motion)').matches) {
    video.removeAttribute("autoplay");
    video.pause();
  }

  return (
    <>
      <video autoplay playsinline muted loop preload poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg">
        <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
        <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" />
      </video>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
        <defs>
        <mask id="mask" x="0" y="0" width="100%" height="100%" >
          <rect x="0" y="0" width="100%" height="100%" />
        <text x="72"  y="50">OCEAN</text>
          </mask>
      </defs>
     <rect x="0" y="0" width="100%" height="100%" />
      </svg>
    </>
  );
}

export default VideoFill;

// @font-face {
//   font-family: Biko;
//   src:url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/biko-black.woff");
// }
// body {
//   background: white;
//   margin: 2rem;
// }
// header { 
//   width: 100%;
//   margin: 0 auto;
//   position: relative;
//   max-width: 1200px;
// }
// header video { width: 100%; }
// svg { 
//   width: 100%;
//   position:absolute;
//   top: 0;
//   left: 0; // needed for FF, Safari, Edge
//   height: 100%;
// }
// svg text {
//   font-family: Biko, sans-serif;
//   font-weight: 700;
//   text-transform: uppercase;
//   font-size: 38px;
// }
// svg rect {
//   fill: white;
// }
// svg > rect {
//     -webkit-mask: url(#mask);
//     mask: url(#mask);
// }