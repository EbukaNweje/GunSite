import React from 'react'
import {
    Container,Wrapper, H1, P, First, Div,Div1, DivTitle, DivLabel, DivHold,
    IconHold, Input, InputHold, AddBusinessInfo, Icon,
    Cancel, Continue, Submit
} from './RegisterStyle';
import {IoIosMail} from "react-icons/io"
import {BsFillPersonFill} from "react-icons/bs"
import {ImLock, ImPlus} from "react-icons/im"
import Info from './info';
import BusinessInfo from './AddBusinessInfo';



const Register = () => {
  return (
    <Container>
      <Wrapper>
      <H1>GunBroker.com Registration</H1>
      <P>In order to provide a stable and secure environment for you to conduct your transactions, we require complete and accurate information from all of <br/> our users.</P>
      <First>
        <Div1>
          <h4 style={{padding: "0px 1rem"}}>Email Registration</h4>
        </Div1>
        <DivHold>
        <Div>
          <DivTitle>Email Address<span style={{color: "red"}}>*</span>:</DivTitle>
          <DivLabel>
            <IconHold> <IoIosMail style={{color: "green", width: "25x", height: "25px"}}/> </IconHold>
            <InputHold>
              <Input placeholder='Email Adress*'/>
            </InputHold>
          </DivLabel>
        </Div>
        <Div>
          <DivTitle>Confirm Email<span style={{color: "red"}}>*</span>:</DivTitle>
          <DivLabel>
            <IconHold> <IoIosMail style={{color: "green", width: "25x", height: "25px"}}/> </IconHold>
            <InputHold>
              <Input placeholder='Confirm Email*'/>
            </InputHold>
          </DivLabel>
        </Div>
        </DivHold>
      </First>
      <First>
        <Div1>
          <h4 style={{padding: "0px 1rem"}}>Username and Password</h4>
        </Div1>
        <DivHold>
        <Div>
          <DivTitle>Username<span style={{color: "red"}}>*</span>:</DivTitle>
          <DivLabel>
            <IconHold> <BsFillPersonFill style={{color: "green", width: "25x", height: "25px"}}/> </IconHold>
            <InputHold>
              <Input placeholder='Username*'/>
            </InputHold>
          </DivLabel>
        </Div>
        </DivHold>
        <DivHold>
        <Div>
          <DivTitle>Password<span style={{color: "red"}}>*</span>:</DivTitle>
          <DivLabel>
            <IconHold> <ImLock style={{color: "green", width: "25x", height: "25px"}}/> </IconHold>
            <InputHold>
              <Input placeholder='Password*'/>
            </InputHold>
          </DivLabel>
        </Div>
        <Div>
          <DivTitle>Confirm Password<span style={{color: "red"}}>*</span>:</DivTitle>
          <DivLabel>
            <IconHold> <ImLock style={{color: "green", width: "25x", height: "25px"}}/> </IconHold>
            <InputHold>
              <Input placeholder='Confirm Password*'/>
            </InputHold>
          </DivLabel>
        </Div>
        </DivHold>
      </First>
      <Info/>
      <AddBusinessInfo>
        <Icon>
          <ImPlus style={{color: "#fffff"}}/>
        </Icon>
        <nav>Add Business Information</nav>
      </AddBusinessInfo>
      <BusinessInfo/>
      <Submit>
        <Cancel>Cancel</Cancel>
        <Continue>Continue</Continue>
      </Submit>
      </Wrapper>
    </Container>
  )
}

export default Register;


