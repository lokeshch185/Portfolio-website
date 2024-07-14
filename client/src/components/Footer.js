import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faPinterest, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4 text-tertiary">Get in Touch</h2>
        <p className="mb-8">
          Ecosystem bootstrapping learning curve lean startup disruptive.
          Marketing long tail disruptive agile development partner.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div className="flex justify-center space-x-8">
         
          <div className="bg-gray-800 p-6 rounded">
            <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400 mb-2" />
            <p>lokeshchaudhari14@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
