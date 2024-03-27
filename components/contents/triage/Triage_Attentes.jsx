import React from 'react'
import TableauPatients from "./patients_compo/TableauPatients";
import { patients } from "@/pages/api/data/patients";

const Triage_Attentes = () => {
  return (
    <div >
      <h2 style={{
        fontWeight: 'bold',
        fontSize: '1.3em', 
      }}>Liste d'attente</h2>
      <TableauPatients data={patients} />
    </div>
  );
}

export default Triage_Attentes