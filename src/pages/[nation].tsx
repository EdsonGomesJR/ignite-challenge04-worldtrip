import { Flex, SimpleGrid, Text, Box } from "@chakra-ui/react";

import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { NationMetricsInfo } from "../components/NationMetricsInfo";
import { NationDescription } from "../components/NationDescription";
import { CityCard } from "../components/CityCard";
import Head from "next/head";
interface Nation {
  id: number;
  name: string;
  title: string;
  description: string;
  num_countries: number;
  num_languages: number;
  num_city_most_visited: number;
  url_nation_img: string;
  cities_100: Array<{
    city: string;
    country: string;
    country_code: string;
    img_url: string;
  }>;
}

interface NationProps {
  nation: Nation;
}

export default function Nation({ nation }: NationProps) {
  return (
    <>
      <Head>
        <title>{nation.title} | wordltrip</title>
      </Head>

      <Header hasBackArrow />
      <Banner img_bg_url={nation.url_nation_img} title={nation.title} />
      <SimpleGrid
        w="100%"
        mx="auto"
        align="center"
        maxW={1140}
        columns={[1, 1, 2]}
        gap={["8", "8", "16"]}
        mt={["4", "4", "12"]}
        p={["6", "6", "8"]}
      >
        <NationDescription description={nation.description} />
        <NationMetricsInfo
          num_countries={nation.num_countries}
          num_languages={nation.num_languages}
          num_city_most_visited={nation.num_city_most_visited}
        />
      </SimpleGrid>
      <Box w="100%" mx="auto" maxW={1140} p={["6", "6", "8"]}>
        <Text fontSize="3xl" fontWeight={500} color="dark.headings-text">
          Cidades +100
        </Text>
      </Box>
      <SimpleGrid
        w="100%"
        mx="auto"
        maxW={1160}
        columns={[1, 1, 4]}
        spacing="45px"
        p={["6", "6", "8"]}
      >
        {nation.cities_100.map((cities) => (
          <CityCard
            key={cities.img_url}
            imgUrl={cities.img_url}
            name={cities.city}
            country={cities.country}
            country_code={cities.country_code}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { nation } = context.params;
  const request = await fetch("http://localhost:3000/api/get");
  const json = await request.json();

  let data_filter = json.filter((element) => element.name === nation);

  return {
    props: {
      nation: data_filter[0],
    },
    redirect: 60 * 60 * 24, //24h
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const request = await fetch("http://localhost:3000/api/get");
  const json = await request.json();
  let allPaths = [];
  for (let data of json) {
    allPaths.push(data.name);
  }
  const paths = allPaths.map((path) => {
    return {
      params: {
        nation: path,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
