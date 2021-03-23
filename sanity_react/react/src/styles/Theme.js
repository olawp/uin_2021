import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';

const theme = {
  body: '#FFF',
  text: '#363537',
  background: '#999',
  colors: {
    default: '#333',
    warning: '#ff6347',
    info: '#167df6',
    success: '#5cb85c',
  },
  breakpoints: {
    sm: '(max-width: 420px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1300px)',
  },
};

// eslint-disable-next-line react/prop-types
const Theme = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;
