import { Button, Flex, Input } from "@mantine/core";
import React from "react";

function Search({ search, searchValue, setSearchValue }) {
  return (
    <Flex>
      <Input.Wrapper>
        <Input
          placeholder="Search..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.currentTarget.value)}
        />
      </Input.Wrapper>
      <Button onClick={() => search()}> Search</Button>
    </Flex>
  );
}

export default Search;
