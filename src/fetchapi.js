
const fetchdata= async (url)=>{
    try{
        const response= await fetch(url);
        const data= await response.json();
        return data;
    }catch(e){
        console.log(e);
        return "";
    }
}
/*
   const fetchdata= async (url)=>{
        const response= fetch(url, 
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
    }
    
*/

export default fetchdata;
