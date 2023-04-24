import React from 'react';
import styled from 'styled-components';
import fb from './ic-fb.svg'
import insta from './ic-in.svg'
import twitter from './ic-twitter.svg'
import u_tube from './ic-youtube.svg'
import {ImStarFull} from 'react-icons/im'

const Footer2 = () => {
  return (
    <Container>
        <Wrapper>
            <LeftHold>
                <div>Follow Us</div>
                <img src={fb} alt='fb'/>
                <img src={twitter} alt='fb'/>
                <img src={u_tube} alt='fb'/>
                <img  src={insta} alt='fb'/>
            </LeftHold>
            <RightHold>
                <span style={{color: "#006400"}}>Mobile Apps</span>
                <Down>
                    <text>Excellent</text>
                    <text>4.6 out of 5</text>
                    <ImStarFull style={{color: "#00B67A"}}/>
                    <h6>Trustpilot</h6>
                </Down>
            </RightHold>
        </Wrapper>
    </Container>
  ) 
}

export default Footer2;

const Down = styled.div`
width: 85%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Container = styled.div`
width: 100%;
height: 10vh;
border-top: 1px solid silver;
display: flex;
justify-content: center;
align-items: center;
padding: 1rem 0;

@media Screen and (max-width: 768px){
    height: auto;
}
`;
const Wrapper = styled.div`
width: 70%;
height: 95%;
display: flex;
justify-content: space-between;
align-items: center;
@media Screen and (max-width: 768px){
    width: 90%;
    height: auto;
}
@media Screen and (max-width: 425px){
    flex-direction: column;
}
`;
const LeftHold = styled.div`
width: 25%;
display: flex;
justify-content: space-between;
align-items: center;
img{
    width: 39px;
    height: 39px;
}

@media Screen and (max-width: 768px){
    width: 40%;
}

@media Screen and (max-width: 425px){
    width: 60%;
}


div{
    @media Screen and (max-width: 425px){
        display: none;
    }
}
`;
const RightHold = styled.div`
width: 25%;
display: flex;
flex-direction: column;
line-height: 1px;
align-items: end;

@media Screen and (max-width: 768px){
    width: 40%;
    span{
        margin-top: 10px;
    }
}

@media Screen and (max-width: 425px){
    width: 70%;
    align-items:center;
}
@media Screen and (max-width: 375px){
    width: 90%;
    align-items:center;
}
@media Screen and (max-width: 320px){
    width: 90%;
    align-items:center;
}


`;