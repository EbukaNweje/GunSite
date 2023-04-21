import React from 'react'
import styled from 'styled-components';
import {MdPhoneIphone, MdPhone} from "react-icons/md"
import {BsPrinterFill} from "react-icons/bs"

const BusinessInfo = () => {
  return (
        <First>
        <Div1>
          <h4 style={{padding: "0px 1rem"}}>Personal Information</h4>
        </Div1>
        <DivHold>
        <Div style={{width: "100%"}}>
          <DivTitle>Company Name<span style={{color: "red"}}>*</span>:</DivTitle>
          <DivLabel>
            <InputHold>
              <Input placeholder='Company Name*'/>
            </InputHold>
          </DivLabel>
        </Div>
        </DivHold>
        <DivHold>
        <Div>
          <DivTitle>First Name*:</DivTitle>
          <DivLabel>
            <InputHold>
              <Input placeholder='First Name*'/>
            </InputHold>
          </DivLabel>
        </Div>
        <Div>
          <DivTitle>Last Name*:</DivTitle>
          <DivLabel>
            <InputHold>
              <Input placeholder='Last Name*'/>
            </InputHold>
          </DivLabel>
        </Div>
        </DivHold>
        <DivHold>
        <Div>
          <DivTitle>Address 1<span style={{color: "red"}}>*</span>:</DivTitle>
          <DivLabel>
            <InputHold>
              <Input placeholder='Address 1*'/>
            </InputHold>
          </DivLabel>
        </Div>
        <Div>
          <DivTitle>Address 2*:</DivTitle>
          <DivLabel>
            <InputHold>
              <Input placeholder='Address 2*'/>
            </InputHold>
          </DivLabel>
        </Div>
        </DivHold>
        <DivHold>
        <Div>
          <DivTitle>City<span style={{color: "red"}}>*</span>:</DivTitle>
          <DivLabel>
            <InputHold>
              <Input placeholder='City*'/>
            </InputHold>
          </DivLabel>
        </Div>
        <Div>
          <DivTitle>State*:</DivTitle>
          <DivLabel>
            <InputHold>
              <Input placeholder='State*'/>
            </InputHold>
          </DivLabel>
        </Div>
        </DivHold>
        <DivHold>
        <Div>
          <DivTitle>Postal Code<span style={{color: "red"}}>*</span>:</DivTitle>
          <DivLabel>
            <InputHold>
              <Input placeholder='Postal Code*' type='text'/>
            </InputHold>
          </DivLabel>
        </Div>
        <Div>
          <DivTitle>Country<span style={{color: "red"}}>*</span>:</DivTitle>
          <DivLabel>
            <InputHold>
              <Input placeholder='Country*' type='text'/>
            </InputHold>
          </DivLabel>
        </Div>
        </DivHold>
        <DivHold>
        <Div>
          <DivTitle>Daytime Phone<span style={{color: "red"}}>*</span>:</DivTitle>
          <DivLabel>
            <IconHold>
                <MdPhoneIphone style={{color: "#006400"}}/>
            </IconHold>
            <InputHold>
              <Input placeholder='Phone Number*'/>
            </InputHold>
          </DivLabel>
        </Div>
        <Div>
          <DivTitle>Evening / Other Phone:</DivTitle>
          <DivLabel>
            <IconHold>
                <MdPhone style={{color: "#006400"}}/>
            </IconHold>
            <InputHold >
                <Input type='date'/>
            </InputHold>
          </DivLabel>
        </Div>
        </DivHold>
        <DivHold>
        <Div>
          <DivTitle>Fax Number<span style={{color: "red"}}>*</span>:</DivTitle>
          <DivLabel>
            <IconHold>
                <BsPrinterFill style={{color: "#006400"}}/>
            </IconHold>
            <InputHold>
              <Input placeholder='Fax Number*'/>
            </InputHold>
          </DivLabel>
        </Div>
        </DivHold>
      </First>
  )
}

export default BusinessInfo;

const IconHold = styled.div`
width: 7%;
height: 100%;
/* background-color: #E0E0E0; */
display: flex;
justify-content: center;
align-items: center;
padding: 0.3rem;
border-radius: 3px 0px 0px 3px;
border-right: 1px solid silver;

@media Screen and (max-width: 768px){
  height: 83%;
};
`;

const First = styled.div`
width: 100%;
height: auto;
border-radius: 0.5rem;
border: 1px solid silver;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
margin: 10px 0;
padding: 0 0 1rem 0;
`;

const Div1 = styled.div`
width: 98%;
background-color: #006400;
padding: 0 0.7rem;
border-radius: 0.5rem 0.5rem 0rem 0;
height: 24%;
display: flex;
align-items: center;
color :white;

h4{
    font-weight: 500;
}
@media Screen and (max-width: 768px){
    width: 97%
}
@media Screen and (max-width: 425px){
    width: 94%
}
@media Screen and (max-width: 375px){
    width: 94%
}
@media Screen and (max-width: 320px){
    width: 92%;
}
`;
const DivHold = styled.div`
padding: 0 2rem;
width: 94.5%;
height: 84%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0.5rem 0;

@media Screen and (max-width: 768px){
    flex-direction: column;
}
`;
const Div = styled.div`
width: 48%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
div{
    margin: 0.4rem 0;
}
@media Screen and (max-width: 768px){
    width: 97%;
}
`;
const DivTitle = styled.div`
font-size: 14px;
font-weight: 400;
color: #555555;
margin-bottom: 5px;
`;
const DivLabel = styled.div`
width: 100%;
display: flex;
align-items: center;
border: 1px solid silver;
border-radius: 5px;
`;
const InputHold = styled.div`
width: 90%;
/* background-color: green; */
height: 100%;
display: flex;
align-items: center;
padding: 0.2rem 0
`;

// border-radius: 3px 0px 0px 3px;

const Input = styled.input`
border: none;
outline: none;
padding: 0 1rem;
background: none;
width: 90%;
::placeholder{
    color: #555555;
}
`;

