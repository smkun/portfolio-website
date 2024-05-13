import React from 'react';
import styles from './ExternalLinks.module.css';

const ExternalLinks = () => {
  return (
    <div className={styles.externalLinks}>
      <h2>External Links</h2>
      <p>Explore more about our interests:</p>
      <ul>
        <li><a href="https://generalassemb.ly/" target="_blank" rel="noopener noreferrer">General Assembly</a></li>
        <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">Youtube</a></li>
      </ul>
    </div>
  );
};

export default ExternalLinks;
