import { Flex, SimpleGrid, Text, Box, Image } from "@chakra-ui/react";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { TravellingTypes } from "../components/TravellingTypes";

export default function Home() {
  return (
    <>
      <Head>
        <title>wordltrip | Conheça o mundo</title>
      </Head>
      <Flex direction="column">
        <Header />
        <Banner img_bg_url="/images/bg-banner-svg.svg" itsHomeBanner />
        <TravellingTypes />
        {/* Divider  sobrescreve layerStyles no theme e chama layerStyle no componente, no singular msm*/}
        {/* <Box layerStyle="divider" mt="20" mb="12" /> */}
        <Divider />
        <Text
          align="center"
          color="dark.headings-text"
          fontSize={["xl", "4xl"]}
          fontWeight={500}
          pb="1"
          mb="12"
        >
          Vamos nessa? <p>Então escolha seu continente</p>
        </Text>
        {/* Continents Slide */}
        <Slider />
      </Flex>
    </>
  );
}
