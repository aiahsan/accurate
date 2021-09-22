const NORMAL_SITE_KEY = '6LdhU4AcAAAAAC5KraT9K7su2lUcwMqY3TAMERUy';
const INVISIBLE_SITE_KEY = '6LdhU4AcAAAAAPMkyCfhPdnWEe0-gU3f4A55s5Tb';

export const getSiteKey = (invisible ) =>
  invisible ? INVISIBLE_SITE_KEY : NORMAL_SITE_KEY;
  export const theme = {
    blue: '#4683F3',
    darkblue: '#3060D1',
    darkestblue: '#2F5AC9',
    green: '#3BB273',
    darkgreen: '#36A269',
    orange: '#E1BC29',
    darkorange: '#CDAB26',
    white: '#ffffff',
    darkwhite: '#e5e5e5',
    darkestwhite: '#cccccc',
    black: '#000000',
    gray: '#f5f5f5',
    red: '#E15554',
  
    margin: '1rem',
    smallmargin: '.5rem'
  };