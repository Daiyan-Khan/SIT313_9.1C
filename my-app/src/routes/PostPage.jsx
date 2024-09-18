
import React, { useState } from 'react';
import Article from './Article';
import Question from './Question';
import Buttons from '../Button';
import PostTypeForm from './PostTypeForm';

const PostPage = () => {
  const [postType, setPostType] = useState('question');

  return (
    <div className="PostPage">
      <PostTypeForm postType={postType} onChange={setPostType} />
      {postType === 'article' ? <Article /> : <Question />}
      <Buttons />
    </div>
  );
}

export default PostPage;