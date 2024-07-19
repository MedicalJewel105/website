import FeatureCards from "@/components/molecules/feature-cards";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Overview = () => {
  return (
    <Box bg={"#FCF7F1"} pos="relative">
      <Container
        maxW={"1300px"}
        px={{ base: "20px", md: "30px" }}
        pb={{ base: "40px", md: "80px" }}
        pt={{ base: "30px", md: "60px" }}
      >
        <Box className="aos-init aos-animate" data-aos="fade-up">
          <Heading
            mb={"50px"}
            textAlign={"center"}
            color={"#633C0D"}
            fontSize={{ base: "26px", md: "48px" }}
            lineHeight={{ base: "32px", md: "72px" }}
          >
            Why Persistence One?
          </Heading>
          <FeatureCards />
        </Box>
      </Container>
    </Box>
  );
};

export default Overview;
