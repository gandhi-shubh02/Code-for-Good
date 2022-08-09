import React from 'react';
import { Chart } from 'react-google-charts';

const Data = [
    ['Number of employees', 'Age'],
    ['20 - 25', 60],
    ['25 - 30', 71],
    ['30 - 35', 79],
    ['35 - 40', 54],
    ['40 - 45', 32],
    ['45 - 50', 15],
    ['50 - 55', 10],
    ['55 - 60', 5],
    ['60 - 65', 3],

  ]

  const options = {
    chart: {
      title: 'Gender-wise distribution',
    }
  }

const Age = () => {
    return ( 
        <div>
        <Chart
            chartType='LineChart'
            data={Data}
            options={options}
            width='300px'
            height='300px'
        />
    </div>
     );
}
 
export default Age;