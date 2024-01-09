import React from 'react'

const IframeEmbed = () => {

    const iframeSource = `/chart`
    
  return (
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
  )
}

export default IframeEmbed