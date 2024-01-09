import React from 'react'
import { useParams } from 'react-router-dom';
import chart3 from '../Files/chart3_url.json'
import chart4 from '../Files/chart4_url.json'
import { VegaLite } from 'react-vega';

const Chart = () => {

  const { ChartID } = useParams();
  const chartData = {
    '001':chart3,
    '002':chart4,
  }
  const vegaspec = chartData[ChartID];

  return (
    <div>
      <h1>Chart {ChartID}</h1>
      {vegaspec ? <VegaLite spec={vegaspec} /> 
      : <div>Chart not found</div>}
    </div>
  )
}

export default Chart