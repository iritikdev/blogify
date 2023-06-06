import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import SuggestedArticles from "../components/SuggestedArticles";

const postImage =
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

const breadcrumb = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Blog", url: "/blog" },
  { id: 3, name: "Article", url: "/blog/1" },
];

const posts = [
  {
    id: 1,
    title: "Help children get better education",
    publish_date: "2023-05-30",
    image: postImage,
  },
  {
    id: 2,
    title: "Help children get better education",
    publish_date: "2023-05-31",
    image: postImage,
  },
  {
    id: 3,
    title: "Help children get Consectetur Adipiscing",
    publish_date: "2023-06-01",
    image: postImage,
  },
  {
    id: 4,
    title: "Sed Do Eiusmod Help children get",
    publish_date: "2023-06-02",
    image: postImage,
  },
  {
    id: 5,
    title: "Tempor Incididunt",
    publish_date: "2023-06-03",
    image: postImage,
  },
];

const ArticleDetails = () => {
  return (
    <chakra.section
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      gap={6}
    >
      <chakra.article flex={7}>
        <Breadcrumb separator={<ChevronRightIcon color="gray.500" />} mb={5}>
          {breadcrumb.map((b) => (
            <BreadcrumbItem>
              <BreadcrumbLink href={b.url}>{b.name}</BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>

        <Image
          mb={5}
          src={postImage}
          alt=""
          width={"100%"}
          height={"sm"}
          borderRadius={"md"}
        />

        <Link color={"blue.300"} fontSize={14}>
          EDUCATION
        </Link>

        <Text fontWeight={"semibold"} variant={"h2"} fontSize={18} my={4}>
          Help children get better education
        </Text>
        <Text color={"gray.600"} fontSize={16} lineHeight={1.6} mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis.
        </Text>
        <Text color={"gray.600"} fontSize={16} lineHeight={1.6} mb={4}>
          Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor
          id aliquet lectus proin. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus
          vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas
          erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
          senectus et netus. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </Text>
        <Text color={"gray.600"} fontSize={16} lineHeight={1.6} mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis.
        </Text>
      </chakra.article>
      {/* Suggested Articles */}
      <chakra.aside flex={3}>
        <SuggestedArticles posts={posts} />
      </chakra.aside>
    </chakra.section>
  );
};

export default ArticleDetails;
