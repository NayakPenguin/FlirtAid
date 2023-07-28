import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';

const EditAccount = () => {
    return (
        <>
        <BaapContainer>
            <TopBar>
                <Link to='/profile' style={{margin: '0.3rem 1rem 0 0'}}>
                    <ClearIcon/>
                </Link>
                <p><strong>Edit Profile</strong></p>
                <DoneRoundedIcon style={{fill: 'cornflowerblue', fontSize: '1.75rem'}}/>
            </TopBar>
            <Container>
            <Component>
                <RowOne>
                    <TextField defaultValue="Zayn Malik" style={{ width: '48%'}} id="standard-basic" label="Full Name"/>
                    <TextField
                        id="standard-number"
                        label="Age"
                        type="number"
                        defaultValue="21"
                        InputLabelProps={{ shrink: true, }}
                        style={{ width: '48%'}}
                    />
                </RowOne>
                <RowOne>
                    <TextField defaultValue="Electrical Engg." style={{ width: '60%'}} id="standard-basic" label="Branch"/>
                    <TextField
                        id="standard-number"
                        label="Year of passout"
                        type="number"
                        defaultValue="2025"
                        InputLabelProps={{ shrink: true, }}
                        style={{ width: '38%'}}
                    />
                </RowOne>
                <RowTwo>
                    <TextField defaultValue="Sketch and painting" id="standard-basic" label="Hobbies and mood freshers" />
                </RowTwo>
                <RowTwo style={{ margin: '2rem 0 3rem 0' }}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Bio that discribes your thoughts"
                        multiline
                        rows={4}
                        variant="outlined"
                        defaultValue="When you want to let the world know you're not really sure what's happening, but you also don't care:"
                    />
                </RowTwo>
            </Component>
        </Container>
        <OneLineCenter>
            <EditIcon style={{ fontSize: '1.4rem', fill: 'grey', marginBottom: '-0.4rem' }} />
            <p>Social Media Accounts</p>
        </OneLineCenter>
        <OneLineCenter>
            <EditIcon style={{ fontSize: '1.4rem', fill: 'grey', marginBottom: '-0.4rem' }} />
            <p>Passions</p>
        </OneLineCenter>
        </BaapContainer>
        </>
    )
}

export default EditAccount

const BaapContainer = styled.div`
    padding : 0.3rem;
`

const TopBar = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;

    p{
        flex: 1;
    }
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10vh 14vw;
    align-items: center;

    @media(max-width: 600px){
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 1rem;
        width: 100%;
        padding-top: 3rem;
    }
`

const OneLineCenter = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    display: block;
    margin-bottom: 0.2rem;
    margin-left: 1rem;
    
    p{
        color: cornflowerblue;
        display: inline-block;
        margin-left: 10px;
        margin-top: -10px;
    }
`

const Component = styled.div`
    width: 50%;
    padding-right: 2.5rem;

    h1{
        font-size: 3.5rem;
        line-height: 3.8rem;
        margin-bottom: 3rem;

        @media(max-width: 600px){
            font-size: 2.45rem;
            line-height: 2.85rem;
            margin-bottom: 1.5rem;
        }
    }
    
    @media(max-width: 600px){
        width: 100%;
        padding-right: 0;
    }
`

const RowOne = styled.div`
    margin-bottom: 1.5rem;
    width: 425px;
    display: flex;
    justify-content: space-between;

    @media(max-width: 600px){
        width: 100%;
    }
`

const RowTwo = styled.div`
    margin-bottom: 1.5rem;
    width: 425px;
    
    div{
        width: 100%;
    }

    @media(max-width: 600px){
        width: 100%;
    }
`

const SubmitButton = styled.button`
    border: none;
    color: #fff;
    background-color: #eb4d55;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
    
    &:hover{
        background: #e3131d;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    @media(max-width: 600px){
        width: 100%;
        border-radius: 10px;
    }
`
const RightText = styled.div`
    width: 50%;
    border-left: 1px solid #dddbdb;
    padding: 1.5rem 0 1.5rem 2.5rem;

    @media(max-width: 600px){
        display: none;
    }

    h2{
        font-size: 1.9rem;
        line-height: 2rem;
        margin-bottom: 1.2rem;
    }

    p{
        font-size: 0.9rem;
        color: #9f9090;
        font-weight: 300;
    }
`