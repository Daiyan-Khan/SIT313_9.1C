// Article.jsx
import React from 'react';
import TitleBox from './TitleBox';
import {TextArea } from 'semantic-ui-react'
import Tags from './Tags';
import '../css/PostPage.css'

const Question =() =>{
  return (
    <div className='PostSection'>
    <TitleBox text = "Start your question with how, why, what, etc." />
    <p>Describe your problem</p>
    <TextArea placeholder="Enter a 1 paragraph abstract" style={{height:500, width:700,backgroundColor: 'rgba(255, 255, 255, 0.8)',borderRadius: '12px'}}/>
    <Tags text="question"/>
    </div>
  );
};

export default Question;
