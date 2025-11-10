import React from 'react';
import { Box, Flex, Image, Text, Link as ChakraLink } from '@chakra-ui/react';

const Header = () => {
    return (
        <Box bg="white">
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="nowrap" 
                padding={{ base: "1.5rem 1rem", md: "1.5rem 2rem", lg: "2.5rem 3rem" }}
                color="gray.800"
                maxW="1450px"
                mx="auto"
            >
                {/* Logo Section */}
                <Flex align="center">
                    <Image 
                        src="/assets/HeaderImages/logo.svg" 
                        alt="Bitcoin Merchant Community Logo" 
                        h={{ base: "40px", md: "50px", lg: "60px" }} 
                    />
                </Flex>

                {/* Right Side Link */}
                <Flex align="center">
                    <ChakraLink
                        href="#download-kit"
                        display={{ base: "none", md: "block" }}
                        fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                        fontWeight="400"
                        color="black"
                        textDecoration="underline"
                        sx={{
                            scrollBehavior: 'smooth'
                        }}
                        _hover={{
                            textDecoration: "none",
                            opacity: 0.8
                        }}
                    >
                        Help us spread the word. Download a kit.
                    </ChakraLink>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;

