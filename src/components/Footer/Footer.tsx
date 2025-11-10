"use client";

import React from 'react';
import { Box, Container, Text, Flex, Image, Link, Icon } from '@chakra-ui/react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <Box 
            bg="#F5F5F5" 
            py={{ base: "40px", md: "60px" }}
            px={{ base: "20px", md: "40px", lg: "60px" }}
        >
            <Container maxW="1250px">
                <Flex 
                    direction={{ base: "column", md: "row" }}
                    justify="space-between"
                    align={{ base: "flex-start", md: "flex-start" }}
                    gap={{ base: "30px", md: "40px" }}
                >
                    {/* Left Side - Logo and Description */}
                    <Box maxW={{ base: "100%", md: "400px" }}>
                        {/* Logo */}
                        <Flex align="center" mb={8}>
                            <Image 
                                src="/assets/HeaderImages/logo.svg"
                                alt="Bitcoin Merchant Community"
                                width="200px"
                            />
                        </Flex>

                        {/* Description */}
                        <Text 
                            fontSize={{ base: "14px", md: "15px" }}
                            lineHeight="1.6"
                            mb={4}
                            color="black"
                        >
                            The Bitcoin Merchant Community was created to help small businesses accept bitcoin at the register.
                        </Text>

                        <Text 
                            fontSize={{ base: "14px", md: "15px" }}
                            lineHeight="1.6"
                            color="black"
                        >
                            It's supported by Block's Spiral division, which funds open-source bitcoin tools and promotes bitcoin adoption globally.
                        </Text>
                        <Box mt={8}>
                        <Flex gap={4} align="center">
                            {/* Facebook */}
                            <Link 
                                href="https://www.facebook.com/groups/bitcoinmerchantcommunity" 
                                isExternal
                                _hover={{ opacity: 0.7 }}
                                transition="opacity 0.2s"
                            >
                                <Icon 
                                    as={FaFacebook} 
                                    boxSize={{ base: "32px", md: "36px" }}
                                    color="black"
                                />
                            </Link>

                            {/* X (Twitter) */}
                            <Link 
                                href="https://x.com/btc_merchants" 
                                isExternal
                                _hover={{ opacity: 0.7 }}
                                transition="opacity 0.2s"
                            >
                                <Icon 
                                    as={FaXTwitter} 
                                    boxSize={{ base: "32px", md: "36px" }}
                                    color="black"
                                />
                            </Link>

                            {/* GitHub */}
                            <Link 
                                href="https://github.com/bitcoinmerchants" 
                                isExternal
                                _hover={{ opacity: 0.7 }}
                                transition="opacity 0.2s"
                            >
                                <Icon 
                                    as={FaGithub} 
                                    boxSize={{ base: "32px", md: "36px" }}
                                    color="black"
                                />
                            </Link>
                        </Flex>
                    </Box>
                    </Box>

                    {/* Right Side - Social Media Icons */}
                  
                </Flex>
            </Container>
        </Box>
    );
};

export default Footer;





