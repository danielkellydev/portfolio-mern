import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";

function Home() {
    return (
        <div>
            <Header/>
            <div className="bg-primary px-5 lg:px-40">
                <Intro/>
                <About/>
                <Experience/>
            </div>
        </div>
    )
}

export default Home