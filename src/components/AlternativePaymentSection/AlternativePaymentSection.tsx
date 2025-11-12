"use client";

import React from 'react';
import { Box, Heading, Text, Flex, Container, Link, SimpleGrid, Image } from '@chakra-ui/react';

const AlternativePaymentSection = () => {
    return (
        <Box
            id="alternative-payment"
            bg="white"
            py={{ base: "60px", md: "80px", lg: "100px" }}
            px={{ base: "20px", md: "40px", lg: "60px" }}
            borderTop="1px solid #E0E0E0"
        >
            <Container>
                {/* Introduction Text */}
                <Box mb={{ base: "40px", md: "50px" }}>
                    <Text
                        fontSize={{ base: "16px", md: "20px" }}
                        lineHeight="1.4"
                        mb={5}
                        color="black"
                        maxW="450px"
                    >
                        <Text as="span" fontWeight="700">If you don't use Square</Text> or are outside the US, you'll need to pick a point-of-sale solution that accepts instant bitcoin payments. There are several to choose from.
                    </Text>

                    <Text
                        fontSize={{ base: "16px", md: "20px" }}
                        lineHeight="1.4"
                        color="black"
                        maxW="450px"
                    >
                        We've selected some favorites that merchants have told us work well for them.
                    </Text>
                </Box>

                {/* Payment Solutions Grid */}
                <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: "40px", md: "50px", lg: "60px" }}
                    mb={{ base: "40px", md: "50px" }}
                >
                    {/* IBEX Pay */}
                    <Box>
                        <Link
                            href="https://www.ibexpay.io/"
                            isExternal
                            display="flex"
                            alignItems="center"
                            mb={8}
                            height="60px"
                            _hover={{ opacity: 0.7 }}
                            transition="opacity 0.2s"
                        >
                            <Image
                                src="/assets/CompanyImages/ibexLogo.png"
                                alt="IBEX Pay"
                                maxW="180px"
                                h="auto"
                            />
                        </Link>
                        <Text
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            color="black"
                            maxW="450px"
                        >
                            IBEX Pay is a web-based bitcoin point-of-sale solution that works on any device with a web browser.
                        </Text>
                    </Box>



                    {/* Zaprite
                    <Box>
                        <Link 
                            href="https://zaprite.com/"
                            isExternal
                            display="flex"
                            alignItems="center"
                            mb={4}
                            height="60px"
                            _hover={{ opacity: 0.7 }}
                            transition="opacity 0.2s"
                        >
                            <Image 
                                src="/assets/CompanyImages/zapriteLogo.svg"
                                alt="Zaprite"
                                maxW="300px"
                                h="auto"
                                width="210px"
                                loading="eager"
                                draggable={false}
                            />
                        </Link>
                        <Text 
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            color="black"
                            maxW="450px"
                        >
                            Zaprite lets you connect a third-party wallet to self-custody any bitcoin you receive.
                        </Text>
                    </Box> */}

                    {/* BTCPay Server */}
                    <Box>
                        <Link
                            href="https://btcpayserver.org/"
                            isExternal
                            display="flex"
                            alignItems="center"
                            mb={8}
                            height="60px"
                            _hover={{ opacity: 0.7 }}
                            transition="opacity 0.2s"
                        >
                            <Image
                                src="/assets/CompanyImages/btcpayserverLogo.svg"
                                alt="BTCPay Server"
                                maxW="300px"
                                h="auto"
                                width="170px"
                                loading="eager"
                                draggable={false}
                            />
                        </Link>
                        <Text
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            color="black"
                            maxW="450px"
                        >
                            For tech-savvy merchants, BTCPay Server is a highly customizable, open-source alternative that needs to be hosted on your own server, or one you trust.
                        </Text>
                    </Box>

                    {/* manna pay */}
                    <Box>
                        <Link
                            href="https://mannabitcoin.com/"
                            isExternal
                            display="flex"
                            alignItems="center"
                            mb={8}
                            height="60px"
                            _hover={{ opacity: 0.7 }}
                            transition="opacity 0.2s"
                        >
                            <Image
                                src="/assets/CompanyImages/mannaLogo.svg"
                                alt="Manna Pay"
                                maxW="120px"
                                h="auto"
                            />
                        </Link>
                        <Text
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            color="black"
                            maxW="450px"
                        >
                            Manna is a simple mobile wallet with a built-in point-of-sale interface, allowing you to quickly start accepting instant bitcoin payments without providing any personal information.
                        </Text>

                    </Box>

                    {/* Blink */}
                    <Box>
                        <Link
                            href="https://www.blink.sv/"
                            isExternal
                            display="flex"
                            alignItems="center"
                            mb={8}
                            height="60px"
                            _hover={{ opacity: 0.7 }}
                            transition="opacity 0.2s"
                        >
                            <Image
                                src="/assets/CompanyImages/blinkLogo.png"
                                alt="Blink"
                                maxW="200px"
                                h="auto"
                            />
                        </Link>
                        <Text
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            color="black"
                            maxW="450px"
                        >
                            Blink is a reliable mobile wallet for merchants, featuring a simple web-based point-of-sale interface for accepting instant bitcoin payments and has an optional stable-dollar account.
                        </Text>
                    </Box>

                    {/* Swiss Bitcoin Pay
                    <Box>
                        <Link 
                            href="https://swiss-bitcoin-pay.ch/"
                            isExternal
                            display="flex"
                            alignItems="center"
                            mb={4}
                            height="60px"
                            _hover={{ opacity: 0.7 }}
                            transition="opacity 0.2s"
                        >
                            <Image 
                                src="/assets/CompanyImages/swissBitcoinLogo.png"
                                alt="Swiss Bitcoin Pay"
                                maxW="200px"
                                h="auto"
                            />
                        </Link>
                        <Text 
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            color="black"
                            maxW="450px"
                        >
                            Swiss Bitcoin Pay is an option that many EU merchants have adopted. It allows automatic conversions to fiat currency.
                        </Text>
                    </Box> */}
                </SimpleGrid>

                {/* Bottom Section */}
                <Box>
                    <Text
                        fontSize={{ base: "16px", md: "20px" }}
                        lineHeight="1.4"
                        mb={5}
                        color="black"
                        maxW="450px"
                    >
                        <Text as="span" fontWeight="700">Who makes the cut?</Text> We listen to merchants and spotlight solutions that are already popular and have a reputation for easy use. If there's a bitcoin point-of-sale solution we're missing,{' '}
                        <Link
                            href="mailto:bitcoinmerchants@spiral.xyz"
                            color="black"
                            fontWeight="700"
                            textDecoration="underline"
                            _hover={{ color: "#00A651" }}
                        >
                            let us know
                        </Link>
                        .
                    </Text>

                    <Text
                        fontSize={{ base: "16px", md: "20px" }}
                        lineHeight="1.4"
                        color="black"
                        maxW="450px"
                        mb={5}
                    >
                        If you want to learn more about getting up and running with one of these options, join our friendly{' '}
                        <Link
                            href="https://www.facebook.com/groups/bitcoinmerchants/"
                            color="black"
                            fontWeight="700"
                            textDecoration="underline"
                            _hover={{ color: "#00A651" }}
                        >
                            Facebook Group
                        </Link>
                        .
                    </Text>
                    <Text
                        fontSize={{ base: "16px", md: "20px" }}
                        lineHeight="1.4"
                        color="black"
                        maxW="450px"
                        mb={5}
                    >
                        Since there’s a chance that your existing point-of-sale provider doesn’t accept bitcoin payments at this time, reach out and ask them to add support. Be the squeaky wheel.
                    </Text>
                    <Text
                        fontSize={{ base: "16px", md: "20px" }}
                        lineHeight="1.4"
                        color="black"
                        maxW="450px"
                    >
                        For now, we’re focused on highlighting POS solutions that work well for in-person commerce. Over time, we’ll add options for e‑commerce and professional services.
                    </Text>
                </Box>
            </Container>
        </Box>
    );
};

export default AlternativePaymentSection;





