import React, { useState } from "react";
import AddUtilisateursForm from "./utilisateurs_comp/AddUtilisateursForm";
import EditUtilisateursForm from "./utilisateurs_comp/EditUtilisateursForm";
import UtilisateursDetailsComponent from "./utilisateurs_comp/UtilisateursDetailsComponent";
import UtilisateursListComponent from "./utilisateurs_comp/UtilisateursListComponent";


const RH_Utilisateurs = () => {
  const [utilisateurs, setUtilisateurs] = useState([
    {
      id: 1,
      nom: "Doe",
      prenom: "John",
      telephone: "123-456-7890",
      email: "john.doe@example.com",
      fonction: "RH",
      statut: "actif",
    },
    {
      id: 2,
      nom: "Smith",
      prenom: "Jane",
      telephone: "987-654-3210",
      email: "jane.smith@example.com",
      fonction: "Médecin",
      statut: "inactif",
    },
    // Ajoutez d'autres employés au besoin

  ]);

  const [selectedUtilisateur, setSelectedUtilisateur] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [list_Utilisateur, setList_Utilisateurs] = useState(true);
  const [newUtilisateur, setNewUtilisateur] = useState({
    nom: "",
    prenom: "",
    date_naissance: "",
    sexe: "",
    adresse_rue: "",
    adresse_ville: "",
    adresse_code_postal: "",
    adresse_pays: "",
    telephone: "",
    email: "",
    nationalite: "",
    etat_civil: "",
    fonction: "",
    photo_profil: "",
    type_employe: "",
    statut: "actif", // Défaut à "actif"
  });
  const [editUtilisateur, setEditUtilisateur] = useState(null);

  const handleViewDetails = (employee) => {
    setSelectedUtilisateur(employee);
    setShowDetails(true);
  };

  const handleCancel = () => {
    
    setList_Utilisateurs(true);
    setEditUtilisateur(false);
  };

  const handleEdit = (utilisateur) => {
    setEditUtilisateur(utilisateur);
    setShowDetails(false);
    setList_Utilisateurs(false);
    setNewUtilisateur({
      nom: utilisateur.nom,
      prenom: utilisateur.prenom,
      date_naissance: utilisateur.date_naissance,
      sexe: utilisateur.sexe,
      adresse_rue: utilisateur.adresse_rue,
      adresse_ville: utilisateur.adresse_ville,
      adresse_code_postal: utilisateur.adresse_code_postal,
      adresse_pays: utilisateur.adresse_pays,
      telephone: utilisateur.telephone,
      email: utilisateur.email,
      nationalite: utilisateur.nationalite,
      etat_civil: utilisateur.etat_civil,
      fonction: utilisateur.fonction,
      photo_profil: utilisateur.photo_profil,
      type_employe: utilisateur.type_employe,
      statut: utilisateur.statut,
    });
  };

  const handleDelete = (employeeId) => {
    const updatedEmployes = employes.filter(
      (employee) => utilisateur.id !== employeeId
    );
    setUtilisateurs(updatedEmployes);
    setSelectedUtilisateur(null);
    setShowDetails(false);
  };

  const handleHire = () => {
    setList_Utilisateurs(false);
    setShowDetails(false);
    setEditUtilisateur(null);
  };

  const handleBack = () => {
    setSelectedUtilisateur(null);
    setShowDetails(false);

    setList_Utilisateurs(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUtilisateur({ ...newUtilisateur, [name]: value });
  };

  const handleAddUtilisateur = () => {
    setUtilisateurs([...employes, { id: employes.length + 1, ...newUtilisateur }]);
    setNewUtilisateur({
      nom: "",
      prenom: "",
      date_naissance: "",
      sexe: "",
      adresse_rue: "",
      adresse_ville: "",
      adresse_code_postal: "",
      adresse_pays: "",
      telephone: "",
      email: "",
      nationalite: "",
      etat_civil: "",
      fonction: "",
      photo_profil: "",
      type_employe: "",
      statut: "actif",
    });
    setList_Utilisateurs(true);
  };

  const handleUpdateEmployee = () => {
    const updatedEmployes = employes.map((employee) =>
      utilisateur.id === editUtilisateur.id
        ? { ...employee, ...newUtilisateur }
        : employee
    );
    setUtilisateurs(updatedEmployes);
    setEditUtilisateur(null);
    setNewUtilisateur({
      nom: "",
      prenom: "",
      date_naissance: "",
      sexe: "",
      adresse_rue: "",
      adresse_ville: "",
      adresse_code_postal: "",
      adresse_pays: "",
      telephone: "",
      email: "",
      nationalite: "",
      etat_civil: "",
      fonction: "",
      photo_profil: "",
      type_employe: "",
      statut: "actif",
    });
    setList_Utilisateurs(true);
  };

  return (
    <div>
  

      {showDetails ? (
        <>
          <UtilisateursDetailsComponent
            employee={selectedUtilisateur}
            onEdit={() => {
              handleEdit(selectedUtilisateur);
              setList_Utilisateurs(false);
            }}
            onDelete={() => handleDelete(selectedUtilisateur.id)}
            onBack={handleBack}
          />
        </>
      ) : list_Utilisateur ? (
        <>

          <UtilisateursListComponent
            utilisateurs={utilisateurs}
            handleHire={handleHire}
            onEdit={handleEdit}
          />
        </>
      ) : null}

      {showDetails || editUtilisateur || list_Utilisateur ? null : (
        <AddUtilisateursForm
          newUtilisateur={newUtilisateur}
          onInputChange={handleInputChange}
          onAddUtilisateur={handleAddUtilisateur}
          setList_Utilisateurs={setList_Utilisateurs}
        />
      )}

      {editUtilisateur && (
        <EditUtilisateursForm
          newUtilisateur={newUtilisateur}
          onInputChange={handleInputChange}
          onUpdateEmployee={handleUpdateEmployee}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default RH_Utilisateurs;
