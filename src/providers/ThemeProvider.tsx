"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

const fonts = {
  heading: "'Inter', sans-serif",
  body: "'Inter', sans-serif",
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
};

export const theme = extendTheme({ fonts, components });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
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

          /* Disable text selection globally */
          * {
            user-select: none;
            -webkit-user-select: none; /* For Safari */
            -moz-user-select: none; /* For Firefox */
            -ms-user-select: none; /* For IE10+ */
          }
        `}
      />
    </CacheProvider>
  );
}


