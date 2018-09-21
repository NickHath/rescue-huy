import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// shallow makes a clone of your component and renders it (kind of like a headless browser)
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

// import React and the component you want to test!
import React from 'react';
import App from './App';


// creates the render, ppl call it wrapper or main
const wrapper = shallow(<App />);

describe('<App />', () => {
  it('has number property set to 0 initially', () => {
    const wrapper = shallow(<App />);

    // MUST USE JEST SYNTAX
    expect(wrapper.state().number).toEqual(0);
  });
});