import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Flex, Image, Text, Title } from "@mantine/core";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import required modules
import { Scrollbar } from "swiper/modules";
import CreditSlide from "./CreditSlide";

function Credits({ id, credits }) {
  return (
    <Container fluid mt={"30px"} w={"95vw"} >
      <Title order={2} fw={500}>
        Top Billed Cast
      </Title>
      <Swiper
        slidesPerView={6}
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
        style={{
          padding: "20px 0",
        }}
      >
        {credits?.slice(0, 9).map((person) => (
          <SwiperSlide key={person.id}>
            <CreditSlide person={person} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <Card
            shadow="sm"
            padding="md"
            radius="sm"
            h={280}
            w={180}
            withBorder
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Flex align={"center"}>
              <Link
                to={`/movie/${id}/cast`}
                fw={900}
                style={{
                  color: "black",
                  fontWeight: 500,
                }}
              >
                View More
              </Link>
              <ArrowRightAltOutlinedIcon />
            </Flex>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default Credits;
