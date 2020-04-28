import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/GlobalState';

import STAFF from '../../../data/staff/other-staff';

const Staff = () => {
    const { updateStaff, nextStep } = useContext(GlobalContext);

    let staffAlternatives = [];
    let potentialAlternatives = STAFF;

    for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * potentialAlternatives.length);
        staffAlternatives.push(potentialAlternatives[randomNumber]);
        potentialAlternatives.splice(randomNumber, 1);
    }

    const handleSelection = event => {
        updateStaff(staffAlternatives[event.target.value]);
        nextStep();
    }

    return (
        <div className="staff">
            <h1>Pick a staff member to be part the team</h1>
            {
                staffAlternatives.map((staff, i) => {
                    return <button onClick={handleSelection} key={staff.id} value={i}>{staff.name}</button>
                })
            }
        </div>
    )
}

export default Staff;