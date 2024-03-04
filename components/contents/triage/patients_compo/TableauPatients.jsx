import React from 'react';
import styles from "./styles/tableauPatient.module.css";

function TableauPatients({ data }) {
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
            <td>
              <input type="checkbox" className={styles.checkbox} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableauPatients;
