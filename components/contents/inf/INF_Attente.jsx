import React from 'react'
import TableauPatients from './inf_compo/TableauPatients';
import { patients } from '@/pages/api/data/patients';

const INF_Attente = () => {
  return (
    <div>
    <TableauPatients data={patients} viewBtn={true} />
  </div>
  )
}

export default INF_Attente