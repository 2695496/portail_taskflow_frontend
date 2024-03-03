import { useState } from 'react';
import styles from '../styleSheet/Aside.module.css';
import RH_Accueil from '../contents/rh/RH_Accueil';
import RH_Employes from '../contents/rh/RH_Employes';
import RH_Utilisateurs from '../contents/rh/RH_Utilisateurs';


const AsideRessource = ({setContent, setTitre}) => {

    const [select, setSelect] = useState(0);
  
    const handleAccueil = (e) => {
      setContent(<RH_Accueil />);
      setSelect(0);
      setTitre("Accueil");
    }
    const handleEmployes = (e) => {
      setContent(<RH_Employes />);
      setSelect(1);
      setTitre("Employes");
    }
    const handleUtilisateurs = (e) => {
      setContent(<RH_Utilisateurs />);
      setSelect(2);
      setTitre("Utilisateurs");
    }
    return (
  
    
    
    <ul>
      <li className={select === 0 ? styles.select: ""} onClick={handleAccueil}>Accueil</li>
  
      <li className={select === 1 ? styles.select: ""} onClick={handleEmployes}>Employes</li>
      <li className={select === 2 ? styles.select: ""} onClick={handleUtilisateurs}>Utilisateurs</li>
  
     
    </ul>

  )};

  export default  AsideRessource;