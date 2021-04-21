import { Flex, Image, Link, useBreakpointValue } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

interface HeaderProps {
  hasBackArrow?: boolean;
}

export function Header({ hasBackArrow }: HeaderProps) {
  const isMobile = useBreakpointValue({ base: false, sm: true });
  return (
    <Flex align="center" height={["80px", "100px"]}>
      {hasBackArrow && (
        <Flex mr="auto" ml={["1rem", "130px"]}>
          <Link href="/">
            <ChevronLeftIcon boxSize={8} color="gray" />
          </Link>
        </Flex>
      )}

      <Flex boxSize={["150px", "300px"]} mx="auto" ml="auto">
        <Image src="/images/logo.svg" alt="logo" />
      </Flex>
      {hasBackArrow && <Flex ml="auto" mr="auto"></Flex>}
    </Flex>
  );
}
