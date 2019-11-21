import { render, waitForElement } from "@testing-library/react";
import React from "react";
import ServicesContainer from "../Services";

jest.useFakeTimers();

test("if services are fetched", async () => {
  const { getAllByTestId } = render(<ServicesContainer />);
  jest.runAllTimers();
  await waitForElement(() => getAllByTestId("service"));
});
