import React from "react";
import "../css/styles.css";

function Welcome() {
    return (
        <div className="welcome">
            <div className="flex">
                <div className="text">
                    Welcome, I'm
                    <span className="myname"> Sarah Zheng</span>
                </div>
                <div className="pagebotton">
                    <a href={"about.html"}> Learn more </a>
                </div>
                <nav className="navbar">
                    <div className="link-wrap">
                        <Button name="Home" location="./home.html"/>
                        <Button name="About" location="./about.html"/>
                        <Button name="Gallery" location="./gallery.html"/>
                        <Button name="Contact" location="./contact.html"/>
                    </div>
                </nav>
            </div>
        </div>
    )
}

function Button(props) {
    return (
        <a href={props.location}>{props.name}</a>
    )
}

export default Welcome