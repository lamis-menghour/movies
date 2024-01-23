import React from "react";
import { Link } from "react-router-dom";
import { Box, Card, Container, Image, Text, Title } from "@mantine/core";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import RecommendationSlide from "./RecommendationSlide";

function Recommendations({ slides }) {
  return (
    <Container fluid mt={"20px"} w={"95vw"} >
      {!!slides.length && (
        <Title order={2} fw={500}>
          Recommendations
        </Title>
      )}
      <Swiper
        slidesPerView={6}
        className="mySwiper"
        style={{
          padding: "20px 0",
        }}
      >
        {slides?.map((slide) => (
          <SwiperSlide key={slide.id}>
            <RecommendationSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Recommendations;
