import React, {useContext} from 'react';
import {ContactData} from '../context/ContactData';


const List =({data})=>{
  const {dispatch}= useContext(ContactData);
  // const {rmContact} = da;

  const clickEvent=(e)=>{
    e.preventDefault();
    dispatch({type:"REMOVE_CONTACT",id:data.id})
  }
  return(
    <tr>
      <td>{data.name}</td>
      <td>{data.phone}</td>
      <td>{data.email}</td>
      <td><form onSubmit={clickEvent}><button className="btn btn-small btn-danger" type="submit">x</button></form></td>
    </tr>
  )
}

export default List;