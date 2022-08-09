
import React from 'react';
import { Chart } from 'react-google-charts';


const Data = [
    ['Quarter', 'New Hires'],
    [1, 50],
    [2, 35],
    [3, 20],
    [4, 17],
  ]

  const options = {
    chart: {
      title: 'New Hires',
      subtitle: 'Quarterly New Hires'
    }
  }

const QuarterlyIncrease = () => {
     
        return (
            <div>
                <Chart
                    chartType='Bar'
                    data={Data}
                    options={options}
                    width='300px'
                    height='300px'
                />
            </div>
          );
}
 
export default QuarterlyIncrease;