import styled from 'styled-components';

export const Header = (props) => {
    return <Nav>
        <Logo>
            <img src="/images/logo.svg" alt="Disney Logo"/>
        </Logo>
    </Nav>;
}

const Logo = styled.a`
    max-height: 70px;
    width: 80px;

    img {
        display: block;
        width: 100%;
    }
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    padding: 20px;
    background-color: #090b13;
    z-index: 3;
`;

