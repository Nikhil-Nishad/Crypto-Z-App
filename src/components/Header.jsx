import { Button, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} gap={"10"}>
        <Button
          variant={"unstyled"}
          color={"white"}
          css={{ "&:hover": { transform: "scale(1.5)" } }}
        >
          <Link to={"/"}>Home</Link>
        </Button>
        <Button
          variant={"unstyled"}
          color={"white"}
          css={{ "&:hover": { transform: "scale(1.5)" } }}
        >
          <Link to={"/exchanges"}>Exchanges</Link>
        </Button>
        <Button
          variant={"unstyled"}
          color={"white"}
          css={{ "&:hover": { transform: "scale(1.5)" } }}
        >
          <Link to={"/coins"}>Coins</Link>
        </Button>
        <Button
          variant={"unstyled"}
          color={"white"}
          css={{ "&:hover": { transform: "scale(1.5)" } }}
        >
          <Link to={"/about"}>About Us</Link>
        </Button>
      </HStack>
    </>
  );
};

export default Header;
