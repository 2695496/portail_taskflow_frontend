import React from 'react'
import TableauPatients from './doc_compo/TableauPatients'
import { patients } from '@/pages/api/data/patients'


const DR_Patients = () => {
  return (
    <div>
      <h2>Liste des patients</h2>
      <TableauPatients data={patients}/>
    </div>
  )
}

export default DR_Patients