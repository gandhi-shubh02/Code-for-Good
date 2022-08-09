import NewUser from "./Forms/NewUser";
import CommonDashboard from "./Pages/CommonDashboard/CommonDashboard";
import Home from "./Pages/Home/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Datalist from "./Pages/total list/Navbar/Datalist";
import EmployeeDashboard from "./Pages/EmployeeDashboard/EmployeeDashboard";
import Rating from "./Forms/Rating";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/CommonDashboard" element={<CommonDashboard/>}></Route>
        <Route path="/DataList" element={<Datalist/>}></Route>
        <Route path="/EmployeeDashboard" element={<EmployeeDashboard/>}></Route>
        <Route path="/Datalist" element={<Datalist/>}></Route>
        <Route path="/AddEmployee" element={<NewUser/>}></Route>
        <Route path="/Star" element={<Rating/>}></Route>
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
