import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack,
  Container,
  Stack
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import HomePageStats from "@/components/molecules/page-stats";

const homePagesStats = [
  {
    statValue: "$ 11.68M",
    statLabel: "TVL"
  },
  {
    statValue: "$ 18.38M",
    statLabel: "IBC Volume (30 Days)"
  },
  {
    statValue: "$ 0.23947",
    statLabel: "Average Transaction Cost"
  }
];

const HeroSection = () => {
  return (
    <Box
      px={"60px"}
      className={"hero-content"}
      backgroundImage="url('/images/hero-bg.svg')"
      backgroundPosition="100% 0"
      backgroundRepeat="no-repeat"
      backgroundSize={"45% 90%"}
    >
      <Container maxW={"1440px"} px={"0"}>
        <Spacer h={"150px"} />
        <Flex justify={"space-between"} mb={"60px"}>
          <VStack align={"stretch"}>
            <Heading
              variant={"main"}
              color={"text.blackHigh"}
              textAlign={{ base: "center", md: "left" }}
              fontSize={{ base: "26px", md: "60px" }}
              lineHeight={{ base: "32px", md: "72px" }}
              mb={"20px"}
            >
              Staking. <br />
              Liquid Staking. <br />
              Restaking.
            </Heading>
            <Text
              textAlign={{ base: "center", md: "left" }}
              w={{ base: "100%", md: "55%" }}
              mb={6}
            >
              Persistence One is an app chain for dApps to securely build an
              economy that maximizes liquid staking and restaking yield.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} gap={4}>
              <Button variant={"secondary"} rightIcon={<ArrowForwardIcon />}>
                See Our Story
              </Button>
              <Button>Explore Ecosystem</Button>
            </Stack>
          </VStack>
        </Flex>
        <HomePageStats stats={homePagesStats} />
        <Spacer h={"85px"} />
      </Container>
    </Box>
  );
};

export default HeroSection;