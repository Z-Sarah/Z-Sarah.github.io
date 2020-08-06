import React from "react";

function StickyBar() {
    return (
        <div className="stickynav">
            <Button name="Home" location="./home.html"/>
            <Button name="About" location="./about.html"/>
            <Button name="Gallery" location="./gallery.html"/>
            <Button name="Contact" location="./contact.html"/>
        </div>
    )
}

function Button(props) {
    return (
        <a href={props.location}>{props.name}</a>
    )
}

export default StickyBar