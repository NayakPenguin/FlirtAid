import React from 'react'
import styled from 'styled-components'
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from "react-router-dom";
import mainLogo from './FAid.png';


const TopNavigation = () => {
    return (
        <Container>
            <div>
                <img className="mainLogo" src={mainLogo} alt="" />
            </div>
            {/* <AccountCircleIcon style={{ fontSize: '1.8rem', fill: "#2E112D" }}/> */}
            <Link to="/chats">
                <ModeCommentIcon style={{fontSize: '1.8rem', fill: "#f1f1f1" }}/>
            </Link>
        </Container>
    )
}

export default TopNavigation

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.6rem 0 0.6rem;
    margin-bottom: -0.6rem;

    .toplogo{
        height: 2rem;
    }
    
    .mainLogo{
        height: 2.1rem;
        width: 90px;
    }
`