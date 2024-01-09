import React, { useState, useEffect } from 'react';
import { VegaLite } from 'react-vega';
import Dropdown from './filters/dropdown';
import RangeInput from './filters/rangeInput';

const FilteredChart = ({baseSpec}) => {
  const initialGenre = 'All'; 
  const initialIMDBRange = { min: 0, max: 10 };
  const [selectedGenre, setSelectedGenre] = useState(initialGenre);
  const [IMDBRange, setIMDBRange] = useState(initialIMDBRange)
  const [vegaSpec, setVegaSpec] = useState(null);

  useEffect(() => {

    const filteredSpec = {
      ...baseSpec,
      transform: [
        selectedGenre !== 'All' && {
            filter: {field :'Major_Genre', equal:selectedGenre}
        },
        {
            filter: {field :'IMDB_Rating', range: [IMDBRange.min, IMDBRange.max]
        }
        }
      ].filter(Boolean)
    };
    
    setVegaSpec(filteredSpec);
  }, [baseSpec ,selectedGenre, IMDBRange]);

  return (
    <div className='body-content'>
      <h1>Chart</h1>
      <div className='filters'>
        <p>
        <Dropdown
          label='Genre'
          options={['All', 'Action', 'Documentary', 'Horror', 'Western']}
          value={selectedGenre}
          onChange={setSelectedGenre}
        />
        </p>
        <RangeInput
          label='IMDB_Rating'
          value={IMDBRange}
          onChange={setIMDBRange}
        />
       </div>
      {vegaSpec && <VegaLite spec={vegaSpec} actions={false} />}
    </div>
  );
};

export default FilteredChart;
