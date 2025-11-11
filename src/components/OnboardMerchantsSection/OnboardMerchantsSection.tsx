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
            <Container>
                <Flex 
                    direction={{ base: "column", xl: "row" }}
                    align="center"
                    justify="space-between"
                    gap={{ base: "40px", lg: "40px", xl: "80px" }}
                >
                    {/* Left Side - Accept Bitcoin Sticker Image */}
                    <Box 
                        flex="1"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image 
                            src="/assets/OnboardMerchantsImages/AcceptBitcoinImage.svg"
                            alt="Accept Bitcoin sticker"
                            maxW={{ base: "200px", sm: "250px", md: "300px", lg: "300px", xl: "350px" }}
                            w="100%"
                            h="auto"
                            loading="eager"
                            style={{ 
                                imageRendering: '-webkit-optimize-contrast',
                                transform: 'translateZ(0)',
                                backfaceVisibility: 'hidden'
                            }}
                        />
                    </Box>

                    {/* Right Side - Text Content */}
                    <Box 
                        flex="1" 
                        maxW={{ base: "100%", xl: "600px" }}
                    >
                        <Heading 
                            as="h2"
                            fontSize={{ base: "32px", md: "40px", lg: "40px", xl: "32px" }}
                            fontWeight="700"
                            lineHeight="1.2"
                            mb={6}
                            color="black"
                        >
                            Turn your favorite shops into bitcoin-friendly stops.
                        </Heading>

                        <Text 
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={6}
                            color="black"
                        >
                            Already invested in bitcoin? Get a ready-to-print kit and make the case to merchants. It includes a 1-page leave behind and a guide to help you confidently onboard merchants.
                        </Text>

                        <Link 
                            href="https://raw.githubusercontent.com/bitcoinmerchants/marketing-assets/main/Merchant%20Onbaording%20Kit.pdf" 
                            fontSize={{ base: "16px", md: "20px" }}
                            fontWeight="700"
                            color="black"
                            textDecoration="underline"
                            display="inline-flex"
                            alignItems="center"
                            gap={2}
                            _hover={{ color: "#00A651" }}
                            download="Merchant_Onboarding_Kit.pdf"
                            isExternal
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




