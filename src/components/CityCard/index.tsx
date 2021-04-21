import { Box, Flex, Text } from "@chakra-ui/react";
import Flag from "react-world-flags";

interface CityCardProps {
  imgUrl: string;
  name: string;
  country: string;
  country_code: string;
}

export function CityCard(props: CityCardProps) {
  return (
    <Box mx="auto" w="64">
      <Flex
        borderRadius="4px 4px 0 0"
        w="100%"
        h="40"
        bg={`url(${props.imgUrl})`}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
      />
      <Flex
        h="32"
        align="center"
        justify="space-between"
        border="1px solid"
        borderTop="0"
        borderColor="yellow.highlight"
      >
        <Box pl="4" textAlign="left">
          <Text
            fontWeight={600}
            fontSize={props.name.length >= 12 ? "md" : "xl"}
            textColor="dark.headings-text"
            lineHeight="6"
          >
            {props.name}
          </Text>

          <Text lineHeight="7" mt="1" textColor="dark.info">
            {props.country}
          </Text>
        </Box>
        <Box p={["6", "6", "8"]}>
          <Flex w="50px" h="50px" borderRadius="50%" overflow="hidden">
            <Flag code={`${props.country_code}`} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
