import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const NavBase = () => {
    return(
        <>
            <BaseContainer>
                <NavContainer>
                    <Nav/>
                </NavContainer>
                <Outlet/>
            </BaseContainer>
        </>
    )
}

const BaseContainer = styled.div`

`;

const NavContainer = styled.div`
    width: 100%;
    position: absolute;
    z-index: 100;
`;


export default NavBase;