import React from 'react';

interface VisualMountProps {
  ChartID: string;
}

const VisualMount: React.FC<VisualMountProps> = ({ ChartID }) => {

  const embedUrl = `http://localhost:3000/chart/${ChartID}`

  return (
    <div>
      {embedUrl ? (
        <iframe 
        src={embedUrl} 
        width="100%" 
        height="500px"  
        allowFullScreen title="Embedded Visual"></iframe>
      ) : (
        <div>No embed URL provided</div>
      )}
    </div>
  );
};

export default VisualMount;
