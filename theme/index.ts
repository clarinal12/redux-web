import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { components } from './components';

const theme = extendTheme({
  colors,
  components,
  fonts: {
    body: 'inter, sans-serif',
    heading: 'inter, sans-serif',
  },
});

export default theme;
