import React from 'react';
import ProgressBar from './ProgressBar';

const ProgressBars = (progress = [], limit) => {
  return(
      progress.map( (value, idx) => {
        return (<ProgressBar progress={value} key={idx} limit={limit} />)
      })
  )
};

export default ProgressBars;
