import NewUser from "./Forms/NewUser";
import CommonDashboard from "./Pages/CommonDashboard/CommonDashboard";
import Home from "./Pages/Home/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Datalist from "./Pages/total list/xyz/Datalist";
import EmployeeDashboard from "./Pages/EmployeeDashboard/EmployeeDashboard";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={Home}></Route>
        <Route path="/CommonDashboard" component={CommonDashboard}></Route>
        <Route path="/DataList" component={Datalist}></Route>
        <Route path="/EmployeeDashboard" component={EmployeeDashboard}></Route>
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
