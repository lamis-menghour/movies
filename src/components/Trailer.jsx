import { Container, Title } from "@mantine/core";
import React from "react";

function Trailer({ trailerKey }) {
  return (
    trailerKey && (
      <Container fluid mt={"40px"} pb={"20px"} w={"95vw"}>
        <Title order={2} fw={500} mb={"20px"}>
          Movie Trailer
        </Title>

        <iframe
          title="trailer"
          width="426"
          height="240"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          allowFullScreen
        />
      </Container>
    )
  );
}

export default Trailer;
