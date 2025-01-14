import React from 'react';
import {useRef ,useState, useEffect, useMemo} from 'react';
import {Pcbuild, Pcpartpicker, Pcpartslist} from './pcbuilder.js';

const Nav= ()=>{
    let pageshown="mybuild";
    const buildpageRef= useRef(null);
    const partslistpageRef= useRef(null);
    const myinfopageRef= useRef(null);

    const showpage = (name)=>{

        const buildpage= document.getElementById('mybuild');
        const partslistpage= document.getElementById('partslist');
        const myinfo = document.getElementById('myinfo');

        if(name === "mybuild"){
            buildpage.style.display= "block";
            partslistpage.style.display= "none";
            myinfo.style.display= "none";
            /*
            buildpageRef.current.style.display= "block";
            partslistpageRef.current.style.display= "none";
            myinfopageRef.current.style.display= "none";
            */
        }else
        if(name === "partslist"){
            buildpage.style.display= "none";
            partslistpage.style.display= "block";
            myinfo.style.display= "none";
            /*
            buildpageRef.current.style.display= "none";
            partslistpageRef.current.style.display= "block";
            myinfopageRef.current.style.display= "none";
            */
        }else
        if(name === "myinfo"){
            buildpage.style.display= "none";
            partslistpage.style.display= "none";
            myinfo.style.display= "block";
            /*
            buildpageRef.current.style.display= "none";
            partslistpageRef.current.style.display= "none";
            myinfopageRef.current.style.display= "block";
            */
        }
    }

    return(
    <div className="nav"> 
        <ol>
            <li>
            <a ref={buildpageRef} href="#mybuid" onClick={()=>showpage("mybuild")}>
            My Build
            </a> 
            </li>
            <li>  
            <a ref={partslistpageRef} href="#partslist" onClick={()=>showpage("partslist")}>
            Parts
            </a> 
            </li>
            <li> 
            <a ref={myinfopageRef} href="#myinfo" onClick={()=>showpage("myinfo")}>My Info</a> 
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

    return(
    <div id="myinfo">
        <div> <h3>Info for tech used </h3>
        </div>

        <ol>
        <div> React js for component rendering.
        </div>
        <div> Single CSS file is used for styling
        </div>
        <div> Webpack for bundling js.
        </div>
        <div> public path exposed;
        </div>
        <div> fetch json file from public path;
        </div>
        <div> public path is inconsistent bewteen dev and prod fixed 
        </div>
        <div> TODO:
        </div>
        <div> include redux and ant design? 
        </div>
        <div> 
        </div>
        </ol>
        
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
