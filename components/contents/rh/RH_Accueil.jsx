// RH_Accueil.jsx

import React, { useState } from "react";
import { format } from "date-fns";
import styles from "./styles/rh_accueil.module.css";

const RH_Accueil = () => {
  const [addEvent, setAddEvent] = useState(false);
  const [titre, setTitre] = useState("");
  const [date, setDate] = useState(new Date());
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

  const addBouton = () => {
    setEvenements((old) => [
      ...old,
      { id: old.length + 1, titre: titre, date: new Date(date) },
    ]);
    setAddEvent(false);
    setTitre("");
    setDate(new Date());
  };

  const removeEvent = (id) => {
    setEvenements((old) => old.filter((event) => event.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h2>Salut, Fatima</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          beatae vero molestias fugit, sapiente accusantium repellat officia
          nisi provident nobis hic voluptatum quod voluptatibus optio omnis
          autem deserunt commodi dicta?
        </p>
        <button onClick={() => setAddEvent(true)}>Ajouter un événement</button>
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

          {!addEvent ? (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Titre</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {evenements.map((evenement) => (
                  <tr key={evenement.id} className={evenement.id%2 == 0? styles.pair: styles.impair}>
                    <td>{evenement.titre}</td>
                    <td>{format(evenement.date, "dd/MM/yyyy")}</td>
                    <td>
                      <button onClick={() => removeEvent(evenement.id)}>
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className={styles.formEvent}>
              <label htmlFor="titre">Titre: </label>
              <br />
              <input
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
                type="text"
              />
              <br />
              <label htmlFor="date">Date: </label>
              <br />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <br />
              <div>
                <button onClick={addBouton}>Ajouter</button>
                <button onClick={() => setAddEvent(false)}>Annuler</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RH_Accueil;
