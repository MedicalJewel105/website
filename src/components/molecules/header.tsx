import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Popover,
  Text,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  VStack,
  Container,
  Spacer,
  Stack,
  useDisclosure,
  PlacementWithLogical
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Icon from "./Icon";
import {
  fetchChainTVL,
  fetchDexterInfo,
  fetchDexterPoolInfo,
  fetchOsmosisPoolInfo,
  fetchTokenPrices,
  getBnbTVL,
  getCosmosTVL
} from "@/pages/api";
import { useAppStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import { decimalize, decimalizeRaw } from "@/utils/helpers";

const menuItems = [
  {
    id: 0,
    name: "Learn",
    subItems: [
      {
        title: "Story",
        description: "Learn about the Persistent Vision and our origin story.",
        icon: "announcement",
        iconType: "fill",
        link: "/story",
        isExternal: false,
        comingSoon: false
      },
      {
        title: "FAQs",
        description: "Frequently Asked Questions",
        icon: "faq",
        iconType: "stroke",
        link: "/faqs",
        isExternal: false,
        comingSoon: false
      },
      {
        title: "Blog",
        description:
          "Read about the latest partnerships and major product and tech updates",
        icon: "people",
        iconType: "fill",
        link: "https://blog.persistence.one/",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "Roadmap",
        description: "",
        icon: "road",
        iconType: "stroke",
        link: "/roadmap",
        isExternal: false,
        comingSoon: true
      }
    ]
  },
  {
    id: 1,
    name: "Network",
    subItems: [
      {
        title: "XPRT",
        description: "Lorem ipsum dolor sit Lorem ipsum",
        icon: "plogo",
        iconType: "fill",
        link: "/xprt",
        isExternal: false,
        comingSoon: false
      },
      {
        title: "Tech",
        description: "Lorem ipsum dolor sit Lorem ipsum",
        icon: "tech",
        iconType: "stroke",
        link: "/tech",
        isExternal: false,
        comingSoon: false
      },
      {
        title: "Documentation",
        description: "Lorem ipsum dolor sit Lorem ipsum",
        icon: "doc1",
        iconType: "stroke",
        link: "https://docs.persistence.one",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "Stats",
        description: "",
        icon: "stats1",
        iconType: "stroke",
        link: "/xprt",
        isExternal: true,
        comingSoon: true
      },
      {
        title: "Ecosystem",
        description: "",
        icon: "ecosystem",
        iconType: "fill",
        link: "/ecosystem",
        isExternal: false,
        comingSoon: true
      }
    ]
  },
  {
    id: 2,
    name: "Products",
    subItems: [
      {
        title: "pSTAKE Finance",
        description:
          "Liquid Stake leading Cosmos tokens like ATOM, DYDX, and OSMO.",
        icon: "liquidstake",
        iconType: "stroke",
        link: "https://app.pstake.finance",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "Dexter",
        description:
          "Trade and provide liquidity of Liquid Staked Tokens, Stablecoins, and other Cosmos assets.",
        icon: "trade",
        iconType: "fill",
        link: "https://app.dexter.zone",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "XPRT Staking",
        description:
          "Stake XPRT to help secure the network and earn staking rewards",
        icon: "secure",
        iconType: "stroke",
        link: "https://wallet.keplr.app/chains/persistence",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "pWallet",
        description: "Manage and transfer XPRT tokens and staked delegations",
        icon: "secure",
        iconType: "stroke",
        link: "https://wallet.keplr.app/chains/persistence",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "pBridge",
        description: "Transfer tokens between Ethereum and Persistence One",
        icon: "tech",
        iconType: "stroke",
        link: "https://bridge.persistence.one",
        isExternal: true,
        comingSoon: false
      }
    ]
  },
  {
    id: 3,
    name: "Community",
    subItems: [
      {
        title: "People",
        description:
          "Get to know Persistence One contributors, our values and how to become a Persister.",
        icon: "people",
        iconType: "fill",
        link: "/people",
        isExternal: false,
        comingSoon: false
      },
      {
        title: "Careers",
        description:
          "Find opportunities to contribute to the ecosystem with Persistence Labs",
        icon: "people",
        iconType: "fill",
        link: "https://forum.persistence.one/",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "Community Forum",
        description:
          "Participate in community discussions or share your ideas to grow Persistence One",
        icon: "announcement",
        iconType: "fill",
        link: "https://forum.persistence.one/",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "Download Media Kit",
        description: "All your media and press needs.",
        icon: "download",
        iconType: "stroke",
        link: "https://persistence.notion.site/Persistence-Media-Kit-50e8f0eacab1466ebe7899d3773a48a3",
        isExternal: true,
        comingSoon: false
      },
      {
        title: "Social",
        description: "",
        icon: "ecosystem",
        iconType: "fill",
        link: "/ecosystem",
        isExternal: false,
        comingSoon: true
      }
    ]
  }
];

const getMenuList = (
  placement: PlacementWithLogical | undefined,
  trigger: "click" | "hover" | undefined
) => {
  return menuItems.map((item: any) => (
    <Popover placement={placement} trigger={trigger} key={`hover-${item.id}`}>
      <PopoverTrigger>
        <Text
          cursor={"pointer"}
          px={"12px"}
          py={"8px"}
          borderRadius={"6px"}
          _hover={{ bg: "#C732381A", color: "#C73238" }}
        >
          {item.name}
        </Text>
      </PopoverTrigger>
      <PopoverContent borderRadius={6}>
        <PopoverArrow />
        <PopoverBody p={4}>
          <VStack align={"start"} gap={4}>
            {item.subItems.map((subItem: any) =>
              subItem.comingSoon ? (
                <HStack
                  key={subItem.title}
                  cursor={"not-allowed"}
                  className={"nav-item coming-soon"}
                  gap={4}
                  fontWeight={500}
                  _hover={{ fontWeight: 700 }}
                >
                  <Box
                    w={"40px"}
                    h={"40px"}
                    borderRadius={"100%"}
                    className={"icon-box"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Icon
                      icon={subItem.icon}
                      viewClass={`nav-icon ${subItem.iconType}`}
                    />
                  </Box>
                  <VStack align={"start"} gap={0}>
                    <Text cursor={"pointer"} fontSize={16} color={"#878787"}>
                      {subItem.title}{" "}
                      <Text as={"span"} fontWeight={300} fontSize={12}>
                        (Coming Soon)
                      </Text>
                    </Text>
                    <Text fontSize={14} color={"#3D3D3D"} fontWeight={400}>
                      {subItem.description}
                    </Text>
                  </VStack>
                </HStack>
              ) : (
                <Link
                  href={subItem.link}
                  key={subItem.title}
                  target={subItem.isExternal ? "_blank" : "_self"}
                >
                  <HStack
                    cursor={"pointer"}
                    className={"nav-item"}
                    gap={4}
                    fontWeight={500}
                    _hover={{ fontWeight: 700 }}
                  >
                    <Box>
                      <Box
                        w={"40px"}
                        h={"40px"}
                        borderRadius={"100%"}
                        className={"icon-box"}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <Icon
                          icon={subItem.icon}
                          viewClass={`nav-icon ${subItem.iconType}`}
                        />
                      </Box>
                    </Box>
                    <VStack align={"start"} gap={0}>
                      <Text
                        cursor={"pointer"}
                        fontSize={16}
                        color={"primary.red"}
                      >
                        {subItem.title}{" "}
                      </Text>
                      <Text fontSize={14} color={"#3D3D3D"} fontWeight={400}>
                        {subItem.description}
                      </Text>
                    </VStack>
                  </HStack>
                </Link>
              )
            )}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  ));
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    let body: any = document.getElementsByTagName("body")[0];
    body.classList = "";
    window.addEventListener("scroll", scrollNavigation, true);
  }, []);

  const scrollNavigation = () => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    let topbar = document.getElementById("is-sticky") as HTMLElement;
    if (top > 50) {
      topbar.classList.add("nav-bar");
    } else {
      topbar.classList.remove("nav-bar");
    }
  };

  const [
    setTokenPrices,
    setPstakeTvl,
    setDexterTVl,
    setDexterTotalVolume,
    setDexterPoolInfo,
    setOsmoPoolInfo,
    setPersistenceTvl
  ] = useAppStore(
    (state) => [
      state.setTokenPrices,
      state.setPstakeTvl,
      state.setDexterTVl,
      state.setDexterTotalVolume,
      state.setDexterPoolInfo,
      state.setOsmoPoolInfo,
      state.setPersistenceTvl
    ],
    shallow
  );

  useEffect(() => {
    const fetch = async () => {
      const chainTvl = await fetchChainTVL();
      setPersistenceTvl(chainTvl);
    };
    fetch();
  }, []);

  //fetching pstake info
  useEffect(() => {
    const fetch = async () => {
      const tokenPrices = await fetchTokenPrices();
      const [cosmosTvlResponse, osmoTvlResponse, dydxTvlResponse, bnbTvl] =
        await Promise.all([
          getCosmosTVL("cosmos"),
          getCosmosTVL("osmo"),
          getCosmosTVL("dydx"),
          getBnbTVL()
        ]);
      const pstkeTvl =
        Number(decimalize(cosmosTvlResponse)) * tokenPrices.ATOM +
        bnbTvl * tokenPrices.BNB +
        Number(decimalize(osmoTvlResponse)) * tokenPrices.OSMO +
        Number(decimalizeRaw(dydxTvlResponse, 18)) * tokenPrices.DYDX;
      setPstakeTvl(pstkeTvl);
      setTokenPrices(tokenPrices);
    };
    fetch();
  }, []);

  //fetching dexter info
  useEffect(() => {
    const fetch = async () => {
      const response = await fetchDexterPoolInfo();
      const resp = await fetchDexterInfo();
      const osmoResponse = await fetchOsmosisPoolInfo();
      setDexterTVl(resp.tvl);
      setDexterTotalVolume(resp.volume);
      setDexterPoolInfo(response);
      setOsmoPoolInfo(osmoResponse);
      console.log(resp, "fetchDexterInfo", response);
    };
    fetch();
  }, []);

  return (
    <Box
      id={"is-sticky"}
      className={"navbar-container"}
      transition={"all 0.3s"}
      bg={{ base: "#f5f5f5", md: "transparent" }}
    >
      <Container
        maxW={"1440px"}
        px={{ base: "20px", md: "70px" }}
        transition={"all 0.3s"}
        py={"20px"}
      >
        <Flex
          as={"nav"}
          justify={"between"}
          align={"center"}
          display={{ base: "none", md: "flex" }}
          className={"navigation-bar"}
        >
          <Box>
            <Link href="/">
              <Image
                src="/images/persistence-logo-dark.svg"
                alt="Persistence Logo"
                width={251}
                height={32}
              />
            </Link>
          </Box>
          <Spacer />
          <Stack
            gap="56px"
            justify="center"
            align={"center"}
            direction={{ base: "column", md: "row" }}
          >
            {getMenuList("top-start", "hover")}
          </Stack>
          <Spacer />
          <Box />
        </Flex>
        <Flex
          as={"nav"}
          justify={"space-between"}
          align={"center"}
          className={"navigation-bar"}
          display={{ base: "flex", md: "none" }}
        >
          <Box>
            <Link href="/">
              <Image
                src="/images/persistence-logo-dark.svg"
                alt="Persistence Logo"
                width={180}
                height={32}
              />
            </Link>
          </Box>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            border={"0px"}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
        {isOpen ? getMenuList(undefined, "click") : null}
      </Container>
    </Box>
  );
};

export default Header;
