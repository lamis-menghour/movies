import { Container, Flex, Title } from "@mantine/core";
import React from "react";
import Review from "./Review";

function Reviews({ reviews }) {
  return (
    <Container fluid mt={"10px"} w={"95vw"}>
      {!!reviews.length && (
        <Title order={2} fw={500} mb={"20px"}>
          Reviews{" "}
        </Title>
      )}
      <Flex justify="flex-start" direction={"column"} p={"10px"} gap={"20px"}>
        {reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </Flex>
    </Container>
  );
}

export default Reviews;
