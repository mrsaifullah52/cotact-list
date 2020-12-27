import React, { useContext} from 'react';
import StateHook from '../hooks/StateHook';
import {ContactData} from '../context/ContactData';
import { nanoid } from 'nanoid';

const AddContactForm=()=>{
  const {dispatch}=useContext(ContactData);

  const [name, setName, clearName]=StateHook("");
  const [phone, setPhone, clearPhone]=StateHook("");
  const [email, setEmail, clearEmail]=StateHook("");

  const submitData = (e)=>{
    e.preventDefault();

    dispatch({type:"ADD_CONTACT",newContact:{id: nanoid(5),name: name, phone: phone, email: email}});

    clearName();
    clearPhone();
    clearEmail();
  }

  return(
    <form onSubmit={submitData}>
      <h2>Add Contact</h2>
      <div className="form-group">
        <input type="text" value={name} onChange={setName} id="name" placeholder="Enter Name" className="form-control"/>
      </div>
      <div className="form-group">
        <input type="phone" value={phone} onChange={setPhone} id="phone" placeholder="Enter Phone Number" className="form-control"/>
      </div>
      <div className="form-group">
        <input type="email" value={email} onChange={setEmail} id="email" placeholder="Enter Email" className="form-control"/>
      </div>
      <div className="form-group">
        <input type="submit" className=" btn btn-primary btn-block" value="Add to Contact List"/>
      </div>
    </form>
  );
}

export default AddContactForm;