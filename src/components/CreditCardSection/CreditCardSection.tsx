"use client";

import React from 'react';
import { Box, Heading, Text, Flex, Image, Container } from '@chakra-ui/react';

const CreditCardSection = () => {
    return (
        <Box 
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
                    {/* Left Side - Text Content */}
                    <Box 
                        flex="1" 
                        maxW={{ base: "100%", lg: "450px" }}
                    >
                        <Heading 
                            as="h2"
                            fontSize={{ base: "32px", md: "40px", lg: "32px" }}
                            fontWeight="700"
                            lineHeight="1.2"
                            mb={6}
                            color="black"
                        >
                            Credit card providers haven't earned 3%.
                        </Heading>

                        <Text 
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.7"
                            mb={5}
                            color="black"
                        >
                            Back when cash was how people paid, there were no 3% credit card fees. Today, credit cards are the preferred way to pay.
                        </Text>

                        <Text 
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.7"
                            color="black"
                        >
                            For some small businesses, this can mean paying 50% or more of their profits to card providers. Bitcoin, which is cash but digital, helps them fight back.
                        </Text>
                    </Box>

                    {/* Right Side - Credit Card Image */}
                    <Box 
                        flex="1"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image 
                            src="/assets/CreditCardImages/CreditCardImage.png"
                            alt="Broken credit card"
                            maxW={{ base: "350px", md: "400px", lg: "400px" }}
                            w="100%"
                            h="auto"
                        />
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default CreditCardSection;





