import React from "react";
import { shallow } from "enzyme";
import LoadingIndicator from "./";

const SpinnerComponent = "Spinner";

const setup = (props = {}) => {
  const component = shallow(<LoadingIndicator {...props} />);
  return component;
};

describe("LoadingIndicator Component", () => {
  it("Renders correctly", () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders without props", () => {
    const wrapper = setup();
    const spinner = wrapper.find(SpinnerComponent);
    expect(spinner.length).toBe(1);
  });

  it("Renders full screen", () => {
    const wrapper = setup({ fullScreen: true });
    const styles = wrapper.find("div").props().style;
    expect(styles).toStrictEqual({ width: "100vw", height: "100vh" });
  });
});
