import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import RenderContacts from "./RenderContacts"

const ContactList = (props)=>{
    console.log(props);
    // const [search, setSearch] = useState("");
    const sref = useRef("")
    console.log(sref);
    console.log(props)
    const renderContacts = props.contacts.map((contact)=>{
        // if(sref.current !== "" && contact.name.includes(sref.current.value)){
        //     console.log(sref.current.value);
        //     return <RenderContacts key={contact.id} contact={contact} deleteContactHandeler={props.deleteContactHandeler} contacts={props.contacts}/>
        // }else{
        return (
                <RenderContacts key={contact.id} contact={contact} deleteContactHandeler={props.deleteContactHandeler} contacts={props.contacts}/>
        );
    // }
    });
    return (
        <div className="main">
            <h2 style={{display:"inline-block"}}>Contacts List</h2>
            <Link to={"/add"}>
                <button className="ui button blue right" style={{float:"right"}}>Add Contact</button>
            </Link>
            <div className="ui fluid category search">
                <div style={{width:"100%"}} className="ui icon input">
                    <input onChange={(e)=> props.setSearch(e.target.value) } ref={sref} className="prompt" type={"text"} placeholder="Search Contact..." />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list" >
                {renderContacts}
            </div>
        </div>
    );
}


export default ContactList;