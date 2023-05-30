import React from 'react';


const CardBat = ({ Battery }) => {
  const radius = 40;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Battery / 100) * circumference;
  const strokeColor = Battery >= 50 ? '#76E86A' : '#FFAD1D';
  

  return (
    <div className='flex flex-col items-center justify-center'>
      {/* <div>
        <h1 className='font-semibold text-2xl'>Bateria</h1>
      </div> */}

      <svg className='w-16' viewBox='0 0 100 100'>
        <circle
          cx='50'
          cy='50'
          r={radius}
          stroke='#e6e6e6'
          strokeWidth={strokeWidth}
          fill='transparent'
        />
        <circle
          className='progress-ring__circle'
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill='transparent'
          r={radius}
          cx='50'
          cy='50'
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: offset,
            transform: `rotate(-90deg)`,
            transformOrigin: '50% 50%',
            transition: 'stroke-dashoffset 0.5s ease 0s',
          }}
        />
        <text
          className='text-2xl font-bold text-gray-700'
          x='50%'
          y='50%'
          dominantBaseline='middle'
          textAnchor='middle'
        >
          {Battery}%
        </text>
      </svg>
     
    </div>
    
  );
};

export default CardBat;
