import React, { useState } from 'react'
import TableauPatients from './patients_compo/TableauPatients'
import { patients } from '@/pages/api/data/patients';

const Triage_Patient = () => {
    const [tableau, setTableau] = useState(<TableauPatients data={patients} />);
  return (
    <div>
        <div>
            <div>
                <button>Tout</button>
                <button>Rendez-vous</button>
                <button>En cours</button>                
            </div>
            <span>Nombre total des patients:{patients.length} </span>

        </div>
        <div>
            {tableau}
        </div>
    </div>
  )
}

export default Triage_Patient