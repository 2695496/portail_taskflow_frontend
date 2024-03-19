import React from 'react'
import TableauPatients from './inf_compo/TableauPatients'
import { patients } from '@/pages/api/data/patients'

const INF_Dossiers = () => {
  return (
    <div>
      <TableauPatients data={patients} viewBtn={false} />
    </div>

  )
}

export default INF_Dossiers