import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { Link } from "react-router-dom";
import { useState } from 'react';


const BasicBottomNav = () => {
  const [current, setCurrent] = useState('Home');



    return (
        <>
            <Container>
                <Link to="/home" onClick={(e) => setCurrent('Home')}>
                    <HomeIcon style={{ fontSize: '1.8rem', fill: "white" }} />
                </Link>
                <Link to="/explore" onClick={(e) => setCurrent('Explore')}>
                    <ExploreIcon style={{ fontSize: '1.8rem', fill: "white" }} />
                </Link>
                <Link to="/market" onClick={(e) => setCurrent('Updates')}>
                    <StorefrontIcon style={{ fontSize: '1.8rem', fill: "white" }} />
                </Link>
                <Link to="/profile" onClick={(e) => setCurrent('Profile')}>
                    {/* <ModeCommentIcon style={{ fontSize: '1.8rem', fill: "#2E112D" }}/> */}
                    <AccountCircleIcon style={{ fontSize: '1.8rem', fill: "white" }} />
                </Link>
            </Container>
        </>
    )
}

export default BasicBottomNav

const Container = styled.div`
    position: fixed;
    bottom: 0;
    background-color: black;
    width: 100vw;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 12px 0;
    border-top: 1px solid grey;
`

const LinkContainer = styled.div`
    height: 100%;
    width: 90%;
    padding: 0.75rem 0 0 0;
    margin-bottom: 0.5rem;
    display: grid;
    place-items: center;
    background-color: #e5285d;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    padding-bottom: 5px;
`



const HigherLinkContainer = styled.div`
    width: 24.5vw;
    display: flex;
    position: relative;
`

const SupportStructureLeft = styled.div`
    width: 12%;
    height: 50px;
    background-color: black;
    border-top-right-radius: 100px;
    position: absolute;
    left: 0;
`

const SupportStructureRight = styled.div`
    width: 12%;
    height: 50px;
    background-color: black;
    border-top-left-radius: 100px;
    position: absolute;
    right: 8px;
`

const LinkContainerOthers = styled.div`
    height: 100%;
    width: 25%;
    padding: 0.75rem 0 0 0;
    margin-bottom: 0.5rem;
    display: grid;
    place-items: center;
    border-top: none;
    padding-bottom: 5px;
`