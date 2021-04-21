import { Grid, GridItem } from "@chakra-ui/react";
import TravelInfosContainer from "./TravelInfosContainer";

export function TravellingTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["4", "32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem>
        <TravelInfosContainer imgUrl="nightlife" text="vida noturna" />
      </GridItem>
      <GridItem>
        <TravelInfosContainer imgUrl="surf" text="praia" />
      </GridItem>
      <GridItem>
        <TravelInfosContainer imgUrl="modern" text="moderno" />
      </GridItem>
      <GridItem>
        <TravelInfosContainer imgUrl="classic" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TravelInfosContainer imgUrl="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
