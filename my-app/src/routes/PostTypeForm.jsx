import '../css/PostTypeForm.css'
import React from 'react';

const PostTypeForm = ({ postType, onChange }) => {
  const handlePostTypeChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <form class ='PostTypeForm'>
      <label>
        <input
          onChange={handlePostTypeChange}
          type="radio"
          name="type"
          value="question"
          checked={postType === 'question'}
        />
        Question
      </label>
      <label>
        <input
          onChange={handlePostTypeChange}
          type="radio"
          name="type"
          value="article"
          checked={postType === 'article'}
        />
        Article
      </label>

    </form>
  );
};

export default PostTypeForm;