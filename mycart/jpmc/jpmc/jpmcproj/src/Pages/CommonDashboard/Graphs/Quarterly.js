import React from 'react'
import { Chart } from 'react-google-charts'

const Data = [
    ['Quarter', 'Attr'],
    [1, 50],
    [2, 35],
    [3, 20],
    [4, 17],
  ]
  
  const options = {
    chart: {
      title: 'Attr',
      subtitle: 'Quarterwise Attr'
    }
  }
    

function Quarterly() {
  return (
        <div>
            <Chart
                chartType='Bar'
                data={Data}
                options={options}
                width='50%'
                height='300px'
                
            />
        </div>
      )
}


export default Quarterly;