import React from "react";
import {
  render,
  screen,
} from "@testing-library/react";
import ContactForm from "../../pages/ContactForm";

test('Contact form page as it should', () => {
  render(<ContactForm />);
  const linkElement = screen.getByText(/Drop us a Line!/i);
  expect(linkElement).toBeInTheDocument();
});