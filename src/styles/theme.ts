import { extendTheme } from '@chakra-ui/react';

//Reaproveita o tema padrão do chakra e substitui o que lhe for de agrado
export const theme = extendTheme({
  colors: {
    // gray: { //substituindo os tons de cinza utilizados
    //   "900": "#181B23",
    //   "800": "#1F2029",
    //   "700": "#353646",
    //   "600": "#4B4D63",
    //   "500": "#616480",
    //   "400": "#797D9A",
    //   "300": "#9699B0",
    //   "200": "#B3B5C6",
    //   "100": "#D1D2DC",
    //   "50": "#EEEEF2",
      
    // }
    light: {
      "info": "#DADADA",
      "headingsText":"#F5F8FA",
      "headings-text":"#F5F8FA",
    },
    dark: {
      "black": "#000000",
      "headingsText": "#47585B",
      "headings-text": "#47585B",
      "info": "#999999",
      "info50": "rgba(153, 153, 153, 0.5)",
    },

    yellow: {
      "highlight": "#FFBA08",
      "highlight50": "rgba(255, 186, 8, 0.5)",
    }

  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
    barlow: 'Barlow',
  },
  layerStyles: {
    divider: {
      w: "90px",
      mx: "auto",
      border: "2px solid",
      borderColor: "dark.black",
      background: "dark.black",
    },
   
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'dark.black',
      }
    }
  }
})