import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
           @font-face {
            font-display: swap; 
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 300;
            src: url('/fonts/poppins-v21-latin-300.woff2') format('woff2'); 
          }
          @font-face {
            font-display: swap;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            src: url('/fonts/poppins-v21-latin-regular.woff2') format('woff2'); 
          }
          @font-face {
            font-display: swap; 
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            src: url('/fonts/poppins-v21-latin-500.woff2') format('woff2'); 
          }
          @font-face {
            font-display: swap; 
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            src: url('/fonts/poppins-v21-latin-600.woff2') format('woff2'); 
          }
          @font-face {
            font-display: swap;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            src: url("/fonts/poppins-v21-latin-700.woff2") format('woff2');
          }
      `}
  />
)

export default Fonts