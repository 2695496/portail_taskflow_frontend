const fetchData = async () => {
  try {
    // Effectuez la requête fetch
    const response = await fetch("http://localhost:3000/api/countries");

    // Vérifiez si la requête a réussi (statut 200)
    if (response.ok) {
      // Convertissez la réponse en format JSON
      const data = await response.json();

      return data;
    } else {
      // Gérez les erreurs si la requête n'a pas réussi
      console.error("Erreur de requête:", response.status, response.statusText);
    }
  } catch (error) {
    // Gérez les erreurs liées à la requête
    console.error("Erreur lors de la requête:", error);
  }
};


export default fetchData;