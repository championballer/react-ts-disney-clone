import styled from 'styled-components';

const Login = (props) => 
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg"/>
                <SignUp> GET ALL THERE </SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee with 
                    a Disney+ subscription. As of 26/03/21, the price of Disney+ and the Disney 
                    Bundle will increase by $1
                </Description>
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
    flex-wrap: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    position: relative;
    height: 100%;
    padding: 80px 40px;
`;

const CTA = styled.div`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    align-items: center;
`;

const CTALogoOne = styled.img`
    width: 100%;
    margin-bottom: 12px;
`;

const CTALogoTwo = styled.img`
    width: 100%;
`;

const SignUp = styled.a`
    display: flex;
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    width: 100%;
    justify-content: center;
    padding: 16.5px 0;
    font-size: 20px;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    text-align: center;
    font-size : 16px;
    letter-spacing: 1.5px;
    line-height: 1.5;
`;

export default Login;