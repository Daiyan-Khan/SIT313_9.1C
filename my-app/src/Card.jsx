// ArticleCard.js
import React from 'react';

const Card = ({ image, title, description, author, rating }) => {
  return (
    <div style={{marginRight : 100}} className="article-card">
      <img className='cardimage' src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>By {author}</p>
      <p>{rating} stars</p>
    </div>
  );
};

export default Card;
