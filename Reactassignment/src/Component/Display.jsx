import { useState, useEffect } from "react";


function Display(){
    const [change,setchange]=useState("Hello")
    const [message, setMessage] = useState("");
      const[alertmessage,setalertmessage]=useState("Welcome Student");


    useEffect(() => {
            setMessage("Welcome Student");
            }, []);

     useEffect(()=>{
        alert(alertmessage);
    },[alertmessage])
    return(
        <>
        <h1>{change}</h1>
        <button onClick={()=>setchange("Welcome")}>Change</button>
        
        <h1>{message}</h1>


        </>
    )
}
export default Display;