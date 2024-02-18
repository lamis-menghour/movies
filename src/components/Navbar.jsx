import React, { useContext } from "react";
import { Flex, Group, Image, Menu, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { NavbarContext } from "../contexts/NavbarContext";
function Navbar() {
  const { setUrl, navBarLinks, setLinkTitle } = useContext(NavbarContext);
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
      wrap="wrap"
    >
      <Link to={"/"}>
        <Image src="/img/TMDb.svg" h={60} w={150} fit="contain" />
      </Link>

      <Group justify="space-between">
        <Link to={"/"} style={{ fontWeight: 500 }}>
          Home
        </Link>

        {navBarLinks?.map((group) => (
          <Menu trigger="hover" openDelay={100} closeDelay={200}>
            <Menu.Target>
              <Text c="white" fw={500} style={{ cursor: "pointer" }}>
                {group.title}
              </Text>
            </Menu.Target>
            <Menu.Dropdown>
              {group.dropDown.map((item, index) => (
                <Link to={group.link}>
                  <Menu.Item
                    key={index}
                    onClick={() => {
                      setLinkTitle(item.label);
                      setUrl(item.url);
                    }}
                  >
                    {item.label}
                  </Menu.Item>
                </Link>
              ))}
            </Menu.Dropdown>
          </Menu>
        ))}
        <Link to={"/favorite"} style={{ fontWeight: 500 }}>
          Favorite
        </Link>
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
            cursor: "pointer",
          }}
        />
      </Group>
    </Flex>
  );
}

export default Navbar;
