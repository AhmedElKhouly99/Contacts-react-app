import React from "react";
import { useLocation, Link } from "react-router-dom";
import ContactIcon from "../images/ContactIcon.png";


const ContactCard = (props) => {
    let date = useLocation();
    const {id, name, email} = date.state;
    return (
        <div className="ui special cards">
            <div className="card" style={{margin: "auto"}}>
                <div className="blurring dimmable image">
                    <div className="ui dimmer">
                        <div className="content">
                            <div className="center">
                                <div className="ui inverted button">Add Friend</div>
                            </div>
                        </div>
                    </div>
                    <img src={ContactIcon}/>
                </div>
                <div className="content">
                    <a className="header">{name}</a>
                    <div className="meta">
                        <span className="date">{email}</span>
                    </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="users icon"></i>
                        
                    </a>
                </div>
                <Link to={"/"}>
                    <button className="ui button blue right" style={{marginLeft:"20%"}}>Back To Contact List</button>
                </Link>
            </div>
            {/* <div className="card">
                <div className="blurring dimmable image">
                    <div class="ui inverted dimmer">
                        <div class="content">
                            <div class="center">
                                <div class="ui primary button">Add Friend</div>
                            </div>
                        </div>
                    </div>
                    <img src="/images/avatar/large/jenny.jpg"/>
                </div>
                <div class="content">
                    <a class="header">Team Hess</a>
                    <div class="meta">
                        <span class="date">Created in Aug 2014</span>
                    </div>
                </div>
                <div class="extra content">
                    <a>
                        <i class="users icon"></i>
                        2 Members
                    </a>
                </div>
            </div> */}
        </div>
    );
}

export default ContactCard;