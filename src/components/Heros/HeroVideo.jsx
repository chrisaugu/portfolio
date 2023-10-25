import React from 'react';

const HeroVideo = () => {
  
  return (
    <div className="">
      <div className="">
        <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.jpg" playsinline autoplay muted loop>
          <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.webm" type="video/webm"/>
          <source src="http://thenewcode.com/assets/videos/fashion.mp4" type="video/mp4"/>
        </video>
        <div id="fashion">
          <h2>There's a brand new dance but I don’t know its name…</h2>
        </div>
      </div>
    </div>
  );
}

export default HeroVideo;