import React, { Component } from 'react';

class ProgressControlButton extends Component {

  constructor(props){
    super(props);
    this.handleProgress = this.handleProgress.bind(this);
  }

  handleProgress(){
    const { updateProgress, value } = this.props;
    updateProgress(value);
  }

  render() {
    const { value } = this.props;
    const btnDisplayText = (value >= 0) ? `+${value}` : value;
    return (
      <button className="control-button" onClick={this.handleProgress}>
        {btnDisplayText}
      </button>
    );
  }
}

export default ProgressControlButton;
