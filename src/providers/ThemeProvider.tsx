"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

const fonts = {
  heading: "'Inter', sans-serif",
  body: "'Inter', sans-serif",
};

const breakpoints = {
  base: "0px",
  sm: "480px",
  md: "768px",
  lg: "1024px",  // iPad Pro and larger tablets
  xl: "1100px",  // Desktop
  "2xl": "1536px",
};

const components = {
  Heading: {
    baseStyle: {
      fontFamily: "'Inter', sans-serif",
    },
  },
  Button: {
    baseStyle: {
      fontFamily: "'Inter', sans-serif",
    },
  },
  Container: {
    baseStyle: {
      maxW: "1250px",
    },
  },
};

export const theme = extendTheme({ fonts, breakpoints, components });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      {children}
      <Global
        styles={css`
          
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          
          html, body {
          overflow - y: hidden;
          overflow-y: auto;
          scrollbar-width: none; /* For Firefox */
          -ms-overflow-style: none;  /* For IE and Edge */
          }

          ::-webkit-scrollbar {
          display: none; /* For Chrome, Safari, and Opera */
          }

          /* Optimize images for iOS/WebKit */
          img {
            -webkit-user-drag: none;
            -webkit-touch-callout: none;
            -webkit-tap-highlight-color: transparent;
          }

          /* Optimize SVG rendering - use 'auto' for SVGs with embedded images */
          img[src$=".svg"] {
            image-rendering: auto;
            -webkit-image-rendering: auto;
          }

          /* Smooth scrolling and better performance on iOS */
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}
      />
    </ChakraProvider>
  );
}


