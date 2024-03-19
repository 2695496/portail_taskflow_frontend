import React, { useState } from 'react';

const InformationsPatient = {
    nom: "Dupont",
    prenom: "Jean",
    age: 45,
    sexe: "Masculin",
    numeroSecu: "XXX-XX-XXXX",
    adresse: "123 rue de la Santé, Ville",
    telephone: "01 23 45 67 89",
    allergie: "Pénicilline"
};

const INF_Patient = () => {
    const [symptomes, setSymptomes] = useState('');
    const [antecedents, setAntecedents] = useState('');
    const [histoire, setHistoire] = useState('');
    const [signesVitaux, setSignesVitaux] = useState({
        frequenceCardiaque: '',
        pressionArterielle: '',
        temperatureCorporelle: '',
        frequenceRespiratoire: '',
        saturationOxygene: ''
    });
    const [douleur, setDouleur] = useState('');
    const [contexteSocial, setContexteSocial] = useState('');
    const [examensComplementaires, setExamensComplementaires] = useState('');
    const [traitement, setTraitement] = useState('');
    const [medecin, setMedecin] = useState({
        nom: '',
        specialite: '',
        commentaire: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logique pour soumettre les données
        console.log({
            InformationsPatient,
            triageInfirmier: {
                symptomes,
                antecedents,
                histoire,
                signesVitaux,
                douleur,
                contexteSocial,
                examensComplementaires,
                traitement
            },
            medecin
        });
        // Réinitialiser le formulaire
        setSymptomes('');
        setAntecedents('');
        setHistoire('');
        setSignesVitaux({
            frequenceCardiaque: '',
            pressionArterielle: '',
            temperatureCorporelle: '',
            frequenceRespiratoire: '',
            saturationOxygene: ''
        });
        setDouleur('');
        setContexteSocial('');
        setExamensComplementaires('');
        setTraitement('');
        setMedecin({
            nom: '',
            specialite: '',
            commentaire: ''
        });
    };

    return (
        <div>
            <div>
                <h2>Informations du Patient</h2>
                <p>Nom: {InformationsPatient.nom}</p>
                <p>Prénom: {InformationsPatient.prenom}</p>
                <p>Âge: {InformationsPatient.age}</p>
                <p>Sexe: {InformationsPatient.sexe}</p>
                <p>Numéro de sécurité sociale: {InformationsPatient.numeroSecu}</p>
                <p>Adresse: {InformationsPatient.adresse}</p>
                <p>Téléphone: {InformationsPatient.telephone}</p>
                <p>Allergie: {InformationsPatient.allergie}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Formulaire de l'infirmier du triage</h2>
                    {/* Vos champs pour le formulaire de triage infirmier ici */}
                    <div>
                        <label>Symptômes :</label>
                        <textarea value={symptomes} onChange={(e) => setSymptomes(e.target.value)} />
                    </div>
                    <div>
                        <label>Antécédents médicaux :</label>
                        <textarea value={antecedents} onChange={(e) => setAntecedents(e.target.value)} />
                    </div>
                    <div>
                        <label>Histoire récente :</label>
                        <textarea value={histoire} onChange={(e) => setHistoire(e.target.value)} />
                    </div>
                    <div>
                        <label>Signes vitaux :</label>
                        <input type="text" placeholder="Fréquence cardiaque" value={signesVitaux.frequenceCardiaque} onChange={(e) => setSignesVitaux({ ...signesVitaux, frequenceCardiaque: e.target.value })} />
                        <input type="text" placeholder="Pression artérielle" value={signesVitaux.pressionArterielle} onChange={(e) => setSignesVitaux({ ...signesVitaux, pressionArterielle: e.target.value })} />
                        <input type="text" placeholder="Température corporelle" value={signesVitaux.temperatureCorporelle} onChange={(e) => setSignesVitaux({ ...signesVitaux, temperatureCorporelle: e.target.value })} />
                        <input type="text" placeholder="Fréquence respiratoire" value={signesVitaux.frequenceRespiratoire} onChange={(e) => setSignesVitaux({ ...signesVitaux, frequenceRespiratoire: e.target.value })} />
                        <input type="text" placeholder="Saturation en oxygène" value={signesVitaux.saturationOxygene} onChange={(e) => setSignesVitaux({ ...signesVitaux, saturationOxygene: e.target.value })} />
                    </div>
                    <div>
                        <label>Niveau de douleur :</label>
                        <input type="text" value={douleur} onChange={(e) => setDouleur(e.target.value)} />
                    </div>
                    <div>
                        <label>Contexte social :</label>
                        <textarea value={contexteSocial} onChange={(e) => setContexteSocial(e.target.value)} />
                    </div>
                    <div>
                        <label>Examens complémentaires :</label>
                        <textarea value={examensComplementaires} onChange={(e) => setExamensComplementaires(e.target.value)} />
                    </div>
                    <div>
                        <label>Traitement actuel :</label>
                        <textarea value={traitement} onChange={(e) => setTraitement(e.target.value)} />
                    </div>
                </div>
                <div>
                    <h2>Attribution d'un médecin</h2>
                    <div>
                        <label>Nom du médecin :</label>
                        <input type="text" value={medecin.nom} onChange={(e) => setMedecin({ ...medecin, nom: e.target.value })} />
                    </div>
                    <div>
                        <label>Spécialité :</label>
                        <input type="text" value={medecin.specialite} onChange={(e) => setMedecin({ ...medecin, specialite: e.target.value })} />
                    </div>
                    <div>
                        <label>Commentaire :</label>
                        <textarea value={medecin.commentaire} onChange={(e) => setMedecin({ ...medecin, commentaire: e.target.value })} />
                    </div>
                </div>
                <button type="submit">Soumettre</button>
            </form>
        </div>
    );
}

export default INF_Patient;
