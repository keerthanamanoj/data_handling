import React from "react";
import './Openfile.css';
import Select from 'react-select'

const [selectedOption, setSelectedOption] = React.useState(null);
const options = [
    { value: 'teaching1', label: 'Teaching1' },
    { value: 'teaching2', label: 'Teaching2' },
    { value: 'teaching3', label: 'Teaching3' },
]

function Modal({ handleClose }) {


    return (

        <div className="modal">
            <div className="m1">
                <div className="m11">
                    <p>Edit research and additional settings entry</p>
                </div>
                <div className="m12">
                    <p onClick={handleClose}>X</p>
                </div>
            </div>

            <div className="m2">
                <div className="m21">
                    <p>* Employee Category</p>
                </div>
                <div className="m22">
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    />
                </div>
            </div>

        </div>

    );
}

export default Modal;