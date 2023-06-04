import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { socialImage } from "../assets";

function SocialCard(props) {
  return (
    <Card borderRadius={"lg"} maxW="sm">
      <CardBody>
        <Image
          src={socialImage}
          alt="Green double couch with wooden legs"
          borderRadius={"lg"}
        />
        <Stack mt="8" spacing="3" mx={4} mb={5}>
          <Heading fontSize={24} color="blue.900">
            The best aticles every week
          </Heading>
          <Text fontSize={16} color={"gray.500"} lineHeight={2}>
            Our insurance plans offers are priced the same everywhere else.
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default SocialCard;
