// TutorialCard.js
// Similar to ArticleCard, but with different styling and content

// FeaturedArticles.js
import React from 'react';
import ArticleCard from './Card';

const FeaturedArticles = ({ articles }) => {
  return (
    <section className="featured-articles">
      <h2>Featured Articles</h2>
      <div className="article-list">
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
      <button>See all articles</button>
    </section>
  );
};

export default FeaturedArticles;
