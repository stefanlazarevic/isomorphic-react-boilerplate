import { injectGlobal } from 'styled-components';

const ColorPallete = {
  social: {
    facebook: '#4c66a4',
    gplus: '#dd4b39',
    pinterest: '#cb2027',
    twitter: '#2fc2ef',
    tumblr: '#35465c',
  },
  highlight: {
    error: '#e74c3c',
    success: '#16c98d',
    warning: '#f1c40f',
    info: '#288ad6',
  },
  text: {
    primary: '#111313',
    secondary: '#697374',
  },
};

injectGlobal`
  :root {
    --text-primary: ${ColorPallete.text.primary};
    --text-secondary: ${ColorPallete.text.secondary};
  }
`;

export default ColorPallete;
