import React, { useContext } from "react";
import { Card, Image, Text, RingProgress, Flex } from "@mantine/core";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteContext } from "../contexts/FavoriteContext";

export default function Movie({ movie }) {
  const { favorite, addToFavorite, removeFromFavorite } =
    useContext(FavoriteContext);

  const rating = movie.vote_average * 10;
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const colors = () => {
    if (rating < 50) {
      return "red";
    } else if (rating >= 50 && rating < 70) {
      return "yellow";
    } else {
      return "green";
    }
  };

  return (
    <Card shadow="md" padding="md" radius="md" mih={300}>
      <Card.Section>
        <Link to={`/movie/${movie.id}`} style={{ all: "unset" }}>
          <Image
            src={posterUrl}
            height={250}
            alt={movie.title}
            style={{
              cursor: "pointer",
            }}
          />
        </Link>
      </Card.Section>
      <RingProgress
        style={{
          position: "absolute",
          top: "225px",
          backgroundColor: "#081c22",
          borderRadius: "50%",
        }}
        size={50}
        thickness={5}
        roundCaps
        label={
          <Text c="white" fw={500} ta="center" size="xs">
            {Math.trunc(rating)}%
          </Text>
        }
        sections={[{ value: rating, color: colors() }]}
      />
      <Flex justify={"space-between"} align={"flex-end"}>
        <Flex direction="column">
          <Link to={`/movie/${movie.id}`} style={{ all: "unset" }}>
            <Text
              fw={500}
              style={{
                marginTop: "30px",
                cursor: "pointer",
              }}
            >
              {movie.title}
            </Text>
          </Link>
          <Text size="sm" c="dimmed">
            {movie.release_date}
          </Text>
        </Flex>
        <Flex>
          <FavoriteIcon
            style={{
              color: favorite?.some((item) => item.id === movie.id)
              ? "red":
               "lightGray",
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
    </Card>
  );
}
