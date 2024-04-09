import React from 'react'
import TableauPatients from './lab_compo/TableauPatients'
import { patients } from '@/pages/api/data/patients'


const Labo_Patients = () => {
  return (
    <div>
      <h2>Liste des patients</h2>
      <TableauPatients viewBtn data={patients}/>
    </div>
  )
}

export default Labo_Patients