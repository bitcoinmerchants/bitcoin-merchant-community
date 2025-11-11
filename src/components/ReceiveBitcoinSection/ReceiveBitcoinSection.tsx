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
            <Container>
                <Flex 
                    direction={{ base: "column", xl: "row" }}
                    align="center"
                    justify="space-between"
                    gap={{ base: "40px", lg: "40px", xl: "120px" }}
                >
                    {/* Left Side - Text Content */}
                    <Box 
                        flex="1" 
                        maxW={{ base: "100%", xl: "440px" }}
                    >
                        <Heading 
                            as="h2"
                            fontSize={{ base: "32px", md: "32px", lg: "32px", xl: "32px" }}
                            fontWeight="700"
                            lineHeight="1.2"
                            mb={6}
                            color="black"
                        >
                            The best way to receive bitcoin is up to you.
                        </Heading>

                        <Text 
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
                            mb={5}
                            color="black"
                        >
                            Declining 3% credit card fees right now isn't much harder than pushing a button. However, a lot depends on your current point-of-sale solution and geographical location.
                        </Text>

                        <Text 
                            fontSize={{ base: "16px", md: "20px" }}
                            lineHeight="1.4"
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
                        <Box
                            as="img"
                            src="/assets/ReceiveBitcoinImages/BitcoinButtonImage.png"
                            alt="Bitcoin key"
                            maxW={{ base: "220px", sm: "280px", md: "3280px", lg: "280px", xl: "400px" }}
                            w="100%"
                            h="auto"
                            sx={{
                                imageRendering: 'auto',
                                WebkitUserSelect: 'none',
                                userSelect: 'none',
                            }}
                        />
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default ReceiveBitcoinSection;


