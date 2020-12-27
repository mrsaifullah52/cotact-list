import React, { createContext, useState, useReducer } from "react";
import ContactReducer from '../reducer/ContactReducer';

export const ContactData = createContext();

const ContactDataProvider = (props)=>{
  // const [contacts,setContact]=useState([
  //   {id:1,name:"Saif", phone: "333 999 888",email:"Saif@gmail.com"},
  //   {id:2,name:"Shehroz", phone: "333 999 888",email:"Shehroz@gmail.com"},
  //   {id:3,name:"Hussnain", phone: "333 999 888",email:"Hussnain@gmail.com"},
  // ]);

  const [contacts,dispatch]=useReducer(ContactReducer,[
    {id:1,name:"Saif", phone: "333 999 888",email:"Saif@gmail.com"},
    {id:2,name:"Shehroz", phone: "333 999 888",email:"Shehroz@gmail.com"},
    {id:3,name:"Hussnain", phone: "333 999 888",email:"Hussnain@gmail.com"},
  ])

  // const addContact=(contact)=>{ 
  //     setContact([...contacts, contact])
  // }

//   const rmContact=(id)=>{
//     const filteredData = contacts.filter((c)=>c.id!==id);
//     setContact([...filteredData]);
//     console.log(id)
// }

  return(
    <>
        <ContactData.Provider value={{user: contacts,dispatch}}>
          {props.children}
        </ContactData.Provider>
    </>
  )
}
export default ContactDataProvider;
