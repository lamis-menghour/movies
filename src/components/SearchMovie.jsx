import { CloseButton, Container, Input } from "@mantine/core";
import React from "react";

function SearchMovie({ searchValue, setSearchValue }) {
  return (
    <Container w="40vw">
      <Input
        placeholder="Search..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="10px"
        style={{
          boxShadow: "0 0 15px rgba(0 ,0, 0,0.2)",
        }}
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setSearchValue("")}
            style={{ display: searchValue ? undefined : "none" }}
          />
        }
      />
    </Container>
  );
}

export default SearchMovie;
