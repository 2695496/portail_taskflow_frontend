import React, { useState } from "react";
import { format } from "date-fns";
import styles from "./styles/labo_acceuil.module.css";

const Labo_Acceuil = () => {
  const [evenements, setEvenements] = useState([
    {
      id: 1,
      titre: "Formation sur les nouvelles techniques d'analyse",
      date: new Date("2024-02-10"),
    },
    { id: 2, titre: "Séance de brainstorming pour l'amélioration des protocoles", date: new Date("2024-02-12") },
  ]);

  const taches = [
    { id: 1, description: "Analyser les échantillons reçus" },
    { id: 2, description: "Préparer les solutions et réactifs pour les tests" },
    { id: 3, description: "Vérifier et calibrer les équipements de laboratoire" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h2>Bienvenue, Fatima</h2>
        <p>
          Nous sommes ravis de vous voir. Votre expertise et votre contribution au laboratoire sont essentielles pour assurer des analyses précises et fiables. Nous sommes là pour vous soutenir dans vos tâches et encourager votre développement professionnel.
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

export default Labo_Acceuil;
