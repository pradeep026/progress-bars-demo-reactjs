import React from 'react';
import { expect } from 'chai';
import { mount, render } from 'enzyme';
import ProgressBar from '../../components/ProgressBar';

describe('<MyComponent />', () => {

  it('`ProgressBar` renders with expected `progress` value', () => {
    const progress = 10;
    const Component = mount(<ProgressBar progress={progress} />);
    // Find the progress span tag's width
    const SpanLabelElement = Component.find('span.label');
    const SpanElement = Component.find('span.progress');
    const width = SpanElement.getDOMNode().style.width;
    const progressText = SpanLabelElement.text().trim();

    expect(Component.props().progress).to.equal(progress);
    expect(progressText).to.equal(`${progress}%`);
    expect(width).to.equal(`${progress}%`);
  });

  it('`ProgressBar` has expected background color when it does not cross `limit` value', () => {
    const progress = 50;
    const limit = 100;
    const Component = mount(<ProgressBar progress={progress} limit={limit}/>);
    // Find the progress span tag's width
    const SpanElement = Component.find('span.progress');
    const className = SpanElement.getDOMNode().className;
    expect(className).to.equal(`progress`);
  });

  it('`ProgressBar` changes background color when it crossed `limit` value', () => {
    const progress = 150;
    const limit = 100;
    const Component = mount(<ProgressBar progress={progress} limit={limit}/>);
    // Find the progress span tag's width
    const SpanElement = Component.find('span.progress');
    const className = SpanElement.getDOMNode().className;
    expect(className).to.equal(`progress crossed`);
  });
});
