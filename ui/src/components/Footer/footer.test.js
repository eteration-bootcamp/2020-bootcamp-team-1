import React from "react";
import { shallow } from "enzyme";
import Footer from "./";

const setup = (props = {}) => {
  const component = shallow(<Footer {...props} />);
  return component;
};

describe("Footer Component", () => {
  it("Renders correctly", () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders without props", () => {
    const wrapper = setup();
    const component = wrapper.find("div");
    expect(component.length).toBe(1);
  });

  it("Renders footer text correctly", () => {
    const wrapper = setup();
    const footerText = wrapper.find("h6").text();
    expect(footerText).toContain("© 2020 - Eteration Bootcamp Team 1");
  });
});
