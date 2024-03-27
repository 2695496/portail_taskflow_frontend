import fetchData from "@/components/service/service_fetch";
import { useEffect, useState } from "react";
import styles from "./styles/AddEmployeeForm.module.css";
import im from "../../../../image/none.png";
import Image from "next/image";

const AddEmployeeForm = ({
  newEmployee,
  onInputChange,
  onAddEmployee,
  setList_Employes,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState(im);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(URL.createObjectURL(file));
    setImage(URL.createObjectURL(file));
    // Vous pouvez ajouter du code ici pour télécharger l'image vers votre serveur si nécessaire.
  };

  const retireBtn = () => {
    setImage(im);
  }

  if (selectedImage !== null) {
    setImage(URL.createObjectURL(selectedImage));
  }


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ajouter un Employé</h2>
      <form>
        <div className={styles.photo_content}>
          <Image src={image? image: im} alt={image} width={300} height={300} className={styles.imgS} />
          <div>

          
          
            <input type="file" accept="image/*" id="photo" style={{display:"none"}} onChange={handleImageChange} />
            <label htmlFor="photo"><div className={styles.btnS}>Choisir un fichier</div>
            {/*selectedImage && (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected Profile Photo"
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          )*/}
          </label><br />
          <div onClick={retireBtn} className={styles.btnR}>Retirer la photo</div>
          </div>
        </div>


        <fieldset>
          <legend>Identite</legend>
          <label>
          Nom:
          <input
            type="text"
            name="nom"
            value={newEmployee.nom}
            onChange={onInputChange}
          />
        </label><br />
        <label>
          Prénom:
          <input
            type="text"
            name="prenom"
            value={newEmployee.prenom}
            onChange={onInputChange}
          />
        </label><br />
        <label>
          Date de Naissance:
          <input
            type="date"
            name="date_naissance"
            value={newEmployee.date_naissance}
            onChange={onInputChange}
          />
        </label><br />
        <label>
          Sexe:

          <select onChange={onInputChange} name="sexe">
            <option style={{color:"#919191"}} value={newEmployee.sexe}>Choisir le sexe</option>
            <option value={newEmployee.sexe}>Masculin</option>
            <option value={newEmployee.sexe}>Feminin</option>
          </select>
        </label><br />
        <label>
          Nationalité:
          <input
            type="text"
            name="nationalite"
            value={newEmployee.nationalite}
            onChange={onInputChange}
          />
          
        </label><br />
        <label>
          État Civil:
          <input
            type="text"
            name="etat_civil"
            value={newEmployee.etat_civil}
            onChange={onInputChange}
          />
        </label>
        </fieldset>
        





        <fieldset>
          <legend>Adresse</legend>
          
        <label>
          Adresse Rue:
          <input
            type="text"
            name="adresse_rue"
            value={newEmployee.adresse_rue}
            onChange={onInputChange}
          />
        </label><br />
        <label>
          Adresse Ville:
          <input
            type="text"
            name="adresse_ville"
            value={newEmployee.adresse_ville}
            onChange={onInputChange}
          />
        </label><br />
        <label>
          Adresse Code Postal:
          <input
            type="text"
            name="adresse_code_postal"
            value={newEmployee.adresse_code_postal}
            onChange={onInputChange}
          />
        </label><br />
        <label>
          Adresse Pays:
          <input
            type="text"
            name="adresse_pays"
            value={newEmployee.adresse_pays}
            onChange={onInputChange}
          />
        </label>
        </fieldset>






          <fieldset>
            <legend>Contact</legend>
            
        <label>
          Téléphone:
          <input
            type="text"
            name="telephone"
            value={newEmployee.telephone}
            onChange={onInputChange}
          />
        </label><br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={newEmployee.email}
            onChange={onInputChange}
          />
        </label><br />

          </fieldset>



<fieldset>
  <legend>Autre</legend>
  
  <label>
          Fonction:
          <input
            type="text"
            name="fonction"
            value={newEmployee.fonction}
            onChange={onInputChange}
          />
        </label><br />

        <label>
          Type d'employé:
          <input
            type="text"
            name="type_employe"
            value={newEmployee.type_employe}
            onChange={onInputChange}
          />
        </label><br />
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
        </label><br />
</fieldset>
        




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
