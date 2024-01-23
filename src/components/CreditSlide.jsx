import { Card, Image, Text, Title } from "@mantine/core";
import React from "react";

function CreditSlide({ person }) {
  return (
    <Card shadow="sm" padding="md" radius="sm" mih={280} w={180} withBorder>
      <Card.Section>
        <Image
          src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
          height={"200px"}
          alt={person.name}
        />
      </Card.Section>
      <Title order={4} fw={500} c={"black"} mt={"10px"}>
        {person.name}
      </Title>
      <Text size="sm">{person.character}</Text>
    </Card>
  );
}

export default CreditSlide;
