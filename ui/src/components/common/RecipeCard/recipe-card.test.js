import React from "react";
import { shallow } from "enzyme";
import RecipeCard from "./";

const CardBodyComponent = "CardBody";
const CardComponent = "Card";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn()
  })
}));

const setup = (props = {}) => {
  const component = shallow(<RecipeCard {...props} />);
  return component;
};

describe("Fab Component", () => {
  it("Renders correctly", () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders without props", () => {
    const wrapper = setup();
    const component = wrapper.find(CardComponent);
    expect(component.length).toBe(1);
  });

  it("Renders recipe preparation title correctly", () => {
    const wrapper = setup({ item: { prepTime: "TEST" } });
    const titleText = wrapper
      .find(CardBodyComponent)
      .find("p")
      .text();
    expect(titleText).toContain("TEST");
  });
});
