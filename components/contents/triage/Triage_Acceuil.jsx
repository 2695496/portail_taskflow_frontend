import React, { useState } from "react";
import { format } from "date-fns";
import styles from "./styles/triage_accueil.module.css";

const Triage_Acceuil = () => {
  const [evenements, setEvenements] = useState([
    {
      id: 1,
      titre: "Réunion sur l'amélioration du service à la clientèle",
      date: new Date("2024-02-10"),
    },
    { id: 2, titre: "Formation sur les nouvelles procédures d'accueil", date: new Date("2024-02-12") },
  ]);

  const taches = [
    { id: 1, description: "Accueillir les patients et les visiteurs avec courtoisie" },
    { id: 2, description: "Répondre aux appels téléphoniques et aux demandes de renseignements" },
    { id: 3, description: "Gérer les dossiers d'admission et de sortie des patients" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h2>Bonjour, Fatima</h2>
        <p>
          Nous vous souhaitons la bienvenue à la réception. Votre rôle est essentiel pour offrir une expérience positive à nos patients dès leur arrivée. Nous sommes là pour vous soutenir dans vos tâches et assurer le bon fonctionnement de notre service d'accueil.
        </p>
      </div>
      <div className={styles.element_content}>
        <div>
          <h3>Tâches :</h3>
          <ul>
            {taches.map((tache) => (
              <li key={tache.id}>{tache.description}</li>
            ))}
          </ul>
        </div>
        <div>
          <div>
            <h3>Événements :</h3>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Titre</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {evenements.map((evenement) => (
                <tr key={evenement.id} className={evenement.id % 2 === 0 ? styles.pair : styles.impair}>
                  <td>{evenement.titre}</td>
                  <td>{format(evenement.date, "dd/MM/yyyy")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Triage_Acceuil;
