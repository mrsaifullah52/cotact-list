import React from "react";
import "./App.css";
import Contactlist from './components/Contactlist';
import ContactDataProvider from './context/ContactData';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <>
    <Navbar/>
    <ContactDataProvider>
      <Contactlist/>
      </ContactDataProvider>
    </>
  );
};

export default App;
