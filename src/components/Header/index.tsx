import {
  Flex,
  SimpleGrid,
  Text,
  Box,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

interface HeaderProps {
  hasBackArrow?: boolean;
}

export function Header({ hasBackArrow }: HeaderProps) {
  return (
    <Flex align="center" height={["80px", "100px"]}>
      {hasBackArrow && (
        <Flex mr="auto" ml={["2rem", "4rem", "130px"]}>
          <Link href="/">
            <ChevronLeftIcon boxSize={8} color="gray" />
          </Link>
        </Flex>
      )}

      <Flex mx="auto" ml={hasBackArrow ? "64" : ""}>
        <img src="/images/logo.svg" alt="logo" />
      </Flex>
      {hasBackArrow && <Flex ml="auto" mr="auto"></Flex>}
    </Flex>
  );
}
