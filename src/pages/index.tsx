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
        {/* Header */}
        <Header />
        {/* Banner */}
        <Banner img_bg_url="/images/bg-banner-svg.svg" itsHomeBanner>
          <SimpleGrid flex="1" gap="30" minChildWidth="500px">
            <Box p={["6", "6"]} ml="24" mt="10">
              <Text color="light.headings-text" fontSize="4xl" mb="4">
                5 Continentes, <p>infinitas possibilidades.</p>
              </Text>
              <Text color="dark.info50" fontSize="xl" fontWeight={400} mb="4">
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Box>

            <Box p={["6", "8"]} mt="8" align="center">
              <Image src="/images/airplane.svg" alt="airplane" />
            </Box>
          </SimpleGrid>
        </Banner>
        {/* Travel types */}

        <TravellingTypes />
        {/* Divider  sobrescreve layerStyles no theme e chama layerStyle no componente, no singular msm*/}

        {/* <Box layerStyle="divider" mt="20" mb="12" /> */}
        <Divider />
        <Text align="center" fontSize="4xl" pb="1" mb="12">
          Vamos nessa? <p>Então escolha seu continente</p>
        </Text>
        {/* Continent Slide */}
        <Slider />
      </Flex>
    </>
  );
}
