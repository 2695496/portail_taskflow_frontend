// Aside.js

import Link from 'next/link';
import React from 'react';
import styles from './styleSheet/Aside.module.css';

const Aside = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Employer</li>
      </ul>

      <ul>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Employer</li>
      </ul>

      <ul>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Employer</li>
      </ul>
    </div>
  );
};

export default Aside;
