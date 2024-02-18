import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BackgroundImage,
  Button,
  Flex,
  Grid,
  Input,
  Loader,
  Select,
  Text,
  Title,
} from "@mantine/core";
import Movie from "../components/Movie";

export default function Home() {
  const [status, setStatus] = useState({
    isLoading: false,
    isError: false,
    isSuccess: false,
  });

  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [languageFilter, setLanguageFilter] = useState("en");
  const [includeAdultsFilter, setIncludeAdultsFilter] = useState("false");
  const [yearFilter, setReleaseYearFilter] = useState("All");
  const [regionFilter, setRegionFilter] = useState("US");
  const [pageFilter, setPageFilter] = useState("1");

  const [languages, setLanguages] = useState([]);
  const [regions, setRegions] = useState([]);
  const fetchLanguages = async () => {
    const url = "https://api.themoviedb.org/3/configuration/languages";
    try {
      const { data } = await axios.get(url, options);
      if (data.Error) {
        return;
      }
      setLanguages(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchRegions = async () => {
    const url = "https://api.themoviedb.org/3/watch/providers/regions";
    try {
      const { data } = await axios.get(url, options);
      if (data.Error) {
        return;
      }
      setRegions(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchLanguages();
    fetchRegions();
  }, []);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmU0NDhjZWY1ZGM5OGU3YTNmZTAzMWQ0Mjk0ZTUwMiIsInN1YiI6IjY1ODVjMjE4Yzc0MGQ5MGU2OTVjYjE0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sXwkooEB5hg4PHexJf_OJdrLmNHTr9-FYGn-JInLDlk",
    },
  };

  const url = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=${includeAdultsFilter}&language=${languageFilter}&year=${yearFilter}&region=${regionFilter}&page=${pageFilter}`;
  const handleSearch = async () => {
    setStatus((status) => ({ ...status, isLoading: true }));
    try {
      const { data } = await axios.get(url, options);
      if (data.Error) {
        setStatus((status) => ({ ...status, isError: true }));
        return;
      }
      setStatus((status) => ({ ...status, isSuccess: true }));
      setSearchData(data);
      setSearchResults(data.results);
    } catch (error) {
      setStatus((status) => ({ ...status, isError: true }));
      console.log(error.message);
    } finally {
      setStatus((status) => ({ ...status, isLoading: false }));
    }
    // setSearchInput("");
  };

  const pageArray = Array(searchData?.total_pages || 1)
    .fill(1)
    .map((_, index) => `${index + 1}`);

  useEffect(() => {
    !!searchInput.length && handleSearch();
  }, [
    includeAdultsFilter,
    languageFilter,
    yearFilter,
    regionFilter,
    pageFilter,
  ]);

  return (
    <>
      <BackgroundImage
        h={"calc(90vh - 60px)"}
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
            height: "calc(85vh - 60px)",
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
                w={"80%"}
                ml={"20px"}
                placeholder="Search "
                variant="unstyled"
                value={searchInput}
                onChange={(e) => setSearchInput(e.currentTarget.value)}
              />
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
                onClick={() => !!searchInput?.length && handleSearch()}
              >
                Search
              </Button>
            </Flex>
          </Flex>
          <Flex gap={"25px"}>
            <Select
              label="Include Adults"
              data={["true", "false"]}
              value={includeAdultsFilter}
              onChange={(value) => setIncludeAdultsFilter(value)}
            />
            <Select
              label="Language"
              data={languages?.map((language) => ({
                label: language.english_name,
                value: language.iso_639_1,
              }))}
              value={languageFilter}
              onChange={(value) => setLanguageFilter(value)}
            />
            <Select
              label="Year"
              data={[
                "All",
                2024,
                2023,
                2022,
                2021,
                2020,
                2019,
                2018,
                2017,
                2016,
                2015,
                2014,
                2013,
                2012,
                2011,
                2010,
              ]}
              value={yearFilter}
              onChange={(value) =>
                setReleaseYearFilter(value === "All" ? "" : value)
              }
            />
            <Select
              label="Region"
              data={regions?.map((region) => ({
                label: region.english_name,
                value: region.iso_3166_1,
              }))}
              value={regionFilter}
              onChange={(value) => setRegionFilter(value)}
            />

            <Select
              label="Pages"
              data={pageArray}
              value={pageFilter}
              onChange={(value) => {
                setPageFilter(value);
              }}
            />
          </Flex>
        </Flex>
      </BackgroundImage>

      {status.isLoading && (
        <Flex
          w={"100vw"}
          h={"100px"}
          align={"center"}
          justify={"center"}
          p={"50px"}
        >
          <Loader color="blue" size="50" />
        </Flex>
      )}
      {status.isError && <div>Error</div>}
      {!status.isLoading && status.isSuccess && !!searchResults?.length && (
        <Flex w={"100vw"} align={"center"} p={"50px"}>
          <Grid justify="flex-start">
            {searchResults.map((item) => (
              <Grid.Col span={{ base: 9, sm: 6, md: 4, lg: 3 }} key={item.id}>
                <Movie movie={item} />
              </Grid.Col>
            ))}
          </Grid>
        </Flex>
      )}
    </>
  );
}
