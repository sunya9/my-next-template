import { render, screen } from "@testing-library/react";
import Index from "../../src/pages/index";

test("index", () => {
  render(<Index />);
  expect(screen.getByText("Hello world")).toBeTruthy();
});
