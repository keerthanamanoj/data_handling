import React, { useEffect } from 'react'
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import Modal from './Openfile';
import './Usertable.css';
// import UserTable from "./usertable"
// CUSTOMER
import EditableRow from './Components/EditableRow';

const UserTable = (props) => {

    // const [customers, setCustomers] = React.useState([]);
    // const [modalnew, setModalnew] = React.useState(false);

    // const handleClose = () => {
    //     setModalnew(true)
    // };

    // const handleShow = () => {
    //     setModalnew(true)
    // };

    // console.log(modalnew)


    const [tableData, setTableData] = React.useState([])
    const [formInputData, setformInputData] = React.useState(
        {
            groupHeading: '',
            displayOrder: ''
            // a:''
            // b:''
            // c:''
        }
    );

    const handleChange = (evnt) => {
        const newInput = (data) =>
            ({ ...data, [evnt.target.name]: evnt.target.value })
        setformInputData(newInput)
    }

    const handleSubmit = (evnt) => {
        evnt.preventDefault();
        // const fieldName = event.target.getAttribute('name');
        // const fieldValue = ''
        const checkEmptyInput = !Object.values(formInputData).every(res => res === "")
        if (checkEmptyInput) {
            const newData = (data) => ([...data, formInputData])
            setTableData(newData);
            const emptyInput = { groupHeading: '', displayOrder: '' }
            setformInputData(emptyInput)
        }
    }

    return (
        <>
            <table>

                <thead>
                    <tr>
                        <th className='space'>SL No</th>
                        {/* <th className='spaced'>Research</th>
                        <th className='spaced'>Employee Category</th> */}
                        <th className='spaced'>Display Order</th>
                        <th className='spaced'>Group Heading</th>
                        <th className='spaceh'>Edit</th>
                        <th className='spaceh'>Delete</th>
                    </tr>
                </thead>

                <tbody>

                    {/* {props.users.map(user => {
                        const { id, research, employeeCategory, displayOrder, groupHeading } = user;

                        return (
                            <tr>
                                <td className='space'>{id}</td>
                                <td className='space'>{research}</td>
                                <td className='space'>{employeeCategory}</td>
                                <td className='space'>{displayOrder}</td>
                                <td className='space'>{groupHeading}</td>
                                <td className='spacei'><GrEdit onClick={handleShow} /></td>
                                <td className='spacei'><MdDelete onClick={() => props.deleteUser(id)} /></td>
                            </tr>
                        )
                    })
                    } */}

{
                        tableData.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td className='space'>{index + 1}</td>
                                    <td className='space'>{data.displayOrder}</td>
                                    <td className='space'> {data.groupHeading}</td>
                                    {/* <td className='spacei'><GrEdit onClick={handleShow} /></td> */}
                                    <td className='spacei'><GrEdit /></td>
                                    <td className='spacei'><MdDelete onClick={() => props.deleteUser(index)} /></td>
                                </tr>
                            )
                        })
                    }

                </tbody>

            </table>
            {/* <Modal tableData={tableData}/> */}

            <Modal
                formInputData={formInputData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                tableData={tableData}
            // handleClose={handleClose}
            />

            {/* {UserTable.map(customer => <customer key={modal.id} customer={customer} />)} */}
            {/* <Modal customers={customers} key={customers.id} /> */}
            {/* {modalnew && <Modal handleClose={handleClose} />} */}

        </>
    )
}


export default UserTable