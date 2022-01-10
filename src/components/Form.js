import React from "react";
import {
  Stack,
  Button,
  useColorModeValue,
  Heading,
  Container,
  Flex,
} from "@chakra-ui/react";

export default function Form() {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      py={12}
    >
      <Container
        maxW={"lg"}
        bg={useColorModeValue("white", "whiteAlpha.100")}
        boxShadow={"xl"}
        rounded={"lg"}
        p={6}
        direction={"column"}
      >
        <Heading
          as={"h2"}
          fontSize={{ base: "xl", sm: "2xl" }}
          textAlign={"center"}
          mb={5}
        >
          Contáctanos
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"12px"}
        >
          <Button
            bg={"#317e90"}
            w="100%"
            color="white"
            _hover={{
              bg: "#6fb8d2",
            }}
          >
            ventas@officekeyssadecv.com
          </Button>
        </Stack>
      </Container>
    </Flex>
  );
}
