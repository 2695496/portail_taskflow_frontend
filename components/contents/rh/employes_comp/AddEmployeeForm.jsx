import fetchData from "@/components/service/service_fetch";
import { useEffect, useState } from "react";
import styles from "./styles/AddEmployeeForm.module.css";

const AddEmployeeForm = ({
  newEmployee,
  onInputChange,
  onAddEmployee,
  setList_Employes,
}) => {

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ajouter un Employé</h2>
      <form>
        <label>
          Nom:
          <input
            type="text"
            name="nom"
            value={newEmployee.nom}
            onChange={onInputChange}
          />
        </label>
        <label>
          Prénom:
          <input
            type="text"
            name="prenom"
            value={newEmployee.prenom}
            onChange={onInputChange}
          />
        </label>
        <label>
          Date de Naissance:
          <input
            type="date"
            name="date_naissance"
            value={newEmployee.date_naissance}
            onChange={onInputChange}
          />
        </label>
        <label>
          Sexe:
          <input
            type="text"
            name="sexe"
            value={newEmployee.sexe}
            onChange={onInputChange}
          />
        </label>
        <label>
          Adresse Rue:
          <input
            type="text"
            name="adresse_rue"
            value={newEmployee.adresse_rue}
            onChange={onInputChange}
          />
        </label>
        <label>
          Adresse Ville:
          <input
            type="text"
            name="adresse_ville"
            value={newEmployee.adresse_ville}
            onChange={onInputChange}
          />
        </label>
        <label>
          Adresse Code Postal:
          <input
            type="text"
            name="adresse_code_postal"
            value={newEmployee.adresse_code_postal}
            onChange={onInputChange}
          />
        </label>
        <label>
          Adresse Pays:
          <input
            type="text"
            name="adresse_pays"
            value={newEmployee.adresse_pays}
            onChange={onInputChange}
          />
        </label>
        <label>
          Téléphone:
          <input
            type="text"
            name="telephone"
            value={newEmployee.telephone}
            onChange={onInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={newEmployee.email}
            onChange={onInputChange}
          />
        </label>
        <label>
          Nationalité:
          <input
            type="text"
            name="nationalite"
            value={newEmployee.nationalite}
            onChange={onInputChange}
          />
        </label>
        <label>
          État Civil:
          <input
            type="text"
            name="etat_civil"
            value={newEmployee.etat_civil}
            onChange={onInputChange}
          />
        </label>
        <label>
          Fonction:
          <input
            type="text"
            name="fonction"
            value={newEmployee.fonction}
            onChange={onInputChange}
          />
        </label>
        <label>
          Photo de Profil:
          <input
            type="text"
            name="photo_profil"
            value={newEmployee.photo_profil}
            onChange={onInputChange}
          />
        </label>
        <label>
          Type d'employé:
          <input
            type="text"
            name="type_employe"
            value={newEmployee.type_employe}
            onChange={onInputChange}
          />
        </label>
        <label>
          Statut:
          <select
            name="statut"
            value={newEmployee.statut}
            onChange={onInputChange}
          >
            <option value="actif">Actif</option>
            <option value="inactif">Inactif</option>
            <option value="en_congé">En congé</option>
            {/* Ajoutez d'autres options selon vos besoins */}
          </select>
        </label>
        <button type="button" onClick={onAddEmployee}>
          Ajouter
        </button>
        <button
          onClick={() => {
            setList_Employes(true);
          }}
        >
          Annuler
        </button>
      </form>
    </div>
  );
};
export default AddEmployeeForm;
