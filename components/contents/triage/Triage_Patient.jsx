import React, { useState } from "react";
import TableauPatients from "./patients_compo/TableauPatients";
import { patients } from "@/pages/api/data/patients";
import styles from "./styles/triage_patients.module.css";

const Triage_Patient = () => {
  const [tableau, setTableau] = useState(<TableauPatients data={patients} />);

  return (
    <div className={styles.body}>
      <div className={styles.button_content}>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.active}`}>Tout</button>
          <button className={styles.button}>Rendez-vous</button>
          <button className={styles.button}>En cours</button>
        </div>
        <div>
          <button className={styles.button}>Ajouter un nouveau patient</button>
        </div>
      </div>


      <div className={styles.tableauPatients}>{tableau}</div>
    </div>
  );
};

export default Triage_Patient;
