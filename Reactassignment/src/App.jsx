import './App.css'
import Child from './Component/Child';
import Display from './Component/Display'
import Form from './Component/Form';
import Studentdetails from './Component/Studentdetails'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Mainpage from './Component/Mainpage';
import Shopping from './Component/Shopping';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainpage></Mainpage>}>
      <Route path='display' element={<Display></Display>}></Route>
      <Route path='child' element={<Child></Child>}></Route>
      <Route path='form' element={<Form></Form>}></Route>
      <Route path='studentdetails' element={<Studentdetails name="parthiban" age="20"></Studentdetails>}></Route>
      
      </Route>
      <Route path='shopping' element={<Shopping></Shopping>}></Route>
      
    </Routes>
    </BrowserRouter>
    
    
    
      
    </>
  );
}

export default App
