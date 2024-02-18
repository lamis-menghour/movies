import React from "react";
import { Flex, Group, Image, Menu, Text } from "@mantine/core";
import { useState } from "react";

const NavigationBar = () => {
  const moviesLinks = {
    title: "Movies",
    dropDown: [
      {
        label: "Popular",
        url: "https://api.themoviedb.org/3/movie/popular",
      },
      {
        label: "Now Playing",
        url: "https://api.themoviedb.org/3/movie/now_playing",
      },
      {
        label: "Upcoming",
        url: "https://api.themoviedb.org/3/movie/upcoming",
      },
      {
        label: "Top Rated",
        url: "https://api.themoviedb.org/3/movie/top_rated",
      },
    ],
  };

  const TVShowLinks = {
    title: "TV Shows",
    dropDown: [
      {
        label: "Popular",
        url: "https://api.themoviedb.org/3/tv/popular",
      },
      {
        label: "Airing Today",
        url: "https://api.themoviedb.org/3/tv/airing_today",
      },
      {
        label: "On TV",
        url: "https://api.themoviedb.org/3/tv/on_the_air",
      },
      {
        label: "Top Rated",
        url: "https://api.themoviedb.org/3/tv/top_rated",
      },
    ],
  };

  const peopleLink = {
    title: "People",
    dropDown: [
      {
        label: "Popular People",
        url: "https://api.themoviedb.org/3/person/popular",
      },
    ],
  };

  const moreLink = {
    title: "More",
    dropDown: ["Discussions", "Leaderboard", "Support", "API"],
  };

  const [url, setUrl] = useState("https://api.themoviedb.org/3/movie/popular");

  return (
      <Flex
        gap="md"
        justify="flex-start"
        align="center"
        direction="row"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "#032541",
          height: "65px",
          width: "100vw",
          padding: "0 30px",
          zIndex: 100,
        }}
      >
        <Group gap="lg">
          <Image src="/img/TMDb.svg" h={65} w={150} fit="contain" />

          <Menu trigger="hover" openDelay={100} closeDelay={200}>
            <Menu.Target>
              <Text c="white" fw={500} style={{ cursor: "pointer" }}>
                {moviesLinks.title}
              </Text>
            </Menu.Target>
            <Menu.Dropdown>
              {moviesLinks.dropDown.map((item, index) => (
                <Menu.Item key={index} onClick={() => setUrl(item.url)}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Flex>
  );
};

export default NavigationBar;
