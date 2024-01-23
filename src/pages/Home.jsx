import React from "react";
import { Link } from "react-router-dom";
import { BackgroundImage, Button, Flex, Input, Title } from "@mantine/core";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Home() {
  return (
    <BackgroundImage
      h={"100vh"}
      src="https://www.tasteofcinema.com/wp-content/uploads/2016/12/days-of-heaven.jpg"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Flex
        w={"90vw"}
        direction={"column"}
        justify={"center"}
        align={"flex-start"}
        gap={"50px"}
        c={"white"}
        style={{
          height: "calc(100vh - 60px)",
        }}
      >
        <Flex direction={"column"} mt={"10px"}>
          <Title order={1}>Welcome.</Title>
          <Title order={3}>
            Millions of movies, TV shows and people to discover. Explore now.
          </Title>
        </Flex>
        <Flex>
          <Flex
            bg={"white"}
            w={"90vw"}
            align={"center"}
            justify={"space-between"}
            style={{
              borderRadius: "30px",
            }}
          >
            <Input
              w={"100%"}
              ml={"20px"}
              placeholder="Search "
              variant="unstyled"
            />
            <Link to="/movie">
              <Button
                variant="gradient"
                gradient={{
                  from: "rgba(30,213,169,1)",
                  to: "rgba(0,118,241,1)",
                  deg: 90,
                }}
                radius="xl"
                size="md"
                fw={"700"}
              >
                Search
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </BackgroundImage>
  );
}
