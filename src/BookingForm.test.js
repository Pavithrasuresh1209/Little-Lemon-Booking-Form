import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("form validation works", () => {
  render(<BookingForm />);
  const submitButton = screen.getByText(/book table/i);
  fireEvent.click(submitButton);
  expect(screen.getByText(/name is required/i)).toBeInTheDocument();
});
