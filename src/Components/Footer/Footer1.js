import React from 'react'
import styled from 'styled-components';


const Footer1 = () => {
  return (
    <Container>
        <Wrapper>
           <Holder>
           <Col2>
            <Title>HELP</Title>
            <a href='https://support.gunbroker.com/hc/en-us/requests/new'>Contact Us</a>
            <a href='https://support.gunbroker.com/'>FAQ</a>
            <a href='https://www.gunbroker.com/#home-footer'>About</a>
            <a href='https://www.gunbroker.com/search/advanced'>Register</a>
            <a href='https://www.gunbroker.com/sitemap/'>Site Map</a>
            <a href='https://www.gunbroker.com/a/my-gunbroker/my-support'>Support Page</a>
            <a href='https://support.gunbroker.com/hc/en-us/articles/360037768353'>What's New</a>
            </Col2>
            <Col2>
            <Title>BUYERS</Title>
                <a href='https://www.gunbroker.com/c/user/toolsforbuyers/'>Tools for Buyers</a>
                <a href='https://support.gunbroker.com/hc/en-us/sections/204608687'>New Buyers</a>
                <a href='https://www.gunbroker.com/c/user/howtobuy/'>How To Buy</a>
                <a href='https://support.gunbroker.com/hc/en-us/articles/224766967'>Buyer's Protection</a>
                <a href='https://www.gunbroker.com/ffl/index'>Find An FFL</a>
                <a href='https://www.gunbroker.com/c/p/reportingcenter/'>GunBroker.com Pricing</a>
                <a href='https://www.gunbroker.com/c/p/reportingcenter/'>Report</a>
            </Col2>
            <Col2>
            <Title>SELLERS</Title>
                <a href='https://www.gunbroker.com/c/user/toolsforsellers/'>Tools for Sellers</a>
                <a href='https://support.gunbroker.com/hc/en-us/sections/204608707'>New Sellers</a>
                <a href='https://www.gunbroker.com/c/user/howtosell/'>How To Sell</a>
                <a href='https://www.gunbroker.com/c/user/fees'>Fees & Services</a>
                <a href='https://www.gunbroker.com/c/user/dealerservices/'>Join our FFL Network</a>
                <a href='https://www.gunbroker.com/c/user/dealerservices/'>FFL/Dealer Services</a>
                <a href='https://www.gunbroker.com/All/search?IncludeSellers=2623227'>Dealer Store</a>
            </Col2>
           </Holder>
           <Holder>
           <Col2>
            <Title>RELATED SITES</Title>
                <a href='https://fflezcheck.atf.gov/FFLEzCheck/'>ATF FFL EZ Check</a>
                <a href='https://forums.gunbroker.com/'>Forums</a>
                <a href='https://www.gungenius.com/'>Gun Genius</a>
            </Col2>
            <Col2>
            <Title>AREAS OF INTEREST</Title>
                <a href='https://www.gunbroker.com/thestorehttps://www.gunbroker.com/user/login?ReturnUrl=/newregistration/signupdetails'>The GunBroker Store</a>
                <a href='https://www.gunbroker.com/c/article/'>Articles</a>
                <a href='https://www.gunbroker.com/c/article/'>Stores</a>
                <a href='https://www.gunbroker.com/industrynews'>Firearm Industry News</a>
                <a href='https://www.gunbroker.com/c/p/goldmemberhelp'>Gold Membership</a>
                <a href='https://www.gunbroker.com/c/video/'>Videos</a>
            </Col2>
            <Col2>
            <Title>INDUSTRY RELATIONS</Title>
                <a href='https://support.gunbroker.com/hc/en-us/articles/221674068'>Advertise with Us</a>
                <a href='https://support.gunbroker.com/hc/en-us/articles/221733727'>Investor and Media</a>
                <a href='https://support.gunbroker.com/hc/en-us/articles/221733727'>Relations</a>
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
  text-decoration: none;

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