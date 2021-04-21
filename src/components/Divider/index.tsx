import { Box } from "@chakra-ui/layout";

export function Divider() {
  return (
    <Box
      w={["60px", "90px"]}
      mx="auto"
      border={["1px solid", "2px solid"]}
      borderColor={["dark.headings-text", "dark.black"]}
      my={["6", "20"]}
    />
  );
}
