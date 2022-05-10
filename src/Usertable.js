import React from 'react'
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import Modal from './Openfile';
import './Usertable.css';

const UserTable = (props) => {
    const [modal, setModal] = React.useState(true);
    const handleClose = () => {
        setModal(false)
    };
    const handleShow = () => {
        setModal(true)
    }

    console.log(modal)
    // const openModal = () => setShow(true);
    // const closeModal = () => setShow(false);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th className='space'>SL No</th>
                        <th className='spaced'>Research</th>
                        <th className='spaced'>Employee Category</th>
                        <th className='spaced'>Display Order</th>
                        <th className='spaced'>Group Heading</th>
                        <th className='spaceh'>Edit</th>
                        <th className='spaceh'>Delete</th>
                    </tr>
                </thead>

                <tbody>


                    {props.users.map(user => {
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
                    }

                </tbody>
            </table>

            {modal && <Modal handleClose={handleClose} />}

        </>
    )
}


export default UserTable