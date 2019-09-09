import { Box } from 'rebass';

export const Banner = props => (
  <Box
    {...props}
    sx={{
      pt: [5],
      pb: [4, 3],
      h1: {
        fontSize: [5, 6],
        fontWeight: 'bold',
        lineHeight: 'tight',
        mt: [0, -2, -3],
        mb: 3,
        textAlign: 'center'
      },
      h2: {
        fontSize: [4],
        fontWeight: 'light',
        textAlign: 'center',
        mb: '0'
      },
      a: {
        ':hover': {
          color: 'secondary'
        }
      }
    }}
  />
);

export const Container = ({ wide, ...props }) => (
  <Box
    {...props}
    variant="container"
    sx={{
      maxWidth: wide ? 'wide' : 'container'
    }}
  />
);

export const Callout = props => (
  <Box
    sx={{
      bg: 'elevated',
      px: [3, 4],
      py: [2, 3, 4],
      borderRadius: 'extra',
      boxShadow: 'card',
      fontSize: [2, 3],
      mb: [4, 5]
    }}
    {...props}
  />
);

export const Tiles = props => (
  <Box
    {...props}
    sx={{
      ul: {
        listStyle: 'none',
        p: 0,
        m: 0,
        display: 'grid',
        gridGap: [3, 4],
        gridTemplateColumns: ['repeat(1, 1fr)', null, 'repeat(2, 1fr)']
      },
      li: {
        bg: 'elevated',
        p: [3, 4],
        borderRadius: 'extra',
        boxShadow: 'card',
        overflow: 'hidden',
        position: 'relative',
        transition: 'transform .15s ease-in-out',
        ':hover': {
          transform: 'scale(1.025) translateY(-1.5px)'
        }
      },
      h1: {
        fontSize: [2, 3],
        mt: 0,
        mb: 1,
        lineHeight: 'heading',
        fontWeight: 'medium',
        a: {
          color: 'text',
          textDecoration: 'none'
        }
      },
      // p: {
      //   my: 0,
      //   'first-of-type': {
      //     mt: 3,
      //     mb: [2, 3, 4]
      //   }
      // },
      img: {
        display: 'block',
        width: '100%',
        maxWidth: '100%',
        height: 256,
        objectFit: 'cover',
        objectPosition: 'center'
      },
      ...props.sx
    }}
  />
);

export const List = props => (
  <Box
    {...props}
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)'],
        gridGap: [3, 4],
        color: 'muted',
        fontWeight: 'body',
        fontStyle: 'normal',
        fontSize: 1
      },
      h1: {
        color: 'text',
        fontWeight: 'bold',
        fontSize: [1]
      },
      a: {
        fontWeight: 'medium',
        color: 'primary',
        textDecoration: 'none'
      },
      em: {
        display: 'block',
        fontStyle: 'normal'
      },
      ...props.sx
    }}
  />
);
