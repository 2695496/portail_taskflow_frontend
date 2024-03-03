import { useState } from 'react';
import styles from '../styleSheet/Aside.module.css';
import INF_Accueil from '../contents/inf/INF_Accueil';
import INF_Attente from '../contents/inf/INF_Attente';
import INF_Patient from '../contents/inf/INF_Patient';
import INF_Dossiers from '../contents/inf/INF_Dossiers';
import INF_Attributions from '../contents/inf/INF_Attributions';


const AsideInfirmier = ({setContent, setTitre}) => {

    const [select, setSelect] = useState(0);
  
    const handleAccueil = (e) => {
      setContent(<INF_Accueil />)
      setSelect(0);
      setTitre('Accueil');
    }
    const handleAttente = (e) => {
      setContent(<INF_Attente />);
      setSelect(1);
      setTitre('Attente');
    }
    const handlePatient = (e) => {
      setContent(<INF_Patient />);
      setSelect(2);
      setTitre('Patient');
    }
    const handleDossiers = (e) => {
      setContent(<INF_Dossiers />);
      setSelect(3);
      setTitre('Dossiers');
    }
    const handleAttributions = (e) => {
      setContent(<INF_Attributions />);
      setSelect(4);
      setTitre('Attributions');
    }
   
    return (
  
    
 
    <ul>
      <li className={select === 0 ? styles.select: ""} onClick={handleAccueil}>Accueil</li>

      <li className={select === 1 ? styles.select: ""} onClick={handleAttente}>Attente</li>
      <li className={select === 2 ? styles.select: ""} onClick={handlePatient}>Patient</li>
      <li className={select === 3 ? styles.select: ""} onClick={handleDossiers}>Dossiers</li>
      <li className={select === 4 ? styles.select: ""} onClick={handleAttributions}>Attributions</li>

  

    </ul>

  )};

  export default  AsideInfirmier;