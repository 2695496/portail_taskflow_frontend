import React from "react";
import TableauPatients from "./patients_compo/TableauPatients";
import { patients } from "@/pages/api/data/patients";
import styles from "./styles/triage_dossiers.module.css";

const Triage_Dossiers = () => {
  return (
    <div className={styles.body}>
      <TableauPatients data={patients} />
    </div>
  );
};

export default Triage_Dossiers;
