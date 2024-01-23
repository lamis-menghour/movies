import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Box, Container, Flex, Image, Text, Title } from "@mantine/core";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import CastPerson from "../components/CastPerson";

function Cast() {
  const [status, setStatus] = useState({
    isLoading: true,
    isError: false,
    isSuccess: false,
  });
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  const { id } = useParams();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmU0NDhjZWY1ZGM5OGU3YTNmZTAzMWQ0Mjk0ZTUwMiIsInN1YiI6IjY1ODVjMjE4Yzc0MGQ5MGU2OTVjYjE0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sXwkooEB5hg4PHexJf_OJdrLmNHTr9-FYGn-JInLDlk",
    },
  };

  const fetchData = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    setStatus((prev) => ({ ...prev, isLoading: true }));
    try {
      const { data } = await axios.get(url, options);
      if (data.error) {
        setStatus((prev) => ({ ...prev, isError: true }));
        return;
      }
      setMovie(data);
      setStatus((prev) => ({ ...prev, isSuccess: true }));
    } catch (error) {
      setStatus((prev) => ({ ...prev, isError: true }));
    } finally {
      setStatus((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const fetchMovieCredits = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits`;
    setStatus((prev) => ({ ...prev, isLoading: true }));
    try {
      const { data } = await axios.get(url, options);
      if (data.error) {
        setStatus((prev) => ({ ...prev, isError: true }));
        return;
      }
      setCast(data.cast);
      setCrew(data.crew);
      setStatus((prev) => ({ ...prev, isSuccess: true }));
    } catch (error) {
      setStatus((prev) => ({ ...prev, isError: true }));
    } finally {
      setStatus((prev) => ({ ...prev, isLoading: false }));
    }
  };

  useEffect(() => {
    fetchData();
    fetchMovieCredits();
  }, [id]);

  console.log(crew);
  return (
    <>
      {status.isLoading && <div className="movie-container">LOADING...</div>}
      {status.isError && (
        <div className="movie-container"> Error : {movie.status_message}</div>
      )}
      {!status.isLoading && status.isSuccess && (
        <>
          <Container
            mt={"75px"}
            p={"20px 50px"}
            fluid
            bg={"rgba(31.5, 10.5, 31.5, 1)"}
          >
            <Flex c={"white"} align={"center"}>
              <Image
                h={100}
                w={80}
                radius={"sm"}
                bg={"dimmend"}
                src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
              />
              <Flex direction={"column"} ml={"20px"}>
                <Title order={2} fw={500}>
                  <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                  {"  "}
                  <span
                    style={{
                      fontWeight: "400",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    ({movie.release_date.split("-")[0]})
                  </span>
                </Title>
                <Flex align="center">
                  <ArrowBackOutlinedIcon
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  />
                  <Link to={`/movie/${movie.id}`}>
                    <Text fw={500} c={"rgba(255,255,255,0.5)"}>
                      Back to main
                    </Text>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Container>

          <Flex justify={"space-between"} p={"20px 50px"}>
            <Flex w={"45%"} direction={"column"}>
              <Title order={3} fw={500}>
                Cast {"  "}
                <span
                  style={{
                    fontWeight: "400",
                    color: "rgba(0,0,0,0.5)",
                  }}
                >
                  {cast.length}
                </span>
              </Title>
              <Flex direction={"column"} mt={"20px"} gap={"10px"}>
                {cast.map((person) => (
                  <CastPerson person={person} key={person.id} />
                ))}
              </Flex>
            </Flex>
            <Flex w={"45%"} direction={"column"}>
              <Title order={3} fw={500}>
                Crew {"  "}
                <span
                  style={{
                    fontWeight: "400",
                    color: "rgba(0,0,0,0.5)",
                  }}
                >
                  {crew.length}
                </span>
              </Title>
              <Flex direction={"column"} mt={"20px"} gap={"10px"}>
                {crew.map((person) => (
                  <CastPerson person={person} key={person.id} />
                ))}
              </Flex>
            </Flex>
          </Flex>
        </>
      )}
    </>
  );
}

export default Cast;
