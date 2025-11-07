"use client";

import React from 'react';
import { Box, Heading, Text, Container, SimpleGrid, Link } from '@chakra-ui/react';

const FAQSection = () => {
    return (
        <Box 
            bg="white" 
            py={{ base: "60px", md: "80px", lg: "100px" }}
            px={{ base: "20px", md: "40px", lg: "60px" }}
        >
            <Container maxW="1300px">
                {/* Main Heading */}
                <Heading 
                    as="h2"
                    fontSize={{ base: "36px", md: "44px", lg: "52px" }}
                    fontWeight="900"
                    lineHeight="1.2"
                    mb={{ base: "40px", md: "60px" }}
                    color="black"
                >
                    Frequently Asked Questions
                </Heading>

                {/* FAQ Grid - 2 columns */}
                <SimpleGrid 
                    columns={{ base: 1, lg: 2 }}
                    spacing={{ base: "40px", lg: "60px" }}
                >
                    {/* Left Column */}
                    <Box>
                        {/* Question 1 */}
                        <Box mb={8}>
                            <Heading 
                                as="h3"
                                fontSize={{ base: "18px", md: "20px" }}
                                fontWeight="700"
                                lineHeight="1.4"
                                mb={3}
                                color="black"
                            >
                                What is bitcoin?
                            </Heading>
                            <Text 
                                fontSize={{ base: "16px", md: "18px" }}
                                lineHeight="1.7"
                                color="black"
                            >
                                Bitcoin is a secure digital currency that lets you send, spend, and save your money without relying on banks or other third-parties—just like cash.
                            </Text>
                        </Box>

                        {/* Question 2 */}
                        <Box mb={8}>
                            <Heading 
                                as="h3"
                                fontSize={{ base: "18px", md: "20px" }}
                                fontWeight="700"
                                lineHeight="1.4"
                                mb={3}
                                color="black"
                            >
                                What are bitcoin payments?
                            </Heading>
                            <Text 
                                fontSize={{ base: "16px", md: "18px" }}
                                lineHeight="1.7"
                                color="black"
                            >
                                You can accept bitcoin payments by offering customers a QR invoice at checkout that they can scan to instantly pay you from their bitcoin wallet. It's as simple as paying with a credit card, only with their phone.
                            </Text>
                        </Box>

                        {/* Question 3 */}
                        <Box mb={8}>
                            <Heading 
                                as="h3"
                                fontSize={{ base: "18px", md: "20px" }}
                                fontWeight="700"
                                lineHeight="1.4"
                                mb={3}
                                color="black"
                            >
                                What are the fees?
                            </Heading>
                            <Text 
                                fontSize={{ base: "16px", md: "18px" }}
                                lineHeight="1.7"
                                mb={3}
                                color="black"
                            >
                                Bitcoin fees vary depending on the point-of-sale system you use.
                            </Text>
                            <Text 
                                fontSize={{ base: "16px", md: "18px" }}
                                lineHeight="1.7"
                                mb={3}
                                color="black"
                            >
                                With Square, fees are 0% through the end of 2026. After that, they will convert to 1%. Learn more on{' '}
                                <Link 
                                    href="https://squareup.com" 
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
                                fontSize={{ base: "16px", md: "18px" }}
                                lineHeight="1.7"
                                color="black"
                            >
                                On other systems, they generally range from 0.4% to 1%, but you will need to consult each software vendor for specifics. The big takeaway, though, is that the fees on bitcoin payments will never be as high as 3% credit card fees.
                            </Text>
                        </Box>

                        {/* Question 4 */}
                        <Box>
                            <Heading 
                                as="h3"
                                fontSize={{ base: "18px", md: "20px" }}
                                fontWeight="700"
                                lineHeight="1.4"
                                mb={3}
                                color="black"
                            >
                                What about bitcoin's volatility?
                            </Heading>
                            <Text 
                                fontSize={{ base: "16px", md: "18px" }}
                                lineHeight="1.7"
                                mb={3}
                                color="black"
                            >
                                Bitcoin's price often goes up and down. Sometimes wildly. Whether you hold your bitcoin or convert it to local currency is ultimately your decision, as it should be.
                            </Text>
                            <Text 
                                fontSize={{ base: "16px", md: "18px" }}
                                lineHeight="1.7"
                                color="black"
                            >
                                If you choose to convert and are using Square, you can activate instant auto-conversions to dollars that will get you all the benefits of accepting bitcoin, like avoiding 3% credit card fees, without the volatility.
                            </Text>
                        </Box>
                    </Box>

                    {/* Right Column */}
                    <Box>
                        {/* Question 5 */}
                        <Box mb={8}>
                            <Heading 
                                as="h3"
                                fontSize={{ base: "18px", md: "20px" }}
                                fontWeight="700"
                                lineHeight="1.4"
                                mb={3}
                                color="black"
                            >
                                How are bitcoin payments taxed?
                            </Heading>
                            <Text 
                                fontSize={{ base: "16px", md: "18px" }}
                                lineHeight="1.7"
                                mb={3}
                                color="black"
                            >
                                The Bitcoin Merchant Community cannot offer tax advice. We recommend consulting a tax advisor about questions related to bitcoin income.
                            </Text>
                            <Text 
                                fontSize={{ base: "16px", md: "18px" }}
                                lineHeight="1.7"
                                mb={3}
                                color="black"
                            >
                                But at a high level, like with all payments, you are required to charge taxes on goods sold in accordance with local laws.
                            </Text>
                            <Text 
                                fontSize={{ base: "16px", md: "18px" }}
                                lineHeight="1.7"
                                mb={3}
                                color="black"
                            >
                                Additionally, depending on where you live, if you are holding on to the bitcoin you receive, you may incur capital gains taxes when you sell.
                            </Text>
                            <Text 
                                fontSize={{ base: "16px", md: "18px" }}
                                lineHeight="1.7"
                                color="black"
                            >
                                If you are a Square merchant who has enabled bitcoin payments, tax documentation will be automatically generated for you and Made available in your Square dashboard. Learn more on{' '}
                                <Link 
                                    href="https://squareup.com" 
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
                        </Box>

                        {/* Question 6 */}
                        <Box mb={8}>
                            <Heading 
                                as="h3"
                                fontSize={{ base: "18px", md: "20px" }}
                                fontWeight="700"
                                lineHeight="1.4"
                                mb={3}
                                color="black"
                            >
                                How is tipping handled with bitcoin?
                            </Heading>
                            <Text 
                                fontSize={{ base: "16px", md: "18px" }}
                                lineHeight="1.7"
                                color="black"
                            >
                                For bitcoin point-of-sale systems that support tipping, the tip amount (or percentage) will usually be defined by the customer before you generate a QR code invoice. The customer then pays the invoice in bitcoin for the purchase amount + tip.
                            </Text>
                        </Box>

                        {/* Question 7 */}
                        <Box>
                            <Heading 
                                as="h3"
                                fontSize={{ base: "18px", md: "20px" }}
                                fontWeight="700"
                                lineHeight="1.4"
                                mb={3}
                                color="black"
                            >
                                More questions?
                            </Heading>
                            <Text 
                                fontSize={{ base: "16px", md: "18px" }}
                                lineHeight="1.7"
                                color="black"
                            >
                                Ask the Bitcoin Merchant Community's{' '}
                                <Link 
                                    href="#" 
                                    color="black" 
                                    fontWeight="700"
                                    textDecoration="underline"
                                    _hover={{ color: "#00A651" }}
                                >
                                    Facebook Group
                                </Link>
                                .
                            </Text>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default FAQSection;


