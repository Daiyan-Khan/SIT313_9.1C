
import React, { useState } from 'react';
import Article from './Article';
import Question from './Question';
import Button from '../Button';
import PostTypeForm from './PostTypeForm';
import  { Link } from 'react-router-dom';

const PostPage = () => {
  const [postType, setPostType] = useState('question');

  return (
    <div className="PostPage">
      <h1>What would you like to post today?</h1>
      <PostTypeForm postType={postType} onChange={setPostType} />
      {postType === 'article' ? <Article /> : <Question />}
      <div class='ButtonSection'>
      <Button text={'Post'} /> 
      <Link to='/'>
      <Button text={'Home'} />
      </Link>
        
      </div>
      
    </div>
  );
}

export default PostPage;