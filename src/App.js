
import React from 'react'
import './App.css';
import arrayList from './Array';

import Usertable from './Usertable';
import Modal from './Openfile';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Adduser from './Components/Adduser';
import Edituser from './Components/Edituser';
import Home from './Components/Home';


function App(props) {
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const [users, setUsers] = React.useState(arrayList);
  const deleteUser = id => setUsers(users.filter(user => user.id !== id));
  const initUser = { id: null, research: '', employeeCategory: '', displayOrder: '', groupHeading: '' };
  const [user, setUser] = React.useState(initUser);

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/add' element={<Adduser />}></Route>
          <Route exact path='/edit' element={<Edituser />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
