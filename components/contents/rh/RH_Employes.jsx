import React, { useState } from "react";
import AddEmployeeForm from "./employes_comp/AddEmployeeForm";
import EditEmployeeForm from "./employes_comp/EditEmployeeForm";
import EmployeeDetailsComponent from "./employes_comp/EmployeeDetailsComponent";
import EmployeeListComponent from "./employes_comp/EmployeeListComponent";


const RH_Employes = () => {
  const [employes, setEmployes] = useState([
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

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [list_Employes, setList_Employes] = useState(true);
  const [newEmployee, setNewEmployee] = useState({
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
  const [editEmployee, setEditEmployee] = useState(null);

  const handleViewDetails = (employee) => {
    setSelectedEmployee(employee);
    setShowDetails(true);
  };

  const handleEdit = (employee) => {
    setEditEmployee(employee);
    setShowDetails(false);
    setNewEmployee({
      nom: employee.nom,
      prenom: employee.prenom,
      date_naissance: employee.date_naissance,
      sexe: employee.sexe,
      adresse_rue: employee.adresse_rue,
      adresse_ville: employee.adresse_ville,
      adresse_code_postal: employee.adresse_code_postal,
      adresse_pays: employee.adresse_pays,
      telephone: employee.telephone,
      email: employee.email,
      nationalite: employee.nationalite,
      etat_civil: employee.etat_civil,
      fonction: employee.fonction,
      photo_profil: employee.photo_profil,
      type_employe: employee.type_employe,
      statut: employee.statut,
    });
  };

  const handleDelete = (employeeId) => {
    const updatedEmployes = employes.filter(
      (employee) => employee.id !== employeeId
    );
    setEmployes(updatedEmployes);
    setSelectedEmployee(null);
    setShowDetails(false);
  };

  const handleHire = () => {
    setList_Employes(false)
    setShowDetails(false);
    setEditEmployee(null);
  };

  const handleBack = () => {
    setSelectedEmployee(null);
    setShowDetails(false);
    
    setList_Employes(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleAddEmployee = () => {
    setEmployes([...employes, { id: employes.length + 1, ...newEmployee }]);
    setNewEmployee({
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
    setList_Employes(true);
  };

  const handleUpdateEmployee = () => {
    const updatedEmployes = employes.map((employee) =>
      employee.id === editEmployee.id
        ? { ...employee, ...newEmployee }
        : employee
    );
    setEmployes(updatedEmployes);
    setEditEmployee(null);
    setNewEmployee({
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
    setList_Employes(true);
  };

  return (
    <div>
      <h2>Employés</h2>
      <button onClick={handleHire}>Ajouter un employé</button>

      {showDetails ? (
        <EmployeeDetailsComponent
          employee={selectedEmployee}
          onEdit={() => {handleEdit(selectedEmployee); setList_Employes(false);}}
          onDelete={() => handleDelete(selectedEmployee.id)}
          onBack={handleBack}
        />
      ) : (list_Employes ? (
          
        <EmployeeListComponent
          employees={employes}
          onViewDetails={handleViewDetails}
        />
      ) : null)}

      {showDetails || editEmployee || list_Employes ? null : (
        <AddEmployeeForm
          newEmployee={newEmployee}
          onInputChange={handleInputChange}
          onAddEmployee={handleAddEmployee}
          setList_Employes={setList_Employes}
        />
      )}

      {editEmployee && (
        <EditEmployeeForm
          newEmployee={newEmployee}
          onInputChange={handleInputChange}
          onUpdateEmployee={handleUpdateEmployee}
        />
      )}
    </div>
  );
};

export default RH_Employes;
