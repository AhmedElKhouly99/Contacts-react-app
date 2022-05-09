// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList";
import ContactCard from './components/ContactCard';


function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(() => {
    const storageCont = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageCont) {
      return storageCont;
    }
    return [];
  })

  const [search, setSearch] = useState("");
  const [searchCon, setSearchCon] = useState([...contacts]);


  const AddContactHandeler = (contact) => {
    setContacts([...contacts, { id: Date.now(), ...contact }]);
    console.log(contacts);
  }

  const deleteContactHandeler = (id) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== id
    });
    setContacts(filteredContacts);
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  const searchHandeler = ()=>{
    console.log(search);
    if(search !== ""){
      const filteredContacts = contacts.filter((contact)=>{
        return Object.values(contact).join(" ").toLowerCase().includes(search.toLowerCase());

      })
      console.log(filteredContacts);
      setSearchCon(filteredContacts);
      console.log(searchCon);
    }
    else{
      searchCon.splice(0, searchCon.length)
    }
  }

  useEffect(searchHandeler, [search]);
  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem("contacts"));
  //   console.log(retriveContacts)
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);



  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ContactList setSearch={setSearch} contacts={search != ""?searchCon:contacts} deleteContactHandeler={deleteContactHandeler} />} />
          {/* <Route path='/add' element={navigate === true? <Navigate to="/" />: <AddContact AddContactHandeler={AddContactHandeler}/> }/> */}
          <Route path='/add' element={<AddContact AddContactHandeler={AddContactHandeler}/>} />
          {/* <Route path='/add' element={navigate === true? <Navigate to="/" />: <AddContact AddContactHandeler={AddContactHandeler}/> }/> */}
          <Route path='/card/:id' element={<ContactCard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
