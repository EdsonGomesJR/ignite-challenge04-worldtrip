import { Box, Text, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export function Slider() {
  const nameImagesAndLinks = [
    "europa",
    "africa",
    "asia",
    "americadonorte",
    "americadosul",
    "oceania",
  ];
  const headingH1 = [
    "Europa",
    "Africa",
    "Asia",
    "America do Norte",
    "America do Sul",
    "Oceania",
  ];
  const headingH2 = [
    "O continente mais antigo",
    "Natureza sem igual",
    "Culturas milenares",
    "Aventuras de tirar o folegô",
    "As Praias mais bonitas",
    "Turistar a vontade",
  ];
  const slides = [];
  for (let i = 0; i < nameImagesAndLinks.length; i++) {
    slides.push(
      i
      // <SwiperSlide key={nameImagesAndLinks[i]}>
      //   <Image
      //     src={`./SliderImages/${nameImagesAndLinks[i]}.jpg`}
      //     alt={`${nameImagesAndLinks[i]}`}
      //     width="100%"
      //     height="100%"
      //     objectFit="cover"
      //   />

      //   <Flex
      //     color={theme.colors.light.headingsText}
      //     position="absolute"
      //     top="0"
      //     right="0"
      //     width="100%"
      //     height="100%"
      //     alignItems="center"
      //     justifyContent="center"
      //   >
      //     <Link
      //       href={`/${nameImagesAndLinks[i]}`}
      //       transitionDuration="0.2s"
      //       _hover={{ filter: "brightness(0.8)" }}
      //       _active={{ filter: "brightness(0.5)" }}
      //     >
      //       <Stack
      //         alignItems="center"
      //         textShadow="0 0 3px black, 0 0 5px black"
      //         textAlign="center"
      //       >
      //         <Heading as="h1" fontSize="3rem" mb="1rem">
      //           {headingH1[i]}
      //         </Heading>
      //         <Heading as="h2" fontSize="1.5rem">
      //           {headingH2[i]}
      //         </Heading>
      //       </Stack>
      //     </Link>
      //   </Flex>
      // </SwiperSlide>
    );
  }

  return (
    <Flex
      w="100%"
      h={["250px", "450px"]}
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
    >
      <Swiper
        loop={true}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ width: "100%", flex: "1" }}
      >
        {slides.map((continent) => (
          <SwiperSlide key={nameImagesAndLinks[continent]}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage={`url('./SliderImages/${nameImagesAndLinks[continent]}.jpg')`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              <Stack textShadow="0 0 3px black, 0 0 5px black">
                <Link href={`/${nameImagesAndLinks[continent]}`}>
                  <a>
                    <Heading
                      fontSize={["3xl", "4xl", "5xl"]}
                      color="light.headingsText"
                      fontWeight="bold"
                    >
                      {headingH1[continent]}
                    </Heading>
                    <Text
                      fontWeight="bold"
                      color="light.headingsText"
                      fontSize={["0.8rem", "1xl", "2xl"]}
                      mt={["2", "4"]}
                    >
                      {headingH2[continent]}
                    </Text>
                  </a>
                </Link>
              </Stack>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
