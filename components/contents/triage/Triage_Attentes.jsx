import React from 'react'
import TableauPatients from "./patients_compo/TableauPatients";
import { patients } from "@/pages/api/data/patients";

const Triage_Attentes = () => {
  return (
    <div >
      <TableauPatients data={patients} />
    </div>
  );
}

export default Triage_Attentes