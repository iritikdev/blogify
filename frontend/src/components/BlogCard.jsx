import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
function BlogCard(props) {
  return (
    <Card
      maxW="sm"
      boxShadow={"0px 20px 50px #f2f2f2"}
      _hover={{
        transform: "translateY(-3px)",
        transition: "all .4s ease",
        cursor: "pointer",
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
        borderTopRadius={"lg"}
        height={"200"}
      />
      <CardBody>
        <Stack mt="3" spacing="3">
          <Heading fontSize={24} color="blue.900">
            Choosing The Best Photo Printer
          </Heading>
          <Text fontSize={16} color={"blue.800"} lineHeight={"1.5"}>
            Majority of peole will work in jobs that don’t exist today.
          </Text>
        </Stack>
      </CardBody>

      <CardFooter
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Stack>
          <Text
            fontSize={14}
            fontWeight={"bold"}
            fontStyle={"italic"}
            color="blue.900"
          >
            Matthew Summers
          </Text>
          <Flex columnGap={1} alignItems={"center"} mt={1}>
            <Icon as={CheckCircleIcon} color="#36B37E" />

            <Text
              fontSize={12}
              fontStyle={"italic"}
              margin={"0"}
              color={"gray.500"}
            >
              Verified writer
            </Text>
          </Flex>
        </Stack>
        <Text
          fontWeight={"bold"}
          fontSize={14}
          color={"gray.500"}
          fontStyle={"italic"}
        >
          02 May
        </Text>
      </CardFooter>
    </Card>
  );
}

export default BlogCard;
