import { useEffect, useState } from "react";
import styles from "./styles/AddUtilisateursForm.module.css";

const AddUtilisateursForm = ({
  newUtilisateur,
  onInputChange,
  onAddUtilisateur,
  setList_Utilisateurs,
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Creation d'un nouvel utilisateur</h2>
      <form>
        <label>
          Matricule:
          <input
            type="text"
            name="nom"
            value={newUtilisateur.nom}
            onChange={onInputChange}
          />
        </label>
        <br />
        <label>
          Mot de passe:
          <input
            type="text"
            name="prenom"
            value={newUtilisateur.prenom}
            onChange={onInputChange}
          />
        </label>
        <br />

        <label>
          Confirmation mot de passe:
          <input
            type="text"
            name="prenom"
            value={newUtilisateur.prenom}
            onChange={onInputChange}
          />
        </label>

        <button type="button" onClick={onAddUtilisateur}>
          Ajouter
        </button>
        <button
          onClick={() => {
            setList_Utilisateurs(true);
          }}
        >
          Annuler
        </button>
      </form>
    </div>
  );
};


export default AddUtilisateursForm;
