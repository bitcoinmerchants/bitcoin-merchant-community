"use client";

import React from 'react';
import { Box, Heading, Text, Button, Flex, Image, Container, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const CommunitySection = () => {
    return (
        <Box 
            bg="white" 
            py={{ base: "60px", md: "80px", lg: "100px" }}
            px={{ base: "20px", md: "40px", lg: "60px" }}
        >
            <Container maxW="1250px">
                <Flex 
                    direction={{ base: "column", lg: "row" }}
                    align="center"
                    justify="space-between"
                    gap={{ base: "40px", lg: "120px" }}
                >
                    {/* Left Side - Store Icon */}
                    <Box 
                        flex="1"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image 
                            src="/assets/CommunityImages/CommunitySectionImage.svg"
                            alt="Bitcoin merchant store"
                            maxW={{ base: "350px", md: "350px", lg: "350px" }}
                            w="100%"
                            h="auto"
                        />
                    </Box>

                    {/* Right Side - Text Content */}
                    <Box 
                        flex="1" 
                        maxW={{ base: "100%", lg: "460px" }}
                    >
                        <Heading 
                            as="h2"
                            fontSize={{ base: "32px", md: "40px", lg: "32px" }}
                            fontWeight="700"
                            lineHeight="1.2"
                            mb={6}
                            color="black"
                        >
                            Connect with merchants who already get paid in bitcoin.
                        </Heading>

                        <Text 
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.7"
                            mb={5}
                            color="black"
                        >
                            Thousands of merchants in the US and around the world already accept bitcoin payments.
                        </Text>

                        <Text 
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.7"
                            mb={8}
                            color="black"
                        >
                            Join our community's Facebook Group to learn from their experiences and hear how bitcoin saves them from credit card fees.
                        </Text>

                        <Button
                            onClick={() => window.open("https://www.facebook.com/groups/bitcoinmerchantcommunity", "_blank")}
                            bg="#FFC533"
                            color="black"
                            fontSize="16px"
                            fontWeight="700"
                            textTransform="uppercase"
                            width={{base: "100%", md: "300px", lg: "460px"}}
                            height="46px"
                            borderRadius="5px"
                            border="2px solid #000"
                            mb={10}
                            _hover={{
                                bg: "#E8B02E"
                            }}
                            transition="all 0.2s"
                        >
                            JOIN OUR FACEBOOK GROUP
                        </Button>

                        <Box>
                            <Heading 
                                as="h3"
                                fontSize={{ base: "28px", md: "32px", lg: "32px" }}
                                fontWeight="700"
                                lineHeight="1.2"
                                mb={5}
                                color="black"
                            >
                                See who does business with bitcoin in your area.
                            </Heading>

                            <Text 
                                fontSize={{ base: "16px", md: "20px" }}
                                lineHeight="1.7"
                                mb={5}
                                color="black"
                            >
                                <Link 
                                    href="https://btcmap.org" 
                                    isExternal 
                                    color="black" 
                                    fontWeight="700"
                                    textDecoration="underline"
                                    _hover={{ color: "#00A651" }}
                                >
                                    BTC Map
                                </Link>
                                {' '}is a collaborative, open-source directory that shows people seeking bitcoin-friendly merchants where to find you.
                            </Text>

                            <Link 
                                href="https://btcmap.org/map" 
                                isExternal
                                fontSize={{ base: "16px", md: "20px" }}
                                fontWeight="700"
                                color="black"
                                textDecoration="underline"
                                display="inline-flex"
                                alignItems="center"
                                gap={2}
                                _hover={{ color: "#00A651" }}
                            >
                                View nearby bitcoin merchants
                                <ExternalLinkIcon />
                            </Link>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default CommunitySection;





