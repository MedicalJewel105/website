import {
  Box,
  Button,
  Heading,
  Text,
  Stack,
  useMediaQuery
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import Link from "next/link";
import { useAppStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import TallyForm from "@/components/molecules/tally-form";

const HeroSection = () => {
  const [isTablet] = useMediaQuery("(min-width: 768px)");

  return (
    <Box className={"hero-content"} bg={"#1d1208"} pos={"relative"}>
      <Box
        minH={{
          base: "100%", // 0-48em
          md: "400", // 48em-80em,
          lg: "550px", // 48em-80em,
          xl: "700px", // 80em+ 772
          "2xl": "700px"
        }}
        maxH={{
          base: "100%", // 0-48em
          md: "440", // 48em-80em,
          lg: "572px", // 48em-80em,
          xl: "720px", // 80em+ 772
          "2xl": "800px"
        }}
        height={{
          base: "80vh", // 0-48em
          md: "70vh", // 48em-80em,
          lg: "70vh", // 48em-80em,
          xl: "100vh", // 80em+
          "2xl": "100vh"
        }}
        pos={"relative"}
        display={"flex"}
        zIndex={10}
        pt={"122px"}
        maxW={"1440px"}
        mx={"auto"}
      >
        <Box
          // mb={{ base: "20px", md: "60px" }}
          pt={{ base: "40px", md: "50px", xl: "122px" }}
          pl={{ base: "20px", md: "80px" }}
          pr={{ base: "20px", md: "0px" }}
          pb={{ base: "80px", md: "0px" }}
          display="flex"
        >
          {isTablet ? (
            <Box
              display={{ base: "none", md: "block" }}
              pos={"absolute"}
              top={"0"}
              left={"0"}
              right={"0"}
              height={"100%"}
              // mt={"48px"}
            >
              <video
                autoPlay={true}
                preload="auto"
                muted={true}
                loop={true}
                src="/images/home-page/hero.mp4"
                className="bg-video"
              />
            </Box>
          ) : null}
          <Box
            zIndex={10}
            position={"relative"}
            display={"flex"}
            justifyContent={{
              base: "center",
              md: "center",
              "2xl": "flex-start"
            }}
            flexDir={"column"}
          >
            <Heading
              variant={"main"}
              color={"text.whiteFull"}
              textAlign={"left"}
              maxW={{ base: "400px", lg: "600px", "2xl": "640px" }}
              fontSize={{ md: "26px", base: "30px", lg: "52px" }}
              lineHeight={{ md: "44px", base: "50px", lg: "70px" }}
              mb={{ base: "20px", lg: "12px" }}
            >
              <Text
                as="span"
                color={"#E59636"}
                fontSize={{ md: "26px", base: "38px", lg: "72px" }}
                lineHeight={{ md: "40px", base: "50px", lg: "86px" }}
              >
                Bitcoin
              </Text>
              <br />
              Cross-Chain Swaps
            </Heading>
            <Text
              textAlign={"left"}
              maxW={{ base: "400px", xl: "580px" }}
              mb={{ base: "32px", lg: "29px" }}
              color={"#FFFFFFCC"}
              fontSize={{ base: "16px", xl: "26px" }}
              lineHeight={{ base: "28px", xl: "39px" }}
            >
              Fast, zero slippage swaps across Bitcoin L2s. Powered by Intents.
              Secured by Bitcoin.
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              gap={{ base: 6, lg: 4 }}
            >
              <Link
                href="https://blog.persistence.one/2024/07/17/bridge-without-bridging-why-btcfi-needs-an-interoperability-solution/"
                target="_black"
                rel="noopenner noreferrer"
                passHref
                className={"inline-block"}
              >
                <Button
                  w={{ base: "100%", md: "193px" }}
                  h={"46px"}
                  variant={"primary"}
                  rightIcon={<ArrowForwardIcon />}
                >
                  Learn More
                </Button>
              </Link>
              <TallyForm page={"home"} />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
