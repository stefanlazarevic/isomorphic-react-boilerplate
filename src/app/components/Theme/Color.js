import { injectGlobal } from 'styled-components';

const colors = {
  text: {
    primary: '#172B4D',
    secondary: '#5E6C84',
  },
};

injectGlobal`
  :root {
    --text-primary: ${colors.text.primary}
    --text-secondary: ${colors.text.secondary}
  }
`;

export default colors;
