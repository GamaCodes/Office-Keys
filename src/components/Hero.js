import React from "react";

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#6fb8d2",
                zIndex: -1,
              }}
            >
              Office
            </Text>
            <br />{" "}
            <Text color={"#317e90"} as={"span"}>
              Keys
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Empresa mexicana dedicada a la fabricación, venta, distribución y
            comercialización de artículos de papelería, escolares, de oficina y
            de publicidad. Ofreciendo a nuestros clientes la mayor diversidad de
            artículos y servicios de la mejor calidad, el mejor servicio de
            atención personalizada a los mejores precios.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"#6fb8d2"}
              color={"white"}
              _hover={{
                bg: "#317e90",
              }}
            >
              <Link href={"#section1"}>Conócenos</Link>
            </Button>
            <Button
              rounded={"full"}
              bg={"#317e90"}
              color={"white"}
              _hover={{
                bg: "#6fb8d2",
              }}
            >
              <Link href={"#section1"}>Servicios</Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
