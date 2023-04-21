import React from 'react';
import {
  Container, Wrapper, H1, InputHold, P, Input,Div,
  P2, Button, Bottom, First, Info, Hold,
} from './LoginStyle'

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <First>
          <H1>Sign In</H1>
          <InputHold>
          <P>User Name (or email address)</P>
          <Input placeholder='George Smith'/>
          </InputHold>
          <br/>
          <InputHold>
          <P>Password</P>
          <Input type='password' placeholder='************'/>
          </InputHold>
          <Div>
            <input type='checkbox'/>
            <Info>Remember my log in information</Info>
          </Div>
          <Button>Login</Button>
          <P2>Forget your password?</P2>
          <Info>This site is protected by reCAPTCHA and the Google <span><a>PrivacyPolicy</a></span> and <span><a>Terms of service</a></span></Info>
        </First>
      </Wrapper>
      <Bottom>
          <Hold>
          <H1>Register</H1>
          <div>Not a member?Register and get started today.</div>
          <Button>Register</Button>
          </Hold>
        </Bottom>
    </Container>
  )
}

export default Login