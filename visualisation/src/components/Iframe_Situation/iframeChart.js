import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { VegaLite } from 'react-vega';


const Chart = ({}) => {
  const [vegaSpec, setVegaSpec] = useState(null);
  // const chartId = useParams(chartId)

  useEffect(() => {
    const recieveMessage = (event)=>{
      const {selectedGenre, IMDBRange} = event.data
    

      const baseSpec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300}}, "data": {"url": "https://cdn.jsdelivr.net/npm/vega-datasets@v1.29.0/data/movies.json"}, "mark": "bar", "encoding": {"x": {"bin": true, "field": "IMDB_Rating", "type": "quantitative"}, "y": {"aggregate": "count", "type": "quantitative"}}, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json"}
  

    const filteredSpec = {
      ...baseSpec,
      transform: [
        // selectedGenre !== 'All' && {
        //     filter: {field :'Major_Genre', equal:selectedGenre}
        // },
        IMDBRange && {
            filter: {field :'IMDB_Rating', range: [IMDBRange.min, IMDBRange.max]
        }
        }
      ].filter(Boolean)
    };  
    setVegaSpec(filteredSpec);
  }
  window.addEventListener('message', recieveMessage)

  return () => {
    window.removeEventListener('message',recieveMessage)
  }

  }, []);

  return (
    <div className='chart-content'>
      {vegaSpec && <VegaLite spec={vegaSpec} actions={false} />}
    </div>
  );
};

export default Chart;