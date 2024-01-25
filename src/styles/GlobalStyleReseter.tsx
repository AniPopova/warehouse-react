import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Box sizing border-box reset */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Remove list styles (optional) */
  ul,
  ol {
    list-style: none;
  }

  /* Remove default margin and padding for some elements (optional) */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
    padding: 0;
  }

  /* Remove hyperlink text decoration (optional) */
  a {
    text-decoration: none;
  }

  /* Apply a more readable tab size (optional) */
  pre {
    tab-size: 4;
  }

  /* Set default font family (optional) */
  body {
    font-family: sans-serif;
  }
`;

export default GlobalStyles;
