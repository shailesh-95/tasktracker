import { useEffect, useState } from "react";

const Usefetch = (request) => {

    const [data, setdata] = useState(null);
    const [pending, setpending] = useState(true);
    const [error, seterror] = useState(null);

    useEffect(()=>{

        setTimeout(() => {

            fetch(request)
            .then((response)=>{
                if (response.ok === false) 
                {
                    throw error (" Data not found")
                }
                return response.json()})
            .then((data)=>{ setdata(data); setpending(false)})
            .catch((error)=>{ seterror(error.mesage); setpending(false)})    
            
        }, 1000);
    },[])
    
    return { data , pending , error};
}
 
export default Usefetch;