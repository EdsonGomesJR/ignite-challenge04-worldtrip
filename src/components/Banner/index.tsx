import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BannerProps {
  img_bg_url: string;
  title?: string;
  children?: ReactNode;
  itsHomeBanner?: boolean;
}

export function Banner(props: BannerProps) {
  return (
    <Flex
      w="100%"
      h={
        props.itsHomeBanner
          ? ["350px", "350px", "80"]
          : ["350px", "350px", "500px"]
      }
      bg={`url(${props.img_bg_url})`}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
    >
      <Text
        my="auto"
        ml={["50px", "128px"]}
        color="light.headings-text"
        fontSize="4xl"
        textShadow="0 0 3px black, 0 0 5px black"
        fontWeight="bold"
        mb="14"
      >
        {props.title}
      </Text>
      {props.children}
    </Flex>
  );
}
