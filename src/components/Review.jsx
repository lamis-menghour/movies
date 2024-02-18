import React from "react";
import { Box, Flex, Image, Text, Title } from "@mantine/core";
import PersonIcon from "@mui/icons-material/Person";

function Review({ review }) {
  return (
    <Flex
      align={"flex-start"}
      justify={"flex-start"}
      //   bg={"#ececec"}
      w={"95%"}
      style={{
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 0 15px rgba(0 ,0, 0,0.2)",
      }}
    >
      {review?.author_details?.avatar_path ? (
        <Image
          h={50}
          w={50}
          radius={"xl"}
          src={`https://image.tmdb.org/t/p/original${review.author_details.avatar_path}`}
          alt={review.author}
        />
      ) : (
        <Box
          h={50}
          w={50}
          bg={"#dbdbdb"}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <PersonIcon
            style={{
              color: "rgba(0,0,0,0.5)",
            }}
          />
        </Box>
      )}
      <Flex direction={"column"} ml={"15px"} w={"90%"} gap={"10px"}>
        <Title order={3}>{review.author}</Title>
        <Text fs={"12px"} fw={500} c={"rgba(0,0,0,0.8)"}>
          {review?.content}
        </Text>
        <Text fs={"12px"} c={"rgba(0,0,0,0.5)"}>
          {review?.created_at.split("T")[0]}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Review;
