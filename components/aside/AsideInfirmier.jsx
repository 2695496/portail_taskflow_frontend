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
  
    
    <div className={styles.container}>
    <ul>
      <li className={select === 0 ? styles.select: ""} onClick={handleAccueil}>Accueil</li>
  
      <li className={select === 1 ? styles.select: ""} onClick={handleEmployes}>Patients</li>
  
      <li>Deconnexion</li>
    </ul>
  </div>
  )};

  export default  AsideInfirmier;