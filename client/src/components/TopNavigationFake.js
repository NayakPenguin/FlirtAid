import React from 'react'
import styled from 'styled-components'
import ModeCommentIcon from '@material-ui/icons/ModeComment';


const TopNavigationFake = ({setOpenDeniedModal}) => {
    return (
        <Container>
            <div></div>
            <a onClick={() => setOpenDeniedModal(true)}>
                <ModeCommentIcon style={{fontSize: '1.8rem', fill: "#f1f1f1" }}/>
            </a>
        </Container>
    )
}

export default TopNavigationFake

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.6rem 0 0.6rem;
    margin-bottom: -0.6rem;
`