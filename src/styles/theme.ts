export const theme = {
  color: {
    red: '#EC6D75',
    purple: '#9B9AD6',
    yellow: '#FFCE3E',
    dark: '#422D5F',
    light: '#FAF7F3',
    white: '#FFFFFF',
    whiteDarkMode: '#735D93',
    blue: '#48B6E5',
    contrasts: {
      highContrast: '#45365A',
      mediumContrast: '#5C4C73',
      lowContrast: '#9588A9',
      lowestContrast: '#CDC5D9',
    },
    gradients: {
      up: {
        red: 'linear-gradient(180deg, #EB7474 0%, #FF8E8E 100%)',
        purple: 'linear-gradient(0.46deg, #BBBAE2 0.45%, #7F7FCF 122.9%)',
        yellow: 'linear-gradient(0deg, #FCE258 0%, #FFC063 100%)',
        light: 'linear-gradient(0deg, #FCFBF8 0%, #F7F3EE 100.74%)',
      },
      down: {
        red: 'linear-gradient(180deg, #FF8E8E 0%, #EB7474 100%)',
        purple: 'linear-gradient(0.46deg, #7F7FCF 0.45%, #BBBAE2 122.9%)',
        yellow: 'linear-gradient(0deg, #FFC063 0%, #FCE258 100%)',
        light: 'linear-gradient(0deg, #FCFBF8 0%, #F6F3EE 100.74%)',
      },
    },
  },
};

export const devices = {
  mobile: '(max-width: 550px)',
};
