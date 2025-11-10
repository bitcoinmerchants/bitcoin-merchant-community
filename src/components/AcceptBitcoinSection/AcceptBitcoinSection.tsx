"use client";

import React from 'react';
import { Box, Heading, Text, Flex, Container, Link, UnorderedList, ListItem, Image } from '@chakra-ui/react';

const AcceptBitcoinSection = () => {
    return (
        <Box
            id="accept-bitcoin"
            bg="white"
            py={{ base: "60px", md: "80px", lg: "100px" }}
            px={{ base: "20px", md: "40px", lg: "60px" }}
        >
            <Container>
                {/* Main Heading */}
                <Heading
                    as="h2"
                    fontSize={{ base: "32px", md: "40px", lg: "40px", xl: "32px" }}
                    fontWeight="700"
                    lineHeight="1.2"
                    mb={{ base: "30px", md: "40px" }}
                    color="black"
                    maxW="450px"
                >
                    Meet some of the many ways to accept bitcoin.
                </Heading>

                {/* Top Section - Square intro */}
                <Box mb={{ base: "30px", md: "40px" }} maxW="450px">
                    <Text
                        fontSize={{ base: "16px", md: "20px" }}
                        lineHeight="1.4"
                        mb={3}
                        color="black"
                    >
                        <Text as="span" fontWeight="700">If you already use Square</Text>, you can start accepting bitcoin today with just a few taps.
                    </Text>

                    <Text
                        fontSize={{ base: "16px", md: "20px" }}
                        lineHeight="1.4"
                        color="black"
                    >
                        Not a Square merchant?{' '}
                        <Link
                            href="#alternative-payment"
                            color="black"
                            fontWeight="700"
                            textDecoration="underline"
                            _hover={{ color: "#00A651" }}
                        >
                            Skip ahead
                        </Link>
                        .
                    </Text>
                </Box>

                {/* Square Logo */}
                <Box mb={{ base: "30px", md: "40px" }}>
                    <Image
                        src="/assets/CompanyImages/squarelogo.svg"
                        alt="Square"
                        maxW="300px"
                        width="210px"
                        h="auto"
                    />
                </Box>

                <Flex
                    direction={{ base: "column", xl: "row" }}
                    gap={{ base: "40px", md: "50px", lg: "50px", xl: "200px" }}
                >
                    {/* Left Column - Setup Steps */}
                    <Box
                        maxW={{ base: "100%", xl: "450px" }}
                    >
                        <Text
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={4}
                            color="black"
                        >
                            Bitcoin payments on Square hardware integrate directly with your existing merchant setup.
                        </Text>

                        <Text
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={4}
                            color="black"
                            fontWeight="700"
                        >
                            To turn them on, follow these steps:
                        </Text>

                        <UnorderedList
                            spacing={3}
                            pl={5}
                            styleType="decimal"
                        >
                            <ListItem
                                fontSize={{ base: "16px", md: "20px" }}
                                lineHeight="1.4"
                                color="black"
                            >
                                You'll first need to complete the setup of your bitcoin wallet from the Banking {'>'} Bitcoin tab of Square Dashboard.
                            </ListItem>
                            <ListItem
                                fontSize={{ base: "16px", md: "20px" }}
                                lineHeight="1.4"
                                color="black"
                            >
                                Next to Bitcoin, tap Activate and complete 2-step verification if you haven't already. 
                            </ListItem>
                            <ListItem
                                fontSize={{ base: "16px", md: "20px" }}
                                lineHeight="1.4"
                                color="black"
                            >
                                Choose how you'd like to receive payment.
                            </ListItem>
                        </UnorderedList>
                    </Box>

                    {/* Right Column - Payment Options */}
                    <Box

                        maxW={{ base: "100%", xl: "450px" }}
                    >
                        <Text
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={5}
                            color="black"
                        >
                            When customers pay with bitcoin, you can choose to have those payments flow directly into your bitcoin wallet or, if you prefer, have those payments automatically convert to dollars, which requires no new accounting or tax work. It's just business as usual, but without the 3% fees.
                        </Text>

                        <Text
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={5}
                            color="black"
                        >
                            Learn more about bitcoin on{' '}
                            <Link
                                href="https://squareup.com/us/en/bitcoin"
                                isExternal
                                color="black"
                                fontWeight="700"
                                textDecoration="underline"
                                _hover={{ color: "#00A651" }}
                            >
                                Square's website
                            </Link>
                            .
                        </Text>

                        <Text
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            color="black"
                        >
                            Once you're up and running, you can get a Bitcoin Marketing Kit from the{' '}
                            <Link
                                href="https://squareup.com/shop/hardware/us/en/products/bitcoin-marketing-kit"
                                isExternal
                                color="black"
                                fontWeight="700"
                                textDecoration="underline"
                                _hover={{ color: "#00A651" }}
                            >
                                Square Shop
                            </Link>
                            {' '}at no cost other than shipping.
                        </Text>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default AcceptBitcoinSection;

