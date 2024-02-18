import {
  Container,
  Flex,
  Image,
  RingProgress,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React, { useContext } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteContext } from "../contexts/FavoriteContext";

function MovieDetails({ movie }) {
  const { favorite, addToFavorite, removeFromFavorite } =
    useContext(FavoriteContext);

  const posterUrl =
    `https://image.tmdb.org/t/p/original${movie?.backdrop_path}` ||
    `https://image.tmdb.org/t/p/original${movie?.poster_path}`;

  const rating = movie?.vote_average * 10;
  const colors = () => {
    if (rating < 50) {
      return "red";
    } else if (rating >= 50 && rating < 70) {
      return "yellow";
    } else {
      return "green";
    }
  };

  function formatDate() {
    // Create a new Date object from the input string
    const originalDate = new Date(movie?.release_date);

    // Get the day, month, and year components
    const day = originalDate.getDate();
    const month = originalDate.getMonth() + 1; // Months are zero-based, so we add 1
    const year = originalDate.getFullYear();

    // Format the date as "DD/MM/YYYY"
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
  return (
    <Flex
      justify="center"
      align="center"
      gap="20px"
      w="100vw"
      h={"500px"}
      c="white"
      mt={"60px"}
      style={{
        position: "relative",
      }}
    >
      <Image
        w="100vw"
        h={500}
        src={posterUrl}
        radius="xs"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: "-1",
          overflowX: "none",
          filter: "grayscale(10%) contrast(80%) blur(1px)",
        }}
      />
      <Image
        w={280}
        h={400}
        radius="md"
        src={posterUrl}
        style={{
          boxShadow: "0 0 20px rgba(0 ,0, 0,0.5)",
        }}
      />
      <Stack align="flex-start" justify="center" gap="md" h="90%" w="65vw">
        <Container w="100%">
          <Title order={2}>
            {movie?.title}{" "}
            <span style={{ color: "rgba(255,255,255,0.75)" }}>
              ({movie?.release_date.split("-")[0]})
            </span>
          </Title>
        </Container>
        <Container w="100%">
          <Flex justify={"flex-start"} align={"center"}>
            <Text>{formatDate()}</Text>
            <div
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "white",
                margin: "0 10px",
              }}
            />
            <Text size="md">
              {movie?.genres.map((genre) => genre.name).join(",")}
            </Text>
            <div
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "white",
                margin: "0 10px",
              }}
            />
          </Flex>
        </Container>
        <Flex w="100%" p={"10px"} align={"center"} gap={"50px"}>
          <Flex align={"center"}>
            <RingProgress
              size={70}
              thickness={7}
              roundCaps
              label={
                <Text fw={700} ta="center" size="md">
                  {Math.trunc(rating)}%
                </Text>
              }
              sections={[{ value: rating, color: colors() }]}
            />
            <Text w="min-content" fw={500} fs={"14px"}>
              User Score
            </Text>
          </Flex>
          <Flex
            bg={"rgba(3,37,65)"}
            w={"50px"}
            h="50px"
            justify={"center"}
            align={"center"}
            style={{ borderRadius: "50%" }}
          >
            <FavoriteIcon
              style={{
                color: favorite?.some((item) => item.id === movie.id)
                  ? "red"
                  : "lightGray",
                cursor: "pointer",
              }}
              onClick={() => {
                favorite?.some((item) => item.id === movie.id)
                  ? removeFromFavorite(movie)
                  : addToFavorite(movie);
              }}
            />
          </Flex>
        </Flex>
        <Container w="100%">
          <Text fs="italic" c="rgba(255,255,255,0.75)">
            {movie?.tagline}
          </Text>
        </Container>
        <Container w="100%">
          <Flex direction="column" gap="10px">
            <Title order={4}>Overview</Title>
            <Text>{movie?.overview}</Text>
          </Flex>
        </Container>
      </Stack>
    </Flex>
  );
}

export default MovieDetails;
