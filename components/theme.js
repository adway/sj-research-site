import base from '@rebass/preset';
import { merge } from 'lodash';

export const breakpoints = [32, 48, 64].map(w => `${w}em`);

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

export const fontSizes = [14, 16, 20, 24, 32, 48, 64, 96, 128];

export const palette = {
  darker: '#121217',
  dark: '#17171d',
  darkless: '#252429',
  black: '#1f2d3d',
  muted: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff',
  red: '#ec3750',
  orange: '#ff8c37',
  blue: '#338eda',
  purple: '#7280ed'
};

const theme = merge(base, {
  breakpoints,
  space,
  fontSizes,
  initialColorMode: 'light',
  colors: {
    ...palette,
    text: palette.black,
    background: palette.snow,
    elevated: palette.white,
    primary: palette.blue,
    secondary: palette.orange,
    muted: palette.muted,
    accent: palette.orange,
    modes: {
      dark: {
        text: palette.white,
        background: palette.dark,
        elevated: palette.darkless,
        primary: palette.red,
        secondary: palette.purple,
        accent: palette.orange,
        muted: palette.muted
      }
    }
  },
  fonts: {
    body: 'system-ui, Roboto, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    tight: 0.875
  },
  fontWeights: {
    light: 300,
    body: 400,
    medium: 500,
    bold: 700,
    heading: 900
  },
  letterSpacings: {
    heading: '-0.02em',
    caps: '0.02em'
  },
  sizes: {
    container: 1024
  },
  radii: {
    default: 6,
    extra: 9,
    circle: 99999
  },
  shadows: {
    card: '0 4px 8px rgba(0, 0, 0, 0.125)'
  },
  variants: {
    container: {
      width: '100%',
      maxWidth: 'container',
      mx: 'auto',
      px: 2
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    },
    card: {
      bg: 'elevated',
      p: [3, 4],
      borderRadius: 'extra',
      boxShadow: 'card'
    },
    avatar: {
      borderRadius: 'circle',
      objectFit: 'cover',
      objectPosition: 'center',
      flexShrink: 0
    }
  },
  styles: {
    a: {
      color: 'primary',
      textDecoration: 'none',
      transition: '0.15s',
      ':hover :focus': {
        color: 'secondary'
      }
    },
    h2: {
      fontSize: 3
    },
    img: {
      maxWidth: '100%',
      height: 'auto'
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 1,
      bg: 'elevated',
      p: 3,
      borderRadius: 8,
      overflowX: 'auto',
      variant: 'prism'
    },
    code: {
      fontFamily: 'monospace',
      color: 'secondary'
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary'
    },
    hr: {
      border: 0,
      my: 4,
      borderBottom: '1px solid',
      borderColor: 'muted'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      py: 2,
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      py: 2,
      borderBottom: '1px solid',
      borderColor: 'muted'
    },
    blockquote: {
      fontWeight: 'bold',
      fontSize: 3,
      mx: 0,
      px: 3,
      my: 5,
      borderLeft: '4px solid'
    },
    navitem: {
      display: 'inline-flex',
      alignItems: 'center',
      color: 'inherit',
      textDecoration: 'none',
      fontWeight: 'bold',
      ':hover,:focus': {
        color: 'primary'
      }
    },
    p: {
      fontSize: [2]
    }
  }
});

export default theme;
