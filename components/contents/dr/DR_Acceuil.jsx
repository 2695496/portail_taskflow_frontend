import React, { useState } from "react";
import { format } from "date-fns";
import styles from "./styles/dr_accueil.module.css";

const DR_Acceuil = () => {
  const [evenements, setEvenements] = useState([
    {
      id: 1,
      titre: "Conférence médicale sur les avancées en cardiologie",
      date: new Date("2024-02-10"),
    },
    { id: 2, titre: "Réunion clinique pour discuter des cas complexes", date: new Date("2024-02-12") },
  ]);

  const taches = [
    { id: 1, description: "Effectuer des diagnostics précis" },
    { id: 2, description: "Élaborer des plans de traitement personnalisés" },
    { id: 3, description: "Effectuer des interventions chirurgicales programmées" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
      <h2>Bonjour, Fatima</h2>
        <p>
          Nous vous souhaitons la bienvenue dans votre espace dédié. Votre expertise médicale est essentielle pour la santé et le bien-être de nos patients. Nous sommes là pour vous soutenir dans vos tâches quotidiennes et pour vous fournir les ressources nécessaires pour offrir les meilleurs soins possible.
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

export default DR_Acceuil;
