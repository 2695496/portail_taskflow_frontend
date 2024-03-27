import styles from "./styles/EditUtilisateursForm.module.css";

const EditUtilisateursForm = ({
  newUtilisateur,
  onInputChange,
  onUpdateEmployee,
  onCancel
}) => (
  <div className={styles.container}>
    <h2 className={styles.title}>Modifier l'Employé</h2>
    <form>
      <label>
        Matricule:
        <input
          type="text"
          name="nom"
          onChange={onInputChange}
          disabled
        />
      </label>
      <label>
        Nouveau mot de passe:
        <input
          type="password"
          name="prenom"
          onChange={onInputChange}
        />
      </label>
      <label>
        Confirmation du mot de passe:
        <input
          type="password"
          name="prenom"
          value={newUtilisateur.prenom}
          onChange={onInputChange}
        />
      </label>

  
      <label>
        Statut:
        <select
          name="statut"
          value={newUtilisateur.statut}
          onChange={onInputChange}
        >
          <option value="actif">Actif</option>
          <option value="inactif">Inactif</option>
          <option value="en_congé">En congé</option>
          {/* Ajoutez d'autres options selon vos besoins */}
        </select>
      </label>
      <button type="button" onClick={onUpdateEmployee}>
        Enregistrer les modifications
      </button>
      <button type="button" style={{color:'white', backgroundColor:'#555'}} onClick={onCancel}>
        Annuler
      </button>
    </form>
  </div>
);

export default EditUtilisateursForm;
