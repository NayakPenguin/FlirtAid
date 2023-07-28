import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const ContactUs = () => {
    return (
        <Container>
            <MainBox>
                <Link to="/">
                    <ArrowBackIosIcon style={{fill : "white"}}/>
                </Link>
                <h1 className="header">Contact Us</h1>
                <input className="inputs type1" type="text" placeholder="Full Name"/>
                <input className="inputs type1" type="text" placeholder="Email"/>
                <textarea className="inputs type2" placeholder="Message"></textarea>
                <button className="submit-btn">submit</button>
            </MainBox>
        </Container>
    )
}

export default ContactUs

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: #484242;
    padding: 2.5vh 2.5vw;
`

const MainBox = styled.div`
    height: 95vh;
    width: 95vw;
    border: 1px solid black;
    background-color: #222;
    border-radius: 25px;
    padding: 1rem 0.75rem;

    .header{
        color: whitesmoke;
        font-size: 1.5rem;
        letter-spacing: 0.25rem;
        font-weight: 500;
        margin: 1rem 0 2rem 0;
    }

    .inputs{
        display: block;
        width: 100%;
        padding: 0.6rem;
        font-size: 0.75rem;
        letter-spacing: 0.075rem;
        border: none;
        margin-bottom: 10px;
        border-radius: 10px;
        background-color: black;
        color: white;
        outline: none;
    }

    .type2{
        height: 35vh;
    }

    .submit-btn{
        width: 100%;
        padding: 0.5rem;
        background-color: #dd5050;
        color: white;
        border: none;
        margin-top: 1rem;
        border-radius: 10px;
        letter-spacing: 0.15rem;
    }

`