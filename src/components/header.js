import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 10px;
`;

const HeaderLink = styled.a`
  color: #000;
  text-decoration: none;
  margin-right: 10px;
  &:hover {
    text-decoration: underline;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const LINKS = [
  {
    label: "About me",
    href: "#about-me"
  },
  {
    label: "Skills",
    href: "#skills"
  },
  {
    label: "GitHub Commits",
    href: "#github-commits"
  },
  {
    label: "Contact",
    href: "#contact"
  }
];

const Header = ({ text }) => (
  <HeaderContainer>
    <h1>{text}</h1>
    <div>
      {LINKS.map(link => (
        <HeaderLink key={link.href} href={link.href}>
          {link.label}
        </HeaderLink>
      ))}
    </div>
  </HeaderContainer>
);

export default Header;
