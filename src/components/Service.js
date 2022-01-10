import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function Service() {
  return (
    <Box id="section2">
      <Center>
        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
          Servicios
        </Heading>
      </Center>
      <Center pt={8} bg="#317e90">
        <Flex direction={["column", "row"]}>
          <article class="card">
            <div class="card--front">
              <img
                class="card__img"
                alt="office keys"
                src="https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <h1 class="card__title"> Software </h1>
            </div>
            <div class="card--back">
              <p class="card__title">Software</p>
              <p>
                Licencias de antivirus, sistemas administrativos (ASPEL),
                licenciamiento en ADOBE, licenciamiento en Autodesk y sistemas
                operativos (Microsoft, Linux).
              </p>
            </div>
          </article>
          <article class="card">
            <div class="card--front">
              <img
                class="card__img"
                alt="office keys"
                src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <h1 class="card__title">Equipo de Cómputo </h1>
            </div>
            <div class="card--back">
              <p class="card__title">Equipo de Cómputo</p>
              <p>
                Equipos de escritorio, equipos portátiles, servidores y
                Workstation.
              </p>
            </div>
          </article>
          <article class="card">
            <div class="card--front">
              <img
                class="card__img"
                alt="office keys"
                src="http://www.camrod.net/wp-content/uploads/2016/06/venta_consumibles_impresoras.jpg"
              />
              <h1 class="card__title"> Consumibles </h1>
            </div>
            <div class="card--back">
              <p class="card__title">Consumibles</p>
              <p>
                Cartuchos, tintas, toners, kits de mantenimiento, rollos de
                papel, conectividad, entre otros.
              </p>
            </div>
          </article>
        </Flex>
      </Center>
      <Center py={8} bg="#317e90">
        <Flex direction={["column", "row"]}>
          <article class="card">
            <div class="card--front">
              <img
                class="card__img"
                alt="office keys"
                src="https://images.pexels.com/photos/5727002/pexels-photo-5727002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <h1 class="card__title"> Equipo de Impresión </h1>
            </div>
            <div class="card--back">
              <p class="card__title">Equipo de Impresión</p>
              <p>
                Equipos láser, inyección, monocromático, color, tickets,
                etiquetas, etcétera
              </p>
            </div>
          </article>
          <article class="card">
            <div class="card--front">
              <img
                class="card__img"
                alt="office keys"
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <h1 class="card__title"> Soporte Técnico </h1>
            </div>
            <div class="card--back">
              <p class="card__title">Soporte Técnico</p>
              <p>
                Brindamos servicios de soporte a la mayoría del software que
                comercializamos
              </p>
            </div>
          </article>
        </Flex>
      </Center>
    </Box>
  );
}
