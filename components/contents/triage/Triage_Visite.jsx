
import React, { useState } from 'react';

const Triage_Visite = () => {
  // State pour stocker les informations du rendez-vous
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [note, setNote] = useState('');
  const [reason, setReason] = useState('');
  const [withWhom, setWithWhom] = useState('');

  // Fonction pour gérer le changement de date
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Fonction pour gérer le changement d'heure
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  // Fonction pour gérer le changement de note
  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  // Fonction pour gérer le changement de raison de visite
  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  // Fonction pour gérer le changement de personne avec qui le rendez-vous est pris
  const handleWithWhomChange = (event) => {
    setWithWhom(event.target.value);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique pour soumettre les données du rendez-vous
    console.log('Date du rendez-vous :', selectedDate);
    console.log('Heure du rendez-vous :', selectedTime);
    console.log('Note :', note);
    console.log('Raison de la visite :', reason);
    console.log('Avec qui :', withWhom);
    // Réinitialisation des valeurs sélectionnées
    setSelectedDate('');
    setSelectedTime('');
    setNote('');
    setReason('');
    setWithWhom('');
  };

  return (
    <div>
      <h2>Prise de rendez-vous médical</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date du rendez-vous :
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
        </label>
        <br />
        <label>
          Heure du rendez-vous :
          <input
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
            required
          />
        </label>
        <br />
        <label>
          Note :
          <textarea
            value={note}
            onChange={handleNoteChange}
            placeholder="Ajouter une note (optionnel)"
          />
        </label>
        <br />
        <label>
          Raison de la visite :
          <input
            type="text"
            value={reason}
            onChange={handleReasonChange}
            required
          />
        </label>
        <br />
        <label>
          Avec qui :
          <input
            type="text"
            value={withWhom}
            onChange={handleWithWhomChange}
            required
          />
        </label>
        <br />
        <button type="submit">Confirmer le rendez-vous</button>
      </form>
    </div>
  );
};

export default Triage_Visite;
