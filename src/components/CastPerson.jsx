import React from "react";
import { Box, Flex, Image, Text, Title } from "@mantine/core";
import PersonIcon from "@mui/icons-material/Person";

function CastPerson({ person }) {
  return (
    <Flex align={"center"}>
      <Flex c={"white"} align={"center"}>
        {person?.profile_path ? (
          <Image
            h={60}
            radius={"sm"}
            src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
            alt={person.name}
          />
        ) : (
          <Box
            h={60}
            w={40}
            bg={"#dbdbdb"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "3px",
            }}
          >
            <PersonIcon
              style={{
                color: "rgba(0,0,0,0.5)",
              }}
            />
          </Box>
        )}
      </Flex>
      <Flex direction={"column"} ml={"10px"}>
        <Title order={4}>{person.name}</Title>
        <Text fs={"12px"}>{person?.character || person?.job}</Text>
      </Flex>
    </Flex>
  );
}

export default CastPerson;
