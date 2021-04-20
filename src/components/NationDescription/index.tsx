import { Box, Text } from "@chakra-ui/react";

interface NationDescriptionProps {
  description: string;
}
export function NationDescription({ description }: NationDescriptionProps) {
  return (
    <Box>
      <Text
        textAlign="justify"
        color="dark.black"
        fontSize="xl"
        mb={["2", "2", "4"]}
      >
        {description}
      </Text>
    </Box>
  );
}
