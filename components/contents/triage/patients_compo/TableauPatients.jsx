import React from 'react';

function TableauPatients({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Genre</th>
          <th>Numéro de Téléphone</th>
          <th>Email</th>
          <th>État</th>
          <th>Niveau</th>
        </tr>
      </thead>
      <tbody>
        {data.map(patient => (
          <tr key={patient.id}>
            <td>{patient.prenom}</td>
            <td>{patient.nom}</td>
            <td>{patient.genre}</td>
            <td>{patient.numeroTelephone}</td>
            <td>{patient.email}</td>
            <td>{patient.etat}</td>
            <td>{patient.niveau}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableauPatients;
