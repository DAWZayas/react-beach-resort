import { Queries } from "@testing-library/dom";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { createMemoryHistory, MemoryHistory } from "history";
import React from "react";
import { Router } from "react-router";

export const renderRouter: <Q extends Queries>(
  ui: React.ReactElement,
  options?: RenderOptions<Q> & { route?: string; history?: MemoryHistory }
) => RenderResult & { history: MemoryHistory } = (ui, options = {}) => {
  const {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
    ...renderOptions
  } = options;
  return {
    ...render(<Router history={history}>{ui}</Router>, renderOptions),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history
  };
};
