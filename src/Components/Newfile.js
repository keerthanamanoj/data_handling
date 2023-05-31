import { nanoid } from 'nanoid'
import React from 'react'
import data from './Datas'

function Newfile() {

    const [contacts, setContacts] = React.useState(data)
    const [addFormData, setAddFormData]= React.useState({
        fullname: "",
        address: "",
        phoneNumber: "",
        email: ""
    })

    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName]= fieldValue;
        setAddFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
         
        const newContact = {
            // id: nanoid(),
            fullname: addFormData.fullname,
            address: addFormData.address,
            phoneNumber: addFormData.phoneNumber,
            email: addFormData.email
        }

        const newContacts = [ ...setContacts, newContact ]
        setContacts(newContacts)
    }

  return (
    <div className='app-container'>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Address</td>
                    <td>Phone number</td>
                    <td>Email</td>
                </tr>
            </thead>
            
            <tbody>
                {contacts.map ((contact)=>(
                    <tr>
                    <td>{contact.fullName}</td>
                    <td>{contact.address}</td>
                    <td>{contact.phoneNumber}</td>
                    <td>{contact.email}</td>
                    </tr>
                ))}
            </tbody>

        </table>

        <h2>Add a contact</h2>
        <form onSubmit={handleAddFormSubmit}>
            <input 
            type="text" 
            name="fullName" 
            placeholder="Type something..."
            onChange={handleAddFormChange}
            />

            <input 
            type="text" 
            name="address" 
            placeholder="Type something..."
            onChange={handleAddFormChange}
            />

            <input 
            type="text" 
            name="phoneNumber" 
            placeholder="Type something..."
            onChange={handleAddFormChange}
            />

            <input 
            type="text" 
            name="email" 
            placeholder="Type something..."
            onChange={handleAddFormChange}
            />

            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default Newfile