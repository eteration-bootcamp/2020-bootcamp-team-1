import React from "react";
import { shallow } from "enzyme";
import Avatar from "./";

const OverlayComponent = "OverlayTrigger";

const setup = (props = {}) => {
  const component = shallow(<Avatar {...props} />);
  return component;
};

describe("Avatar Component", () => {
  it("Renders correctly", () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders name's first letter correctly", () => {
    const wrapper = setup({ name: "A" });
    const text = wrapper.find("button").text();
    expect(text).toBe("A");
  });

  it("Renders Popover component correctly and without prop", () => {
    const wrapper = setup();
    const button = wrapper.find("button");
    button.simulate("click");
    const overlayProps = wrapper.find(OverlayComponent).props();
    expect(overlayProps.overlay.props.id).toBe("profile-popover");
  });
});
