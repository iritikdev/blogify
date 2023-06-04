import {
  Button,
  CloseButton,
  HStack,
  IconButton,
  Image,
  ListItem,
  Stack,
  UnorderedList,
  VStack,
  Flex,
  chakra,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
  Box,
} from "@chakra-ui/react";
import { logo } from "../assets";
import { HamburgerIcon } from "@chakra-ui/icons";

const menu = [
  { id: 1, title: "Home", url: "/" },
  { id: 1, title: "Article", url: "/" },
  {
    id: 1,
    title: "Pages",
    url: "/",
    items: [
      { id: 12, title: "Pages 1", url: "/" },
      { id: 13, title: "Pages 2", url: "/" },
      { id: 14, title: "Pages 3", url: "/" },
    ],
  },
  { id: 1, title: "Pricing", url: "/" },
  { id: 1, title: "Faq", url: "/" },
];

export const Header = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.h1 fontSize="xl" fontWeight="extrabold" ml="2">
              Blogify&#9679;
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Pages</Button>
              <Button variant="ghost">Articles</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">About</Button>
              <Button variant="outline" borderRadius={"full"} px={8}>
                Sign in
              </Button>
            </HStack>
            <Button colorScheme="brand" size="sm">
              Get Started
            </Button>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<HamburgerIcon />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Features
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Company
                </Button>
                <Button w="full" variant="ghost">
                  Sign in
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
};
