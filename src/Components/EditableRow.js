import React from 'react'
import '../App.css'

function EditableRow({ editFormData, handleEditFormChange, handleCancelClick }) {
    return (

        <tr>
            <td>
                <input
                    type="text"
                    name="fullName"
                    value={editFormData.fullName}
                    placeholder="name..."
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="address"
                    value={editFormData.address}
                    placeholder="address..."
                    onChange={handleEditFormChange}
                />
            </td>

            <td>
                <input
                    type="text"
                    name="phoneNumber"
                    value={editFormData.phoneNumber}
                    placeholder="phone number..."
                    onChange={handleEditFormChange}
                />

            </td>
            <td>
                <input
                    type="text"
                    name="email"
                    value={editFormData.email}
                    placeholder="Type something..."
                    onChange={handleEditFormChange}
                />
                
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>

    )
}

export default EditableRow



