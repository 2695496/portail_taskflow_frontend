import React, { useState } from 'react';

const EmployeeDetailsComponent = ({ employee, onEdit, onDelete, onBack }) => (
    <div>
      <h2>Détails de l'Employé</h2>
      <p>Nom: {employee.nom}</p>
      <p>Prénom: {employee.prenom}</p>
      <p>Téléphone: {employee.telephone}</p>
      <p>Email: {employee.email}</p>
      <p>Fonction: {employee.fonction}</p>
  
      <button onClick={onEdit}>Modifier</button>
      <button onClick={onDelete}>Supprimer</button>
      <button onClick={onBack}>Retour</button>
    </div>
  );
  

const EmployeeListComponent = ({ employees, onViewDetails }) => (
  <div>
    <h2>Liste des Employés</h2>
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Téléphone</th>
          <th>Email</th>
          <th>Fonction</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.nom}</td>
            <td>{employee.prenom}</td>
            <td>{employee.telephone}</td>
            <td>{employee.email}</td>
            <td>{employee.fonction}</td>
            <td>
              <button onClick={() => onViewDetails(employee)}>Voir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const AddEmployeeForm = ({ newEmployee, onInputChange, onAddEmployee }) => (
  <div>
    <h2>Ajouter un Employé</h2>
    <form>
      <label>Nom:
        <input type="text" name="nom" value={newEmployee.nom} onChange={onInputChange} />
      </label>
      <label>Prénom:
        <input type="text" name="prenom" value={newEmployee.prenom} onChange={onInputChange} />
      </label>
      <label>Téléphone:
        <input type="text" name="telephone" value={newEmployee.telephone} onChange={onInputChange} />
      </label>
      <label>Email:
        <input type="text" name="email" value={newEmployee.email} onChange={onInputChange} />
      </label>
      <label>Fonction:
        <input type="text" name="fonction" value={newEmployee.fonction} onChange={onInputChange} />
      </label>
      <button type="button" onClick={onAddEmployee}>Ajouter</button>
    </form>
  </div>
);

const EditEmployeeForm = ({ newEmployee, onInputChange, onUpdateEmployee }) => (
  <div>
    <h2>Modifier l'Employé</h2>
    <form>
      <label>Nom:
        <input type="text" name="nom" value={newEmployee.nom} onChange={onInputChange} />
      </label>
      <label>Prénom:
        <input type="text" name="prenom" value={newEmployee.prenom} onChange={onInputChange} />
      </label>
      <label>Téléphone:
        <input type="text" name="telephone" value={newEmployee.telephone} onChange={onInputChange} />
      </label>
      <label>Email:
        <input type="text" name="email" value={newEmployee.email} onChange={onInputChange} />
      </label>
      <label>Fonction:
        <input type="text" name="fonction" value={newEmployee.fonction} onChange={onInputChange} />
      </label>
      <button type="button" onClick={onUpdateEmployee}>Enregistrer les modifications</button>
    </form>
  </div>
);

const RH_Employes = () => {
  const [employes, setEmployes] = useState([
    { id: 1, nom: 'Doe', prenom: 'John', telephone: '123-456-7890', email: 'john.doe@example.com', fonction: 'RH' },
    { id: 2, nom: 'Smith', prenom: 'Jane', telephone: '987-654-3210', email: 'jane.smith@example.com', fonction: 'Médecin' },
    // Add more employees as needed
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [newEmployee, setNewEmployee] = useState({ nom: '', prenom: '', telephone: '', email: '', fonction: '' });
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
      telephone: employee.telephone,
      email: employee.email,
      fonction: employee.fonction,
    });
  };

  const handleDelete = (employeeId) => {
    const updatedEmployes = employes.filter((employee) => employee.id !== employeeId);
    setEmployes(updatedEmployes);
    setSelectedEmployee(null);
    setShowDetails(false);
  };

  const handleHire = () => {
    setShowDetails(false);
    setEditEmployee(null);
  };

  const handleBack = () => {
    setSelectedEmployee(null);
    setShowDetails(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleAddEmployee = () => {
    setEmployes([...employes, { id: employes.length + 1, ...newEmployee }]);
    setNewEmployee({ nom: '', prenom: '', telephone: '', email: '', fonction: '' });
  };

  const handleUpdateEmployee = () => {
    const updatedEmployes = employes.map((employee) =>
      employee.id === editEmployee.id ? { ...employee, ...newEmployee } : employee
    );
    setEmployes(updatedEmployes);
    setEditEmployee(null);
    setNewEmployee({ nom: '', prenom: '', telephone: '', email: '', fonction: '' });
  };

  return (
    <div>
      <button onClick={handleHire}>Ajouter un employé</button>

      {showDetails ? (
        <EmployeeDetailsComponent
          employee={selectedEmployee}
          onEdit={() => handleEdit(selectedEmployee)}
          onDelete={() => handleDelete(selectedEmployee.id)}
          onBack={handleBack}
        />
      ) : (
        <EmployeeListComponent
          employees={employes}
          onViewDetails={handleViewDetails}
        />
      )}

      {showDetails || editEmployee ? null : (
        <AddEmployeeForm
          newEmployee={newEmployee}
          onInputChange={handleInputChange}
          onAddEmployee={handleAddEmployee}
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
