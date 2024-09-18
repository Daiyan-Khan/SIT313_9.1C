import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import Header from './Header'; // Assuming Header is a reusable component
import Card from './Card'; // Assuming 'Card' is a reusable component
import Button from './Button'; // Assuming 'Button' is a reusable button component
import Footer from './Footer'; // Footer component
import SignUp from './Subscribe'; // Assuming SignUp is a reusable component
import './Home.css'; // For styling the home page

const Home = () => {
    return (
        <div className="home-page">
            <Header /> {/* Assuming Header is imported */}
            <img 
                style={{ width: 1500 }} 
                src={require('./images/Deakin.avif')} 
                alt="Deakin Image" 
            />

            {/* Welcome and Search Section */}
            <h1>Welcome to the Home Page</h1>
            <div className="search-bar">
                <p>Dev@DEAKIN</p>
                <input type="text" placeholder="Search..." />
                <Link to='/post'><button type="button">Post</button> {/* Post button functionality can be added later */}</Link>
                
            </div>

            <div className="actions">
                <Link to="/login">
                    <button className="login-button">Login</button>
                </Link>
            </div>

            {/* Featured Articles Section */}
            <h1>Featured Articles</h1>
            <div className="ArticleSection">
                <Card 
                    image={require('./images/React.avif')}
                    title="Article 1" 
                    description="Description for Article 1." 
                    author="Author 1" 
                    rating="3.5" 
                />
                <Card 
                    image={require('./images/React.avif')}
                    title="Article 2" 
                    description="Description for Article 2." 
                    author="Author 2" 
                    rating="4.0" 
                />
                <Card 
                    image={require('./images/React.avif')}
                    title="Article 3" 
                    description="Description for Article 3." 
                    author="Author 3" 
                    rating="4.5" 
                />
            </div>
            <Button text="See all articles" />

            {/* Featured Tutorials Section */}
            <h1 class='TutorialHeadline'>Featured Tutorials</h1>
            <div className="TutorialSection">
                <Card 
                    image={require('./images/Deakin.avif')}
                    title="Tutorial 1" 
                    description="Description for Tutorial 1." 
                    author="Author 1" 
                    rating="4.7" 
                />
                <Card 
                    image={require('./images/Deakin.avif')}
                    title="Tutorial 2" 
                    description="Description for Tutorial 2." 
                    author="Author 2" 
                    rating="3.8" 
                />
                <Card 
                    image={require('./images/Deakin.avif')}
                    title="Tutorial 3" 
                    description="Description for Tutorial 3." 
                    author="Author 3" 
                    rating="4.5" 
                />
            </div>
            <Button text="See all tutorials" />

            {/* SignUp Section */}
            <SignUp />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
