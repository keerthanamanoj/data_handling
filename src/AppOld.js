import React from "react";
import "./App.css";

import "./Usertable.css";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import data from "./mockdata.json";
// import Select from 'react-select/dist/declarations/src/Select';
import Select from "react-select";
import ReadOnlyRow from "./Components/ReadOnlyRowOld";
import EditableRow from "./Components/EditableRowOld";

function AppOld() {
  const [selectedOption, setSelectedOption] = React.useState([]);
  // const [select, setSelect] =React.useState('')

  const options = [
    { value: "teaching", label: "Teaching" },
    { value: "research", label: "Research" },
  ];

  // const [users, setUsers] = React.useState(arrayList);
  // const deleteUser = id => setUsers(users.filter(user => user.id !== id));
  // const initUser = { id: null, research: '', employeeCategory: '', displayOrder: '', groupHeading: '' };
  // const [user, setUser] = React.useState(initUser);
  const [totaldatas, setTotaldatas] = React.useState(data);

  const [addformdata, setAddformdata] = React.useState({
    index: "",
    research: "",
    employee: "",
    display: "",
    group: "",
  });

  const [editContactId, setEditContactId] = React.useState("null");

  const [editFormData, setEditFormData] = React.useState({
    index: "",
    research: "",
    employee: "",
    display: "",
    group: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addformdata };
    newFormData[fieldName] = fieldValue;
    // console.log(fieldName)
    setAddformdata(newFormData);
    console.log(addformdata);
  };

  const handleEditFormChange = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    // const newTotaldatas={
    //   id: '',
    //   employee: addformdata.employee,
    //   order: addformdata.order,
    //   heading: addformdata.heading,
    //   markyes: addformdata.markyes,
    //   markno: addformdata.markno,
    // }

    //   const newTotaldatass=[...totaldatas, addformdata]
    //   setTotaldatas(newTotaldatass)

    const newTotaldatass = [...totaldatas, addformdata];
    setTotaldatas(newTotaldatass);
    console.log(totaldatas);
  };

  const handleAddsubmit = (event) => {
    // event.preventDefault();
    let submit = event.value;
    console.log(event);
    const newObject = { ...addformdata };
    newObject.employee = submit;
    setAddformdata(newObject);
  };

  const handleEditClick = (event, totaldatas) => {
    event.preventDefault();
    setEditContactId(totaldatas.id);

    const newformValues = {
      research: totaldatas.research,
      employee: totaldatas.employee,
      display: totaldatas.display,
      group: totaldatas.group,
    };
    setEditFormData(newformValues);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...totaldatas];
    const index = totaldatas.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setTotaldatas(newContacts);
    setEditContactId(null);
  };

  return (
    <div className="App">
      <form>
        <table>
          <thead>
            <tr>
              <th className="space">SL No</th>
              <th className="spaced">Research</th>
              <th className="spaced">Employee Category</th>
              <th className="spaced">Display Order</th>
              <th className="spaced">Group Heading</th>
              <th className="spaceh">Edit</th>
              <th className="spaceh">Delete</th>
            </tr>
          </thead>

          <tbody>
            {totaldatas.map((datamap) => (
              <React.Fragment>
                {editContactId === totaldatas.index ? (
                  <EditableRow
                  // editFormData={editFormData}
                  // handleEditFormChange={handleEditFormChange}
                  />
                ) : (
                  <ReadOnlyRow datamap={datamap} />
                )}

                {/* // editFormData={editFormData} 
                // handleEditFormChange={handleEditFormChange} */}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <div className="modalmain">
        <form onSubmit={handleAddFormSubmit}>
          {/* <UserTable customers={customers} /> */}
          <div className="m1">
            <div className="m11">
              <p>Edit research and additional settings entry</p>
            </div>
            <div className="m12">
              {/* <p onClick={handleClose}>X</p>
                    {console.log(handleClose)} */}
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <p>* Employee Category</p>
              <div className="col-md-6">
                <Select
                  // defaultValue={selectedOption}
                  // {console.log(selectedOption)}
                  options={{ options }}
                  name="employee"
                  // onChange={handleAddFormChange}
                  value={addformdata.employee}
                  onChange={(event) => handleAddsubmit(event)}
                />
                {console.log(selectedOption)}
              </div>

              <div className="col-md-6">
                <div className=" row row-cols-auto">
                  <p>* Research</p>
                  <div className="col-sm-6">
                    <input type="radio" name="research" value={"yes"} onChange={handleAddFormChange} />

                    <label for="yes">Yes</label>
                    <input type="radio" name="research" value={"no"} onChange={handleAddFormChange} />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <p>Display Order</p>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="12" name="display" onChange={handleAddFormChange} />
                </div>
              </div>

              <div className="col-md-8">
                <p>Group Heading</p>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Career Objective" name="group" onChange={handleAddFormChange} />
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* next table */}
        {/* last table */}

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
                  <input type="text" class="form-control" name="order" />
                </div>
              </td>

              <td>
                <div class="input-group">
                  <input type="text" class="form-control" name="twodata" />
                </div>
              </td>

              <td>
                <div class="input-group">
                  <input type="text" class="form-control" name="threedata" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="submit">
          <button type="button" class="btn btn-success" onClick={handleAddFormSubmit}>
            Submit
          </button>
          <button type="button" class="btn btn-danger">
            Close
          </button>
        </div>
      </div>

      {/* <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/add' element={<Adduser />}></Route>
          <Route exact path='/edit' element={<Edituser />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default AppOld;
