import React from "react";
import { shallow } from "enzyme";
import Fab from "./";

const PlusSvgComponent = "PlusSvg";
const ConfirmSvg = "ConfirmSvg";

const setup = (props = {}) => {
  const component = shallow(<Fab {...props} />);
  return component;
};

describe("Fab Component", () => {
  it("Renders correctly", () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders plus svg by default and without prop", () => {
    const wrapper = setup();
    const component = wrapper.find(PlusSvgComponent);
    expect(component.length).toBe(1);
  });

  it("Renders confirm svg", () => {
    const wrapper = setup({ type: "confirm" });
    const component = wrapper.find(ConfirmSvg);
    expect(component.length).toBe(1);
  });
});
