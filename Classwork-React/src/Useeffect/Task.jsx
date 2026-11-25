function Task(){
    
   const [count,setcount]=useState(0);
   


   
    return(
        <>
        <p>{count}</p>
        <div className="mt-5 d-flex gap-2">
        <button onClick={()=>setcount(count+1)}>Increment</button>
        <button>Decrement</button>
        </div>
        </>
    )
}
export default Task;