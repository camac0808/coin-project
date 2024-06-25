import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading">
      <h2>Loading...</h2>
      {/* Add your loading animation or spinner here */}
      <div className='progress-bar'></div>
      <p className='content-1'>1 of 12 File Loaded: src/App.jsx..</p>
      <p className='content-2'>9 of 12 File Loaded: src/assets/react.svg..</p>
      <p className='content-3'>Nearly Done..</p>
    </div>
  );
};

export default Loading;