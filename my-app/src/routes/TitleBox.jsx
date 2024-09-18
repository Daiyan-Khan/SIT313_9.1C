import React from 'react';
import '../css/TitleBox.css';

const TitleBox = (props) => {
  return (
    <div className="TitleBox">
        <p style={{ marginRight: 10 }}>Title</p>
        <input style = {{height:20, width: 600}} placeholder = {props.text}/>
    </div>
  );
};

export default TitleBox;
