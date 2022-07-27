import './App.css';
import Users from './components/userDetails/userDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<Users bool={1}/>}/>
          <Route exact path = "/editUser" element = {<Users bool = {0}/>}/>
          <Route exact path = "/:userId/workout" element = {<Users bool={1}/>}/>
          <Route exact path = "/:userId/nutrition" element = {<Users bool = {1}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
