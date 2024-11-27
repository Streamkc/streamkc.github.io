import React from 'react';
import {lazy, Suspense } from 'react';
import jsonfile from 'pcparts.json';
import Pcpartpicker from './pcpartpicker.js';
//const Pcpartpicker= lazy(()=>import('./pcpartpicker.js'));

const Pcparts=({entry})=>{
    const style={
        background: "white",
        width: "10em",
        border: "1px solid black",
    };
    const imgstyle= {
        width: "10em",
        height: "10em",
        objectFit: "contain",
        overflow: "none",
    };
    
    const styleAltA={background: "white"};
    const styleAltB={background: "grey"};

    return(
        <div style={style}>
            <div style={styleAltA}>
                <h3>{entry.name}</h3>
            </div>
            <div style={styleAltB}>
                {entry.type}
            </div>
            <div style={styleAltA}>
                {entry.model}
            </div>
            <div style={styleAltB}>
                <img style={imgstyle} src={entry.imgUrl}></img> 
            </div>
        </div>
    );
}


const Pcbuild= ()=>{
    const list= jsonfile.item;

    const partcpu= list.filter(entry=>entry.type=='cpu') ;
    const partgpu= list.filter(entry=>entry.type.includes("gpu"));
    const partram= list.filter(entry=>entry.type.includes("ram"));
    
    const style={
        display: "flex",
        flexDirection: "row",
    };
        
    const clickevent= (name)=>{
        let color= "red";
        const element= document.getElementById(name);
        const curColor= element.style.background;
        if(curColor== "red") color= curColor;
        element.style.background= color;

        const partpicker= document.getElementById("partpicker");
        const curDisplay= partpicker.style.display;
        if(curDisplay== "block"){ 
            partpicker.style.display= "none";
        }
        if(curDisplay== "none"){ 
            const mouse= window.event;
            const x= mouse.clientX; 
            const y= mouse.clientY; 

            const cood= element.getBoundingClientRect();
            partpicker.style.position= "fixed";
            partpicker.style.bottom= "0";
            partpicker.style.width= "100%";
            partpicker.style.height= "40%";
            partpicker.style.z= 2;
            partpicker.style.display= "block";
        }
    }

    return(
    <div id="mybuild" style={style} >
        <div >
        <h2> My Build </h2>
        <ol>
            <li>
                <div id="mycpu" onClick={()=>clickevent("mycpu")}>
                <h3>CPU</h3>
                <Pcparts entry={partcpu[0]} />
                </div>
            </li>
            <li>
                <div id="mymotherboard" onClick={()=>clickevent("mymotherboard")}>
                <h3>Motherboard</h3>
                <Pcparts entry={partcpu[0]} />
                </div>
            </li>
            <li>
                <div id="myram" onClick={()=>clickevent("myram")}>
                <h3>RAM</h3>
                <Pcparts entry={partcpu[0]} />
                </div>
            </li>
            <li>
                <div id="mypowersupply" onClick={()=>clickevent("mypowersupply")}>
                <h3>Power Supply</h3>
                <Pcparts entry={partcpu[0]} />
                </div>
            </li>
            <li>
                <div id="mygpu" onClick={()=>clickevent("mygpu")}>
                <h3>GPU</h3>
                <Pcparts entry={partcpu[0]} />
                </div>
            </li>
        </ol>
        </div>

        <Suspense>
            <Pcpartpicker />
        </Suspense>
    </div>
    );
}

function Pcpartslist(){

    const partslist= jsonfile.item.map(
        (entry, i)=> ({...entry, id: i+1})
    );

    const list= partslist.map( 
            parts=>{
                return(
                <li key={parts.id}>
                <Pcparts entry={parts} />
                <button>add</button>
                </li>
                )
            }
    );

    const fetchdata= async (url)=>{
            const response= await fetch(url, 
                {
                    method:'get', 
                    mode: 'cors',
                    headers:{
                     'Content-Type': 'application/json',
                     'credentials': 'include',  
                    }
                }
            )
            .then(response=>{ return response.json(); })
            .then(data=>
                {
                    console.log(data);
                    return data;
                }
            )
            .then(
                data=>console.log(data)
            )
            .catch(
                error=>{console.log(error)}
            );
    }

    const clickevent= (name)=>{
//        const url= 'https://corsproxy.io/?'+ encodeURIComponent("https://github.com/docyx/pc-part-dataset/blob/main/data/json/cpu.json"); 
        const url= "/public/cpu.json";
        let color="red";
        const element= document.getElementById(name);
        const curColor= element.style.background;
        if(curColor== "red") color="blue";
        element.style.background= color;

        fetchdata(url).then(
            res=> {console.log(res)},
            err=> console.log(err),
        );
    }

    return(
        <div id="partslist" onClick={()=>clickevent("partslist")} >
        <h2> Parts List </h2>
        <ol>
            {list}
        </ol>
        </div>
    );
}

export {
    Pcpartslist,
    Pcbuild,
    Pcpartpicker,
    Pcparts
};
