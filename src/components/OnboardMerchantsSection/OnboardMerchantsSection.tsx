"use client";

import React from 'react';
import { Box, Heading, Text, Flex, Container, Link, Image } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

const OnboardMerchantsSection = () => {
    return (
        <Box 
            id="download-kit"
            bg="#F5F5F5" 
            py={{ base: "60px", md: "80px", lg: "100px" }}
            px={{ base: "20px", md: "40px", lg: "60px" }}
        >
            <Container maxW="1250px">
                <Flex 
                    direction={{ base: "column", lg: "row" }}
                    align="center"
                    justify="space-between"
                    gap={{ base: "40px", lg: "80px" }}
                >
                    {/* Left Side - Accept Bitcoin Sticker Image */}
                    <Box 
                        flex="1"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image 
                            src="/assets/OnboardMerchantsImages/AcceptBitcoinImage.png"
                            alt="Accept Bitcoin sticker"
                            maxW={{ base: "250px", md: "300px", lg: "350px" }}
                            w="100%"
                            h="auto"
                        />
                    </Box>

                    {/* Right Side - Text Content */}
                    <Box 
                        flex="1" 
                        maxW={{ base: "100%", lg: "600px" }}
                    >
                        <Heading 
                            as="h2"
                            fontSize={{ base: "32px", md: "40px", lg: "32px" }}
                            fontWeight="700"
                            lineHeight="1.2"
                            mb={6}
                            color="black"
                        >
                            Turn your favorite shops into bitcoin-friendly stops.
                        </Heading>

                        <Text 
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.7"
                            mb={6}
                            color="black"
                        >
                            Already invested in bitcoin? Get a ready-to-print kit and make the case to merchants. It includes a 1-page leave behind and a guide to help you confidently onboard merchants.
                        </Text>

                        <Link 
                            href="#" 
                            fontSize={{ base: "16px", md: "20px" }}
                            fontWeight="700"
                            color="black"
                            textDecoration="underline"
                            display="inline-flex"
                            alignItems="center"
                            gap={2}
                            _hover={{ color: "#00A651" }}
                        >
                            Download the kit
                            <DownloadIcon />
                        </Link>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default OnboardMerchantsSection;




