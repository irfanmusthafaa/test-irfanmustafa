import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieSearch from "./MovieSearch";

test("MovieSearch component renders correctly and handles search", () => {
  const handleSearch = jest.fn();
  render(<MovieSearch onSearch={handleSearch} />);

  const input = screen.getByPlaceholderText("Search for a movie");
  const button = screen.getByText("Search");

  fireEvent.change(input, { target: { value: "Inception" } });
  fireEvent.click(button);

  expect(handleSearch).toHaveBeenCalledWith("Inception");
});

test("MovieSearch displays warning message when input is empty", () => {
  const handleSearch = jest.fn();
  render(
    <MovieSearch
      onSearch={handleSearch}
      warning="Search query cannot be empty."
    />
  );

  const button = screen.getByText("Search");

  fireEvent.click(button);

  const warningMessage = screen.getByText("Search query cannot be empty.");
  expect(warningMessage).toBeInTheDocument();
});

test("MovieSearch handles form submit with Enter key", () => {
  const handleSearch = jest.fn();
  render(<MovieSearch onSearch={handleSearch} />);

  const input = screen.getByPlaceholderText("Search for a movie");

  fireEvent.change(input, { target: { value: "Inception" } });
  fireEvent.submit(input.closest("form"));

  expect(handleSearch).toHaveBeenCalledWith("Inception");
});
