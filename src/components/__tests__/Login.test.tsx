import { wait, waitForElement } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "../../App";
import { renderRouter } from "../../utils/tests";

test("test login", async () => {

  const { getByTestId, queryByTestId } = renderRouter(<App />);

  expect(queryByTestId("login-form")).not.toBeInTheDocument();

  const loginLink = getByTestId("login-link");

  userEvent.click(loginLink);

  const username = getByTestId("login-form-username");
  const password = getByTestId("login-form-password");
  const loginBtn = getByTestId("login-form-btn");

  userEvent.type(username, "pepe");
  userEvent.type(password, "12345");
  userEvent.click(loginBtn);

  await wait(() => expect(queryByTestId("login-form")).not.toBeInTheDocument());

  await waitForElement(() => queryByTestId("logout-link"));



});
