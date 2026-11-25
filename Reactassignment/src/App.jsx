
import './App.css'
import Child from './Component/Child';
import Display from './Component/Display'
import Form from './Component/Form';
import Studentdetails from './Component/Studentdetails'

function App() {

  return (
    <>
    <Display></Display>
    <h3>Student Details</h3>
    <div class="cardbox">
      <Child></Child>
    </div>
    <Form></Form>
    
    
      
    </>
  );
}

export default App
