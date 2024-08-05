import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Stack
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-export-i18n";

const openPositionsList = [
  {
    id: 0,
    jobRole: "Growth Marketer",
    jobLocation: "Remote",
    link: "https://careers.persistence.one/jobs/696QHAnIpO59/growth-marketer-remote"
  },
  {
    id: 1,
    jobRole: "DevSecOps Engineer ",
    jobLocation: "Remote",
    link: "https://careers.persistence.one/jobs/wFBf6o0LKUhK/devsecops-engineer-remote"
  },
  {
    id: 2,
    jobRole: "Frontend Engineer",
    jobLocation: "Remote",
    link: "https://careers.persistence.one/jobs/gHvya2A-f2oa/front-end-engineer-remote"
  },
  {
    id: 3,
    jobRole: "Senior Rust Engineer",
    jobLocation: "Remote",
    link: "https://careers.persistence.one/jobs/Um1WiGrfyzOk/senior-rust-engineer-remote"
  }
];

const JoinTeamPanel = () => {
  const { t } = useTranslation();
  return (
    <Box as="section" maxW={"1100px"}>
      <Text
        mb={"30px"}
        mt={"24px"}
        color={"text.blackHigh"}
        fontSize={{ base: "16px", md: "20px" }}
      >
        {t("VALUES_SECTION3_JOIN_TEAM_CONTENT")}
      </Text>
      <Box gap={4} display={{ base: "block", md: "flex" }}>
        <Card borderRadius={"20px"} p={6} mb={{ base: "10px", md: "0" }}>
          <VStack align={"flex-start"}>
            <Text fontSize={12}> {t("VISION")}</Text>
            <Text
              fontWeight={700}
              color={"#423F40"}
              fontSize={{ base: "20px", md: "30px" }}
            >
              {t("HUMILITY")}
            </Text>
            <Text
              fontWeight={700}
              fontSize={{ base: "20px", md: "30px" }}
              color={"#423F40"}
            >
              {t("INTEGRITY")}
            </Text>
            <Text
              fontWeight={700}
              fontSize={{ base: "20px", md: "30px" }}
              color={"#423F40"}
            >
              {t("PATIENCE")}
            </Text>
            <Text
              fontWeight={700}
              fontSize={{ base: "20px", md: "30px" }}
              color={"#423F40"}
            >
              {t("PERSISTENCE")}
            </Text>
            <Link href={"/values"}>
              <Button
                variant={"link"}
                rightIcon={<ArrowForwardIcon />}
                color={"text.headingBlack"}
                fontSize={14}
                _hover={{ color: "primary.red" }}
              >
                {t("VALUES_SECTION3_VISION_TEXT")}
              </Button>
            </Link>
          </VStack>
        </Card>
        <Card borderRadius={20} flex={1} p={8}>
          <Stack
            justify={"space-between"}
            pb={{ base: "16px", md: "30px" }}
            direction={{ base: "column", md: "row" }}
            alignItems={"center"}
          >
            <VStack align={"flex-start"} gap={0} mb={{ base: "10px", md: "0" }}>
              <Text fontWeight={600} fontSize={20} color="#3D3D3D">
                {t("OPEN_POSITIONS")}
              </Text>
              {/* <Text fontSize={14} color={"#3D3D3D"} opacity={0.7}>
                Ready to join? Reach out to us!
              </Text> */}
            </VStack>
            <Link
              href={"https://careers.persistence.one/jobs"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={"ternary"}
                borderColor={"#423F40CC"}
                color={"text.headingBlack"}
                fontSize={14}
                bg={"transparent"}
                w={{ base: "100%", md: "auto" }}
                px={12}
              >
                {t("VIEW_ALL")}
              </Button>
            </Link>
          </Stack>
          <SimpleGrid
            columns={2}
            gap={4}
            display={{ base: "none", md: "grid" }}
          >
            {openPositionsList.map((position) => (
              <Link href={position.link} key={position.id}>
                <HStack
                  align={"center"}
                  justify={"space-between"}
                  border={"1px solid transparent"}
                  bg="#FCF7F1"
                  py={4}
                  px={6}
                  borderRadius={20}
                  _hover={{ border: "1px solid #E59636" }}
                >
                  <VStack align={"flex-start"} gap={0}>
                    <Text fontWeight={600} fontSize={14} color={"#3D3D3D"}>
                      {position.jobRole}
                    </Text>
                    <Text fontSize={12} color={"#3D3D3D"} opacity={0.7}>
                      {position.jobLocation}
                    </Text>
                  </VStack>

                  <Button
                    variant={"link"}
                    rightIcon={<ArrowForwardIcon />}
                    color={"text.headingBlack"}
                    fontSize={14}
                  />
                </HStack>
              </Link>
            ))}
          </SimpleGrid>
        </Card>
      </Box>
    </Box>
  );
};

export default JoinTeamPanel;
