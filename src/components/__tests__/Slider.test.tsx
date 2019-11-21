import { render, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Slider from "../Slider";

jest.useFakeTimers();

const items = new Array(5)
  .fill(0)
  .map((_, i) => <div data-testid={`item-${i + 1}`}>Item {i + 1}</div>);
test("if slider move the items", async () => {
  const { getByTestId, queryByTestId } = render(
    <Slider size={2} items={items} />
  );
  const left = getByTestId("slider-left");
  const right = getByTestId("slider-right");
  const slider = getByTestId("slider");

  await wait(() =>
    expect(
      Array.prototype.map.call(
        slider.querySelectorAll('[data-testid^="item-"]'),
        (e: HTMLElement) => e.textContent
      )
    ).toEqual(["Item 5", "Item 1", "Item 2", "Item 3"])
  );

  userEvent.click(right);
  jest.runAllTimers();
  await wait(() =>
    expect(
      Array.prototype.map.call(
        slider.querySelectorAll('[data-testid^="item-"]'),
        (e: HTMLElement) => e.textContent
      )
    ).toEqual(["Item 1", "Item 2", "Item 3", "Item 4"])
  );

  userEvent.click(left);
  await wait(() =>
    expect(
      Array.prototype.map.call(
        slider.querySelectorAll('[data-testid^="item-"]'),
        (e: HTMLElement) => e.textContent
      )
    ).toEqual(["Item 1", "Item 2", "Item 3", "Item 4"])
  );
});
