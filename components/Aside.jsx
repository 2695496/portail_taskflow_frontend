// Aside.js

import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import RH_Accueil from './contents/rh/RH_Accueil';
import RH_Employes from './contents/rh/RH_Employes';
import RH_Utilisateurs from './contents/rh/RH_Utilisateurs';
import styles from './styleSheet/Aside.module.css';
const role = 1;

const AsideRessource = ({setContent}) => {

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

  
  <div className={styles.container}>
  <ul>
    <li className={select === 0 ? styles.select: ""} onClick={handleAccueil}>Accueil</li>

    <li className={select === 1 ? styles.select: ""} onClick={handleEmployes}>Employes</li>
    <li className={select === 2 ? styles.select: ""} onClick={handleUtilisateurs}>Utilisateurs</li>

    <li>Deconnexion</li>
  </ul>
</div>
)};


const Aside = ({setContent}) => {
  const [aside, setAside] = useState(null);
  useEffect(()=> {
    switch(role){
      case 1:
        setAside(<AsideRessource setContent={setContent} />)
        break;
    }
  }, [])
  return (
    <>
    {aside}
    </>
  );
};

export default Aside;
