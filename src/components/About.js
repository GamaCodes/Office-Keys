import React from "react";
import { Box, Center, Heading, Image } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Center my={8} id="section1">
        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
          Acerca de
        </Heading>
      </Center>
      <Center bg="#6fb8d2">
        <Box
          maxW="lg"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          my={8}
        >
          <Image
            src="https://images.pexels.com/photos/3862153/pexels-photo-3862153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="office"
          />

          <Box p="6" bg="white">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Misión
            </Box>

            <Box>
              Ofrecer a los consumidores artículos escolares, de oficina,
              papelería y tecnología, de la más alta calidad y al mejor precio
              del mercado, a través de una amplia y efectiva red de distribución
              que cubre el 80% del territorio nacional para llegar a la mayor
              parte de la población participando en el desarrollo personal y
              profesional de los mexicanos.
            </Box>
          </Box>
        </Box>
      </Center>

      <Center bg="#317e90">
        <Box
          maxW="lg"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          my={8}
        >
          <Image
            src="https://images.pexels.com/photos/3862153/pexels-photo-3862153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="office"
          />

          <Box p="6" bg="white">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Visión
            </Box>

            <Box>
              Mantenernos como empresa líder en el mercado en ventas y
              rentabilidad. Ser conocida como una empresa líder y dinámica
              caracterizada por su integridad, tecnología y enfrentar la nueva
              era de la globalización generando nuevas ideas y aprendiendo más
              rápido que la competencia, logrando el orgullo de nuestros
              colaboradores y el reconocimiento de la competencia.
            </Box>
          </Box>
        </Box>
      </Center>

      <Center bg="#6fb8d2">
        <Box
          maxW="lg"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          my={8}
        >
          <Image
            src="https://images.pexels.com/photos/3862153/pexels-photo-3862153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="office"
          />

          <Box p="6" bg="white">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Fortalezas
            </Box>

            <Box>
              <ul>
                <li>Constante preocupación por las necesidades del cliente.</li>
                <li>
                  Introducción de productos de alta calidad y de vanguardia a
                  precios accesibles.
                </li>
                <li>Asesoría personalizada a todos nuestros clientes.</li>
                <li>
                  Apoyo eficiente a comerciantes que incursionan a este giro.
                </li>
                <li>
                  Una relación clara y de confianza con autoridades locales,
                  estatales y federales.
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Center>
    </>
  );
}
