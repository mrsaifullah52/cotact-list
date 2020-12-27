import React from 'react';

const ContactReducer = (state,action)=>{

    switch (action.type) {
        case "REMOVE_CONTACT":{
            if(window.confirm("Are you Really want to Delete This Contact?")){
                const filteredData = state.filter(contact => contact.id !== action.id);
                return filteredData;
                // console.log(state)
            }
        }
        case "ADD_CONTACT":{
            return [...state,action.newContact];
        }
    
        default:
            break;
    }
}

export default ContactReducer;