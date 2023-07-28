import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import Fade from 'react-reveal/Fade';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ClearIcon from '@material-ui/icons/Clear';
import { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [sideBar, setSideBar] = useState(false);

    return (
        <>
        <Container>
            <PageOne>
                <ShowTop>
                    <h1>Grinder</h1>
                    <button onClick={(e) => setSideBar(true)}>
                        <MenuIcon style={{fontSize: '1.8rem' ,fill: 'white'}}/>
                    </button>
                </ShowTop>
                <Mid>
                <Fade bottom>
                    <h1><i>Start something epic.</i></h1>
                </Fade>
                </Mid>
                <Bottom>
                    <Fade bottom>
                        <CreateAccBtn>
                            create account
                        </CreateAccBtn>                    
                    </Fade>
                    <Fade bottom>
                        <LoginAccBtn>
                            log in
                        </LoginAccBtn>
                    </Fade>
                    <Disclaimer>
                        {/* All the photos on site are for illustrative purposes only. */}
                    </Disclaimer>
                </Bottom>
                <DancerDownIcon>
                    <ExpandMoreIcon style={{fontSize: '1.5rem', fill: 'white'}} />
                </DancerDownIcon>
            </PageOne>
            <PageTwo>
                <Fade bottom>
                    <span>
                        How we work
                    </span>
                </Fade>
                <Fade bottom>
                    <h1>Why to choose FlirtAid?</h1>
                </Fade>
                <Fade bottom>
                    <p>
                        Our site has a very attractive and unique feature to provide 
                        the probable compatibility rate between two people. That rate 
                        is calculated based on various features also your behaviour etc. 
                    </p>
                </Fade>
                <Space/>
                <Fade bottom>
                    <p>
                        With us your photographs and information are safe. You have the 
                        power to love - accept - reject who ever you want.
                    </p>
                </Fade>
            </PageTwo>
            <PageThree>
                <Fade bottom>
                    <span>
                        Our mission
                    </span>
                </Fade>
                <Fade bottom>
                    <h1>Our primary goal is connection</h1>
                </Fade>
                <Fade bottom>
                    <p>
                        We the team of FlirtAid has also stood by our rules 
                        that we will make each and every feature for the 
                        users to make their dating life beutiful. 
                    </p>
                </Fade>
                <Space/>
                <Fade bottom>
                    <p>
                        " We remain steadfast and committed to progressive 
                        innovation of one and all. "
                    </p>
                </Fade>
            </PageThree>
            {/* <PageFour>
                <Fade bottom>
                    <h1>
                        Our Team
                    </h1>
                </Fade>

                <TeamPerson>
                    <ImageBox>
                        <img src="https://saharantimes.com/stored/images/2020/09/both-shah-rukh-khan-and-kajol-statue-to-unveiled-in-leicester-square.jpg" alt="" />
                    </ImageBox>
                    <main>
                        <p>Prannay Kedia</p>
                        <span>Mechanical, 24</span>
                    </main>
                </TeamPerson>

                <TeamPerson>
                    <ImageBox>
                        <img src="https://saharantimes.com/stored/images/2020/09/both-shah-rukh-khan-and-kajol-statue-to-unveiled-in-leicester-square.jpg" alt="" />
                    </ImageBox>
                    <main>
                        <p>Prannay Kedia</p>
                        <span>Mechanical, 24</span>
                    </main>
                </TeamPerson>

                <TeamPerson>
                    <ImageBox>
                        <img src="https://saharantimes.com/stored/images/2020/09/both-shah-rukh-khan-and-kajol-statue-to-unveiled-in-leicester-square.jpg" alt="" />
                    </ImageBox>
                    <main>
                        <p>Prannay Kedia</p>
                        <span>Mechanical, 24</span>
                    </main>
                </TeamPerson>

                <TeamPerson>
                    <ImageBox>
                        <img src="https://saharantimes.com/stored/images/2020/09/both-shah-rukh-khan-and-kajol-statue-to-unveiled-in-leicester-square.jpg" alt="" />
                    </ImageBox>
                    <main>
                        <p>Prannay Kedia</p>
                        <span>Mechanical, 24</span>
                    </main>
                </TeamPerson>

                <TeamPerson>
                    <ImageBox>
                        <img src="https://saharantimes.com/stored/images/2020/09/both-shah-rukh-khan-and-kajol-statue-to-unveiled-in-leicester-square.jpg" alt="" />
                    </ImageBox>
                    <main>
                        <p>Prannay Kedia</p>
                        <span>Mechanical, 24</span>
                    </main>
                </TeamPerson>
            </PageFour> */}
            <Footer>
                <h1>Grinder</h1>

                <div>
                    <a href="/">Privacy policy</a>
                    <a href="/">Terms and Conditions</a>
                    <a href="/">FAQ</a>
                    <a href="/">Mission</a>
                </div>

                <section>
                    <span>
                        <FacebookIcon  style={{fontSize: '1.3rem', fill: 'white'}} />
                    </span>
                    <span>
                        <InstagramIcon  style={{fontSize: '1.3rem', fill: 'white'}} />
                    </span>
                    <span>
                        <LinkedInIcon style={{fontSize: '1.3rem', fill: 'white'}} />
                    </span>

                   
                </section>
            </Footer>
            
        </Container>

        <SideBar className={`${sideBar ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <SbComponentOne>
                <Link to="/">How to use</Link>
                <Link to="/">Community Guidelines</Link>
                <Link to="/">Contact Us</Link>
            </SbComponentOne>
            <JoinNow onClick={(e) => setSideBar(false)}>
                <ArrowBackIosIcon style={{fontSize: '0.7rem', marginRight: '0.25rem'}} /> Create Account
            </JoinNow>
            <RemoveSideBar onClick={(e) => setSideBar(false)}>
                <ClearIcon style={{fontSize: '1.5rem', fill: 'white'}} />
            </RemoveSideBar>
        </SideBar>
        
        </>
    )
}

export default LandingPage




const Footer = styled.div`
    height: 50vh;
    scroll-snap-align: center;
    background-color: #2d2d2d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    h1{
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    a{
        text-decoration: none;
        color: white;
        font-size: 0.7rem;
        margin-bottom: 0.5rem;
    }

    section{
        display: flex;
        justify-content: space-between;
        align-items: center;

        span{
            height: 33px;
            width: 33px;
            border-radius: 50%;
            border: 1px solid white;
            display: grid;
            place-items: center;
            margin: 0 0.3rem;
        }
    }
`


const Space = styled.div`
    height: 0.5rem;
`

const SideBar = styled.div`
    /* index.css */
`

const SbComponentOne = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    a{
        text-decoration: none;
        color: white;
        border: 1px solid white;
        padding: 0.5rem;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        margin-bottom: 0.75rem;
        width: 130%;
        font-size: 0.95rem;
        text-align: center;
    }
`

const JoinNow = styled.div`
    margin-top: 5rem;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
`

const RemoveSideBar = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
`


const Container = styled.div`
`

const PageOne = styled.div`
    scroll-snap-align: center;
    padding: 1rem;
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('https://media.istockphoto.com/photos/finger-pushing-heart-icon-on-screen-in-mobile-smartphone-application-picture-id1179846145?k=20&m=1179846145&s=612x612&w=0&h=0GcWfkbbxpDm0Xnjs8QWx4gpCrbSdRqGY1T-hRcbWuc=') center center / cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`



const ShowTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
    }

    button{
        background-color: transparent;
        border: none;
    }
`

const Mid = styled.div`
    h1{
        font-size: 2.15rem;
        line-height: 2.75rem;
        text-align: center;
        font-weight: 600;
        
        i{
            color: white;
        }
    }
`

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CreateAccBtn = styled.button`
    width: 80vw;
    height: 3rem;
    border-radius: 100px;
    display: grid;
    place-items: center;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    background-color: #ef4239;
    border: none;
    color: white;
`

const LoginAccBtn = styled.button`
    width: 80vw;
    height: 3rem;
    border-radius: 100px;
    display: grid;
    place-items: center;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    margin-top: 16px;
`

const Disclaimer = styled.div`
    color: white;
    font-size: 0.6rem;
    margin: 2.5rem 0 0.5rem 0;
`

const DancerDownIcon = styled.div`
    position: absolute;
    bottom: 10px;
    width: 95%;
    display: grid;
    place-items: center;
    animation: animateDown infinite 1.5s;


    @keyframes animateDown{
        0%, 20%, 50%, 80%, 100%{
            transform: translateY(0);
        }
        40%{
            transform: translateY(5px);
        }
        60%{
            transform: translateY(3p);
        }
    }
`


const PageTwo = styled.div`
    scroll-snap-align: center;
    min-height: 100vh;
    background-color: #1f2225;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h1{
        color: #f1f1f1;
    }
    span{
        color: #f1f1f1;
    }
    p{
        color: #f1f1f1;
        font-size: 0.8rem;
    }
`

const PageFour = styled.div`
    scroll-snap-align: center;
    min-height: 100vh;
    background-color: #1f2225;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h1{
        color: #f1f1f1;
        font-size: 1rem;
        margin-bottom: 1rem;
    }
    
    p{
        color: #f1f1f1;
        font-size: 0.9rem;
    }
`

const TeamPerson = styled.div`
    display: flex;
    /* height: 12vh; */
    padding: 1vh;
    margin-top: 0.4rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;


    main{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;

        p{
            font-weight: 500;
            display: block;
        }

        span{
            display: block;
            color: #f1f1f1;
            font-size: 0.7rem;
        }
    }
`

const ImageBox = styled.div`
    height: 9vh;
    border-radius: 100px;
    width: 9vh;
    overflow: hidden;
    border: 1px solid white;
    padding: 0.2rem;

    img{
        height: 100%;
        width: 100%;
        border-radius: 100px;
    }
`


const PageThree = styled.div`
    min-height: 100vh;
    scroll-snap-align: center;
    background-color: #282626;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h1{
        color: #f1f1f1;
    }
    span{
        color: #f1f1f1;
    }
    p{
        color: #f1f1f1;
        font-size: 0.8rem;
    }
`

// const CardHolder = styled.div`
//     display: flex;
//     flex-direction: column;    

// `

// const Card = styled.div`
//     width: 100%;
//     height: 120px;
//     margin-bottom: 10px;
//     border-radius: 10px;
//     border: 1px solid black;
//     background-color: orange;
// `
