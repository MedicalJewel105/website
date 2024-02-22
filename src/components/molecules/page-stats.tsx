import React from "react";

import { Box, Center, Divider, HStack, Text, VStack } from "@chakra-ui/react";

type PageStat = {
  statValue: string;
  statLabel: string;
};

const PageStats = ({ stats }: { stats: PageStat[] }) => {
  return (
    <HStack gap={0} maxW={"70%"}>
      {stats.map((stat: PageStat, index: number) => (
        <HStack key={stat.statLabel}>
          <VStack key={stat.statLabel} align={"center"} gap={0}>
            <Text
              color={"primary.red"}
              fontSize={{ base: "22px", md: "44px" }}
              fontWeight={700}
            >
              {stat.statValue}
            </Text>
            <Text
              color="text.blackHigh"
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight={400}
            >
              {stat.statLabel}
            </Text>
          </VStack>
          {index !== stats.length - 1 ? (
            <Divider
              borderColor={"#423F4066"}
              orientation="vertical"
              h="80px"
              opacity={0.4}
              mx={8}
              borderWidth={1}
            />
          ) : null}
        </HStack>
      ))}
    </HStack>
  );
};

export default PageStats;