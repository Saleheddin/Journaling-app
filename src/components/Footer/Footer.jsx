import React from 'react'
import { isLoginPage } from '../../utils/utils';

const Footer = () => {

  // Don't render the navbar on the login page
  if (isLoginPage(location.pathname)) {
    return null;
  }
  return (
    <footer className="text-white text-center py-4">
      <div className="container">
        <p>&copy; 2024 Your Daily Journal. All rights reserved.</p>
        <p>Designed with <span role="img" aria-label="love">❤️</span> by Saleh eddine EL FDALI</p>
      </div>
    </footer>
  )
}

export default Footer