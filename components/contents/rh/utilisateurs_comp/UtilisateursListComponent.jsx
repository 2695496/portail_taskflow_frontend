// EmployeeListComponent.js

import styles from "./styles/UtilisateursListComponent.module.css";

const UtilisateursListComponent = ({ utilisateurs, onEdit, handleHire }) => (
  <div className={styles.container}>
    <div className={styles.btn}>
      <button onClick={handleHire}>Creer un utilisateur</button>
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
        {utilisateurs.map((utilisateur) => (
          <tr key={utilisateur.id}>
            <td>
              {utilisateur.photo_profil} {utilisateur.prenom} {utilisateur.nom}
            </td>
            <td>{utilisateur.telephone}</td>
            <td>{utilisateur.sexe}</td>
            <td>{utilisateur.email}</td>
            <td>{utilisateur.nationalite}</td>
            <td>{utilisateur.fonction}</td>
            <td>{utilisateur.statut}</td>
            <td>
              <button onClick={() => onEdit(utilisateur)}>Modifier</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UtilisateursListComponent;
