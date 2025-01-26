import React, { useState } from 'react';
import Heatmap from 'react-github-calendar';
import  "../css/GitHub.css"
const GitHub = () =>  {
    const [username, setUsername] = useState('');
    const [isDragging, setIsDragging] = useState(false);
   
  
    const handleInputChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
   
  
   
    return (
      <div
        className="dynamic-heatmap-container"
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} 
      >
        <h2 className="dynamic-heatmap-title">Dynamic Heatmap Generator</h2>
  
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          className="dynamic-heatmap-input"
        />
  
        {username && (
          <div className="dynamic-heatmap-github">
            <Heatmap username={username} />
          </div>
        )}
        </div>
    );
  };

export default GitHub;