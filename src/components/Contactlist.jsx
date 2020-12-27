import React, { useContext } from 'react';
import {ContactData} from '../context/ContactData';
import List from './List';
import AddContactForm from "./AddContactForm";

const Contactlist = ()=>{
  const data= useContext(ContactData);
  const {user} = data;
  // console.log(user)
  return(
  <main className="container mt-5">

    <div className="row">
      
      <AddContactForm className="col-6"/>
    
    
      <table className="table col-6 ml-5">
        <caption>Contacts</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map(cont=>(
              <List data={cont} key={cont.id}/>
            ))
          }
        </tbody>
      </table>
      </div>
  </main >
  )
}

export default Contactlist;