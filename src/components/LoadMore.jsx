import { Button, Container, Text } from "@mantine/core";
import React from "react";

function LoadMore({ page, setPage, data }) {
  return (
    !!data?.length && (
      <Container justify="center" align="center">
        <Button w="50vw" onClick={() => setPage((prev) => prev + 1)}>
          Load More
        </Button>
        <Text>page: {page}</Text>
      </Container>
    )
  );
}

export default LoadMore;
