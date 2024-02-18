import React, { useContext } from "react";
import { FavoriteContext } from "../contexts/FavoriteContext";
import { Flex, Grid, Image, Title } from "@mantine/core";
import Movie from "../components/Movie";

export default function Favorite() {
  const { favorite } = useContext(FavoriteContext);
  return !!favorite?.length ? (
    <Flex direction="column" w="100vw" mt={"60px"} gap={"30px"} p={"30px"}>
      <Title c={"black"} fw={500} align="center">
        Favorite Movies
      </Title>
      <Grid justify="flex-start" align="stretch">
        {favorite?.map((movie, index) => (
          <Grid.Col span={{ base: 9, sm: 6, md: 4, lg: 3 }} key={index}>
            <Movie movie={movie} key={movie.id} />
          </Grid.Col>
        ))}
      </Grid>
    </Flex>
  ) : (
    <Flex
      direction={"column"}
      justify={"space-evenly"}
      align={"center"}
      w="100vw"
      h={"100vh"}
      pt={"60px"}
    >
      <Image src="/img/empty.png" w="550px" />
      <Title order={3} fw={500}>
        Your favorite is empty.
      </Title>
    </Flex>
  );
}
