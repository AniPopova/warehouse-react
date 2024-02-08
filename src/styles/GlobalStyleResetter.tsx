import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Remove list styles */
  ul,
  ol {
    list-style: none;
  }

  /* Remove default margin and padding for some elements */
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

  /* Remove hyperlink text decoration */
  a {
    text-decoration: none;
  }

  /* Apply a more readable tab size (optional) */
  pre {
    tab-size: 4;
  }

  /* Set default font family */
  :root {
    display: fixed;
    font-family: Arial, sans-serif;
    line-height: 1.5;
    font-size: 12px;
    color: rgba(130, 14, 14, 0.87);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a:hover {
    color: #000109;
  }

  body {
    margin: 0;
    padding: 0;
    place-items: center;
    min-height: 100vh;
    background: linear-gradient(
        rgba(248, 243, 243, 0.6),
        rgba(255, 255, 255, 0.7)
      ),
      url("/src/assets/warehouse.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
      height: 100%;
      background-attachment: scroll;
      background-position: center;
      background-size: auto 80vh;
    }

    @media (max-width: 480px) {
      background-size: auto 60vh;
    }
  }
`;

export default GlobalStyles;
