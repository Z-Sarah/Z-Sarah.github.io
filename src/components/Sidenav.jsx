import React from "react";
import "../css/styles.css";

function Sidenav() {
    return (
        <div>
            <div className="sidenav">
                <div className="link-wrap">
                    <Button name="Home" location="./home.html"/>
                    <Button name="About" location="./about.html"/>
                    <Button name="Gallery" location="./gallery.html"/>
                    <Button name="Contact" location="./contact.html"/>
                </div>
            </div>
        </div>
    )
}

function Button(props) {
    return (
        <a href={props.location}>{props.name}</a>
    )
}

export default Sidenav