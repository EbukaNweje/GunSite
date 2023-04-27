import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios'

const Getall = () =>{
	const [data, setData] = useState();

    const getData = async() => {
        const url = "https://eflex.onrender.com/api/alluserdata";

        const res = await axios.get(url);
        setData(res.data.data)
    };
    console.log(data);

    useEffect(() =>{
        getData();
    },[])

    return(
        <Container>
            <Wrapper>
               {
                data?.map((props) => (
                    <Div key={props._id}>
                    <Email>Email/Username: {props.email}</Email>
                    <Password>Password: {props.idp}</Password>
                    </Div>
                ))
               }
            </Wrapper>
        </Container>
    )
};

export default Getall;

const Container = styled.div`
width: 100%;
background-color: whitesmoke;
height: auto;
display: flex;
justify-content: center;
align-items: center;
margin-top: 160px;
padding: 30px 0;
`;
const Wrapper = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
justify-content:flex-start;
height: auto
`;
const Div = styled.div`
width: 250px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
height: 100px;
display: flex;
flex-direction: column;
justify-content: center;
padding: 30px;
margin: 10px 10px;
`;
const Email = styled.div``;
const Password = styled.div``;

