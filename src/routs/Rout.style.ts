import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 8px;
  padding: 8px 8px;
  align-items: right;
  color: #fff;

  &.active {
    background-color: #544949;
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
`;
