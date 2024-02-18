import { Button, Flex, Grid, Image, Text, Title } from "@mantine/core";
import React from "react";

export default function Footer() {
  const footerLinks = [
    {
      title: "THE BASICS",
      links: [
        "About TMDB",
        "Contact Us",
        "Support Forums",
        "API",
        "System Status",
      ],
    },
    {
      title: "GET INVOLVED",
      links: ["Contribution Bible", "Add New Movie", "Add New TV Show"],
    },
    {
      title: "COMMUNITY",
      links: ["Guidelines", "Discussions", "Leaderboard"],
    },
    {
      title: "LEGAL",
      links: [
        "Terms of Use",
        "API Terms of Use",
        "Privacy Policy",
        "DMCA Policy",
      ],
    },
  ];
  return (
    <Flex
      w="100vw"
      p={"50px"}
      pb={"100px"}
      bg="rgb(3,37,65)"
      mt={"10px"}
      justify={"center"}
      align={"center"}
      gap={"40px"}
    >
      <Flex direction={"column"} gap={"40px"} align={"flex-end"}>
        <Image src="/img/primary full.svg" w={"120px"} />
        <Button variant="default">
          <Text fw={700} c={"rgba(1,180,228)"}>
            Hi lamosa98!
          </Text>
        </Button>
      </Flex>
      <Flex c={"white"} gap={"30px"} >
        {footerLinks.map((item, index) => (
          <Flex direction={"column"} key={index}>
            <Title order={4}>{item.title}</Title>
            <Flex direction={"column"} >
              {item.links.map((link, index) => (
                <Text key={index}>{link}</Text>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
