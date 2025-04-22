import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm";

test("adds a new item when form is submitted", () => {
  const mockSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={mockSubmit} />);

  // Get inputs using the exact aria-labels from your component
  const nameInput = screen.getByLabelText("Name");
  const categorySelect = screen.getByLabelText("Category");
  const submitButton = screen.getByText("Add to List");

  fireEvent.change(nameInput, { target: { value: "Ice Cream" } });
  fireEvent.change(categorySelect, { target: { value: "Dessert" } });
  fireEvent.click(submitButton);

  expect(mockSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      name: "Ice Cream",
      category: "Dessert"
    })
  );
});