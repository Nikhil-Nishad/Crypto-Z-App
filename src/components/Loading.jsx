import { Container, Spinner} from "@chakra-ui/react";
import React from "react";
const Loading = () => {
  return (
    <Container w={"100vw"} minH="80vh" justifyContent="center" centerContent>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Container>
  );
};

export default Loading;
