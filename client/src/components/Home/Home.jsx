import React from 'react';
import '../../scss/containers/_home.scss';

function Home() {
  return (
    <div className="home-wrapper">
      <div className="landing-section">
        <h1 className="landing-title">
          <span className="title-bg">Discover the world&apos;s</span>
          <span className="title-bg">best digital artists</span>
        </h1>
        <button className="landing-action btn-rounded" type="button">Browse now!</button>
      </div>
    </div>
  );
}

export default Home;
