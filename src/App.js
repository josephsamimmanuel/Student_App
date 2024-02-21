
import './App.css';
import Namecontextprovider from './namecontextprovider';
import Students from './listofstudents';
import Favourites from './favourites';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
    

  return (
    <div>
        <Namecontextprovider>
        <BrowserRouter>
        <Routes>
      
        <Route path='/' element={<Students></Students>}></Route>
        <Route path='/favourites' element={<Favourites></Favourites>}></Route>
      
      </Routes>
      </BrowserRouter>
      </Namecontextprovider>
    </div>
  );
}

export default App;

