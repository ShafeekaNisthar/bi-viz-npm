import React from 'react'
import RangeInput from '../filters/rangeInput'
import Dropdown from '../filters/dropdown'
import { useState } from 'react'
// import IframeEmbed from './iframeEmbed'

const ParentComponent = () => {
  const initialGenre = 'All'; 
  const initialIMDBRange = { min: 0, max: 10 };
  const [selectedGenre, setSelectedGenre] = useState(initialGenre);
  const [IMDBRange, setIMDBRange] = useState(initialIMDBRange)
  const iframeSource = `/chart`

  const handleFilterChange=() =>{
    const iframe = document.getElementById('ReactChartIframe');
    const filtermessage = {
      selectedGenre, 
      IMDBRange}
    iframe.contentWindow.postMessage(filtermessage, '*')
  }


  return ( 
    <div>
      <h1>Chart</h1>
        <div className='filters'>
        <Dropdown
              label='Genre'
              options={['All', 'Action', 'Documentary', 'Horror', 'Western']}
              value={selectedGenre}
              onChange={(value)=> {
                setSelectedGenre(value);
                handleFilterChange();
              }}
        />
        <RangeInput
          label='IMDB_Rating'
          value={IMDBRange}
          onChange={(value)=>{
            setIMDBRange(value);
            handleFilterChange()
          }}
        />
        </div>
        <div className='iframe-embed'>
        <iframe
          id={`Chart Embedder ID `}
          title={`Chart Embedder`}
          src = {iframeSource}
          width="480"
          height="365"
        //   style={{ border: 'none' }}
          sandbox="allow-scripts"
        ></iframe>
      </div>
    </div>
  )
}


export default ParentComponent