import { useState } from 'react';
import styles from '../styleSheet/Aside.module.css';
import INF_Accueil from '../contents/inf/INF_Accueil';


const AsideInfirmier = ({setContent}) => {

    const [select, setSelect] = useState(0);
  
    const handleAccueil = (e) => {
      setContent(<INF_Accueil />)
      setSelect(0);
    }
    const handleEmployes = (e) => {
      setContent(<RH_Employes />);
      setSelect(1);
    }
   
    return (
  
    
 
    <ul>
      <li className={select === 0 ? styles.select: ""} onClick={handleAccueil}>Accueil</li>

      <li className={select === 1 ? styles.select: ""} onClick={handleEmployes}>Attente</li>
      <li className={select === 2 ? styles.select: ""} onClick={handleEmployes}>Patient</li>
      <li className={select === 3 ? styles.select: ""} onClick={handleEmployes}>Dossiers</li>
      <li className={select === 4 ? styles.select: ""} onClick={handleEmployes}>Attributions</li>

  

    </ul>

  )};

  export default  AsideInfirmier;