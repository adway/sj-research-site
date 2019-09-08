import { Box, Flex, Link as A } from 'rebass';
import { Styled, useColorMode } from 'theme-ui';
import Link from 'next/link';
import Icon from './icon';
import Avatar from './avatar';

const ColorSwitcher = ({ mode, ...props }) => (
  <Box
    as="button"
    {...props}
    title="Cycle Color Mode"
    sx={{
      display: 'inline-block',
      appearance: 'none',
      bg: 'transparent',
      color: 'inherit',
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
      lineHeight: 0,
      boxShadow: '0 0 0 3px',
      color: 'inherit',
      outline: 'none',
      transition: '0.175s',
      ':hover': {
        color: 'primary'
      }
    }}
  >
    <svg viewBox="0 0 32 32" width="24" height="24" fill="currentcolor">
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="currentcolor"
        strokeWidth="4"
      />
      <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
    </svg>
  </Box>
);

export default props => {
  const [mode, setMode] = useColorMode();

  return (
    <>
      <Flex
        as="header"
        variant="container"
        sx={{
          alignItems: 'center',
          px: 3,
          py: 4,
          'a + a': { mx: [2, 3] }
        }}
      >
        <Avatar
          size={80}
          sx={{ mr: 3 }}
          url="https://bbk12e1-cdn.myschoolcdn.com/ftpimages/697/logo/SJ%20Crest%20-%20Low.jpg"
        />
        <Box sx={{ mx: 'auto' }} />
        <ColorSwitcher
          onClick={e => {
            const next = mode === 'dark' ? 'light' : 'dark';
            setMode(next);
          }}
        />
      </Flex>
      <Box
        as="main"
        sx={{
          width: '100%',
          maxWidth: 'container',
          px: 3,
          mx: 'auto',
          flex: '1 1 auto'
        }}
      >
        {props.children}
      </Box>
      <Box
        as="footer"
        variant="container"
        sx={{
          px: 3,
          width: '100%',
          maxWidth: 'wide',
          mx: 'auto'
        }}
      >
        <Flex
          sx={{
            py: 4,
            justifyContent: 'center',
            a: { color: 'primary', mx: 2 }
          }}
        >
          Copywright &copy; Saint John's High School Research Club
        </Flex>
      </Box>
    </>
  );
};
