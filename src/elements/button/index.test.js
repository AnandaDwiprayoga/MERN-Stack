import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./index";

test("should not allowed click button if isdisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("should render <a> tag", () => {
  const { container } = render(<Button type="Link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("should render <Link> tag", () => {
  const { container } = render(
    <Router>
      <Button type="Link" href=""></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
