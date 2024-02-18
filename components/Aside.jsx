// Aside.js

import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import RH_Accueil from './contents/rh/RH_Accueil';
import RH_Employes from './contents/rh/RH_Employes';
import RH_Utilisateurs from './contents/rh/RH_Utilisateurs';
import AsideDocteur from './aside/AsideDocteur';
import AsideRessource from './aside/AsideRessource';






const Aside = ({setContent, role}) => {
  const [aside, setAside] = useState(null);
  useEffect(()=> {
    switch(role){
      case 1:
        setAside(<AsideRessource setContent={setContent} />)
        break;
      case 2:
        setAside(<AsideDocteur setContent={setContent}/>)
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
