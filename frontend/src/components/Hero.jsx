import {
  Button,
  FormControl,
  HStack,
  Input,
  Tag,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { chat } from "../assets";

const tags = ["Design", "User Interface", "User Experience"];

const Hero = () => {
  return (
    <HStack
      justifyContent="space-between"
      my={{ base: "12", sm: "12", md: "12", lg: "0" }}
    >
      <VStack
        align={"baseline"}
        rowGap={4}
        paddingX={{ sm: "24", md: "24", lg: "0" }}
      >
        <Text
          textAlign={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "start",
          }}
          fontSize={{ base: "3xl", sm: "5xl" }}
          fontWeight={"extrabold"}
          lineHeight={"1.3"}
        >
          Read the most interesting articles
        </Text>
        <Text
          marginBottom={"2rem"}
          textAlign={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "start",
          }}
          lineHeight={1.8}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Text>
        <FormControl display={{ base: "block", sm: "flex" }}>
          <Input
            type="text"
            placeholder="Search article"
            _placeholder={{ fontStyle: "italic" }}
            mb="2.5"
          />
          <Button
            backgroundColor={"blue.500"}
            color="white"
            width={{ base: "100%", sm: "fit-content" }}
          >
            Search
          </Button>
        </FormControl>
        <HStack
          alignSelf={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "flex-start",
          }}
          flexWrap={"wrap"}
          alignItems={"flex-start"}
        >
          <Text
            fontWeight={"bold"}
            fontStyle={"italic"}
            color={"gray.600"}
            mb={2}
          >
            Popular Tags:
          </Text>
          {tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </HStack>
      </VStack>
      <Image
        display={{ base: "none", sm: "none", md: "none", lg: "block" }}
        src={chat}
        boxSize={"480px"}
      />
    </HStack>
  );
};

export default Hero;
