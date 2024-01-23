import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Recommendations from "../components/Recommendations";
import MovieDetails from "../components/MovieDetails";
import Credits from "../components/Credits";
import Trailer from "../components/Trailer";
import Reviews from "../components/Reviews";

export default function SingleMovie({}) {
  const [status, setStatus] = useState({
    isLoading: true,
    isError: false,
    isSuccess: false,
  });
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [credits, setCredits] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [reviews, setReviews] = useState([]);

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

  const fetchMovieRecommendations = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations`;
    setStatus((prev) => ({ ...prev, isLoading: true }));
    try {
      const { data } = await axios.get(url, options);
      if (data.error) {
        setStatus((prev) => ({ ...prev, isError: true }));
        return;
      }
      setRecommendations(data.results);
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
      setCredits(data.cast);
      setStatus((prev) => ({ ...prev, isSuccess: true }));
    } catch (error) {
      setStatus((prev) => ({ ...prev, isError: true }));
    } finally {
      setStatus((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const fetchTrailer = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos`;
    setStatus((prev) => ({ ...prev, isLoading: true }));
    try {
      const { data } = await axios.get(url, options);
      if (data.error) {
        setStatus((prev) => ({ ...prev, isError: true }));
        return;
      }
      setTrailer(data.results[0]);
      setStatus((prev) => ({ ...prev, isSuccess: true }));
    } catch (error) {
      setStatus((prev) => ({ ...prev, isError: true }));
    } finally {
      setStatus((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const fetchReviews = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews`;
    setStatus((prev) => ({ ...prev, isLoading: true }));
    try {
      const { data } = await axios.get(url, options);
      if (data.error) {
        setStatus((prev) => ({ ...prev, isError: true }));
        return;
      }
      setReviews(data.results);
      setStatus((prev) => ({ ...prev, isSuccess: true }));
    } catch (error) {
      setStatus((prev) => ({ ...prev, isError: true }));
    } finally {
      setStatus((prev) => ({ ...prev, isLoading: false }));
    }
  };

  useEffect(() => {
    fetchData();
    fetchMovieRecommendations();
    fetchMovieCredits();
    fetchTrailer();
    fetchReviews();
  }, [id]);

  return (
    <>
      {status.isLoading && <div className="movie-container">LOADING...</div>}
      {status.isError && (
        <div className="movie-container"> Error : {movie.status_message}</div>
      )}
      {!status.isLoading && status.isSuccess && (
        <>
          <MovieDetails movie={movie} />
          <Recommendations slides={recommendations} />
          <Credits id={id} credits={credits} />
          <Trailer trailerKey={trailer?.key} />
          <Reviews reviews={reviews} />
        </>
      )}
    </>
  );
}
