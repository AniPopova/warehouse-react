import styled from 'styled-components';


export const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

:root {
  --primary: #c9b3ae;
  --secondary: #1a3694;
}
body {
  margin: 0;
  padding: 20px;
  font-family: "Arial";
  background: var(--secondary);
}
* {
  color: #fff;
  margin: 0;
}
p {
  margin: 20px 0;
}
button {
  border: 0;
  padding: 8px;
  border-radius: 4px;
  color: white;
  background: var(--primary);
  cursor: pointer;
}

/* Navbar */
.root-layout header {
  background: var(--secondary);
  padding: 10px; 
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.root-layout nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.root-layout .logo h1 {
  margin: 0;
  font-size: 12px; 
}

.root-layout .burger-menu {
  display: none;
  cursor: pointer;
}

.root-layout .bar {
  width: 20px; 
  height: 2px; 
  background-color: var(--primary);
  margin: 4px 0;
}

.root-layout .nav-links {
  display: flex;
  gap: 50px; 
}

.root-layout .nav-links a {
  text-decoration: none;
  padding: 4px; 
  border-radius: 4px;
  color: #fff;
  font-size: 0.9rem; 
}

.root-layout .nav-links.show {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px; 
  left: 0;
  width: 100%;
  background: var(--secondary);
  box-shadow: 0 4px 8px rgba(29, 27, 27, 0.1);
}

/* Responsive styles */
@media only screen and (max-width: 768px) {
  .root-layout .burger-menu {
    display: block;
  }

  .root-layout .nav-links {
    display: none;
  }

  .root-layout.nav-open .nav-links {
    display: flex;
  }
}


/* page content */
main {
  max-width: 1200px;
  margin: 40px auto;
} 

  
`