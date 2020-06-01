import { rem } from 'polished';

export const colors = {
  white: 'hsl(0, 0%, 100%)',
  black: '#000000',
  darkMode: {
    darkBlue: 'hsl(209, 23%, 22%)',
    veryDarkBlue: 'hsl(207, 26%, 17%)',
  },
  lightMode: {
    darkGray: 'hsl(0, 0%, 52%)',
    veryDarkBlue: 'hsl(200, 15%, 8%)',
    veryLightGray: 'hsl(0, 0%, 98%)',
  },
};

export const screenWidths = {
  mobile: '375',
  tablet: '768',
  desktop: '1440',
};

export const fontSizes = {
  homepage: rem(`14px`),
  detailPage: rem(`16px`),
  searchInput: rem(`11px`),
  filter: rem(`12px`),
  card: {
    infoTitle: '1.1rem',
  },
};

export const shadows = {
  header: '0px 2px 4px -2px rgb(0,0,0,0.2)',
  search: '0px 1px 8px -2px rgba(0, 0, 0, 0.1)',
  filter: '0px 1px 8px -2px rgba(0, 0, 0, 0.1)',
  backButton: '0px 1px 7px 0px rgba(0,0,0,0.3)',
};

export const paddings = {
  base: '0 1rem',
  header: '1.8rem 1rem',
  search: '1.6rem 1rem 2.2rem',
  filter: '1rem 1.4rem',
  input: '1.1rem 1.1rem 1.1rem 4.110rem',
  content: '1.8rem 1rem',
  card: {
    textContainer: '1.2rem 1.6rem 2.8rem',
  },
  backButton: '0.475rem 1.7rem',
};

export const margins = {
  search: '1.6rem 1rem 2.2rem',
  filter: '0 1rem 1rem 1rem',
  backButton: '2rem 0 4rem',
};

export const letterSpacings = {
  extraSmall: '0.02rem',
  normal: '0',
};

export const transition = {
  theme: 'background 0.15s linear',
};
