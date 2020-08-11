import React from "react";
import "../css/styles.css";



function useSticky() {
    window.onscroll = function () {onScroll()};
    let navbar = document.getElementById("navbar")
    let sticky = navbar.offsetTop
    const onScroll = () => {
        if(window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky")
        }
    }
}

export default useSticky