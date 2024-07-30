import React, { useState } from "react";
import styled from "styled-components";

/**
 * Styled component for the search container.
 */
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

/**
 * Styled component for the search input.
 */
const SearchInput = styled.input`
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 500px;
`;

/**
 * Styled component for the search button.
 */
const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #b80000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #820300;
  }
`;

/**
 * Styled component for warning message.
 */
const WarningMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const MovieSearch = ({ onSearch, warning }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah refresh halaman
    onSearch(query);
  };

  return (
    <SearchContainer>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <SearchInput
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie"
        />
        <SearchButton type="submit">Search</SearchButton>
      </form>
      {warning && <WarningMessage>{warning}</WarningMessage>}
    </SearchContainer>
  );
};

export default MovieSearch;
