
import Age from './Graphs/Age';
import Attrition from './Graphs/Attrition';
import GWD from './Graphs/GWD';
import QuarterlyIncrease from './Graphs/QuarterlyIncrease';
import RGN from './Graphs/RGN';
import Navbar from './Navbar/Navbar';


const CommonDashboard = () => {
    return (  
        <div className='container'>
        <Navbar />
        <h1>Welcome!!</h1>
        <div className='row'>
            
        <div className='col'>
            <GWD />
            <p>The above graph shows the gender ratio</p>
        </div>
        

        <div className='col'>
            <QuarterlyIncrease />
            <p>The above graph shows the quarterly increase in the employees</p>
        </div>
        </div>
        <div className='row'>
        <div className='col'>
        <Age />
            <p>The above graph shows the age ratio</p>
        </div>
        <div className='col'>
            <Attrition />
            <p>The above graph show the quarterly attrition</p>
        </div>
        </div>
        <div className='row'>
            <div className='col'>
                <RGN />
            </div>
        </div>
        </div>
    );
}
 
export default CommonDashboard;