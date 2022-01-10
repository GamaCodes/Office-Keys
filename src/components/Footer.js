import React from "react";

import { Box, Container, Stack, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="#6fb8d2" color="white">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>Office Keys</Link>
          <Link href={"#section1"}>Acerca</Link>
          <Link href={"#section2"}>Servicios</Link>
        </Stack>
        <Text>© 2020 Office Keys</Text>
      </Container>
    </Box>
  );
}
