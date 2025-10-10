import axios from "axios";
import { useEffect, useState } from "react"

const useApps =()=>{
    const [allapps,setAllApps]=useState([]);
    const [loading,setloding] =useState(true)
    const[error,setError]=useState(null)
    useEffect(()=>{
        setloding(true)
        axios('../AppsData.json').then(data=>setAllApps(data.data))
        .catch(err=>setError(err))
        .finally(()=>setloding(false))

    },[])
    console.log(allapps);
    return{allapps,loading,error}


}
export default useApps