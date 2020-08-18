import React from "react";
import { shallow } from "enzyme";
import BackButton from "./";

const setup = (props = {}) => {
  const component = shallow(<BackButton {...props} />);
  return component;
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("BackButton Component", () => {
  it("Renders correctly", () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders without prop and default `Go back to home` text correctly", () => {
    const wrapper = setup();
    const text = wrapper.text();
    expect(text).toBe("Go back to home");
  });
  
});
