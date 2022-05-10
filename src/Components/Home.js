import React from 'react'
import Usertable from '../Usertable';
import arrayList from '../Array';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    const [users, setUsers] = React.useState(arrayList);
    const deleteUser = id => setUsers(users.filter(user => user.id !== id));

    return (
        <>
            <div className='top'>
                <Link to='/add'>+ New Data</Link>
            </div>
            <Usertable users={users} deleteUser={deleteUser} />
        </>

    )
}

export default Home