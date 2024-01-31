import styled from 'styled-components';


export const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


/* Navbar */
.root-layout header {
  margin: 0;
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.root-layout nav {
  display: flex;
  align-items: right;
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
  margin: 4px 0;
}

.root-layout .nav-links {
  display: flex;
  gap: 50px; 
}

.root-layout .nav-links a {
  text-decoration: none;
  padding: 4px; 
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
`



// export const StyledHeader = styled.header`
//   .root-layout header {
//   padding: 10px; 
//   position: fixed;
//   width: 100%;
//   top: 0;
//   z-index: 1000;
// }
// `



export const Header = styled.header`
body {
  font-family: "Public Sans", sans-serif;
} */

.header-bar {
  background-color: #292929;
}

.container--narrow {
  max-width: 732px;
}

.header-search-icon {
  position: relative;
  top: 3px;
}

.header-chat-icon {
  cursor: pointer;
  position: relative;
  top: 3px;
}

.chat-count-badge {
  text-align: center;
  position: absolute;
  top: 2px;
  left: 0px;
  width: 16px;
  font-size: 0.6rem;
  font-weight: bold;
}

.avatar-small {
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 5px;
  position: relative;
  top: -3px;
}

.avatar-tiny {
  width: 24px;
  height: 24px;
  border-radius: 12px;
  margin-right: 4px;
  position: relative;
  top: -1px;
}

.form-control-title {
  font-size: 2rem;
  font-weight: 500;
}

.body-content {
  font-size: 1.2rem;
  line-height: 1.75;
  color: #292929;
}

.body-content p,
.body-content ul,
.body-content ol {
  margin-bottom: 1.75rem;
}

.input-dark {
  background-color: #444;
  border-color: transparent;
  color: #ffffff;
}

.input-dark:focus {
  color: #ffffff;
  background-color: #555;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.input-dark::-webkit-input-placeholder {
  color: #888;
}
.input-dark::-moz-placeholder {
  color: #888;
}
.input-dark:-ms-input-placeholder {
  color: #888;
}
.input-dark:-moz-placeholder {
  color: #888;
}

@media (min-width: 768px) {
  .input-dark {
    width: auto;
  }
}

.display-3 {
  font-size: 4.2rem;
}

@media (max-width: 1199px) {
  .display-3 {
    font-size: 3.4rem;
  }
}

@media (max-width: 768px) {
  .display-3 {
    font-size: 2.5rem;
  }
}

.form-group {
  position: relative;
}

.liveValidateMessage {
  top: -6px;
  position: absolute;
  z-index: 1;
  padding-top: 6px;
  padding-bottom: 16px;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
}

.liveValidateMessage--visible {
  opacity: 1;
  transform: translateY(0);
}

.liveValidateMessage-enter {
  opacity: 0;
  transform: translateY(100%);
}

.liveValidateMessage-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: 0.33s opacity ease-in-out, 0.33s transform ease-in-out;
}

.liveValidateMessage-exit {
  opacity: 1;
  transform: translateY(0);
}

.liveValidateMessage-exit-active {
  opacity: 0;
  transform: translateY(100%);
  transition: 0.33s opacity ease-in-out, 0.33s transform ease-in-out;
}

.form-group input,
.form-group textarea {
  position: relative;
  z-index: 2;
}

textarea.tall-textarea {
  height: 160px;
}

@media (min-width: 768px) {
  textarea.tall-textarea {
    height: 320px;
  }
}

.delete-post-button {
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
}






`