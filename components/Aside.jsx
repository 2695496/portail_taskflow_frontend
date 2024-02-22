
import React from 'react';
import styles from './styleSheet/Aside.module.css';
import { useRouter } from 'next/router';

const Aside = ({asideContent}) => {
  const  router = useRouter();
  const handleLogOut = () =>{
    router.push('/login')
  };
  return (
    <div className={styles.container}>
    {asideContent}
    <ul>
      <li onClick={handleLogOut}>Se deconnecter</li>
    </ul>
    </div>
  );
};

export default Aside;
