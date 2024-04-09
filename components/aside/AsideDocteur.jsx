import DR_Acceuil from '../contents/dr/DR_Acceuil';
import DR_Attributions from '../contents/dr/DR_Attributions';
import DR_Consultations from '../contents/dr/DR_Consultations';
import DR_Examens from '../contents/dr/DR_Examens';
import DR_Patients from '../contents/dr/DR_Patients';
import styles from '../styleSheet/Aside.module.css';


import React, { useState } from 'react'

const AsideDocteur = ({setContent, setTitre}) => {

    const [select, setSelect] = useState(0);
  
    const handleAccueil = (e) => {
      setContent(<DR_Acceuil />);
      setSelect(0);
      setTitre("Accueil");
    }
    
    const handleAttributions = (e) => {
      setContent(<DR_Attributions />);
      setSelect(1);
      setTitre("Attributions");
    }
    const handlePatients = (e) => {
      setContent(<DR_Patients />);
      setSelect(2);
      setTitre("Patients");
    }
    const handleExamens = (e) => {
      setContent(<DR_Examens />);
      setSelect(3);
      setTitre("Examens");
    }

    return (
  
    
 
    <ul>
      <li className={select === 0 ? styles.select: ""} onClick={handleAccueil}>Accueil</li>

      <li className={select === 1 ? styles.select: ""} onClick={handleAttributions}>Attributions</li>
      <li className={select === 2 ? styles.select: ""} onClick={handlePatients}>Patients</li>
      <li className={select === 3 ? styles.select: ""} onClick={handleExamens}>Examens</li>
  

    </ul>

  )};

export default AsideDocteur