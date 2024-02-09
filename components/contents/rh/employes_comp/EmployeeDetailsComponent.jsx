// EmployeeDetailsComponent.js

import styles from './styles/EmployeeDetailsComponent.module.css';

const EmployeeDetailsComponent = ({ employee, onEdit, onDelete, onBack }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>Détails de l'Employé</h2>
    <div className={styles.info}>
      <p>Nom: {employee.nom}</p>
      <p>Prénom: {employee.prenom}</p>
      <p>Date de Naissance: {employee.date_naissance}</p>
      <p>Sexe: {employee.sexe}</p>
      <p>Adresse: {employee.adresse_rue}, {employee.adresse_ville}, {employee.adresse_code_postal}, {employee.adresse_pays}</p>
      <p>Téléphone: {employee.telephone}</p>
      <p>Email: {employee.email}</p>
      <p>Nationalité: {employee.nationalite}</p>
      <p>État Civil: {employee.etat_civil}</p>
      <p>Type d'employé: {employee.type_employe}</p>
      <p>Statut: {employee.statut}</p>
      <p>Fonction: {employee.fonction}</p>
      <p>Photo de Profil: {employee.photo_profil}</p>
    </div>
    <div className={styles.actions}>
      <button onClick={onEdit}>Modifier</button>
      <button onClick={onDelete}>Supprimer</button>
      <button onClick={onBack}>Retour</button>
    </div>
  </div>
);

export default EmployeeDetailsComponent;
