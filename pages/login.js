import Link from 'next/link';
import styles from "../styles/Login.module.css";

export default function Login() {
  const soumettre = (e) => {
    e.preventDefault();
    console.log(e.target.numeroEmployer.value, e.target.password.value);
    // Ajoutez ici le code pour rediriger vers la page d'accueil si nécessaire
  };

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
