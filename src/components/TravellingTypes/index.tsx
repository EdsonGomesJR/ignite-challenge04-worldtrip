import { SimpleGrid, Box, Text, Image } from "@chakra-ui/react";

export function TravellingTypes() {
  return (
    <SimpleGrid
      w="100%"
      mx="auto"
      align="center"
      maxW={1140}
      columns={5}
      justify="space-between"
      gap="20"
      mt="28"
    >
      <Box>
        <Image src="/images/nightlife.svg" alt="nightlife" />
        <Text mt="6" fontWeight={600}>
          vida noturna
        </Text>
      </Box>
      <Box>
        <Image src="/images/surf.svg" alt="beach" />
        <Text mt="6" fontWeight={600}>
          praia
        </Text>
      </Box>
      <Box>
        <Image pb="1" align="center" src="/images/modern.svg" alt="mordern" />
        <Text mt="6" fontWeight={600}>
          moderno
        </Text>
      </Box>
      <Box>
        <Image pb="4" src="/images/classic.svg" alt="classic" />
        <Text mt="6" fontWeight={600}>
          clássico
        </Text>
      </Box>
      <Box>
        <Image src="/images/earth.svg" alt="earth" />
        <Text mt="6" fontWeight={600}>
          e mais...
        </Text>
      </Box>
    </SimpleGrid>
  );
}
