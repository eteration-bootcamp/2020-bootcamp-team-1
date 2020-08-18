import React from "react";
import { shallow } from "enzyme";
import ActionButton from "./";

const ButtonComponent = "Button";
const LoadingIndicatorComponent = "LoadingIndicator";

const setup = (props = {}) => {
  const component = shallow(<ActionButton {...props} />);
  return component;
};

describe("ActionButton Component", () => {
  it("Renders correctly", () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders an action button without any prop", () => {
    const wrapper = setup();
    const div = wrapper.find("div");
    expect(div.length).toBe(1);
  });

  it("Should render text 'Join' when not logged in", () => {
    const wrapper = setup({ isLoggedIn: false });
    const text = wrapper.find(ButtonComponent).text();
    expect(text).toBe("Join");
  });

  it("Should render loading indicator when logged in and posting", () => {
    const wrapper = setup({ isLoggedIn: true, isLoading: true, isPost: true });
    const component = wrapper
      .find(ButtonComponent)
      .find(LoadingIndicatorComponent);
    expect(component).toBeDefined();
  });
});
