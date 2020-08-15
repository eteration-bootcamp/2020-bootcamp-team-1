import "@testing-library/jest-dom/extend-expect";
import Enzyme from "enzyme";
import EnzymeAdaper from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new EnzymeAdaper(),
  disableLifecycleMethods: true
});
