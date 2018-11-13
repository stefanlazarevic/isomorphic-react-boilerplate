import typography from '../Typography';

const colors = {
  background: {
    primary: 'rgb(255, 255, 255)',
    secondary: 'rgb(245, 245, 245)',
  },
  text: {
    primary: 'rgb(44, 44, 43)',
    secondary: 'rgb(136, 136, 136)',
  },
  border: {
    default: 'rgb(178, 177, 175)',
  },
  highlight: {
    error: 'rgb(255,88,91)',
    success: '#16c98d',
    warning: '#f1c40f',
    info: 'rgb(40,138,214)',
  },
};

export default Object.assign({}, typography, colors);
