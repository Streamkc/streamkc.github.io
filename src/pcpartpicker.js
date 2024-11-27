import React from 'react';
import cpulist from 'cpu.json';

const Pcpartstable= ({list})=>{

    const table= list?.map( entry=>{ return(
                    <tr key={entry.id} >
                    <td>{entry.name}</td>
                    <td>{entry.price}</td>
                    </tr>
                ) } );

    return(
    <div id="searchresult">
        <table>
        <tbody id="searchresultlist" >
        {table}
        </tbody>
        </table>
    </div>
    );
}

const Pcpartpicker= ()=>{
    const style={
        background: "Pink",
        display: "none",
        width: "100%",
        overflow: "scroll",
    };

    const list= cpulist.map((item, i)=>({
        ...item, id:i+1
    }));

    const onclickevent= ()=>{
        const searchbar= document.getElementById("searchinput");
        const name= searchbar.value;
        console.log(name);
        const filterlist= list?.filter((entry)=>entry.name.includes(name)); 
        list=filterlist;
        console.log(filterlist);
    }

    return(
    <div id="partpicker" style={style} >
        <div>
            <input id="searchinput" ></input>
            <button onClick={()=>onclickevent()} > Search </button>
        </div>
        <Pcpartstable list={list}/>
    </div>
    );
}

export default Pcpartpicker;
