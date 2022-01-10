import React from "react";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="#6fb8d2" px={4}>
        <Flex h={24} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <AiOutlineClose /> : <AiOutlineMenuUnfold />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            bg="#6fb8d2"
            color="white"
          />

          <Flex alignItems={"center"}>
            <svg
              width="68"
              height="84"
              viewBox="0 0 108 124"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.05846 17.728C6.00913 61.428 14.4171 78.1587 14.5038 78.3267L14.6091 78.5507C17.2678 84.8213 23.5371 94.6827 38.3065 106.045C45.0745 111.252 51.2411 114.917 53.9051 116.424C75.2931 104.713 89.2545 85.7053 89.3958 85.5107C101.532 68.836 101.905 29.0053 101.758 17.8907C77.9531 17.6293 59.3478 9.52933 53.9865 6.93466C39.4105 14.9867 14.5571 17.192 6.05846 17.728ZM53.8825 123.293L52.4758 122.555C52.1385 122.377 44.0825 118.123 34.6985 110.915C21.9998 101.161 13.3798 91.1027 9.07579 81.0173C8.14913 79.1813 -0.416205 60.912 0.0157948 14.824L0.0424615 11.932L2.93313 11.8253C3.26779 11.812 36.6705 10.472 52.3025 0.907996L53.7865 -3.67443e-06L55.3185 0.823991C55.5225 0.933325 76.1878 11.8387 102.934 11.8387C103.509 11.8387 104.086 11.8333 104.67 11.8227L107.636 11.7707L107.75 14.7333C107.834 16.8987 109.634 68.0013 94.2985 89.0733C93.6785 89.928 78.7798 110.251 55.2891 122.556L53.8825 123.293Z"
                fill="#367C8E"
              />
              <path
                d="M8.74589 20.1343C8.35123 62.2423 16.5299 77.6969 16.5299 77.6969C25.2659 98.3023 53.8499 113.308 53.8499 113.308V10.0543C39.2059 19.0143 8.74589 20.1343 8.74589 20.1343Z"
                fill="#367C8E"
              />
              <path
                d="M98.9543 20.1343C73.4223 20.5809 53.8503 10.0543 53.8503 10.0543V113.308C74.3703 102.558 87.533 84.4009 87.533 84.4009C100.746 66.2449 98.9543 20.1343 98.9543 20.1343Z"
                fill="#70B8D1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M62.9557 78.8829L56.3343 56.5136C58.5623 55.5523 60.1223 53.3363 60.1223 50.7549C60.1223 47.2896 57.3143 44.4816 53.8503 44.4816C50.385 44.4816 47.5757 47.2896 47.5757 50.7549C47.5757 53.3363 49.1383 55.5523 51.3663 56.5136L44.7437 78.8829H62.9557Z"
                fill="white"
              />
            </svg>
          </Flex>
          <HStack spacing={8} alignItems={"center"}>
            <Box color="white">Office keys</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"#section1"}
                color="white"
              >
                Acerca de
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"#section2"}
                color="white"
              >
                Servicios
              </Link>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href={"#section1"}
              >
                Acerca de
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href={"#section2"}
              >
                Servicios
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
