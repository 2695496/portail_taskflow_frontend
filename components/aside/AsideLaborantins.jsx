import Labo_Accueil from '../contents/Labo/Labo_Accueil';
import Labo_Attributions from '../contents/Labo/Labo_Attributions';
import Labo_Examens from '../contents/Labo/Labo_Examens';
import styles from '../styleSheet/Aside.module.css';

import React, { useState } from 'react'

const AsideLaborantins = ({setContent, setTitre}) => {

    const [select, setSelect] = useState(0);
  
    const handleAccueil = (e) => {
      setContent(<Labo_Accueil />);
      setSelect(0);
      setTitre("Accueil");
    }
    const handleAttributions= (e) => {
      setContent(<Labo_Attributions />);
      setSelect(1);
      setTitre("Attributions");
    }
    const handleExamens = (e) => {
      setContent(<Labo_Examens />);
      setSelect(2);
      setTitre("Examens")
    }

    return (
  
    
  
    <ul>
      <li className={select === 0 ? styles.select: ""} onClick={handleAccueil}>Accueil</li>
  
      <li className={select === 1 ? styles.select: ""} onClick={handleAttributions}>Attributions</li>
      <li className={select === 2 ? styles.select: ""} onClick={handleExamens}>Examens</li>
      
      


    </ul>

  )};

export default AsideLaborantins