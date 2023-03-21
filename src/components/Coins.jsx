import React, { useState } from "react";
import axios from "axios";
import { server } from "../index";
import { useEffect } from "react";
import {
  Container,
  HStack,
  VStack,
  Image,
  Text,
  Button,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import Loading from "./Loading";
import { Link } from "react-router-dom";
const CoinsCard = ({ id, name, img, price, symbol, currencySymbol = "₹" }) => {
  return (
    <Link to={`/coin/${id}`}>
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

        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
      </VStack>
    </Link>
  );
};

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setloading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=80&page=${page}`
        );
        setCoins(data);
        setloading(false);
      } catch (error) {
        console.error();
        alert("Coin Fetch Error : Come Back Soon!!");
        setloading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <RadioGroup name="currency" defaultValue="inr">
            <Stack spacing={"4"} direction="row" p={"8"}>
              <Radio value="inr" onClick={() => setCurrency("inr")}>
                INR
              </Radio>
              <Radio value="usd" onClick={() => setCurrency("usd")}>
                USD
              </Radio>
              <Radio value="eur" onClick={() => setCurrency("eur")}>
                EUR
              </Radio>
            </Stack>
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinsCard
                id={i.id}
                name={i.name}
                img={i.image}
                price={i.current_price.toLocaleString("en-in")}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((item, index) => (
              <Button
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => {
                  changePage(index + 1);
                }}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
