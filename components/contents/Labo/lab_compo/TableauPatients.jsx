import React from 'react';
import styles from "./styles/tableauPatient.module.css";

function TableauPatients({ data, viewBtn=false }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th}>Prénom</th>
          <th className={styles.th}>Nom</th>
          <th className={styles.th}>Genre</th>
          <th className={styles.th}>Téléphone</th>
          <th className={styles.th}>Email</th>
          <th className={styles.th}>État</th>
          <th className={styles.th}>Niveau</th>
          {viewBtn?(<th className={styles.th}>Action</th>):(null)}
        </tr>
      </thead>
      <tbody>
        {data.map(patient => (
          <tr key={patient.id} className={styles.line}>
             
            <td>{patient.prenom}</td>
            <td>{patient.nom}</td>
            <td>{patient.genre}</td>
            <td>{patient.numeroTelephone}</td>
            <td>{patient.email}</td>
            <td>{patient.etat}</td>
            <td>{patient.niveau}</td>
            {viewBtn?(<td><button>Examiner</button></td>):(null)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableauPatients;
