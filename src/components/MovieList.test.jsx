import React from "react";
import { render, screen } from "@testing-library/react";
import MovieList from "./MovieList";

// Mock data for testing
const mockMovies = [
  {
    imdbID: "tt0111161",
    Title: "The Shawshank Redemption",
    Year: "1994",
    Poster: "https://example.com/shawshank.jpg",
  },
  {
    imdbID: "tt0068646",
    Title: "The Godfather",
    Year: "1972",
    Poster: "https://example.com/godfather.jpg",
  },
];

test("MovieList component renders correctly and displays movies", () => {
  render(<MovieList movies={mockMovies} />);

  // Check if movie titles are displayed
  const shawshankTitle = screen.getByText("The Shawshank Redemption");
  const godfatherTitle = screen.getByText("The Godfather");

  expect(shawshankTitle).toBeInTheDocument();
  expect(godfatherTitle).toBeInTheDocument();

  // Check if movie years are displayed
  const shawshankYear = screen.getByText("1994");
  const godfatherYear = screen.getByText("1972");

  expect(shawshankYear).toBeInTheDocument();
  expect(godfatherYear).toBeInTheDocument();

  // Check if movie posters are displayed
  const shawshankPoster = screen.getByAltText("The Shawshank Redemption");
  const godfatherPoster = screen.getByAltText("The Godfather");

  expect(shawshankPoster).toBeInTheDocument();
  expect(godfatherPoster).toBeInTheDocument();
});
