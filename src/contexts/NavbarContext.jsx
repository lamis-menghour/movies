import React, { createContext, useState } from "react";

export const NavbarContext = createContext();

export default function NavbarProvider({ children }) {
  const moviesLinks = {
    title: "Movies",
    link: "/movie",
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
    link: "/tv",
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
    link: "/people",
    dropDown: [
      {
        label: "Popular People",
        url: "https://api.themoviedb.org/3/person/popular",
      },
    ],
  };

  const navBarLinks = [moviesLinks, TVShowLinks, peopleLink];
  const [url, setUrl] = useState("https://api.themoviedb.org/3/movie/popular");
  const [linkTitle, setLinkTitle] = useState("popular");

  const values = {
    url,
    setUrl,
    navBarLinks,
    linkTitle,
    setLinkTitle,
  };
  return (
    <NavbarContext.Provider value={values}>{children}</NavbarContext.Provider>
  );
}
