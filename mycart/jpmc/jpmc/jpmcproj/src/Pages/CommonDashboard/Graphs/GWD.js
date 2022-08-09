import React from 'react';
import { Chart } from 'react-google-charts';

const Data = [
    ['Gender', 'Number'],
    ['Male', 33],
    ['Female', 34],
    ['Other', 33],

  ]

  const options = {
    chart: {
      title: 'Gender-wise distribution',
    }
  }
    

function GWD() {
  return (
        <div>
            <Chart
                chartType='PieChart'
                data={Data}
                options={options}
                width='300px'
                height='300px'
            />
        </div>
      )
}


export default GWD