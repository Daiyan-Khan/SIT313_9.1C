import React from 'react';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-section">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Questions</a></li>
                        <li><a href="/">Articles</a></li>
                        <li><a href="/">Tutorials</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="/">FAQs</a></li>
                        <li><a href="/">Help</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Stay connected</h4>
                    <ul className="social-icons">
                        <li><a href="/"><i className="fab fa-facebook-f"><img className ='icon' src={require('./images/fb.png')}></img></i></a></li>
                        <li><a href="/"><i className="fab fa-twitter"><img className='icon' src={require('./images/twitter.jpg')}></img></i></a></li>
                        <li><a href="/"><i className="fab fa-instagram"><img className= 'icon' src={require('./images/ig.png')}></img></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; DEV@Deakin 2022</p>
                <ul>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Terms</a></li>
                    <li><a href="/">Code of Conduct</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
