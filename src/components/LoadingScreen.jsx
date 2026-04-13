import React from 'react';

export default function LoadingScreen({ progress, isLoaded }) {
  return (
    <div className={`loading-screen ${isLoaded ? 'hidden' : ''}`} id="loading-screen">
      <div className="loading-logo">OLIPOP</div>
      <div className="loading-bar-container">
        <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="loading-percentage">Loading {progress}%</div>
    </div>
  );
}
