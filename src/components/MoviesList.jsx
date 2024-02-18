import React from "react";
import Movie from "./Movie";
import { Container, Grid } from "@mantine/core";

export default function MoviesList({ moviesData }) {
  return (
    <Grid justify="flex-start" align="stretch">
      {moviesData && moviesData?.length > 0 ? (
        moviesData?.map((movie, index) => (
          <Grid.Col span={{ base: 9, sm: 6, md: 4, lg: 3 }} key={index}>
            <Movie movie={movie} />
          </Grid.Col>
        ))
      ) : (
        <Container>No items were found that match your query.</Container>
      )}
    </Grid>
  );
}
