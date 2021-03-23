import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

describe('Counter Testing', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('Main Heading', () => {
    expect(wrapper.find('h1').text()).toContain("Counter App");
  })

  it("Render a button with text of `increment` ", () => {
    expect(wrapper.find('#increment-button').text()).toBe('Increment')
  })

  it("Render a button with text of `decrement` ", () => {
    expect(wrapper.find('#decrement-button').text()).toBe('Decrement')
  })

  it("Render initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  })

  it("Render the Click Event of Increment button and Increment Counter value", () => {
    wrapper.find("#increment-button").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  })

  it("Render the Click Event of Decrement button and Decrement Counter value", () => {
    wrapper.find("#increment-button").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decrement-button").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  })
})