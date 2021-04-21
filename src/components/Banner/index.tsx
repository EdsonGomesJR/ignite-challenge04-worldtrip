import {
  Flex,
  Text,
  SimpleGrid,
  Box,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

interface BannerProps {
  img_bg_url: string;
  title?: string;

  itsHomeBanner?: boolean;
}

export function Banner(props: BannerProps) {
  const variant = useBreakpointValue({ base: "none", xl: "flex" });
  return (
    <Flex
      w="100%"
      h={
        props.itsHomeBanner
          ? ["163px", "350px", "80"]
          : ["163px", "350px", "500px"]
      }
      bg={`url(${props.img_bg_url})`}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
    >
      {!props.itsHomeBanner ? (
        <Text
          mx="auto"
          my={["auto"]}
          ml={["", "50px", "128px"]}
          color="light.headings-text"
          fontSize={["3xl", "4xl"]}
          textShadow="0 0 3px black, 0 0 5px black"
          fontWeight="bold"
          mb={["auto", "14"]}
        >
          {props.title}
        </Text>
      ) : (
        <SimpleGrid
          flex="1"
          gap={["0", "30"]}
          minChildWidth={["250px", "500px"]}
        >
          <Box p={["2", "6"]} ml={["4", "24"]} mt={["5", "10"]}>
            <Text
              color="light.headings-text"
              fontSize={["xl", "4xl"]}
              mb={["2", "4"]}
            >
              5 Continentes, <p>infinitas possibilidades.</p>
            </Text>
            <Text color="light.info" fontSize={["sm", "xl"]} fontWeight={400}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

          <Box p={["6", "8"]} mt="8" align="center" display={variant}>
            <Image src="/images/airplane.svg" alt="airplane" />
          </Box>
        </SimpleGrid>
      )}
    </Flex>
  );
}
