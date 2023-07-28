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

const LandAgain = () => {
    const [sideBar, setSideBar] = useState(false);

    return (
        <div>
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
                <ImageOne>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E22AQF4c4c3JIYLbw/feedshare-shrink_800/0/1638699718727?e=1641427200&v=beta&t=sUKx7PCycBdsurW_hC6cesZ9Fi8ucdvsCvX0dhCOfyc" alt="" />
                </ImageOne>
                <section>
                <Fade bottom>
                    <h1>Why to choose FlirtAid?</h1>
                </Fade>
                <Fade bottom>
                    <p>
                        Our site has a very attractive and unique feature to provide 
                        the probable compatibility rate between two people. That rate 
                        is calculated based on various features also your behaviour etc. 
                        Lorem ipsum dolor. Debitis.
                    </p>
                </Fade>
                </section>
            </PageTwo>



            <FeaturesPage>
                <Fade bottom>
                    <h1 style={{marginLeft: '40%'}}>What's Special?</h1>
                </Fade>
                <section style={{marginLeft: '40%'}}>
                    <Fade bottom>
                        <p>
                            Lorem ipsum dolor sit amet sit amet consectetur, adipisicing elit. Eaque, in.adipisicing elit. Eaque, in.
                        </p>
                    </Fade>
                </section>
                <ImageTwo style={{width: '40%'}} >
                    <img src="https://media-exp1.licdn.com/dms/image/C4E22AQFo8PUivs-Ybw/feedshare-shrink_800/0/1638699654577?e=1641427200&v=beta&t=x8QzvZOZE2WxUYKVxawTDC5fO5x7LbSx2sIPu6uNubE" alt="" />
                </ImageTwo>
                {/*  */}
                <section style={{marginRight: '40%', marginTop: '15vh'}}>
                    <Fade bottom>
                        <span>
                            1. Love Percentage
                        </span>
                    </Fade>
                    <Fade bottom>
                        <p>
                            Lorem ipsum dolor sit amet sit amet consectetur, adipisicing elit. Eaque, in.adipisicing elit. Eaque, in.
                        </p>
                    </Fade>
                </section>
                <ImageThree style={{width: '35%'}} >
                    <img src="https://media-exp1.licdn.com/dms/image/C4E22AQG3WMlFDXqlrw/feedshare-shrink_800/0/1638702524630?e=1641427200&v=beta&t=OurzCaKF2gk-njpIh2jW0pEjt9C10Abp9E11jtViL50" alt="" />
                </ImageThree>

                <section style={{margin: '1.5rem 0 0 40%'}}>
                    <Fade bottom>
                        <span>
                            2. Face Recognisation
                        </span>
                    </Fade>
                    <Fade bottom>
                        <p>
                            Lorem ipsum dolor sit amet, adipisicing elit. Eaque, in.adipisicing elit. Eaque, in.
                        </p>
                    </Fade>
                </section>
                <ImageFour style={{width: '35%'}} >
                    <img src="https://media-exp1.licdn.com/dms/image/C4E22AQE2jZyMB9E2gw/feedshare-shrink_2048_1536/0/1638703591367?e=1641427200&v=beta&t=yCNUVehcpvaczZQy_D4gUJi7V19qA8kc72TXsOQlHjY" alt="" />
                </ImageFour>

            </FeaturesPage>



            {/* <PageThree>
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
            </PageThree> */}

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
        </div>
    )
}

export default LandAgain


const Footer = styled.div`
    height: 50vh;
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
    background-color: #1f2225;
    position: relative;
`

const PageOne = styled.div`
    /* scroll-snap-align: center; */
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
    /* margin-top: 3rem; */
    width: 100%;
    left: 0;
    padding: 1rem;

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
    min-height: 75vh;
    background-color: #1f2225;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 25vh;
    margin-bottom: 20vh;


    section{
        width: 60%;
    }

    h1{
        margin-top: 2rem;
        color: #f1f1f1;
    }
    span{
        color: #f1f1f1;
    }
    p{
        color: #f1f1f1;
        font-size: 0.8rem;
        font-family: 'Cedarville Cursive', cursive;
    }
`

const FeaturesPage = styled.div`
    background-color: #1f2225;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20vh;

    section{
        width: 60%;
    }

    h1{
        margin-top: 2rem;
        color: #f1f1f1;
        font-size: 1.5rem;
    }
    span{
        color: white;
        font-size: 0.95rem;
        font-family: 'Cedarville Cursive', cursive;
    }
    p{
        color: #f5c6c6;
        font-size: 0.85rem;
        font-family: 'Cedarville Cursive', cursive;
    }
`

const ImageOne = styled.div`
    position: absolute;
    margin-top: -50vh;
    width: 60%;
    margin-left: 40%;
    padding: 0.4rem;
    padding-bottom: 0.5rem;
    background-color: #f1f1f1;
    transform: rotate(-10deg);

    img{
        width: 100%;
    }
`

const ImageTwo = styled.div`
    position: absolute;
    margin-top: -70vh;
    margin-left: -5%;
    padding: 0.4rem;
    padding-bottom: 0.5rem;
    background-color: #f1f1f1;
    transform: rotate(10deg);

    img{
        width: 100%;
    }
`

const ImageThree = styled.div`
    position: absolute;
    margin-top: 20vh;
    margin-left: 55%;
    padding: 0.1rem;
    padding-bottom: 0rem;
    /* background-color: pink; */
    /* transform: rotate(10deg); */
    border-radius: 10px;

    img{
        width: 100%;
        border-radius: 10px;
    }
`

const ImageFour = styled.div`
    position: absolute;
    margin-top: 70vh;
    
    img{
        width: 100%;
        border: 1px solid purple;
        border-radius: 10px;
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