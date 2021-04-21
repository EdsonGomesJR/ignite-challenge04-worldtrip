import {
  Flex,
  Box,
  Text,
  Popover,
  PopoverTrigger,
  Icon,
  PopoverArrow,
  PopoverContent,
  PopoverBody,
  PopoverCloseButton,
  PopoverHeader,
  Link,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";
interface NationMetricsProps {
  country: string;

  num_countries: number;
  num_languages: number;
  num_city_most_visited: number;
}

export function NationMetricsInfo(props: NationMetricsProps) {
  return (
    <Flex
      px={["", "1rem"]}
      flexWrap={["unset", "wrap"]}
      textAlign={["left", "center"]}
      align={["flex-start", "center"]}
      justifyContent={["space-between", "center"]}
    >
      <Box mr={["1.6rem", "2.6rem"]}>
        <Text
          fontSize={["2rem", "3rem"]}
          fontWeight="600"
          color="yellow.highlight"
          lineHeight="9"
        >
          {props.num_countries}
        </Text>
        <Text
          fontSize={["lg", "1.5rem"]}
          fontWeight={["400", "600"]}
          color="dark.headings-text"
        >
          países
        </Text>
      </Box>
      <Box mr={["1.6rem", "2.6rem"]}>
        <Text
          fontSize={["2rem", "3rem"]}
          fontWeight="600"
          color="yellow.highlight"
          lineHeight="9"
        >
          {props.num_languages}
        </Text>
        <Text
          fontSize={["lg", "1.5rem"]}
          fontWeight={["400", "600"]}
          color="dark.headings-text"
        >
          línguas
        </Text>
      </Box>
      <Box mr={["1.6rem", "2.6rem"]}>
        <Text
          fontSize={["2rem", "3rem"]}
          fontWeight="600"
          color="yellow.highlight"
          lineHeight="9"
        >
          {props.num_city_most_visited}
        </Text>
        <Text
          fontSize={["lg", "1.5rem"]}
          fontWeight={["400", "600"]}
          color="dark.headings-text"
        >
          cidades +100
          <Popover autoFocus={false}>
            <PopoverTrigger>
              <span>
                <Icon
                  cursor="pointer"
                  as={RiInformationLine}
                  ml="1"
                  color="gray.400"
                  w={["10px", "16px"]}
                  h={["10px", "16px"]}
                />
              </span>
            </PopoverTrigger>
            <PopoverContent
              mr={["2", "0"]}
              w={["250px", "350px"]}
              bg="light.headings-text"
              color="gray.700"
            >
              <PopoverArrow bg="light.headings-text" />
              <PopoverCloseButton color="gray.500" />
              <PopoverHeader
                fontWeight="bolder"
                fontSize={["sm", "lg"]}
                color="dark.headings-text"
              >
                Mais informações...
              </PopoverHeader>
              <PopoverBody fontWeight="400" fontSize={["sm", "lg"]}>
                Confira outras informações sobre a{" "}
                <Box as="span" fontWeight="bold">
                  {props.country}
                </Box>{" "}
                clicando{" "}
                <Link
                  isExternal
                  href={`https://www.google.com//search?q=${props.country}`}
                  fontWeight="bolder"
                  color="yellow.highlight"
                >
                  {" "}
                  aqui{" "}
                </Link>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Box>
    </Flex>
  );
}
