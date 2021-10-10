import styled from 'styled-components';

const Login = (props) => 
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg"/>
                <SignUp> GET ALL THERE </SignUp>
                <CTALogoTwo src="/images/cta-logo-two.png"/>
            </CTA> 
        </Content>
    </Container>

const Container = styled.section`
    background-image: url("/images/login-background.jpg");
    height: 100vh;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    position: relative;
    height: 100%;
    padding: 80px 40px;
`;

const CTA = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    align-items: center;
`;

const CTALogoOne = styled.img`
    max-width: 600px;
    width: 100%;
    margin-bottom: 12px;
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    width: 100%;
`;

const SignUp = styled.a`
    display: flex;
    max-width: 600px;
    font-weight: bold;
    color: #f9f9f9;
    margin-bottom: 12px;
    background-color: #0063e5;
    width: 100%;
    justify-content: center;
    padding: 16.5px 0;
    font-size: 18px;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
    }
`;

export default Login;