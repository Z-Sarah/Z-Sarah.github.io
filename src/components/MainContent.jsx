import React from "react";
import styles from "../css/MainContent.module.css";


function MainContent () {
    return (
     <div className={styles.main}>
         <input type="checkbox"/>
         <p style={{fontSize: "80px"}}>1</p>
         <input type="checkbox"/>
         <p>2</p>
         <input type="checkbox"/>
         <p>3</p>
         <input type="checkbox"/>
         <p>4</p>
     </div>
    );
}

export default MainContent