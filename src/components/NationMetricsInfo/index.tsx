import { Flex, Box, Text } from "@chakra-ui/react";

interface NationMetricsProps {
  num_countries: number;
  num_languages: number;
  num_city_most_visited: number;
}

export function NationMetricsInfo(props: NationMetricsProps) {
  return (
    <Flex
      px="1rem"
      flexWrap="wrap"
      textAlign="center"
      align="center"
      justifyContent="center"
      mb="12"
    >
      <Box ml={["0", "2rem", "0"]} mr={["1.6rem", "2.6rem", "2.6rem"]}>
        <Text
          fontSize={["2rem", "3rem", "3rem"]}
          fontWeight="600"
          color="yellow.highlight"
          lineHeight="2.5rem"
        >
          {props.num_countries}
        </Text>
        <Text
          fontSize={["1.12rem", "1.5rem"]}
          fontWeight="600"
          lineHeight="2.5rem"
          color="dark.headings-text"
        >
          países
        </Text>
      </Box>
      <Box mr={["1.6rem", "2.6rem", "2.6rem"]}>
        <Text
          fontSize={["2rem", "3rem"]}
          fontWeight="600"
          color="yellow.highlight"
          lineHeight="2.5rem"
        >
          {props.num_languages}
        </Text>
        <Text
          fontSize={["1.12rem", "1.5rem"]}
          fontWeight="600"
          lineHeight="2rem"
          color="dark.headings-text"
        >
          línguas
        </Text>
      </Box>
      <Box mr={["1.6rem", "2.6rem", "2.6rem"]}>
        <Text
          fontSize={["2rem", "3rem"]}
          fontWeight="600"
          color="yellow.highlight"
          lineHeight="2.5rem"
        >
          {props.num_city_most_visited}
        </Text>
        <Text
          fontSize={["1.12rem", "1.5rem"]}
          fontWeight="600"
          lineHeight="2rem"
          color="dark.headings-text"
        >
          cidades +100
        </Text>
      </Box>
    </Flex>
  );
}
