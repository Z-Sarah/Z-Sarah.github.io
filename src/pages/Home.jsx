import React from 'react';
import Main from "../components/Main";
import Sidenav from "../components/Sidenav";
import About from "./About";

const Home = () => {
    return (
        <section id="home">
            <Main/>
            <Sidenav/>
            <About/>
        </section>
    )
}

export default Home