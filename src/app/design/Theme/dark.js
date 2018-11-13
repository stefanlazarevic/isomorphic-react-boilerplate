import typography from '../Typography';

const colors = {
  background: {
    primary: 'rgb(23, 26, 31)',
    secondary: 'rgb(31, 34, 41)',
  },
  text: {
    primary: 'rgb(255, 255, 255)',
    secondary: 'rgb(153,153,153)',
  },
  border: {
    default: 'rgb(67, 76, 92)',
  },
  highlight: {
    error: 'rgb(255,88,91)',
    success: '#16c98d',
    warning: '#f1c40f',
    info: 'rgb(40,138,214)',
  },
};

export default Object.assign({}, typography, colors);
