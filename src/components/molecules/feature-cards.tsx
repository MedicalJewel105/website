import React, { useEffect, useState } from "react";
import FeatureCard, {
  FeatureCardInterface
} from "@/components/atoms/feature-card";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  Stack,
  VStack
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { MINTSCAN_ECOSYSTEM_LINK } from "@/utils/config";
import Image from "next/image";

const FeatureCards = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <VStack gap={4} mt={16}>
      <Stack
        gap={4}
        pos={"relative"}
        align={"stretch"}
        direction={{ base: "column", md: "row" }}
      >
        <FeatureCard
          width="60%"
          height="380px"
          category="Story"
          imgWidth={210}
          title="Proof-of-Stake is Everything. Everything will be Restaked."
          description="Learn about our vision, history, and why we foresee a future where Liquid Staking and Restaking becomes the base value layer in crypto."
          image="/images/lock.svg"
          cta={{
            link: "/story",
            linkText: "Explore Our Story",
            isExternal: false
          }}
        />

        <FeatureCard
          width="40%"
          height="380px"
          category="Ecosystem"
          title="Persistence One."
          description="Explore the dApps, 15+ DeFi partners, 100 validators, and more that contribute to the One ecosystem for Staking, Liquid Staking, and Restaking. "
          image="/images/p-ecosystem.svg"
          imgWidth={190}
          cta={{
            link: MINTSCAN_ECOSYSTEM_LINK,
            linkText: "Explore Ecosystem",
            isExternal: true
          }}
          type="vertical"
        />
        <Box
          pos={"absolute"}
          top={"-20px"}
          right={"-20px"}
          background={"#252424"}
          w={"220px"}
          h={"210px"}
          zIndex={-1}
          borderRadius={"20px"}
          opacity={isVisible ? 1 : 0}
          transition="opacity 1s"
        />
      </Stack>

      <Stack
        align={"stretch"}
        gap={4}
        pos={"relative"}
        direction={{ base: "column", md: "row" }}
      >
        <FeatureCard
          category="Technology"
          title={`Technically Superb. Superbly Powerful.`}
          description="See how Persistence One offers a technically advanced, secure, and robust infrastructure for modular and smart-contract dApps."
          image="/images/robot-arm.svg"
          imgWidth={130}
          cta={{
            link: "/tech",
            linkText: "Explore Tech",
            isExternal: false
          }}
          type="vertical"
          width="40%"
          height="450px"
        />

        <VStack align={"stretch"} gap={4} justify={"space-between"}>
          <FeatureCard
            category="People"
            title={`Humility. Integrity. Patience. Persistence.`}
            description="Understand our core values and learn how to become a Persister and contribute."
            image="/images/cylinders.svg"
            imgWidth={280}
            cta={{
              link: "/people",
              linkText: "Explore People",
              isExternal: false
            }}
          />

          <Flex
            justify={"space-between"}
            bg={"#252424"}
            borderRadius={40}
            p={4}
            pl={8}
            align={"center"}
          >
            <Text
              color={"#FCFCFC"}
              fontSize={{ base: "16px", md: "27px" }}
              fontWeight={700}
            >
              Yields. TVL. Traction.
            </Text>
            <Link
              href={"https://defillama.com/chain/Persistence"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                px={{ base: "16px", md: "24px" }}
                rightIcon={<ArrowForwardIcon />}
                variant={"secondary"}
              >
                View Stats
              </Button>
            </Link>
          </Flex>
        </VStack>
      </Stack>

      <Stack
        gap={4}
        pos={"relative"}
        align={"stretch"}
        direction={{ base: "column", md: "row" }}
      >
        <FeatureCard
          width="70%"
          height="380px"
          category="Roadmap"
          title="Building in Cosmos since 2019."
          description="From being one of the first Cosmos app chains to enable IBC, CosmWasm, and Liquid Staking Module (LSM) to deploying pSTAKE Finance and Dexter and bringing Restaking to Cosmos, Persistence One’s development pushes the boundaries of the Proof-of-Stake landscape."
          image="/images/story-page/story-hero.svg"
          imgWidth={366}
          cta={{
            link: "/story",
            linkText: ""
          }}
        />
        <Box
          pos={"absolute"}
          bottom={"-20px"}
          left={"-20px"}
          background={"#C73339"}
          w={"220px"}
          h={"210px"}
          zIndex={-1}
          borderRadius={"20px"}
          opacity={isVisible ? 1 : 0}
          transition="opacity 1s"
        />
        <FeatureCard
          width="30%"
          height="380px"
          category=""
          title=""
          description=""
          imgWidth={319}
          image="/images/liquidity.svg"
          cta={{
            link: "/xprt",
            linkText: ""
          }}
          type="vertical"
          cardType={"img"}
        />
      </Stack>
    </VStack>
  );
};

export default FeatureCards;
