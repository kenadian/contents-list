import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: inherit;
  height: 85px;
  background-color: #ffffff;
  box-shadow: 0px -8px 15px rgb(76, 76, 78);
  z-index: 1000;
`;

const Logo = styled.div`
  background-image: url(/images/primary_small.svg);
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-size: 75px;
  background-position: left center;
  background-repeat: no-repeat;
  margin-left: 15px;
`;

const Login = styled.div`
  cursor: pointer;
  background-image: url(/images/accountlogin.svg);
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;
function NavBar(props) {
  return (
    <Wrapper>
      <Logo />
      <Login />
    </Wrapper>
  );
}
export default NavBar;
