import React, { Component } from 'react';

const DropDownOptions = (bars = []) => {
  return bars.map( (bar, idx) => {
    const value = `progressBar-${idx + 1}`
    return (<option value={idx} key={idx}>{value}</option>);
  })
}
class DropDownComponent extends Component {

  constructor(props){
    super(props);

    this.state = {
      value: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const { value } = e.target
    this.setState({
      value,
    });
    this.props.handleSeletedProgressBar(parseInt(value, 10));
  }

  render() {
    const { bars } = this.props;
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        {DropDownOptions(bars)}
      </select>
    );
  }
}

export default DropDownComponent;
