import styles from '../styleSheet/Aside.module.css';

import React, { useState } from 'react'

const AsideLaborantins = ({setContent}) => {

    const [select, setSelect] = useState(0);
  
    const handleAccueil = (e) => {
      setContent(<RH_Accueil />)
      setSelect(0);
    }
    const handleEmployes = (e) => {
      setContent(<RH_Employes />);
      setSelect(1);
    }
    const handleUtilisateurs = (e) => {
      setContent(<RH_Utilisateurs />);
      setSelect(2)
    }
    return (
  
    
  
    <ul>
      <li className={select === 0 ? styles.select: ""} onClick={handleAccueil}>Accueil</li>
  
      <li className={select === 1 ? styles.select: ""} onClick={handleEmployes}>Attributions</li>
      <li className={select === 2 ? styles.select: ""} onClick={handleEmployes}>Examens</li>
      
      


    </ul>

  )};

export default AsideLaborantins