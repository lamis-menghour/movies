import React from "react";
import { Flex, Group, Image } from "@mantine/core";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
function Navbar() {
  return (
    <Flex
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "65px",
        width: "100vw",
        padding: "0 30px",
        zIndex: 100,
      }}
      h={60}
      bg="#032541"
      pr={20}
      pl={20}
      justify="space-between"
      align="center"
      direction="row"
      wrap="nowrap"
    >
      <Image src="/img/TMDb.svg" h={60} w={150} fit="contain" />

      <Group justify="space-between">
        <Link to={"/"}>Home</Link>
        <Link to={"/movie"}>Movie</Link>
        <Link to={"/tv"}>TV Shows</Link>
        <Link to={"/person"}>People</Link>
      </Group>
      <Group justify="space-between" align="center" mr={20}>
        <span
          style={{
            color: "white",
            padding: "2px 6px",
            border: "1px solid white",
            borderRadius: "5px",
          }}
        >
          EN
        </span>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Join TMDB</Link>

        <SearchOutlinedIcon
          style={{
            color: "white",
            cursor:"pointer"
          }}
        />
      </Group>
    </Flex>
  );
}

export default Navbar;
