"use client";

import React from 'react';
import { Box, Heading, Text, Flex, Container, Link, Image, Icon } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { FaDiscord } from 'react-icons/fa';

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
                    <Box 
                        flex="1"
                        display={{ base: "none", xl: "flex" }}
                        justifyContent="center"
                        alignItems="center"
                        order={{ base: 2, xl: 1 }}
                    >
                        <Link
                            href="https://raw.githubusercontent.com/bitcoinmerchants/marketing-assets/main/Merchant%20Onboarding%20Kit.pdf"
                            download="Merchant_Onboarding_Kit.pdf"
                            isExternal
                            _hover={{ opacity: 0.8 }}
                            transition="opacity 0.2s"
                        >
                            <Box
                                as="img"
                                src="/assets/OnboardMerchantsImages/marketingKit.png"
                                alt="marketing kit"
                                maxW={{ base: "200px", sm: "250px", md: "250px", lg: "300px", xl: "340px" }}
                                w="100%"
                                h="auto"
                                filter="drop-shadow(0px 15px 20px rgba(0, 0, 0, 0.25))"
                                cursor="pointer"
                                sx={{
                                    imageRendering: 'auto',
                                    WebkitUserSelect: 'none',
                                    userSelect: 'none',
                                }}
                            />
                        </Link>
                    </Box>

                    {/* Right Side - Text Content */}
                    <Box 
                        flex="1" 
                        maxW={{ base: "100%", xl: "600px" }}
                        order={{ base: 1, xl: 2 }}
                    >
                        <Heading 
                            as="h2"
                            fontSize={{ base: "32px", md: "40px", lg: "40px", xl: "32px" }}
                            fontWeight="700"
                            lineHeight="1.2"
                            mb={6}
                            maxW={{ base: "100%", xl: "420px" }}
                            color="black"
                        >
                            Turn your favorite shops into bitcoin-friendly stops.
                        </Heading>

                        <Text 
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={6}
                            maxW={{ base: "100%", xl: "420px" }}
                            color="black"
                        >
                            Already invested in bitcoin? Get a ready-to-print kit and make the case to merchants. It includes a 1-page leave behind and a guide to help you confidently onboard merchants.
                        </Text>

                        <Link 
                            href="https://raw.githubusercontent.com/bitcoinmerchants/marketing-assets/main/Merchant%20Onboarding%20Kit.pdf" 
                            fontSize={{ base: "16px", md: "20px" }}
                            fontWeight="700"
                            color="black"
                            textDecoration="underline"
                            display="inline-flex"
                            alignItems="center"
                            gap={3}
                            _hover={{ color: "#00A651" }}
                            download="Merchant_Onboarding_Kit.pdf"
                            isExternal
                        >
                            Download the kit
                            <DownloadIcon />
                        </Link>

                        <Box 
                            display={{ base: "flex", xl: "none" }}
                            justifyContent="center"
                            alignItems="center"
                            mt={{ base: "40px", md: "50px" }}
                            mb={{ base: "10px", md: "0px" }}
                        >
                            <Link
                                href="https://raw.githubusercontent.com/bitcoinmerchants/marketing-assets/main/Merchant%20Onboarding%20Kit.pdf"
                                download="Merchant_Onboarding_Kit.pdf"
                                isExternal
                                _hover={{ opacity: 0.8 }}
                                transition="opacity 0.2s"
                            >
                                <Box
                                    as="img"
                                    src="/assets/OnboardMerchantsImages/marketingKit.png"
                                    alt="marketing kit"
                                    maxW={{ base: "200px", sm: "250px", md: "250px", lg: "300px" }}
                                    w="100%"
                                    h="auto"
                                    filter="drop-shadow(0px 15px 20px rgba(0, 0, 0, 0.25))"
                                    cursor="pointer"
                                    sx={{
                                        imageRendering: 'auto',
                                        WebkitUserSelect: 'none',
                                        userSelect: 'none',
                                    }}
                                />
                            </Link>
                        </Box>

                        {/* Second Content Block */}
                        <Box mt={{ base: "50px", md: "50px" }}>
                            <Heading 
                                as="h2"
                                fontSize={{ base: "32px", md: "40px", lg: "40px", xl: "32px" }}
                                fontWeight="700"
                                lineHeight="1.2"
                                mb={6}
                                maxW={{ base: "100%", xl: "420px" }}
                                color="black"
                            >
                                Learn from the best at advocating for bitcoin.
                            </Heading>

                            <Text 
                                fontSize={{ base: "16px", md: "20px" }}
                                lineHeight="1.4"
                                mb={6}
                                maxW={{ base: "100%", xl: "430px" }}
                                color="black"
                            >
                                Get tricks, share knowledge, and find out what small business owners find convincing. Maybe meet some cool people, who knows.
                            </Text>

                            <Link 
                                href="https://discord.gg/f2xHv5QYK7" 
                                fontSize={{ base: "16px", md: "20px" }}
                                fontWeight="700"
                                color="black"
                                textDecoration="underline"
                                display="inline-flex"
                                alignItems="center"
                                gap={3}
                                _hover={{ color: "#00A651" }}
                                isExternal
                            >
                                Join the BMC Bitcoiner Discord
                                <Icon 
                                    as={FaDiscord} 
                                    boxSize={{ base: "20px", md: "24px" }}
                                    color="black"
                                />
                            </Link>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default OnboardMerchantsSection;




