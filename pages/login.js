import Link from "next/link";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";
import { routes } from "./services/routes.js";
import { useEffect } from "react";


routes

export default function Login() {
  const router = useRouter();
  const soumettre = (e) => {
    e.preventDefault();
    const data = {
      matricule: e.target.numeroEmployer.value,
      password: e.target.password.value,
    };
    console.log(data);
    // Ajoutez ici le code pour rediriger vers la page d'accueil si nécessaire
    const url = "/api/login";

    // Data to be sent in the request body


    // Configuring the fetch request
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    // Making the fetch request
    fetch(url, requestOptions)
      .then((response) => {
        // Check if response is ok (status code 200-299)
        if (response.ok) {
          return response.json(); // Parse the response body as JSON
        }
        throw new Error("Network response was not ok."); // Throw an error for non-200 status codes
      })
      .then((data) => {
        // Handle the JSON response data
        localStorage.setItem('token', JSON.stringify(data.token) );
        console.log(localStorage.getItem('token'));
        router.push(routes(data.token.id_role));
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch operation
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  useEffect(()=> {
    const token = localStorage.getItem('token');
    if(token){
      console.log(token);
      const user = JSON.parse(token);
      router.push(routes(user.id_role));
    }
  }, [])
  return (
    <main className={styles.body}>
      <div className={styles.login_card}>
        <h1>Login</h1>
        <form onSubmit={soumettre}>
          <div>
            <label htmlFor="numeroEmployer">Numero Employé</label>
            <input
              type="text"
              id="numeroEmployer"
              name="numeroEmployer"
              required
              className={styles.inputField}
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className={styles.inputField}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Se connecter
          </button>
        </form>
      </div>
    </main>
  );
}
