import React, { useState } from "react";
import { format } from "date-fns";
import styles from "./styles/inf_accueil.module.css";

const INF_Acceuil = () => {
  const [evenements, setEvenements] = useState([
    {
      id: 1,
      titre: "Formation sur la gestion du temps",
      date: new Date("2024-02-10"),
    },
    { id: 2, titre: "Réunion d'équipe", date: new Date("2024-02-12") },
  ]);

  const taches = [
    { id: 1, description: "Faire rapport quotidien" },
    { id: 2, description: "Planifier la réunion hebdomadaire" },
    { id: 3, description: "Faire des achats importants" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h2>Bienvenue, Fatima</h2>
        <p>
           Nous sommes ravis de vous voir. Votre engagement et votre dévouement envers vos patients sont vraiment appréciés. Nous sommes là pour vous soutenir dans vos tâches quotidiennes et pour vous offrir les ressources dont vous avez besoin pour offrir les meilleurs soins possible.
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

export default INF_Acceuil;
