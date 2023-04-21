import React from 'react'
import styled from 'styled-components';


const Footer1 = () => {
  return (
    <Container>
        <Wrapper>
           <Holder>
           <Col2>
            <Title>HELP</Title>
            <a>Contact Us</a>
            <a>FAQ</a>
            <a>About</a>
            <a>Register</a>
            <a>Site MAp</a>
            <a>Support Page</a>
            <a>What's New</a>
            </Col2>
            <Col2>
            <Title>BUYERS</Title>
                <a>Tools for Buyers</a>
                <a>New Buyers</a>
                <a>How To Buy</a>
                <a>Buyer's Protection</a>
                <a>Find An FFL</a>
                <a>GunBroker.com Pricing</a>
                <a>Report</a>
            </Col2>
            <Col2>
            <Title>SELLERS</Title>
                <a>Tools for Sellers</a>
                <a>New Sellers</a>
                <a>How To Sell</a>
                <a>Fees & Services</a>
                <a>Find our FFL Network</a>
                <a>FFL/Dealer Services</a>
                <a>Dealer Store</a>
            </Col2>
           </Holder>
           <Holder>
           <Col2>
            <Title>RELATED SITES</Title>
                <a>ATF FFL EZ Check</a>
                <a>Forums</a>
                <a>Gun Genius</a>
            </Col2>
            <Col2>
            <Title>AREAS OF INTEREST</Title>
                <a>The GunBroker Store</a>
                <a>Articles</a>
                <a>Stores</a>
                <a>Firearm Industry News</a>
                <a>Gold Membership</a>
                <a>Videos</a>
            </Col2>
            <Col2>
            <Title>INDUSTRY RELATIONS</Title>
                <a>Advertise with Us</a>
                <a>Investor and Media</a>
                <a>Relations</a>
            </Col2>
           </Holder>
        </Wrapper>
    </Container>
  )
};

export default Footer1;

const Holder = styled.div`
width: 48%;
display: flex;
justify-content: space-between;
margin: 1rem 0;

@media Screen and (max-width: 768px){
  width: 100%;
}
`;


const Container = styled.div`
width :100%;
height: 30vh;
background-color: white;
border-top: 1px solid silver;
padding: 3rem 0 2rem 0;
display: flex;
justify-content: center;
align-items: center;

@media Screen and (max-width: 768px){
  height: auto;
}

`;
const Wrapper = styled.div`
width: 70%;
height: 100%;
/* background-color: blueviolet; */
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
width: 90%;
flex-direction: column;

}

`;
const Title = styled.div`
margin-bottom: 15px;
font-size: 17px;
font-weight: 500;
`;

const Col2 = styled.div`
display: flex;
flex-direction: column;

@media Screen and (max-width: 768px){
  flex-wrap: wrap;
}

a{
  color: #555555;
  font-size: 15px;
  cursor: pointer;
  margin: 4px 0;

  @media Screen and (max-width: 768px){
    font-size: 13px;
  }

  :hover{
    text-decoration:1px underline #006400;
    color: #006400;
    transition: all 350ms;
  }
}

`;