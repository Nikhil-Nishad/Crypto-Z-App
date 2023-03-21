import {
  Container,
  Box,
  RadioGroup,
  Radio,
  VStack,
  Text,
  Img,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Progress,
  HStack,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { server } from "../index";
import Loading from "./Loading";
import Chart from "./Chart";

import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const params = useParams();
  const [coins, setCoins] = useState({});
  const [loading, setloading] = useState(true);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

  const switchChartStats = (i) => {
    switch (i) {
      case "24h":
        setDays("24h");
        setloading(true);
        break;

      case "7d":
        setDays("7d");
        setloading(true);
        break;

      case "14d":
        setDays("14d");
        setloading(true);
        break;

      case "30d":
        setDays("30d");
        setloading(true);
        break;

      case "60d":
        setDays("60d");
        setloading(true);
        break;

      case "200d":
        setDays("200d");
        setloading(true);
        break;

      case "1y":
        setDays("365d");
        setloading(true);
        break;

      case "max":
        setDays("max");
        setloading(true);
        break;

      default:
        setDays("24h");
        setloading(true);
        break;
    }
  };

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );

        setCoins(data);
        setChartArray(chartData.prices);
        setloading(false);
      } catch (error) {
        console.error();
        alert("Coin Fetch Error : Come Back Soon!!");
        setloading(false);
      }
    };
    fetchCoin();
  }, [params.id, currency, days]);

  return (
    <>
      <Container maxW={"container.xl"}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Box width={"full"} borderWidth={1}>
              <Chart currency={currencySymbol} arr={chartArray} days={days} />
            </Box>

            <HStack p={"4"} wrap="wrap">
              {btns.map((i) => (
                <Button key={i} onClick={() => switchChartStats(i)}>
                  {i}
                </Button>
              ))}
            </HStack>

            <RadioGroup onChange={setCurrency} value={currency} p={"8"}>
              <HStack spacing={"4"}>
                <Radio value="inr">INR</Radio>
                <Radio value="usd">USD</Radio>
                <Radio value="eur">EUR</Radio>
              </HStack>
            </RadioGroup>

            <VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
              <Text fontSize={"small"} alignSelf={"center"} opacity={"0.7"}>
                Last Updated On :{" "}
                {Date(coins.market_data.last_updated).split("G")[0]}
              </Text>
              <Img
                src={coins.image.large}
                w={"16"}
                objectFit="contain"
                h={"16"}
              />
              <Stat>
                <StatLabel>{coins.name}</StatLabel>
                <StatNumber>
                  {currencySymbol}
                  {coins.market_data.current_price[currency]}
                </StatNumber>
                <StatHelpText>
                  <StatArrow
                    type={
                      coins.market_data.price_change_percentage_24h > 0
                        ? "increase"
                        : "decrease"
                    }
                  />
                  {coins.market_data.price_change_percentage_24h}%
                </StatHelpText>
              </Stat>
              <Badge
                fontSize={"2xl"}
                bgColor={"blackAlpha.800"}
                color={"white"}
              >{`# ${coins.market_data.market_cap_rank}`}</Badge>

              <CustomBar
                high={`${currencySymbol}${coins.market_data.high_24h[currency]}`}
                low={`${currencySymbol}${coins.market_data.low_24h[currency]}`}
              />

              <Box w={"full"} p={"4"}>
                <Item
                  title={"Max Supply"}
                  value={coins.market_data.max_supply}
                />
                <Item
                  title={"Circulating Supply"}
                  value={coins.market_data.circulating_supply}
                />
                <Item
                  title={"Market Cap"}
                  value={`${currencySymbol}${coins.market_data.market_cap[
                    currency
                  ].toLocaleString("en-in")}`}
                />
                <Item
                  title={"All Time Low"}
                  value={`${currencySymbol}${coins.market_data.atl[currency]}`}
                />
                <Item
                  title={"All Time High"}
                  value={`${currencySymbol}${coins.market_data.ath[currency]}`}
                />
              </Box>
            </VStack>
          </>
        )}
      </Container>
    </>
  );
};

const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>{value.toLocaleString("en-in")}</Text>
  </HStack>
);

const CustomBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress value={50} colorScheme={"teal"} w="full" />
    <HStack justifyContent={"space-between"} w="full">
      <Badge children={low} colorScheme={"red"} />
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={high} colorScheme={"green"} />
    </HStack>
  </VStack>
);

export default CoinDetails;
