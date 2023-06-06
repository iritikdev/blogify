import { Box, Flex, Image, Text } from "@chakra-ui/react";

const SuggestedArticles = ({ posts = [] }) => {
  return (
    <Box boxShadow={"lg"} padding="6" borderRadius={"lg"}>
      <Text mb={5} fontWeight={"bold"} fontSize={18}>
        Latest Article
      </Text>
      {posts.map((post) => (
        <Flex display={"flex"} flexDirection={"row"} columnGap={4} mb={4}>
          <Image
            src={post.image}
            width={20}
            height={20}
            borderRadius={"lg"}
            objectFit={"cover"}
          />
          <Box>
            <Text fontWeight={"600"} mb={2} lineHeight={1.6}>
              {post.title}
            </Text>
            <Text fontSize={14} color={"gray.600"} fontWeight={"light"}>
              {post.publish_date}
            </Text>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default SuggestedArticles;
