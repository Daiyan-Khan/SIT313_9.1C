// src/components/HandleRedirect.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSignInWithEmailLink } from '../utils/firebase';

const HandleRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const url = window.location.href;
    const signIn = async () => {
      const user = await handleSignInWithEmailLink(url);
      if (user) {
        // Redirect to the home page or dashboard
        navigate('/');
      }
    };
    signIn();
  }, [navigate]);

  return <div>Loading...</div>;
};

export default HandleRedirect;
