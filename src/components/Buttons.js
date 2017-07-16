import React from 'react';
import ProgressControlButton from './ProgressControlButton';

const Buttons = (buttons = [], callbackFn) => {
  return(
    buttons.map( (value, idx)=> {
      return (<ProgressControlButton updateProgress={callbackFn} value={value} key={idx}/>)
    })
  )
};

export default Buttons;
