import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  SimpleGrid,
  chakra,
} from "@chakra-ui/react";
import BlogCard from "./BlogCard";

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Articles = () => {
  return (
    <SimpleGrid
      columns={{ base: "1", sm: "1", md: "2", lg: "3" }}
      spacing="6"
      justifyContent="center"
    >
      {posts.map((post) => (
        <BlogCard />
      ))}
    </SimpleGrid>
  );
};

export default Articles;
