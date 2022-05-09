import React from "react";
import { Link } from "react-router-dom";
import ContactIcon from "../images/ContactIcon.png";


const RenderContacts = (props)=>{
    
    const {name, email} = props.contact;
    const removeEl = (e)=>{
        // const id = e.target.previousElementSibling.children[1].textContent;
        const id = props.contact.id;
        props.deleteContactHandeler(id);
    }
    return (
        <div className="item">
            <Link to={`/card/${props.contact.id}`} state={props.contact}>
                <img className="ui avatar image" src={ContactIcon} alt="Contact avatar"/>
                <div className="content" style={{display:"inline-block"}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>  
                </div>
            </Link> 
            <i className="trash alternate outline icon" onClick={removeEl} style={{color:"red",marginTop:"10px", float:"right"}}></i>
        
        </div>
    );
}

export default RenderContacts;