import React from 'react'
import TableauPatients from './doc_compo/TableauPatients'
import { patients } from '@/pages/api/data/patients'


const DR_Attributions = () => {
  return (
    <div>
      <h2>Liste des attributions</h2>
      <TableauPatients data={patients}/>
    </div>
  )
}

export default DR_Attributions