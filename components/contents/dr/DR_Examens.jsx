import React, { useEffect, useState } from 'react'
import styles from './styles/dr_exeman.module.css';
const examens = [
  { id: 1, label: 'Examen sanguin' },
  { id: 2, label: 'Radiographie' },
  { id: 3, label: 'Échographie' },
  { id: 4, label: 'IRM' },
  { id: 5, label: 'Scintigraphie' }
];

const DR_Examens = () => {
  const [numPatient, setNumPatient] = useState('');
  const [examensSelectionnes, setExamensSelectionnes] = useState([]);
  const [raisonExamen, setRaisonExamen] = useState('');
  const [remarques, setRemarques] = useState('');

  const handleCheckboxChange = (event) => {
    const id = parseInt(event.target.value);
    let newSelection = [...examensSelectionnes];
    if (event.target.checked) {
      newSelection.push(id);
    } else {
      newSelection = newSelection.filter((item) => item !== id);
    }
    setExamensSelectionnes(newSelection);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique pour soumettre le formulaire (à implémenter)
    console.log('Formulaire soumis');
  };

  return (
    <div className={styles.container}>
      <h2>Demande d'Examen Médical</h2>

      <form className={styles.formulaire} onSubmit={handleSubmit}>
        <label>
          Numéro du Patient :
          <input
            type="text"
            value={numPatient}
            onChange={(event) => setNumPatient(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Sélectionnez les examens :
          <br />
          {examens.map((examen) => (
            <div key={examen.id}>
              <label>
                <input
                  type="checkbox"
                  value={examen.id}
                  onChange={handleCheckboxChange}
                />
                {examen.label}
              </label>
              <br />
            </div>
          ))}
        </label>
        <br />
        <label>
          Raison de l'examen :
          <input
            type="text"
            value={raisonExamen}
            onChange={(event) => setRaisonExamen(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Remarques :
          <input
            type="text"
            value={remarques}
            onChange={(event) => setRemarques(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
}

export default DR_Examens