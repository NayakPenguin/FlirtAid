import BottomNavbar from './BottomNavbar'
import BasicBottomNav from './BasicBottomNav'
import BasicBottomNavFake from './BasicBottomNavFake'
import CardsComponent from './CardsComponent'
import CardsContainNotVer from './CardsContainNotVer'
import TopNavigation from './TopNavigation'
import TopNavigationFake from './TopNavigationFake'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


const Home = ({ mainUser, setCurrUser }) => {
    // console.log(mainUser);


    const [allPosts, setAllPosts] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetch('https://faid-api.herokuapp.com/api', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                gender: "Male",
                ihash: mainUser.ihash,
                email: mainUser.email,
            })
        }).then(response => response.json())
            .then(resp => {
                setAllPosts(resp);
                // console.log(resp);
            })
    }, []);

    // console.log(allPosts);

    useEffect(() => {
        if (index == allPosts.length) {
            setIndex(0);
        }
        // console.log(index);
    }, [index])

    const handleChangePerson = () => {
        setIndex(index + 1);
    }


    const [openDeniedModal, setOpenDeniedModal] = useState(false);
    const handleCloseDeniedModal = () => {
        setOpenDeniedModal(false);
    }

    return (
        <>
            {/* <Shade></Shade> */}
            {
                mainUser.image.length == 0 ? (
                    <Container  >
                        {/* ------------  M O B I L E  A C C E S S  D E N I E D  S T A R T ------------ */}
                        <Modal open={openDeniedModal} onClose={handleCloseDeniedModal}>
                            <DeniedModalContainer>
                                <ModalHeader>
                                    <h3></h3>
                                    <h3>Create your profile</h3>
                                    <CloseIcon style={{ cursor: 'pointer' }} onClick={handleCloseDeniedModal} />
                                </ModalHeader>
                                {/* <ModelUser>
                                    <Avatar />
                                    <h4>Name of the user</h4>
                                </ModelUser> */}
                                <DeniedModalDesc>
                                    We need you profile which contains things likes you hobbies,
                                    picture, and some other cool stuff. Here you will get to know
                                    people and date them. We know how hard the covid time was so
                                    we are here to get you with a connection.
                                    Create your profile now.
                                </DeniedModalDesc>
                                <ModelPost onClick={handleCloseDeniedModal}>
                                    <Link to="/gender-verification">
                                        Create now
                                    </Link>
                                </ModelPost>
                            </DeniedModalContainer>
                        </Modal>
                        {/* ------------  M O B I L E  A C C E S S  D E N I E D  E N D ------------ */}
                        <TopNavigationFake setOpenDeniedModal={setOpenDeniedModal} />
                        <CardsContainNotVer setOpenDeniedModal={setOpenDeniedModal} />
                        <BasicBottomNavFake setOpenDeniedModal={setOpenDeniedModal} />
                    </Container>
                ) : (
                    <Container>
                        <div>
                            <Fade>
                                <TopNavigation />
                                {/* <Link to="/create-account">
                        Create Accout
                    </Link> */}

                                <AllCardsHolder>
                                    {
                                        allPosts.map((user, userIndex) => {
                                            // console.log(user);
                                            // console.log(mainUser);

                                            return (
                                                <ShowDatePerson>
                                                    {
                                                        userIndex == index ? (
                                                            <CardsComponent mainUser={mainUser} key={userIndex} user={user} setCurrUser={setCurrUser} handleChangePerson={handleChangePerson} />
                                                        ) : (
                                                            <></>
                                                        )
                                                    }
                                                </ShowDatePerson>
                                            )
                                        })
                                    }
                                </AllCardsHolder>
                            </Fade>
                        </div>
                        {/* <BottomNavbar/> */}
                        <BasicBottomNav />
                    </Container>
                )
            }
        </>

    )
}

export default Home

const ChangePerson = styled.button`
    position: absolute;
`

const Container = styled.div`
    background-color: #1f2225;
    min-height: 100vh;
    position: relative;
`

const AllCardsHolder = styled.div`
    height: 85vh;
    background-color: #222;
    display: flex;
    position: relative;
    /* overflow: hidden; */
    border-radius: 10px;
    margin-bottom: 8px;
`

const ShowDatePerson = styled.div`
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
`

const ShowOptions = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    top: 45%;
    padding: 0 0.2rem;
    z-index: 1;

    span{
        display: grid;
        place-items: center;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        /* background-color: white; */
        background-color: #e7e1de;
    }
`

const DeniedModalContainer = styled.div`
    background-color: white;
    width: 35vw;
    position: absolute;
    border-radius: 6px;
    overflow: hidden;
    padding: 0.3rem;
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: calc(50% - 100px);
    left: 32.5%;
   

   
    @media(max-width: 1100px){
        width: 40%;
        left: 30%;
    }
    @media(max-width: 900px){
        width: 80%;
        left: 10%;
    }
    @media(max-width: 500px){
        width: 90%;
        left: 5%;
    }
`

const DeniedModalDesc = styled.div`
    font-size: 0.75rem;
    color: red;
    padding: 0.6rem;
`

const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddcccc;
    padding: 0.6rem 0;
`

const ModelUser = styled.div`
    width: 98%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0.8rem 0;

    h4{
        margin-left: 0.6rem;
    }
`

const ModelPost = styled.button`
    width: 98%;
    border: none;
    background-color: #c5405f;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    cursor: pointer;
    padding: 0.3rem;
    border-radius: 6px;
    font-size: 1rem;
    color: white;

    
    a{
        color: white;
        display: block;
        text-decoration: none;
        width: 100%;
        text-align: center;
    }
`

const Shade = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: transparent;
    z-index: 100;
`