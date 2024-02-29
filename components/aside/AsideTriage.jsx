import Triage_Acceuil from '../contents/triage/Triage_Acceuil';
import Triage_Attentes from '../contents/triage/Triage_Attentes';
import Triage_Dossiers from '../contents/triage/Triage_Dossiers';
import Triage_Patient from '../contents/triage/Triage_Patient';
import Triage_Visite from '../contents/triage/Triage_Visite';
import styles from '../styleSheet/Aside.module.css';


import React, { useState } from 'react'

const AsideTriage = ({setContent, setTitre}) => {

    const [select, setSelect] = useState(0);
  
    const handleAccueil = (e) => {
      setContent(<Triage_Acceuil />);
      setTitre('Acceuil');
      setSelect(0);
    }
    const handlePatient = (e) => {
      setContent(<Triage_Patient />);
      setTitre('Patient');
      setSelect(1);
    }
    const handleDossiers = (e) => {
      setContent(<Triage_Dossiers />);
      setTitre('Dossiers');
      setSelect(2);
    }
    const handleVisite = (e) => {
      setContent(<Triage_Visite />);
      setTitre('Visite');
      setSelect(3);
    }
    const handleAttentes = (e) => {
      setContent(<Triage_Attentes />);
      setTitre('Attentes');
      setSelect(4);
    }
    return (
  
 
    <ul>
      <li className={select === 0 ? styles.select: ""} onClick={handleAccueil}>Accueil</li>
  
      <li className={select === 1 ? styles.select: ""} onClick={handlePatient}>Patients</li>
      <li className={select === 2 ? styles.select: ""} onClick={handleDossiers}>Dossiers</li>
      <li className={select === 3 ? styles.select: ""} onClick={handleVisite}>Visite</li>
      <li className={select === 4 ? styles.select: ""} onClick={handleAttentes}>Attentes</li>
  
    </ul>
  
  )};

export default AsideTriage