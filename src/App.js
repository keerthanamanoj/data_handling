import React from "react";
import data from "./mock-data.json";
import "./App.css";
import ReadOnlyRow from "./Components/ReadOnlyRowOld";
import EditableRow from "./Components/EditableRowOld";
// import EditableRow from './Components/EditableRow'
// import data from './mock-data.json'

function App() {
  // const [show, setShow] = React.useState(false);
  const [contacts, setContacts] = React.useState(data);
  const [addFormData, setAddFormData] = React.useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = React.useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = React.useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContacts = [...contacts, addFormData];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      email: editFormData.email,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      email: contact.email,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  // adding rows to the table
  const addTableRows = () => {
    const rowsInput = {
      fullName: "",
      email: "",
      address: "",
      phoneNumber: "",
    };
    setContacts([...contacts, rowsInput]);
  };

  return (
    <div className="app-container">
      <div>
        <button>Modal</button>
        <button onClick={addTableRows}>+ Add Row</button>
        {/* <button onClick={()=>setShow(true)}>+ Add File</button> */}
      </div>

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Sl no</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact, index) => (
              <React.Fragment>
                {editContactId === contact.id ? (
                  <tr key={contact}>
                    <td>
                      <input type="text" name="fullName" value={editFormData.fullName} placeholder="name..." onChange={handleEditFormChange} />
                    </td>
                    <td>
                      <input type="text" name="address" value={editFormData.address} placeholder="address..." onChange={handleEditFormChange} />
                    </td>
                    <td>
                      <input type="text" name="phoneNumber" value={editFormData.phoneNumber} placeholder="phone number..." onChange={handleEditFormChange} />
                    </td>
                    <td>
                      <input type="text" name="email" value={editFormData.email} placeholder="Type something..." onChange={handleEditFormChange} />
                    </td>
                    <td>
                      <button type="submit">Save</button>
                      <button type="button" onClick={handleCancelClick}>
                        Cancel
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{contact.fullName}</td>
                    <td>{contact.address}</td>
                    <td>{contact.phoneNumber}</td>
                    <td>{contact.email}</td>

                    <td>
                      <button type="button" onClick={(event) => handleEditClick(event, contact)}>
                        Edit
                      </button>
                      <button type="button" onClick={() => handleDeleteClick(contact.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </form>

      {/* MODAL */}
      <div className="modalmodal">
        <h2>Add a contact</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input type="text" name="fullName" placeholder="Type name..." onChange={handleAddFormChange} />

          <input type="text" name="address" placeholder="Type address..." onChange={handleAddFormChange} />

          <input type="text" name="phoneNumber" placeholder="Type phonenumber..." onChange={handleAddFormChange} />

          <input type="email" name="email" placeholder="Type email..." onChange={handleAddFormChange} />

          <button type="submit" value="button">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
