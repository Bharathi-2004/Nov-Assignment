

function Form(){
      
    return(
        <>

        <style>{`
        .form-container {
          width: 300px;
          margin: 50px auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #ffffff;
          box-shadow: 2px 8px 10px;  
          text-align: center; 
  
        }
        
         input {
          display: block;
          width: 90%;
          margin: 10px auto;
          padding: 8px;
          border: 1px solid #aaa;
          border-radius: 4px;
        }
        .form-container button {
          padding: 8px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        .form-container button:hover {
          background-color: #034183;
        }
      `}</style>
        <form className="form-container">
            <h1>Login Form</h1>
            <input type="text" placeholder="Enter the username"></input>
            <input type="password" placeholder="Enter the password"></input>
            <button type="submit">Login</button>
        </form>
        
        </>
    );
}
export default Form;