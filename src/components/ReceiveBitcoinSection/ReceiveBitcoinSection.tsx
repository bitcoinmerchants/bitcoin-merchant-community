"use client";

import React from 'react';
import { Box, Heading, Text, Flex, Image, Container } from '@chakra-ui/react';

const ReceiveBitcoinSection = () => {
    return (
        <Box 
            bg="#F5F5F5" 
            py={{ base: "60px", md: "80px", lg: "100px" }}
            px={{ base: "20px", md: "40px", lg: "60px" }}
        >
            <Container maxW="1300px">
                <Flex 
                    direction={{ base: "column", lg: "row" }}
                    align="center"
                    justify="space-between"
                    gap={{ base: "40px", lg: "80px" }}
                >
                    {/* Left Side - Text Content */}
                    <Box 
                        flex="1" 
                        maxW={{ base: "100%", lg: "500px" }}
                    >
                        <Heading 
                            as="h2"
                            fontSize={{ base: "32px", md: "40px", lg: "48px" }}
                            fontWeight="900"
                            lineHeight="1.2"
                            mb={6}
                            color="black"
                        >
                            The best way to receive bitcoin is up to you.
                        </Heading>

                        <Text 
                            fontSize={{ base: "16px", md: "18px" }}
                            lineHeight="1.7"
                            mb={5}
                            color="black"
                        >
                            Declining 3% credit card fees right now isn't much harder than pushing a button. However, a lot depends on your current point-of-sale solution and geographical location.
                        </Text>

                        <Text 
                            fontSize={{ base: "16px", md: "18px" }}
                            lineHeight="1.7"
                            color="black"
                        >
                            We can help you choose the one that's right for you, your staff, and your customers.
                        </Text>
                    </Box>

                    {/* Right Side - Bitcoin Key Image */}
                    <Box 
                        flex="1"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image 
                            src="/assets/ReceiveBitcoinImages/BitcoinButtonImage.png"
                            alt="Bitcoin key"
                            maxW={{ base: "300px", md: "350px", lg: "400px" }}
                            w="100%"
                            h="auto"
                        />
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default ReceiveBitcoinSection;


