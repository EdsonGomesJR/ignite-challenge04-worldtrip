import { Box, Text } from "@chakra-ui/react";

interface NationDescriptionProps {
  description: string;
}
export function NationDescription({ description }: NationDescriptionProps) {
  return (
    <Box>
      <Text
        textAlign="justify"
        color={["dark.headings-text", "dark.black"]}
        fontSize={["sm", "xl"]}
        mb={["1", "4"]}
      >
        {description}
      </Text>
    </Box>
  );
}
