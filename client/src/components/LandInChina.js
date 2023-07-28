import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import Fade from 'react-reveal/Fade';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ClearIcon from '@material-ui/icons/Clear';
import { useState, useEffect } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';
import mainLogo from './FAid.png';


const LandInChina = () => {

    const [sideBar, setSideBar] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    return (
        <div>
            <Container>
                {
                    showAlert ? (
                        <>
                            <CustomAleart onClick={() => setShowAlert(false)}>
                                <div>
                                    content will be added soon
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1200px-Flat_cross_icon.svg.png" alt="" />
                                </div>
                            </CustomAleart>
                        </>
                    )

                        :

                        (
                            <></>
                        )
                }
                <PageOne>
                    <ShowTop>
                        <img className="mainLogo" src={mainLogo} alt="" />
                        <button style={{ cursor: "pointer" }} onClick={(e) => setSideBar(true)}>
                            <MenuIcon style={{ fontSize: '1.8rem', fill: 'white' }} />
                        </button>
                    </ShowTop>
                    <Mid>
                        <Fade bottom>
                            <h1><i>Your Very Own LoveGuru.</i></h1>
                        </Fade>
                    </Mid>
                    <Bottom>
                        <Fade bottom>
                            <Link to="/signup" style={{ textDecoration: 'none' }}>
                                <CreateAccBtn>
                                    create account
                                </CreateAccBtn>
                            </Link>
                        </Fade>
                        <Fade bottom>
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <LoginAccBtn onClick={() => setShowAlert(true)}>
                                    log in
                                </LoginAccBtn>
                            </Link>
                        </Fade>
                    </Bottom>
                    <DancerDownIcon>
                        <ExpandMoreIcon style={{ fontSize: '1.5rem', fill: 'white' }} />
                    </DancerDownIcon>
                </PageOne>

                <PageTwo>
                    <Fade bottom>
                        <h3>Why Flirtaid?</h3>
                    </Fade>
                    <Fade bottom>
                        <span>
                            Simply because we understand you. FlirtAid is a dating app made with you in mind. We spent months building the perfect security system to keep out fake profiles, building a match percent algorithm better than any you have ever seen before and a ground-breaking signal system which helps decode unsaid signals. Online Dating couldn't get any easier. Register Now!
                        </span>
                    </Fade>
                </PageTwo>


                <PageThree>
                    <h3>Features</h3>

                    <FeatureContainer>
                        <Fade bottom>
                            <img src="https://media-exp1.licdn.com/dms/image/C5622AQEyEAK5BS-gQQ/feedshare-shrink_2048_1536/0/1640453903525?e=1643241600&v=beta&t=4YCGf-Ov14IeSmaGTBQPDIlTnVapx-y3vB2NTeyu80w" alt="" />
                        </Fade>
                        <Fade bottom>
                            <p>Signal</p>
                        </Fade>
                        <Fade bottom>
                            <span>  FlirtAid provides a simple yet effective solution to a very common problem.. How should I go about the conversation? I find myself attracted but I don’t want to sound too desperate. At the same time I don’t want to come across as some uninterested douchebag. FlirtAid incorporates a “Traffic Signal” to ensure a smooth conversation between the newly matched couple. </span>
                        </Fade>
                    </FeatureContainer>

                    <FeatureContainer>
                        <Fade bottom>
                            <img src="https://media-exp1.licdn.com/dms/image/C4E22AQG3WMlFDXqlrw/feedshare-shrink_800/0/1638702524630?e=1642032000&v=beta&t=kdqpRiaihtxqKsy9H3nbFRFOnxXgTM_QAlVMDOA4Fx8" alt="" />
                        </Fade>
                        <Fade bottom>
                            <p>Love Percentage</p>
                        </Fade>
                        <Fade bottom>
                            <span> How many times has a man pretended to be a woman just to prank his friends? It might just be a prank for him but being on the other end of an angel priya relationship breaks you down completely. FlirtAid uses a ML Face Recognition Model to check your gender. You will never chat with a fake profile ever again. We Promise! </span>
                        </Fade>
                    </FeatureContainer>

                    <FeatureContainer>
                        <Fade bottom>
                            <img src="https://media-exp1.licdn.com/dms/image/C4E22AQE2jZyMB9E2gw/feedshare-shrink_2048_1536/0/1638703591367?e=1642032000&v=beta&t=ptbH3YnX7rCyHGSVUG5EMmXeK54FoWTSviDHyHcyATU" alt="" />
                        </Fade>
                        <Fade bottom>
                            <p>A.I. protected user signup</p>
                        </Fade>
                        <Fade bottom>
                            <span> Have you ever wondered if the person you just matched with is a match for you? Do you actually have things in common?! Introducing FlirtAid’s Match Meter! Using a proprietary algorithm, we predict the compatibility between you and your to-be partner. But REMEMBER: scores shouldn’t be given much priority in matters of the heart. </span>
                        </Fade>
                    </FeatureContainer>
                </PageThree>

                <PageFour>
                    <Fade bottom>
                        <h3>Our Mission</h3>
                    </Fade>
                    <Fade bottom>
                        <span>
                            Dating someone could be a dicy process, and probably even more so if you do so over dating apps. A lot of sketchy variables come to the fore: is the opposite person authentic or someone interacting behind a fake profile? How do I start the conversation: I don’t want to sound boring but also don’t want to go overboard. I like the person but can’t express my feelings towards him/her. I wish to gift things specially customized for my loved ones. FlirtAid aims to bring a viable solution to all these problems.
                        </span>
                    </Fade>
                </PageFour>
                <Footer>

                    <Fade bottom>
                        <img className="mainLogo" src={mainLogo} alt="" />
                    </Fade>

                    <div>
                        <Fade bottom>
                            <FooterLinks href="/privacy-policy">Privacy policy</FooterLinks>
                        </Fade>
                        <Fade bottom>
                            <FooterLinks href="/terms-and-co">Terms and Conditions</FooterLinks>
                        </Fade>
                        <Fade bottom>
                            <FooterLinks href="/our-team">Our Team</FooterLinks>
                        </Fade>
                    </div>

                    <section>
                        <Fade left>
                            <SocialLink target="_blank" href="https://www.facebook.com/flirtaidju">
                                <span>
                                    <FacebookIcon style={{ fontSize: '1.3rem', fill: 'white' }} />
                                </span>
                            </SocialLink>
                        </Fade>
                        <SocialLink target="_blank" href="https://www.instagram.com/flirtaid/">
                            <span>
                                <InstagramIcon style={{ fontSize: '1.3rem', fill: 'white' }} />
                            </span>
                        </SocialLink>
                        <Fade right>
                            <SocialLink target="_blank" href="https://www.linkedin.com/company/flirtaid/?viewAsMember=true">
                                <span>
                                    <LinkedInIcon style={{ fontSize: '1.3rem', fill: 'white' }} />
                                </span>
                            </SocialLink>
                        </Fade>
                    </section>
                </Footer>
            </Container>

            <SideBar className={`${sideBar ? 'sidebar show-sidebar' : 'sidebar'}`}>
                <SbComponentOne>
                    <Link to="/learn">How to use</Link>
                    <Link to="/community-guidelines">Community Guidelines</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </SbComponentOne>
                <JoinNow onClick={(e) => setSideBar(false)}>
                    <ArrowBackIosIcon style={{ fontSize: '0.7rem', marginRight: '0.25rem' }} /> Create Account
                </JoinNow>
                <RemoveSideBar onClick={(e) => setSideBar(false)}>
                    <ClearIcon style={{ cursor: "pointer", fontSize: '1.5rem', fill: 'white' }} />
                </RemoveSideBar>
            </SideBar>

        </div>
    )
}

export default LandInChina

const Container = styled.div`
    background-color: #282626;
    min-height: 200vh;
    overflow-x: hidden;

    .mainLogo{
        width: 140px;
    }

    
`

const PageOne = styled.div`
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
    margin-bottom: 75px;
`

const CreateAccBtn = styled.button`
    cursor: pointer;
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

    &:hover{
        background-color: red;
        transition-duration: 0.3s;
    }
`

const LoginAccBtn = styled.button`
    cursor: pointer;
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

    &:hover{
        background-color: white;
        color: black;
        transition-duration: 0.3s;
    }
`

const DancerDownIcon = styled.div`
    position: absolute;
    bottom: 40px;
    width: 98%;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    color: white;
    min-height: 100vh;
    background-color: #1c1a1a;
    width: 100vw;
    /* background: linear-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .5)), url('https://media-exp1.licdn.com/dms/image/C4E22AQF4c4c3JIYLbw/feedshare-shrink_800/0/1638699718727?e=1642032000&v=beta&t=I05KtG7QJF49DIjUwDvEdjpui7QlEiPL0GQdY5hH_Z0') center center / cover no-repeat; */
    background-color: #222;

    h3{
        color: white;
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    span{
        /* color: grey; */
        color: #f3d5d5;
        font-size: 0.8rem;
        text-align: center;
        margin: 0 3rem;
    }

    @media only screen and (min-width: 600px) {
        h3{
            color: white;
            font-size: 2rem;
            font-weight: 500;
            margin-bottom: 1rem;
        }
    
        span{
            font-size: 1rem;
            width: 60%;
        }
    }
`


const PageThree = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 1rem;
    color: white;
    /* background: linear-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .5)), url('https://media-exp1.licdn.com/dms/image/C4E22AQFo8PUivs-Ybw/feedshare-shrink_800/0/1638699654577?e=1642032000&v=beta&t=47UKyKWm47V9zuXOdK0EynOEglNne2iJaWsg-p95Clw') center center / cover no-repeat; */
    background-color: #111;

    
    h3{
        color: white;
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: -1rem;
    }

    @media only screen and (min-width: 600px) {
        h3{
            color: white;
            font-size: 2rem;
            font-weight: 500;
            margin-bottom: 1rem;
        }
    }
`

const FeatureContainer = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;

    img{
        height: 80px;
        margin-bottom: 0.8rem;
        border-radius: 10px;
        border: 1px solid #855353;
    }

    p{
        color: white;
        text-align: center;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        margin: 0.25rem 0 0.5rem 0;
    }

    span{
        color: #bf9ea4;
        margin: 0 0.2rem;
        letter-spacing: 0.05rem;
        font-size: 0.8rem;
        text-align: center;
        /* font-family: 'Moon Dance', cursive; */
    }

    @media only screen and (min-width: 600px) {
        span{
            font-size: 1rem;
            width: 40%;
        }
    }
`

const PageFour = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    min-height: 100vh;
    color: white;
    background-color: #1c1a1a;
    justify-content: center;
    background: linear-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .5)), url('https://media-exp1.licdn.com/dms/image/C4E22AQFo8PUivs-Ybw/feedshare-shrink_800/0/1638699654577?e=1642032000&v=beta&t=47UKyKWm47V9zuXOdK0EynOEglNne2iJaWsg-p95Clw') center center / cover no-repeat;


    h3{
        color: white;
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    span{
        color: #c3bfbf;
        margin: 0 3rem;
        font-size: 0.8rem;
        text-align: center;
    }

    @media only screen and (min-width: 600px) {
        h3{
            color: white;
            font-size: 2rem;
            font-weight: 500;
            margin-bottom: 1rem;
        }
    
        span{
            font-size: 1rem;
            width: 60%;
        }
    }
`

const Footer = styled.div`
    height: 50vh;
    scroll-snap-align: center;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem;
    background: linear-gradient(rgba(0, 0, 0, .99), rgba(0, 0, 0, .5)), url('https://searchera.io/img/pattern.svg') center center / cover no-repeat;


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

    /* a{
        
    } */

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

const FooterLinks = styled.a`
    text-decoration: none;
    color: white;
    font-size: 0.7rem;
    margin-bottom: 0.5rem;

    @media only screen and (min-width: 600px) {
            font-size: 0.9rem;
    }
`

const SocialLink = styled.a`

`

const SideBar = styled.div`
/* index.css */
    position: fixed;
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
            
            &:hover{
                background-color: white;
                color: #333;
                transition-duration: 0.3s;
            }
        }
`

const JoinNow = styled.div`
    cursor: pointer;
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

const CustomAleart = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    transition-delay: 2s;
    @media(min-width: 900px){
            display: none;
        } 
    
    
    div{
        position: fixed;
        top: 30px;
        z-index: 100;
        padding: 1rem;
        width: 600px;
        background-color: #5fd979;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;

        @media(max-width: 900px){
            padding: 0.5rem 1rem;
            width: 90vw;
            top: auto;
            bottom: 25px;
            font-size: 0.9rem;
            background-color: #5fd979;
        } 

        img {
            height: 1.4rem;
            margin-right: 0.3rem;
        }
    }
`

