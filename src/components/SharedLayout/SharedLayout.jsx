import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from "styled-components";
import {Header} from "../Header/Header";


const StyledLink = styled(NavLink)`
  color: black;
  margin-left: 25px;
  text-decoration: none;
    &.active {
    color: blue;
  }
`;

export const SharedLayout = () => {
    return (
      <>
        <Header>
          <nav>
            <StyledLink  to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </nav>
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet /> 
        </Suspense> 
      </>
    );
  };