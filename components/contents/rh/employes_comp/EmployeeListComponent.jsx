// EmployeeListComponent.js

import styles from "./styles/EmployeeListComponent.module.css";

const EmployeeListComponent = ({ employees, onViewDetails, handleHire }) => (
  <div className={styles.container}>
    <div className={styles.btn}>
      <button onClick={handleHire}>Ajouter un employé</button>
    </div>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Téléphone</th>
          <th>Sexe</th>
          <th>Email</th>
          <th>Nationnalité</th>
          <th>Fonction</th>
          <th>Statut</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>
              {employee.photo_profil} {employee.prenom} {employee.nom}
            </td>
            <td>{employee.telephone}</td>
            <td>{employee.sexe}</td>
            <td>{employee.email}</td>
            <td>{employee.nationalite}</td>
            <td>{employee.fonction}</td>
            <td>{employee.statut}</td>
            <td>
              <button onClick={() => onViewDetails(employee)}>Voir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default EmployeeListComponent;
