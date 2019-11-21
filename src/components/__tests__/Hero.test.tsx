import { render } from "@testing-library/react";
import React from "react";
import Hero from "../Hero";

test("if hero prop is used as classname & render children prop", async () => {
  const classNameDefault = "hero-default";
  const className = "hero-rooms";
  const children = <div data-testid="hero-children">Hero children</div>;
  const { getByTestId, rerender } = render(<Hero children={children} />);

  const hero = getByTestId("hero");
  const heroChildren = getByTestId("hero-children");

  expect(hero).toHaveClass(classNameDefault);
  expect(heroChildren).toHaveTextContent("Hero children");

  rerender(<Hero hero={className} children={children} />);
  expect(hero).toHaveClass(className);
});
