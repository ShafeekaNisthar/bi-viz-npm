// VegaChart.js
import React, { useState, useEffect } from 'react';
import { VegaLite } from 'react-vega';
import data from '../Files/sample.json';  // Importing data directly
import vegaSpec from '../Files/chart4_url.json';  // Importing Vega-Lite spec directly

const VegaChart = () => {
  const [vegaSpecWithValues, setVegaSpecWithValues] = useState(null);

  useEffect(() => {
    // Update the "values" property in the Vega-Lite spec with the imported data
    const updatedSpec = {
      ...vegaSpec,
      data: { values: data }
    };

    // Set the updated spec in state
    setVegaSpecWithValues(updatedSpec);
  }, []);  // Dependency array to run the effect once on mount

  if (!vegaSpecWithValues) {
    return <div>Loading...</div>;
  }

  console.log(vegaSpecWithValues)

  return (
    <div>
    <h1>Chart 4</h1>
    <VegaLite spec={vegaSpecWithValues} />
    </div>
    )
};

export default VegaChart;

