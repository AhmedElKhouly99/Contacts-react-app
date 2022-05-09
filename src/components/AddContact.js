import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

// const state = {
//         name: "",
//         email: ""
//     }
    
// const setState = (obj)=>{
//     // console.log(obj);
//     if(obj){
//         state.name = obj.name;
//         state.email = obj.email;
//     }
//     // console.log(state);
//     return state;
// }
// const Add = (e, AddContactHandeler, current) => {
//     e.preventDefault();
//     const obj = current();
//     if (obj.name === "" || obj.email === "") {
//         alert("Inavlid inputs !");
//         return false;
//     } else {
//         AddContactHandeler(obj);
//         current({ name: "", email: "" })
//         return true;
//     }
// }


const Add = (e, AddContactHandeler, obj) => {
    e.preventDefault();
    const {name,email} = obj;
    // const obj = current();
    if (name === "" || email === "") {
        alert("Inavlid inputs !");
        return false;
    } else {
        AddContactHandeler(obj);
        // current({ name: "", email: "" })
        return true;
    }
}


const AddContact = (props)=>{
    const [email, setEmail] = useState("");
    const [name, setName] = useState("")
    const navigate = useNavigate();
    return (
        <div className="ui main">
            {/* <h2>Add Contact</h2> */}
            <h2 style={{ display: "inline-block" }}>Add Contact</h2>
            <Link to={"/"}>
                <button className="ui button blue right" style={{ float: "right" }}>Contacts List</button>
            </Link>
            <form className="ui form" onSubmit={(e) => {
                const nav = Add(e, props.AddContactHandeler, {name, email});
                console.log(props);
                if(nav){
                    navigate("/")
                }
            }}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name"
                        value={name}
                        onChange={(e) => {
                            // setState({ name: e.target.value, email: state.email })
                            setName(e.target.value);
                        }} />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            // setState({name:state.name, email: e.target.value })
                            setEmail(e.target.value);
                        }} />
                </div>
                
                <input type={"submit"} value="Add" className="ui button blue" />
            </form>
        </div>
    );
}






// class AddContact extends React.Component {
//     // navigate = useNavigate;
//     nav = true;
//     // if(navigate){
//     //    this.render(){return <div></div>}
//     // }
//     state = {
//         name: "",
//         email: ""
//     }
//     render() {
//         // if(this.navigate){
//         //     return (<ContactList contacts={contacts} deleteContactHandeler={deleteContactHandeler} />)
//         //  }
//         return (
//             <div className="ui main">
//                 {/* <h2>Add Contact</h2> */}
//                 <h2 style={{ display: "inline-block" }}>Add Contact</h2>
//                 <Link to={"/"}>
//                     <button className="ui button blue right" style={{ float: "right" }}>Contacts List</button>
//                 </Link>
//                 <form className="ui form" onSubmit={(e) => {
//                     this.navigate = Add(e, this.props.AddContactHandeler, this);
//                     console.log(this.props);
//                     if(this.nav){
                        
//                     }
//                 }}>
//                     <div className="field">
//                         <label>Name</label>
//                         <input type="text" name="name" placeholder="Name"
//                             value={this.state.name}
//                             onChange={(e) => {
//                                 this.setState({ name: e.target.value })
//                             }} />
//                         <label>Email</label>
//                         <input type="email" name="email" placeholder="Email"
//                             value={this.state.email}
//                             onChange={(e) => {
//                                 this.setState({ email: e.target.value })
//                                 console.log(this.props);
//                             }} />
//                     </div>
                    
//                     <input type={"submit"} value="Add" className="ui button blue" />
//                 </form>
//             </div>
//         );
//     }
// }

export default AddContact;