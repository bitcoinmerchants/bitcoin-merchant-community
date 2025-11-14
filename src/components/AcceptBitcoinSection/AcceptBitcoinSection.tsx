"use client";

import React from 'react';
import { Box, Heading, Text, Flex, Container, Link, UnorderedList, ListItem, Image, List } from '@chakra-ui/react';

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
                        loading="eager"
                        draggable={false}
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
                            Bitcoin payments on Square integrate with your existing merchant setup. To turn them on, follow the steps below either on your Square point-of-sale device or on web:

                        </Text>

                        <Text
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={4}
                            color="black"
                            fontWeight="700"
                        >
                            On your Square POS device:
                        </Text>

                        <UnorderedList
                            spacing={3}
                            pl={5}
                            mb={4}
                        >
                            <ListItem
                                fontSize={{ base: "16px", md: "20px" }}
                                lineHeight="1.4"
                                color="black"
                            >
                                If you’re running Square hardware, make sure you’re on the  
                                {' '}
                                <Link
                                    href="https://squareup.com/help/us/en/article/8346-update-software-on-square-terminal-and-square-register"
                                    isExternal
                                    color="black"
                                    fontWeight="700"
                                    textDecoration="underline"
                                    _hover={{ color: "#00A651" }}
                            >
                                latest POS software 
                                </Link>
                                 {' '}
                                (6.81+). 
                                If running Square on an iPad, get the latest app from the App Store.
                            </ListItem>
                            <ListItem
                                fontSize={{ base: "16px", md: "20px" }}
                                lineHeight="1.4"
                                color="black"
                            >
                                Go to Settings {'>'} Checkout {'>'} Payments {'>'} Activate Bitcoin.
                            </ListItem>
                        </UnorderedList>

                        <Text
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={4}
                            color="black"
                            fontWeight="700"
                        >
                            On web:
                        </Text>

                        <UnorderedList
                            spacing={3}
                            pl={5}
                            mb={4}
                        >
                            <ListItem
                                fontSize={{ base: "16px", md: "20px" }}
                                lineHeight="1.4"
                                color="black"
                            >
                                From your Dashboard, tap on Banking {'>'} Bitcoin, then “Get Started”.
                            </ListItem>
                            <ListItem
                                fontSize={{ base: "16px", md: "20px" }}
                                lineHeight="1.4"
                                color="black"
                            >
                                You will first be prompted to set up conversions, which you can skip for now if all you want is customers to pay in bitcoin.
                            </ListItem>
                        </UnorderedList>

                        <Text
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={4}
                            color="black"
                        >
                            From there, you may need to enter more information about your business and enable two-factor authentication (2FA) if it’s not already set up.
                        </Text>

                    </Box>

                    {/* Right Column - Payment Options */}
                    <Box

                        maxW={{ base: "100%", xl: "450px" }}
                    >
                        <Text
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={4}
                            color="black"
                        >
                            Finally, you will be asked if you want to settle payments in dollars or in bitcoin.                       
                        </Text>
                        <Text
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={4}
                            color="black"
                        >
                            This means that when customers pay with bitcoin, you can choose to either have those payments:
                        </Text>
                        <List
                            spacing={3}
                            pl={5}
                            mb={4}
                            styleType="decimal"
                        >
                            <ListItem
                                fontSize={{ base: "16px", md: "20px" }}
                                lineHeight="1.4"
                                color="black"
                            >
                                Flow directly into your Square bitcoin wallet, or
                            </ListItem>
                            <ListItem
                                fontSize={{ base: "16px", md: "20px" }}
                                lineHeight="1.4"
                                color="black"
                            >
                                Automatically convert to dollars (with no cost or spread), which requires no new accounting or tax work—just business as usual, but without the 3% fees.
                            </ListItem>
                        </List>

                        <Text
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={4}
                            color="black"
                        >
                            You can then decide whether or not you’d like your business to appear on a map of merchants that accept bitcoin.
                        </Text>

                        <Text
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={4}
                            color="black"
                        >
                            You can now receive your first bitcoin payment.
                        </Text>

                        <Text
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={4}
                            color="black"
                        >
                            This 
                            {' '}
                                <Link
                                    href="https://squareup.com/us/en/the-bottom-line/inside-square/getting-started-with-bitcoin-on-square"
                                    isExternal
                                    color="black"
                                    fontWeight="700"
                                    textDecoration="underline"
                                    _hover={{ color: "#00A651" }}
                                >
                                beginner’s guide
                                </Link>
                            {' '}
                             can help you get set up.
                        </Text>
                        <Text
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={4}
                            color="black"
                        >
                            Once you're up and running, you can get a Bitcoin Marketing Kit from 
                            {' '}
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
                            {' '}
                            for free.
                        </Text>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default AcceptBitcoinSection;

