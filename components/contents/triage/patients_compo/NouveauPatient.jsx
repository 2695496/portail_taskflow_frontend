import React, { useState } from "react";
import styles from "./styles/NouveauPatient.module.css";

const NouveauPatient = ({ setAjoutePatient }) => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom_de_famille: "",
    date_de_naissance: "",
    sexe: "",
    adresse: {
      numero: "",
      rue: "",
      ville: "",
      code_postal: "",
      pays: "",
    },
    numero_de_telephone: "",
    adresse_email: "",
    numero_de_telephone_urgence: "",
    numero_de_securite_sociale: "",
    assurance_medicale: {
      nom: "",
      numero: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCancel = () => {
    setAjoutePatient(false);
  };

  return (
    <div>
      <div className={styles.ajoute_tete}>
        <h2>Ajouter un nouveau patient</h2>

        <button onClick={handleCancel}>Retour</button>
      </div>

      <form className={styles.formulaire}>
        <fieldset>
          <legend>identité</legend>
          <label>
            Prénom:
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Nom de famille:
            <input
              type="text"
              name="nom_de_famille"
              value={formData.nom_de_famille}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Date de naissance:
            <input
              type="date"
              name="date_de_naissance"
              value={formData.date_de_naissance}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Sexe:
            <select name="sexe" id="sexe" value={formData.sexe} onChange={handleChange}>
                <option value="masculin">Masculin</option>
                <option value="feminin">Féminin</option>
            </select>
          </label>
          <br />
          <label>
            Numéro de sécurité sociale:
            <input
              type="number"
              name="numero_de_securite_sociale"
              minLength={9}
              maxLength={9}
              value={formData.numero_de_securite_sociale}
              onChange={handleChange}
            />
          </label>
          <br />
        </fieldset>

        <fieldset>
          <legend>Adresse</legend>

          <label>
            Numéro:
            <input
              type="number"
              name="numero"
              value={formData.adresse.numero}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Rue:
            <input
              type="text"
              name="rue"
              value={formData.adresse.rue}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Ville:
            <input
              type="text"
              name="ville"
              value={formData.adresse.ville}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Province:
            <input
              type="text"
              name="province"
              value={formData.adresse.ville}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Code Postal:
            <input
              type="text"
              name="code_postal"
              value={formData.adresse.code_postal}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Pays:
            <input
              type="text"
              name="pays"
              value={formData.adresse.pays}
              onChange={handleChange}
            />
          </label>
          <br />
        </fieldset>

        <fieldset>
          <legend>Contact</legend>

          <label>
            Numéro de téléphone:
            <input
              type="text"
              name="numero_de_telephone"
              value={formData.numero_de_telephone}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Adresse email:
            <input
              type="text"
              name="adresse_email"
              value={formData.adresse_email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Numéro de téléphone en cas d'urgence:
            <input
              type="text"
              name="numero_de_telephone"
              value={formData.numero_de_telephone}
              onChange={handleChange}
            />
          </label>
          <br />
        </fieldset>

        <fieldset>
          <legend>Assurance médicale</legend>

          <label>
            Nom:
            <input
              type="text"
              name="assurance_medicale.nom"
              value={formData.assurance_medicale.nom}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Numéro:
            <input
              type="text"
              name="assurance_medicale.numero"
              value={formData.assurance_medicale.numero}
              onChange={handleChange}
            />
          </label>
          <br />
        </fieldset>

        <input type="submit" value={"Sauvegarder"} />
        <button onClick={handleCancel}>Annuler</button>
      </form>
    </div>
  );
};

export default NouveauPatient;
