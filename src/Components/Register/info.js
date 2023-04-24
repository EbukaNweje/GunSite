import React from 'react'
import styled from 'styled-components';
import {MdPhoneIphone} from "react-icons/md"

const Info = () => {
  return (
        <First>
        <Div1>
          <h4 style={{padding: "0px 1rem"}}>Personal Information</h4>
        </Div1>
        <div style={{width: "95%"}}>
        <div style={{fontWeight: 500, marginTop: "10px"}}>Enter your home mailing address</div>
        <div style={{marginBottom: "15px", marginTop: "10px", width: "auto", fontSize: "13px"}}>Please DO NOT enter a business address. You will have an option to enter a business address below. We collect this information to verify your identity and to contact you if we cannot <br/> reach you by email. This information is not sold to or shared with any third party without your consent - see our Privacy Policy for details.</div>
        </div>
        <DivHold>
        <Div>
          <DivTitle>First Name<span style={{color: "red"}}>*</span>:</DivTitle>
          <DivLabel>
            <InputHold>
              <Input placeholder='First Name*'/>
            </InputHold>
          </DivLabel>
        </Div>
        <Div>
          <DivTitle>Last Name<span style={{color: "red"}}>*</span>:</DivTitle>
          <DivLabel>
            <InputHold>
              <Input placeholder='Last Name*'/>
            </InputHold>
          </DivLabel>
        </Div>
        </DivHold>
        <DivHold>
        <Div>
          <DivTitle>Suffix*:</DivTitle>
          <DivLabel>
            <InputHold>
              <Input placeholder='Select Suffix*' type='hidden'/>
              <select style={{border: "none", outline: "none", fotWeight: "500", color: "#555555", width :"100%", padding: "0rem 0rem 0rem 0.7rem"}} name='Select Suffix' id='select suffix'>
                <option id='select suffix'>JR</option>
                <option>SR</option>
                <option>I</option>
                <option>II</option>
                <option>III</option>
                <option>IV</option>
              </select>
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
                <MdPhoneIphone style={{color: "#006400", marginTop: "3px"}}/>
            </IconHold>
            <InputHold>
              <Input placeholder='Phone Number*'/>
            </InputHold>
          </DivLabel>
        </Div>
        <Div>
          <DivTitle>Date of Birth<span style={{color: "red"}}>*</span>:</DivTitle>
          <DateOfBirth>
            <Date placeholder='mm' type='number'/>
            <Date placeholder='dd' type='number'/>
            <Date placeholder='yyyy' type='number'/>
          </DateOfBirth>
        </Div>
        </DivHold>
      </First>
  )
}

export default Info;

const DateOfBirth = styled.div`
width: 100%;
height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Date = styled.input`
width: 30%;
border: 1px solid silver;
outline: none;
height: 89%;
border-radius: 4px;
text-align: center;
color: #555555;
`;

const IconHold = styled.div`
width: 7%;
height: 100%;
display: flex;
justify-content: center;
padding: 0.3rem;
border-radius: 3px 0px 0px 3px;
border-right: 1px solid silver;

@media Screen and (max-width: 768px){
padding: 0;
height: 75%;
}
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
width: 97.4%;
background-color: #006400;
padding: 0 1rem;
border-radius: 0.5rem 0.5rem 0rem 0;
height: 24%;
display: flex;
align-items: center;
color :white;

h4{
    font-weight: 500;
}

@media Screen and (max-width: 768px){
    width: 95.7%
}
@media Screen and (max-width: 425px){
    width: 93%
}
@media Screen and (max-width: 375px){
    width: 92%
}
@media Screen and (max-width: 320px){
    width: 91%;
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
border: 1px solid silver;
border-radius: 5px;


`;
const InputHold = styled.div`
width: 90%;
height: 100%;
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

