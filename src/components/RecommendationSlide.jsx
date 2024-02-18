import { Box, Card, Image, Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

function RecommendationSlide({slide}) {
  return (
    <Card shadow="sm" padding="md" radius="sm" mih={230} w={180} withBorder>
      <Card.Section>
        <Link to={`/movie/${slide.id}`}>
          {slide?.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${slide.poster_path}`}
              height={"150px"}
              alt={slide.title}
            />
          ) : (
            <Box
              h={"150px"}
              w={"100%"}
              bg={"#dbdbdb"}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "3px",
              }}
            ></Box>
          )}
        </Link>
      </Card.Section>
      <Link to={`/movie/${slide.id}`}>
        <Text fw={500} c={"black"} mt={"10px"}>
          {slide.title}
          {"  "}
          <span
          fs={"14px"}
            style={{
              fontWeight: "400",
              fontSize:"14px",
              color: "rgba(0,0,0,0.8)",
            }}
          >
            ({slide.release_date.split("-")[0]})
          </span>
        </Text>
      </Link>
      <Text size="sm" c="dimmed"></Text>
    </Card>
  );
}

export default RecommendationSlide;
