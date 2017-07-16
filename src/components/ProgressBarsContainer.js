import React, { Component } from 'react';
import DropDownComponent from './DropDownComponent';
import Buttons from './Buttons';
import ProgressBars from './ProgressBars';
import HttpHandler from '../services/HttpHandler';

const barsAPIUrl = `/bars`;
const { findRecord } = HttpHandler

class ProgressBarsContainer extends Component {

  constructor(props){
    super(props);
    console.log('HttpHandler ', HttpHandler);
    findRecord(barsAPIUrl).then( response => {
      const { bars, buttons, limit } = response;
      // Set First ProgressBar as selected by setting index as 0;
      const selectedProgressBar = 0;
      // pass the states `stateHandler`
      const state = [{ selectedProgressBar } , { bars}, { buttons }, { limit }];
      this.stateHandler(state);
    });

    this.updateProgress = this.updateProgress.bind(this);
    this.handleSeletedProgressBar = this.handleSeletedProgressBar.bind(this);
  }

  updateProgress(progressValue){
    const { bars, selectedProgressBar } = this.state;
    // Select the Current Selected Progress bar with array index;
    const currentProgressBar = bars[selectedProgressBar];
    // Calculate the progress value
    const value = currentProgressBar + progressValue;
    // Progress value can't go under 0, so return Zero if value is less than zero
    bars[selectedProgressBar] =  (value <= 0) ? 0 : value;
    // Update the state
    const state = [{ bars }];
    this.stateHandler(state);
  }

  handleSeletedProgressBar(selectedProgressBar){
    const state = [{ selectedProgressBar }];
    this.stateHandler(state);
  }

  /**
   * Handle the state for ProgressBarsContainer Component
   * Pass the state as array of object
   *
   */
  stateHandler(states = []){
    states.forEach(
      (state) => {
        this.setState( () => state );
      },
      () => {
        console.log(`State is updated`,  `state :: `, this.state);
      }
    );
  }

  render() {
    const { buttons, bars, limit } = this.state || {};
    console.log('bars : ', bars);
    return (
      <div className="progress--bars-container">
        {ProgressBars(bars, limit)}
        <DropDownComponent bars={bars} handleSeletedProgressBar={this.handleSeletedProgressBar} />
        {Buttons(buttons, this.updateProgress)}
      </div>
    );
  }
}

export default ProgressBarsContainer;
