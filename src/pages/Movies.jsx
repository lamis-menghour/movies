import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import MoviesList from "../components/MoviesList";
import SideBar from "../components/SideBar";
import LoadMore from "../components/LoadMore";
import SearchMovie from "../components/SearchMovie";
import { Flex } from "@mantine/core";

export default function Movies({}) {
  const [status, setStatus] = useState({
    isLoading: true,
    isError: false,
    isSuccess: false,
  });

  const sortingOptions = [
    {
      label: "Popularity Ascending",
      value: "popularity.asc",
    },
    {
      label: "Popularity Descending",
      value: "popularity.desc",
    },
    {
      label: "Rating Ascending",
      value: "vote_count.asc",
    },
    {
      label: "Rating Descending",
      value: "vote_count.desc",
    },
    {
      label: "Release Date Ascending",
      value: "primary_release_date.asc",
    },
    {
      label: "Release Date Descending",
      value: "primary_release_date.desc",
    },
    {
      label: "Title (A-Z)",
      value: ".asc",
    },
    {
      label: "Title (Z-A)",
      value: ".desc",
    },
  ];

  const [moviesData, setMoviesData] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [genresData, setGenresData] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedSorting, setSelectedSorting] = useState(
    sortingOptions[0].value
  );
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  // const apiKey = "e6e448cef5dc98e7a3fe031d4294e502";
  const url = "https://api.themoviedb.org/3/movie/popular";

  const URL = `${url}?page=${page}&language=${selectedLanguage}&sort_by=${selectedSorting}${
    selectedGenres.length > 0 ? `&genre=${selectedGenres.join(",")}` : ""
  }`;
  console.log(URL);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmU0NDhjZWY1ZGM5OGU3YTNmZTAzMWQ0Mjk0ZTUwMiIsInN1YiI6IjY1ODVjMjE4Yzc0MGQ5MGU2OTVjYjE0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sXwkooEB5hg4PHexJf_OJdrLmNHTr9-FYGn-JInLDlk",
    },
  };

  const fetchGenre = async () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?language=${selectedLanguage}`;
    setStatus((status) => ({ ...status, isLoading: true }));
    try {
      const { data } = await axios.get(url, options);
      if (data.Error) {
        setStatus((status) => ({ ...status, isError: true }));
        return;
      }
      setStatus((status) => ({ ...status, isSuccess: true }));
      setGenresData(data);
    } catch (error) {
      setStatus((status) => ({ ...status, isError: true }));
      console.log(error.message);
    } finally {
      setStatus((status) => ({ ...status, isLoading: false }));
    }
  };

  const fetchLanguages = async () => {
    const url = `https://api.themoviedb.org/3/configuration/languages`;
    setStatus((status) => ({ ...status, isLoading: true }));
    try {
      const { data } = await axios.get(url, options);
      if (data.Error) {
        setStatus((status) => ({ ...status, isError: true }));
        return;
      }
      setStatus((status) => ({ ...status, isSuccess: true }));
      setLanguages(data);
    } catch (error) {
      setStatus((status) => ({ ...status, isError: true }));
      console.log(error.message);
    } finally {
      setStatus((status) => ({ ...status, isLoading: false }));
    }
  };

  useEffect(() => {
    fetchGenre();
    fetchLanguages();
  }, []);

  const fetchMovies = async () => {
    setStatus((status) => ({ ...status, isLoading: true }));
    try {
      const { data } = await axios.get(URL, options);
      if (data.Error) {
        setStatus((status) => ({ ...status, isError: true }));
        return;
      }
      setStatus((status) => ({ ...status, isSuccess: true }));
      if (page === 1) {
        setMoviesData(data["results"]);
      } else {
        // If it's not the first page, append to the existing movies data
        setMoviesData((prev) => [...prev, ...data["results"]]);
      }
    } catch (error) {
      setStatus((status) => ({ ...status, isError: true }));
      console.log(error.message);
    } finally {
      setStatus((status) => ({ ...status, isLoading: false }));
    }
  };

  const prevUrlRef = useRef(url);
  // const prevPageRef = useRef(page);
  useEffect(() => {
    // Check if the URL has changed
    if (url !== prevUrlRef.current) {
      setPage(1);
      setMoviesData([]);
      fetchMovies();
    }
    // Check if the page has changed
    // else if (page !== prevPageRef.current) {
    //   fetchMovies();
    // }
    else {
      fetchMovies();
    }
    prevUrlRef.current = url;
    // prevPageRef.current = page;
  }, [page, selectedGenres, selectedLanguage, selectedSorting]);

  return (
    <>
      {status.isLoading && <div> Loading</div>}
      {status.isError && <div>Error</div>}
      {!status.isLoading && status.isSuccess && (
        <>
          <SideBar
            sortingOptions={sortingOptions}
            genresData={genresData}
            languages={languages}
            selectedSorting={selectedSorting}
            setSelectedSorting={setSelectedSorting}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
          <Flex
            direction="column"
            gap={40}
            style={{ padding: "25px", marginLeft: "230px", marginTop: "80px" }}
          >
            <SearchMovie
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />

            <MoviesList
              moviesData={moviesData.filter((movie) => {
                return movie.title
                  ?.toLowerCase()
                  .includes(searchValue.toLowerCase());
              })}
            />

            <LoadMore
              page={page}
              setPage={setPage}
              data={moviesData.filter((movie) => {
                return movie.title
                  ?.toLowerCase()
                  .includes(searchValue.toLowerCase());
              })}
            />
          </Flex>
        </>
      )}
    </>
  );
}
