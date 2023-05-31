import React from "react";
import './Openfile.css';
import Select from 'react-select'
import { useEffect } from 'react';
import UserTable from "./Usertable";



function Modal({ handleClose, handleChange, handleSubmit, formInputData }) {
    const [selectedOption, setSelectedOption] = React.useState(null);
 

    const options = [
        { value: 'teaching1', label: 'Teaching' },
        { value: 'teaching2', label: 'Research' },
    ]

    return (

        <div className="modalmain">
            {/* <UserTable customers={customers} /> */}
            <div className="m1">
                <div className="m11">
                    <p>Edit research and additional settings entry</p>
                </div>
                <div className="m12">
                    <p onClick={handleClose}>X</p>
                    {console.log(handleClose)}
                </div>
            </div>

            <div className='col-md-12'>
                <div className="row">
                    <p>* Employee Category</p>
                    <div className="col-md-6">
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />
                    </div>

                    <div className="col-md-6">

                        <div className=" row row-cols-auto">
                            <p>* Research</p>
                            <div className="col-sm-6">
                                <input type="radio" 
                                id="yes" name="markyes"
                                 value="yes" />
                                <label for="yes">Yes</label>
                                <input type="radio" 
                                id="no" name="markno" 
                                value="no" />
                                <label for="no">No</label>
                            </div>

                        </div>

                    </div>
                </div>

            </div>



            <div className='col-md-12'>

                <div className="row">
                    <div className="col-md-4">
                        <p>Display Order</p>
                        <div class="input-group">
                            <input type="text" class="form-control"
                                placeholder="12"
                                onChange={handleChange}
                                value={formInputData.displayOrder}
                            />
                        </div>
                    </div>

                    <div className="col-md-8">
                        <p>Group Heading</p>
                        <div class="input-group">
                            <input type="text" class="form-control"
                                placeholder="Career Objective"
                                onChange={handleChange}
                                value={formInputData.groupHeading}
                            />

                        </div>
                    </div>

                </div>

            </div>

            {/* texting */}
            <table class="table">

                <thead>
                    <tr>
                        <th scope="col">Display Order</th>
                        <th scope="col">Research/Aditional Parameter</th>
                        <th scope="col">Display in application</th>
                        <th scope="col">[ + Add ]</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <div class="input-group">
                                <input type="text" class="form-control" />
                            </div>
                        </td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="input-group">
                                <input type="text" class="form-control" />
                            </div>
                        </td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="input-group">
                                <input type="text" class="form-control" />
                            </div>
                        </td>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>

            </table>

            <div className="submit">
                <button type="button" class="btn btn-success" onClick={handleSubmit}>Submit</button>
                <button type="button" class="btn btn-danger">Close</button>
            </div>

        </div>

    );
}

export default Modal;