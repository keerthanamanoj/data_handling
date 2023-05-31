import React from 'react'
// id:"",
// research: "",
// employee:"",
// display:"",
// group: ""
// })

function EditableRowOld({editFormData, handleEditFormChange }) {
  return (
    <tr>
        <td>
        <input type="text" class="form-control" 
                                name='index'
                                />
        </td>
        <td><input type="text" class="form-control"
                                value={editFormData.research}
                                name='research'
                                onChange={handleEditFormChange}
                             />
                            </td>
        <td><input type="text" class="form-control"
                               value={editFormData.employee}
                                name='employee'
                                onChange={handleEditFormChange}
                             />
                            </td>
        <td><input type="text" class="form-control"
                                value={editFormData.display}
                                name='display'
                                onChange={handleEditFormChange}
                            />
                            </td>
        <td><input type="text" class="form-control"
                               value={editFormData.group}
                                name='group'
                                onChange={handleEditFormChange}
                            />
                            </td>

         <td><input type="text" class="form-control"
                             name='display'
                            //  value={editFormData.group}
                            //  name='edit'
                            //  onChange={handleEditFormChange}
                               
                            /></td>
        <td><input type="text" class="form-control"
                             
                                name='display'
                                // value={editFormData.group}
                                // name='delete'
                                // onChange={handleEditFormChange}
                               
                            /></td> 
    </tr>
  )
}

export default EditableRowOld