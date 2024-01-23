import React, { useState } from "react";
import { Card, Image, Text, RingProgress } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
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
    </Card>
  );
}
