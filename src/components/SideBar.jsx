import React, { useState } from "react";
import {
  Stack,
  Button,
  Title,
  Select,
  Grid,
  Group,
} from "@mantine/core";

export default function SideBar({
  sortingOptions,
  genresData,
  languages,
  selectedSorting,
  setSelectedSorting,
  selectedGenres,
  setSelectedGenres,
  selectedLanguage,
  setSelectedLanguage,
}) {
  const [hovered, setHovered] = useState(null);
  const capitalize = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  console.log(selectedGenres);
  return (
    <Stack
      direction="column"
      gap="md"
      mih={"100vh"}
      h={"max-content"}
      w={"220px"}
      style={{
        position: "absolute",
        top: 70,
        left: 10,
        paddingBottom: "20px",
      }}
    >
      <Title order={2}>Popular Movies</Title>
      <Group
        p={"10px"}
        style={{
          boxShadow: "0 0 15px rgba(0 ,0, 0,0.2)",
          borderRadius:"5px"
        }}
      >
        <Title order={3} fw={500}>
          Sort & Filters
        </Title>

        <Select
          label="Sort Result by :"
          data={sortingOptions?.map((option) => ({
            label: option.label,
            value: option.value,
          }))}
          value={selectedSorting}
          onChange={(value) => {
            setSelectedSorting(value);
          }}
        />

        <Group>
          <Title order={6} fw={500}>
            Genres :
          </Title>
          <Grid>
            {genresData?.genres.map((genre) => (
              <Button
                w="max-content"
                variant={
                  hovered === genre.id || selectedGenres.includes(genre.id)
                    ? "filled"
                    : "outline"
                }
                size="xs"
                radius="xl"
                key={genre.id}
                style={{ margin: "5px" }}
                onMouseEnter={() => setHovered(genre.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => {
                  if (selectedGenres.includes(genre.id)) {
                    setSelectedGenres(
                      selectedGenres.filter((item) => item !== genre.id)
                    );
                  } else {
                    setSelectedGenres((prev) => [...prev, genre.id]);
                  }
                }}
              >
                {capitalize(genre.name)}
              </Button>
            ))}
          </Grid>
        </Group>

        <Select
          label="Language :"
          data={languages?.map((language) => ({
            label: language.english_name,
            value: language.iso_639_1,
          }))}
          value={selectedLanguage}
          onChange={(value) => setSelectedLanguage(value)}
        />
      </Group>
    </Stack>
  );
}
