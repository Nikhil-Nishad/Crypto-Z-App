import { Container, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Container
      bgImage="https://images.pexels.com/photos/265072/pexels-photo-265072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      bgPosition="center"
      bgRepeat="no-repeat"
      minW={"100%"}
      minH={"88vh"}
      objectFit={"contain"}
      overflowY={"hidden"}
    >
      <Container
        bgColor={"whiteAlpha.600"}
        backdropFilter="auto"
        backdropBlur="20px"
        maxW={"80%"}
        p={"4"}
        mt={"1"}
        justifyContent={"center"}
        shadow={"dark-lg"}
        borderRadius={"2xl"}
      >
        <Text letterSpacing={"wide"} fontWeight={"semibold"} lineHeight={"8"}>
          Welcome to my personal cryptocurrency website! I'm excited to share
          with you my passion for the world of digital assets and blockchain
          technology. As an early adopter and avid enthusiast of
          cryptocurrencies, I have spent countless hours researching, analyzing,
          and investing in various projects within the space. My goal is to help
          others understand the potential of this exciting new industry, and to
          offer insights and advice on navigating the complex and ever-changing
          landscape of cryptocurrencies. Here on my website, you'll find a
          wealth of resources, including articles, guides, and tutorials,
          designed to help you learn more about cryptocurrency, blockchain, and
          the innovative technologies driving this industry forward. I'll be
          sharing my thoughts on the latest news, trends, and developments in
          the space, as well as providing in-depth analysis of specific projects
          and tokens. Whether you're a seasoned cryptocurrency investor or a
          newcomer to the space, I hope that you'll find my website to be a
          valuable resource. Feel free to explore, engage, and share your
          thoughts and questions with me. Together, we can unlock the potential
          of this exciting new technology and shape the future of finance.
        </Text>
      </Container>
    </Container>
  );
};

export default About;
