import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import Heading from "./heading";
import Button from "./button";

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1280px",
  "2xl": "1440px"
};

export default extendTheme({
  styles: {
    global: {
      "*": {
        scrollbarWidth: "0"
      },

      "::-webkit-scrollbar": {
        width: "5px"
      },

      /* Track */
      "::-webkit-scrollbar-track": {
        background: "#f1f1f1"
      },

      /* Handle */
      "::-webkit-scrollbar-thumb": {
        background: "#888"
      },

      /* Handle on hover */
      "::-webkit-scrollbar-thumb:hover": {
        background: "#555"
      },
      // "*::-webkit-scrollbar": {
      //   display: "none",
      // },
      body: {
        color: "#000",
        background: "#FCF7F1",
        maxWidth: "100%",
        overflowX: "hidden"
      },
      html: {
        background: "#FCF7F1"
      }
    }
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif"
  },
  components: {
    Heading,
    Button
  },
  breakpoints,
  colors
});
