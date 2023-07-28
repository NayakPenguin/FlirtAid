import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CallMadeIcon from '@material-ui/icons/CallMade';

const OurTeam = () => {
    return (
        <Container>
            <Link to='/'>
                <ArrowBackIosIcon />
            </Link>
            <h1>Meet our team</h1>

            <OneLine target="_blank" href="https://www.linkedin.com/in/prannaykedia">
                <a>1. Prannay Kedia </a>
                <CallMadeIcon style={{marginBottom : "-6px", fill: "violet"}}/>
            </OneLine>
            <span>Co-founder</span>
            <p>Chemical'24</p>

            <OneLine target="_blank" href="https://www.linkedin.com/in/sourodeep-acharya-93a6b41b6/">
                <a>2. Sourodeep Acharya </a>
                <CallMadeIcon style={{marginBottom : "-6px", fill: "violet"}}/>
            </OneLine>
            <span>Co-founder</span>
            <p>FTBE’24</p>

            <OneLine target="_blank" href="https://www.linkedin.com/in/dipro-banerjee-b048891a3/">
                <a>3. Dipro Banerjee </a>
                <CallMadeIcon style={{marginBottom : "-6px", fill: "violet"}}/>
            </OneLine>
            <span>Co-founder</span>
            <p>Mechanical’24</p>

            <OneLine target="_blank" href="https://www.linkedin.com/in/anurag-chakraborty-841827174/">
                <a>4. Anurag Chakroborty </a>
                <CallMadeIcon style={{marginBottom : "-6px", fill: "violet"}}/>
            </OneLine>
            <span>Developer</span>
            <p>CSE’24</p>

            <OneLine target="_blank" href="https://www.linkedin.com/in/atanu-nayak-556025229/">
                <a>5. Atanu Nayak </a>
                <CallMadeIcon style={{marginBottom : "-6px", fill: "violet"}}/>
            </OneLine>
            <span>Developer</span>
            <p>CSE’25</p>

        </Container>
    )
}

export default OurTeam


const Container = styled.div`
    padding: 1rem;

    h1{
        font-size: 1.8rem;
        margin-bottom: 2rem;
    }

    h3{
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
        margin-top: 1rem;
        margin-bottom: -0.2rem;
    }

    p{
        font-size: 0.7rem;
        line-height: 1.2rem;
        margin-left: 1rem;

        span{
            font-weight: 500;
            display: block;
            margin: 0.5rem 0;
        }
    }

    span{
        margin-left: 1rem;
        font-size: 0.8rem;
        font-weight: 600;
        color: grey;
        letter-spacing: 0.1rem;
    }

    a{
        text-decoration: none;
    }
    
`

const OneLine = styled.a`
    display: flex;
    align-items: center;
    display: block;
    margin-top: 1.5rem;

    a{
        color: cornflowerblue;
        letter-spacing: 0.1rem;
        text-decoration: none;
        font-weight: 600;
    }
`