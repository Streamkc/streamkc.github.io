import React from 'react'

function Nav(){
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
            <a href="#mybuid" onClick={()=>showpage("mybuild")}>My Build</a> 
            </li>
            <li>  
            <a href="#partslist" onClick={()=>showpage("partslist")}>Parts</a> 
            </li>
            <li> 
            <a href="#partslist" onClick={()=>showpage("myinfo")}>My Info</a> 
            </li>
        </ol>
    </div>
    );
}

function Banner(){
    return(
        <div className="banner">
        <h1>My PC Build</h1>
        </div>
    );
}

function Pcparts(){
    return(
        <div id="partsentry">
            <h3>item1</h3>
            <div>type</div>
            <div>Name</div>
        </div>
    );
}

function Pcbuild(){
    return(
    <div id="mybuild">
        <h2> My Build </h2>
        <ol>
            <li>
            <h3>CPU</h3>
            <Pcparts />
            </li>
            <li>
            <h3>Motherboard</h3>
            <Pcparts />
            </li>
            <li>
            <h3>RAM</h3>
            <Pcparts />
            </li>
            <li>
            <h3>Power Supply</h3>
            <Pcparts />
            </li>
            <li>
            <h3>GPU</h3>
            <Pcparts />
            </li>
        </ol>
    </div>
    );
}

function Partslist(){
    return(
    <div id="partslist">
        <h2> Parts List </h2>
        <ol>
            <li>
            <Pcparts />
            </li>
            <li>  
            <Pcparts />
            </li>
            <li> 
            <Pcparts />
            </li>
        </ol>
    </div>
    );
}

function Myinfo(){
    return(
    <div id="myinfo">
    <h3> I am here </h3>
    </div>
    );
}

function Content(){
    return(
    <div id="content">
    <Pcbuild />
    <Partslist />
    <Myinfo />
    </div>
    );
}

function App(){
    return (
        <div id="container">
        <Banner />
        <Nav/>
        <Content />
        </div>
    )
}

export default App;
