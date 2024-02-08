import React, { useState } from 'react'
import styles from './styleSheet/Header.module.css'
import none from '/image/none.png'
import search from '/image/search.png'
import searchW from '/image/searchW.png'
import Image from 'next/image'

function Header() { 
    const [search_barre, setSearch_Barre] = useState(false);
    const openbarre = (e) => {
        e.preventDefault ();
        setSearch_Barre (true);
    } 

    const closebarre = (e) => {
        e.preventDefault ();
        setSearch_Barre (false);
    }
  return (

    <div className={styles.Header}>
        <h1>TaskFlow</h1>
        <nav>
            <ul>
                <li>  
                    {
                   search_barre?
                    (<div className={styles.search} onMouseLeave={closebarre}>
                        
                        <input type="text" />
                        <Image className={styles.searchImage} src={search} />
                    </div>):
                   (<div>
                    <Image className={styles.searchImage} src={searchW} onMouseEnter={openbarre} /> 
                    </div>)
                     }
                </li>
                <li>
                    <div className={styles.profil} >
                        <span>Fatima, K</span>
                        <Image className={styles.image_log} src={none} alt="icone"/>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header;
