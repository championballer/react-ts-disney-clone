import styled from 'styled-components';

const Login = (props) => 
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.png"/>
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
`;

const CTALogoOne = styled.img`
    max-width: 600px;
    padding: 12px;
    width: 100vw;
`;

export default Login;