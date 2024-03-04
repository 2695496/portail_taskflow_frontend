import React, { useState } from 'react';
import styles from "./styles/triage_visite.module.css";

const TriageVisite = () => {
  // State pour stocker les informations du rendez-vous
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [note, setNote] = useState('');
  const [reason, setReason] = useState('');
  const [withWhom, setWithWhom] = useState('');

  // Fonctions pour gérer les changements des inputs
  const handleDateChange = (event) => setSelectedDate(event.target.value);
  const handleTimeChange = (event) => setSelectedTime(event.target.value);
  const handleNoteChange = (event) => setNote(event.target.value);
  const handleReasonChange = (event) => setReason(event.target.value);
  const handleWithWhomChange = (event) => setWithWhom(event.target.value);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Date du rendez-vous :', selectedDate);
    console.log('Heure du rendez-vous :', selectedTime);
    console.log('Note :', note);
    console.log('Raison de la visite :', reason);
    console.log('Avec qui :', withWhom);
    // Réinitialisation des valeurs sélectionnées pourrait être ajoutée ici si nécessaire
  };

  return (
    <div className={styles.container}>
    <h2 className={styles.title}>Prise de rendez-vous médical</h2>
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Date du rendez-vous :
        <input
          type="date"
          className={`${styles.inputDate} ${selectedDate ? styles.requiredInput : ''}`}
          value={selectedDate}
          onChange={handleDateChange}
          required
        />
      </label>
      <label className={styles.label}>
        Heure du rendez-vous :
        <input
          type="time"
          className={`${styles.inputTime} ${selectedTime ? styles.requiredInput : ''}`}
          value={selectedTime}
          onChange={handleTimeChange}
          required
        />
      </label>
      <label className={styles.label}>
        Note :
        <textarea
          className={styles.textarea} // Appliquez la classe ici
          value={note}
          onChange={handleNoteChange}
          placeholder="Ajouter une note (optionnel)"
        />
      </label>
      <label className={styles.label}>
        Raison de la visite :
        <input
          type="text"
          className={styles.inputText} // Appliquez la classe ici
          value={reason}
          onChange={handleReasonChange}
          required
        />
      </label>
        <label>
          Avec qui :
          <input
            type="text"
            className={styles.input}
            value={withWhom}
            onChange={handleWithWhomChange}
            required
          />
        </label>
        <button type="submit" className={styles.button}>Confirmer le rendez-vous</button>
      </form>
    </div>
  );
};

export default TriageVisite;
