import React, { useState } from "react";
import axios from "axios";
import { server } from "../index";
import { useEffect } from "react";
import {
  Container,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import Loading from "./Loading";

const ExchangeCard = ({ name, img, rank, url }) => {
  return (
    <a href={url} target={"blank"}>
      <VStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        m={"2"}
        css={{ "&:hover": { transform: "scale(1.1)" } }}
      >
        <Image
          src={img}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt={"Exchange"}
        />
        <Heading size={"md"} noOfLines={1}>
          {rank}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
      </VStack>
    </a>
  );
};

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setloading(false);
      } catch (error) {
        console.error();
        alert("Axios Error : Come Back Soon!!");
        setloading(false);
      }
    };
    fetchExchanges();
  }, []);

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;
