import React, { useState } from 'react'
import './Dropdown.css'

import Select from 'react-select'

const [selectedOption, setSelectedOption] = React.useState(null);
const options = [
    { value: 'teaching1', label: 'Teaching1' },
    { value: 'teaching2', label: 'Teaching2' },
    { value: 'teaching3', label: 'Teaching3' },
]

function Dropdown() {

    return (
        <div className="dropdown">
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>

    )
};

export default Dropdown