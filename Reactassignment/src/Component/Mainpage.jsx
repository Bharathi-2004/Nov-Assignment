import { Link, Outlet } from "react-router-dom";

function Mainpage(){
    return (
        <>
        <style>{`
        .nav{
        display: flex;
        gap: 5px;
        justify-content: center;
        margin-top: 20px;
        }

        .btn1{
        padding: 8px 20px;
          background-color: #ff0800d7;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          
        }
          .btn2{
        padding: 8px 20px;
          background-color: #037917;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
          .btn3{
        padding: 8px 20px;
          background-color: #f824dc;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .btn1:hover, .btn2:hover, .btn3:hover {
            background-color: orange;
            color: black;
  
}

        `}</style>
       <h1 className="text-3xl font-bold text-center">Main Page</h1>
        <div className="nav">
            <Link to="/display" className="btn1">UseState UseEffect</Link>
            <Link to="/child" className="btn2">Card</Link>
            <Link to="/form" className="btn3">Form</Link>
            <Link to="/studentdetails" className="btn1">Studentdetails</Link>
            <Link to="/shopping" className="btn3">Shopping</Link>
            </div>
            <Outlet></Outlet>
            
        
        </>
        
    );
}
export default Mainpage;