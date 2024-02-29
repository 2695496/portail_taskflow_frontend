import { users } from "./data/users.js";

export default function handler(req, res) {
    const { matricule, password } = req.body;

    // Validation des données
    if (!matricule || !password) {
        return res.status(400).json({ error: "Matricule ou mot de passe manquant." });
    }

    const user = users.find(user => user.matricule === matricule);

    if (!user) {
        return res.status(404).json({ error: "Utilisateur non trouvé." });
    }

    if (user.password !== password) {
        return res.status(401).json({ error: "Matricule ou mot de passe incorrect." });
    }

    return res.status(200).json({ token: user });
}
