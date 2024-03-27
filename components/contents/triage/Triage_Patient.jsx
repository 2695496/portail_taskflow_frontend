import React, { useState } from "react";
import TableauPatients from "./patients_compo/TableauPatients";
import { patients } from "@/pages/api/data/patients";
import styles from "./styles/triage_patients.module.css";
import NouveauPatient from "./patients_compo/NouveauPatient";

const Triage_Patient = () => {
  const [tableau, setTableau] = useState(<TableauPatients data={patients} />);
  const [ajoutePatient, setAjoutePatient] = useState(false);

  const handleAjouter = () => {
    setAjoutePatient(true);
  }

  return (
    <>
      {!ajoutePatient ? (
        <div className={styles.body}>
          <div className={styles.button_content}>
            <div className={styles.buttons}>
              <button className={`${styles.button} ${styles.active}`}>
                Tout
              </button>
              <button className={styles.button}>Rendez-vous</button>
              <button className={styles.button}>En cours</button>
            </div>
            <div>
              <button onClick={handleAjouter} className={styles.button}>
                Ajouter un nouveau patient
              </button>
            </div>
          </div>

          <div className={styles.tableauPatients}>{tableau}</div>
        </div>
      ) : (<NouveauPatient setAjoutePatient={setAjoutePatient} />)}
    </>
  );
};

export default Triage_Patient;
