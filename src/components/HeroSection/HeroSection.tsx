"use client";

import React from 'react';
import { Box, Heading, Text, Button, Flex, Image, Container } from '@chakra-ui/react';

const HeroSection = () => {
    return (
        <Box 
            bg="white" 
            py={{ base: "30px", md: "80px", lg: "80px" }}
            px={{ base: "20px", md: "40px", lg: "60px" }}
        >
            <Container maxW="1250px">
                <Flex 
                    direction={{ base: "column", lg: "row" }}
                    align="center"
                    justify="space-between"
                    gap={{ base: "0px", md: "20px", lg: "60px" }}
                >
                    {/* Left Side - Text Content */}
                    <Box 
                        flex="1" 
                        maxW={{ base: "100%", lg: "550px" }}
                    >
                        <Heading 
                            as="h1"
                            fontSize={{ base: "40px", md: "56px", lg: "70px" }}
                            fontWeight="700"
                            lineHeight="1.1"
                            mb={{base: "30px", md: "48px", lg: "48px"}}
                            color="black"
                            maxW={{ base: "100%", lg: "550px" }}
                        >
                            We help small businesses keep more of their profit.
                        </Heading>

                        <Text 
                            fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                            lineHeight="1.6"
                            mb={{base: "15px", md: "48px", lg: "48px"}}
                            color="black"
                            maxW={{ base: "100%", lg: "460px" }}
                        >
                            The Bitcoin Merchant Community is a growing global community of small businesses helping one another defeat{' '}
                            <Text as="span" color="#00A651" fontWeight="700">
                                3% credit card fees
                            </Text>{' '}
                            by accepting bitcoin.
                        </Text>

                       
                    </Box>

                    {/* Right Side - 3D Image */}
                    <Box 
                        flex="1"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image 
                            src="/assets/HeroImages/HeroImage.png"
                            alt="3% melting"
                            maxW={{ base: "600px", md: "600px", lg: "800px" }}
                            w="100%"
                            h="auto"
                        />
                    </Box>
                </Flex>
                 {/* Buttons */}
                 <Flex 
                            gap={{ base: "20px", md: "30px", lg: "20px" }} 
                            mt={{ base: "40px", md: "50px", lg: "20px" }}
                            direction="row"
                            flexWrap="wrap"
                            align="center"
                        >
                            <Button
                                as="a"
                                href="#accept-bitcoin"
                                bg="#FFC533"
                                color="black"
                                fontSize={{ base: "14px", md: "16px", lg: "16px" }}
                                fontWeight="700"
                                textTransform="uppercase"
                                width={{ base: "100%", md: "300px", lg: "326px" }}
                                height="46px"
                                borderRadius="5px"
                                border="2px solid #000"
                                flexShrink={0}
                                boxSizing="border-box"
                                _hover={{
                                    bg: "#E8B02E"
                                }}
                                transition="all 0.2s"
                            >
                                LEARN HOW TO ACCEPT BITCOIN
                            </Button>

                            <Button
                                onClick={() => window.open("https://www.facebook.com/groups/bitcoinmerchantcommunity", "_blank")}
                                bg="white"
                                color="black"
                                fontSize={{ base: "14px", md: "16px", lg: "16px" }}
                                fontWeight="700"
                                textTransform="uppercase"
                                width={{ base: "100%", md: "300px", lg: "326px" }}
                                height="46px"
                                borderRadius="5px"
                                border="2px solid #000"
                                flexShrink={0}
                                boxSizing="border-box"
                                _hover={{
                                    bg: "#F0F0F0"
                                }}
                                transition="all 0.2s"
                            >
                                JOIN OUR FACEBOOK COMMUNITY
                            </Button>
                        </Flex>
            </Container>
        </Box>
    );
};

export default HeroSection;

