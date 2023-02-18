import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from "styled-components";
import {Header} from "../Header/Header";


const StyledLink = styled(NavLink)`
  
    &.active {
      text-shadow: #FC0 1px 0 10px;
      border-radius: 10px;
      box-shadow: 0px 2px 4px -1px rgba(161, 66, 66, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
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