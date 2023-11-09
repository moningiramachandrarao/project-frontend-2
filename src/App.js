import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import CreateCar from './components/CreateCar';
import Modify  from './components/Modify';
import List from "./components/List";
import Orders from "./components/Orders";
function App() {
  return (
    <div className="App">
     <HashRouter>
      <Nav/>
      <Routes>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/create" element={<CreateCar/>}/>
        <Route path="/modify/:id" element={<Modify/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>
     </HashRouter>
    </div>
  );
}

export default App;
