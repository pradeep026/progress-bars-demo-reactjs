import React, { Component } from 'react';

const progressClassNames =
  (progress, limit) => (progress > limit) ? 'progress progress--limit-crossed' : 'progress';

class ProgressBar extends Component {

  render() {
    const { progress, limit } = this.props;
    const progressWidth = `${progress}%`;
    return (
      <div className="progress-bar">
        <span className="label"> {progressWidth} </span>
        <span className={progressClassNames(progress, limit)} style={{width: progressWidth}} > </span>
      </div>
    );
  }
}

export default ProgressBar;
