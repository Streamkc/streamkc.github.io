import React from 'react';
import {lazy} from 'react';
import {Pcbuild, Pcpartpicker, Pcpartslist} from './pcbuilder.js';

const Nav= ()=>{
    let pageshown="mybuild";

    const showpage = (name)=>{

        const buildpage= document.getElementById('mybuild');
        const partslistpage= document.getElementById('partslist');
        const myinfo = document.getElementById('myinfo');

        if(name === "mybuild"){
            buildpage.style.display= "block";
            partslistpage.style.display= "none";
            myinfo.style.display= "none";
        }else
        if(name === "partslist"){
            buildpage.style.display= "none";
            partslistpage.style.display= "block";
            myinfo.style.display= "none";
        }else
        if(name === "myinfo"){
            buildpage.style.display= "none";
            partslistpage.style.display= "none";
            myinfo.style.display= "block";
        }
    }

    return(
    <div className="nav"> 
        <ol>
            <li>
            <a href="#mybuid" onClick={()=>showpage("mybuild")}>
            My Build
            </a> 
            </li>
            <li>  
            <a href="#partslist" onClick={()=>showpage("partslist")}>
            Parts
            </a> 
            </li>
            <li> 
            <a href="#myinfo" onClick={()=>showpage("myinfo")}>My Info</a> 
            </li>
        </ol>
    </div>
    );
}

const Banner= ()=>{
    return(
        <div id="banner">
        <h1>My PC Build</h1>
        </div>
    );
}

const Footer= ()=>{
    const style={ 
        display: "flex",
        flexDirection: "row",
    };
    const colstyle={ 
        flex: 1,
    };

    return(
        <div id="footer" style={style}>

        <div style={colstyle} >
        <ul>
            <li><a href="https://www.google.com" >Google</a></li>
            <li><a href="https://www.facebook.com" >Facebook</a></li>
            <li><a href="https://www.instagram.com" >Instagram</a></li>
        </ul>
        </div>

        <div style={colstyle} >
        <ul>
            <li><a href="https://www.google.com" >Google</a></li>
            <li><a href="https://www.facebook.com" >Facebook</a></li>
            <li><a href="https://www.instagram.com" >Instagram</a></li>
        </ul>
        </div>

        <div style={colstyle} >
        <ul>
            <li><a href="https://www.google.com" >Google</a></li>
            <li><a href="https://www.facebook.com" >Facebook</a></li>
            <li><a href="https://www.instagram.com" >Instagram</a></li>
        </ul>
        </div>

        </div>
    );
}

const Myinfo= ()=>{
    const style={ }

    return(
    <div id="myinfo">
        <div>
        <h3>Info for tech used </h3>
        </div>
        <div>
        React js for component rendering.
        </div>
        <div>
        Single CSS file is used for styling
        </div>
        <div>
        Webpack for bundling js.
        </div>
        
        <div>
        <pre>
        Todo: 
        public path to be exposed;

        fetch API need CORS support;
        </pre>
        </div>
    </div>
    );
}

const Content= ()=>{
    return(
    <div id="content">
        <Pcbuild />
        <Pcpartpicker />
        <Pcpartslist />
    </div>
    );
}

const App= ()=>{

    const onunloadevent= (event)=>{
        event.preventDefault();    
    }
    window.onbeforeunload=onunloadevent;

    return (
        <div id="container">
            <Banner />
            <Nav/>
            <Content />
            <Myinfo />
            <Footer />
        </div>
    )
}

export default App;
