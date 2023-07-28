import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import TopNavigation from './TopNavigation';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import ClearIcon from '@material-ui/icons/Clear';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
    Routes,
    Route,
} from "react-router-dom";
import ViewProfile from './ViewProfile';
import SchoolIcon from '@material-ui/icons/School';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const CardsComponent = ({ mainUser, user, setCurrUser, handleChangePerson }) => {
    // console.log(user);
    // console.log(mainUser);
    const [index, setIndex] = useState(0);
    // console.log(user.flag);

    const [showLike, setShowLike] = useState(false);
    const [showCancel, setShowCancel] = useState(false);



    useEffect(() => {
        if (user.flag === 1) {
            setShowLike(true);
        }
    }, [user]);



    const people = [
        {
            id: 1,
            image: 'https://www.pinkvilla.com/imageresize/Albus-Dumbledore-Bollywood-Actor-Audition.jpg?width=752&format=webp&t=pvorg',
            name: 'maria ferguson',
            title: 'office manager',
            quote:
                'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
        },
        {
            id: 2,
            image:
                'https://img.republicworld.com/republic-prod/stories/images/15998216015f5b57210b7de.png',
            name: 'john doe',
            title: 'regular guy',
            quote:
                'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
        },
        {
            id: 3,
            image:
                'https://static.wikia.nocookie.net/2193407b-c1dd-48b6-8dd9-60718584b3df/scale-to-width/755',
            name: 'peter smith',
            title: 'product designer',
            quote:
                'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
        },
        {
            id: 4,
            image:
                'https://i.pinimg.com/originals/88/05/6e/88056e51053a3c46f907c0d3eea0c9c3.png',
            name: 'susan andersen',
            title: 'the boss',
            quote:
                'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
        },
        {
            id: 5,
            image:
                'https://i.pinimg.com/originals/3f/52/e7/3f52e76d156cf301b46a1244730bdd84.png',
            name: 'susan andersen',
            title: 'the boss',
            quote:
                'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
        },
        // {
        //   id: 6,
        //   image:
        //     'https://i.pinimg.com/originals/4f/b4/f6/4fb4f63c22274fabeaa5ba26889969b3.png',
        //   name: 'susan andersen',
        //   title: 'the boss',
        //   quote:
        //     'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
        // },
        // {
        //   id: 7,
        //   image:
        //     'https://s11.favim.com/orig/7/713/7130/71307/pink-dress-the-goblet-of-fire-hermione-granger-Favim.com-7130765.jpg',
        //   name: 'susan andersen',
        //   title: 'the boss',
        //   quote:
        //     'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
        // },
        // {
        //   id: 8,
        //   image:
        //     'https://i.pinimg.com/originals/3f/52/e7/3f52e76d156cf301b46a1244730bdd84.png',
        //   name: 'susan andersen',
        //   title: 'the boss',
        //   quote:
        //     'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
        // }
    ]

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);


    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 500000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    setCurrUser = { user };








    const ShowLikeFunction = () => {
        setShowLike(true);
        // console.log(user.email);
        // console.log(mainUser.email);
        fetch('https://faid-api.herokuapp.com/sendreq', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                // email: user.email,
                email: user.email,
                emailsender: mainUser.email,
                // After login, you will share a prop of the user who got into the web, keep sending that 
                // prop further! 
            })
        }).then(response => response.json())
            .then(resp => {
                // alert(resp);
                // alert("Local req sent alert");
            })
    }

    const ShowCancelFunction = () => {
        setShowCancel(true);
    }



    const [page, setPage] = useState(0);


    return (
        <>{
            page == 0 ? (
                <CardsContainer>
                    {
                        showLike ? (
                            <ShowReqSent>
                                Request Sent <InfoIcon style={{ fontSize: '1.1rem', marginBottom: '-4px', fill: 'white' }} />
                            </ShowReqSent>
                        ) : (
                            showCancel ? (
                                <ShowReqSent>
                                    Rejected <InfoIcon style={{ fontSize: '1.1rem', marginBottom: '-4px', fill: 'white' }} />
                                </ShowReqSent>
                            ) : (
                                <></>
                            )
                        )
                    }
                    {
                        showLike ? (
                            <GoNext onClick={handleChangePerson}>
                                <ChevronRightIcon style={{ fontSize: '1.5rem', fill: 'white' }} />
                            </GoNext>
                        ) : (
                            showCancel ? (
                                <GoNext onClick={handleChangePerson}>
                                    <ChevronRightIcon style={{ fontSize: '1.5rem', fill: 'white' }} />
                                </GoNext>
                            ) : (
                                <></>
                            )
                        )
                    }
                    <SectionCenter>
                        {
                            (user.image.length > 0 && user.isVerified) ? (
                                user.image.map((person, personIndex) => {
                                    // user.image?.map((person, personIndex) => {
                                    let position = 'nextSlide';
                                    if (personIndex === index) {
                                        position = 'activeSlide';
                                    }
                                    if (
                                        personIndex === index - 1 ||
                                        (index === 0 && personIndex === people.length - 1)
                                    ) {
                                        position = 'lastSlide';
                                    }

                                    return (
                                        <Card style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url(${person}) center center / cover no-repeat` }} className={position} onClick={() => setIndex(index + 1)}>
                                            <CardTopBar>
                                                {
                                                    index == 0 ? (
                                                        <>
                                                            <main></main>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                        </>
                                                    ) : (
                                                        index == 1 ? (
                                                            <>
                                                                <span></span>
                                                                <main></main>
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                            </>
                                                        ) : (
                                                            index == 2 ? (
                                                                <>
                                                                    <span></span>
                                                                    <span></span>
                                                                    <main></main>
                                                                    <span></span>
                                                                    <span></span>
                                                                </>
                                                            ) : (
                                                                index == 3 ? (
                                                                    <>
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                        <main></main>
                                                                        <span></span>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                        <main></main>
                                                                    </>
                                                                )
                                                            )
                                                        )
                                                    )
                                                }

                                            </CardTopBar>

                                            <section>
                                                <UserDesc>
                                                    <p>
                                                        {user.name}
                                                    </p>
                                                    <span>{user.department}, {user.Year}</span>
                                                    <span style={{ fontWeight: '200', fontSize: '0.6rem' }}>
                                                        {user.bio}
                                                    </span>
                                                </UserDesc>
                                            </section>
                                            <Response>
                                                {
                                                    showLike ?
                                                        (
                                                            <span onClick={handleChangePerson}>
                                                                <ChevronRightIcon style={{ fill: 'grey', fontSize: '1.5rem' }} />
                                                            </span>
                                                        ) :
                                                        (
                                                            showCancel ? (
                                                                <span style={{ background: 'orange' }}>
                                                                    <ClearIcon style={{ fill: 'white', fontSize: '1.5rem' }} />
                                                                </span>
                                                            ) : (
                                                                <span onClick={() => ShowCancelFunction()}>
                                                                    <ClearIcon style={{ fill: 'grey', fontSize: '1.5rem' }} />
                                                                </span>
                                                            )

                                                        )
                                                }
                                                {/* <Link to="/view-profile"> */}
                                                <a onClick={() => setPage(1)}>
                                                    <span style={{ height: '55px', width: '55px', border: '2px solid orange' }}>
                                                        <DashboardIcon style={{ fill: 'white', fontSize: '1.4rem', fontSize: '2rem' }} />
                                                    </span>
                                                </a>
                                                {/* </Link> */}

                                                {
                                                    showLike ?
                                                        (
                                                            <span onClick={ShowLikeFunction} style={{ background: 'orange' }}>
                                                                <FavoriteIcon style={{ fill: '#c94d4d', fontSize: '1.5rem' }} />
                                                            </span>

                                                        ) :
                                                        (
                                                            showCancel ? (
                                                                <span onClick={ShowLikeFunction}>
                                                                    <FavoriteBorderIcon style={{ fill: 'grey', fontSize: '1.5rem' }} />
                                                                </span>
                                                            ) : (
                                                                <span onClick={ShowLikeFunction}>
                                                                    <FavoriteBorderIcon style={{ fill: 'grey', fontSize: '1.5rem' }} />
                                                                </span>
                                                            )

                                                        )
                                                }
                                            </Response>
                                        </Card>
                                    )
                                }

                                )) : (
                                <></>
                            )
                        }
                    </SectionCenter>
                    <Fade bottom>
                        <DescCard>
                            <div>
                                {user.percent}%
                            </div>
                            <section>
                                <strong>Compatible, </strong>
                                You both like bollywood movies and 7 other tags.
                            </section>
                        </DescCard>
                    </Fade>
                </CardsContainer>
            ) : (
                <SecondContainer>
                    <a onClick={() => setPage(0)}>
                        <GoBack>
                            <ArrowBackIosIcon />
                        </GoBack>
                    </a>
                    <Fade big>
                        <Container>
                            <SectionCenterVP>
                                {
                                    user.image.map((person, personIndex) => {
                                        let position = 'nextSlide';
                                        if (personIndex === index) {
                                            position = 'activeSlide';
                                        }
                                        if (
                                            personIndex === index - 1 ||
                                            (index === 0 && personIndex === people.length - 1)
                                        ) {
                                            position = 'lastSlide';
                                        }

                                        return (
                                            // 
                                            <CardVP style={{ background: `url(${person}) center center / cover no-repeat` }} className={position} onClick={() => setIndex(index + 1)}>
                                                <CardTopBarVP>
                                                    {
                                                        index == 0 ? (
                                                            <>
                                                                <main></main>
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                            </>
                                                        ) : (
                                                            index == 1 ? (
                                                                <>
                                                                    <span></span>
                                                                    <main></main>
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                </>
                                                            ) : (
                                                                index == 2 ? (
                                                                    <>
                                                                        <span></span>
                                                                        <span></span>
                                                                        <main></main>
                                                                        <span></span>
                                                                        <span></span>
                                                                    </>
                                                                ) : (
                                                                    index == 3 ? (
                                                                        <>
                                                                            <span></span>
                                                                            <span></span>
                                                                            <span></span>
                                                                            <main></main>
                                                                            <span></span>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <span></span>
                                                                            <span></span>
                                                                            <span></span>
                                                                            <span></span>
                                                                            <main></main>
                                                                        </>
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    }

                                                </CardTopBarVP>
                                            </CardVP>
                                        )

                                    })
                                }
                            </SectionCenterVP>
                            <SendRequest>
                                {
                                    showLike ? (
                                        <>
                                            Requested ❤️
                                        </>
                                    ) : (
                                        <>
                                            Seen
                                        </>
                                    )
                                }
                            </SendRequest>


                            <ShowUserCredentials>
                                <OneLineDown>
                                    <span>
                                        {user.name}
                                        <p>{user.age}</p>
                                    </span>
                                </OneLineDown>
                                <Caption>
                                    {user.bio}
                                </Caption>
                                <OneLineCenter>
                                    <SchoolIcon style={{ fontSize: '1.4rem', fill: '#efc8c8', marginBottom: '-0.4rem' }} />
                                    <p>{user.department}</p>
                                </OneLineCenter>
                                <OneLineCenter>
                                    <BusinessCenterIcon style={{ fontSize: '1.4rem', fill: '#efc8c8', marginBottom: '-0.4rem' }} />
                                    <p>{user.Year}</p>
                                </OneLineCenter>
                                <OneLineCenter>
                                    <BubbleChartIcon style={{ fontSize: '1.4rem', fill: '#efc8c8', marginBottom: '-0.4rem' }} />
                                    <p>{user.passion}</p>
                                </OneLineCenter>
                                <OneLineCenter>
                                    <CheckCircleIcon style={{ fontSize: '1.4rem', fill: '#efc8c8', marginBottom: '-0.4rem' }} />
                                    <p>{user.insearch}</p>
                                </OneLineCenter>



                                {
                                    !user.insta == "" ? (
                                        <>
                                            <OneLineDown>
                                                <section>
                                                    Other Accounts
                                                </section>
                                            </OneLineDown>
                                            <OneLineCenter>
                                                <InstagramIcon style={{ fontSize: '1.4rem', fill: '#efc8c8', marginBottom: '-0.4rem' }} />
                                                <p>@{user.insta}</p>
                                            </OneLineCenter>
                                        </>
                                    ) : (
                                        <></>
                                    )
                                }

                                {/* <OneLineCenter>
                                    <TwitterIcon style={{ fontSize: '1.4rem', fill: '#efc8c8', marginBottom: '-0.4rem' }} />
                                    <p>@nayakerrrr</p>
                                </OneLineCenter> */}


                                <OneLineDown>
                                    <section>
                                        Passions
                                        <div style={{ marginBottom: '0.5rem' }}></div>
                                    </section>
                                </OneLineDown>
                                <Passions>
                                    {
                                        user.interests.map((item, index) => {
                                            return (<Passion>
                                                {item}
                                            </Passion>
                                            )
                                        })}
                                    {/* <Passion>
                                        Plastic Sergery
                                    </Passion>
                                    <Passion>
                                        BasketBall
                                    </Passion>
                                    <Passion>
                                        Slow Dance
                                    </Passion>
                                    <Passion>
                                        Paintings
                                    </Passion>
                                    <Passion>
                                        English songs
                                    </Passion>
                                    <Passion>
                                        Blogging
                                    </Passion>
                                    <Passion>
                                        Road Trips
                                    </Passion>
                                    <Passion>
                                        Punjabi Songs
                                    </Passion>
                                    <Passion>
                                        Night Clubs
                                    </Passion>
                                    <Passion>
                                        Football
                                    </Passion>
                                    <Passion>
                                        Web Series
                                    </Passion> */}
                                </Passions>

                            </ShowUserCredentials>

                            {/* <Link to="/edit-account">
                    <EditProfile>
                        <CreateIcon style={{ fill: 'white' }} />
                    </EditProfile>
                </Link> */}
                            {/* <BottomNavbar /> */}
                        </Container>
                    </Fade>
                </SecondContainer>
            )
        }

        </>
    )

}

export default CardsComponent



const CardsContainer = styled.div`
    background-color: #1f2225;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    /* height: 96vh; */
    padding: 0.8rem 0.6rem 0 0.6rem;
`

const ShowReqSent = styled.div`
    position: absolute;
    top: 20px;
    right: 15px;
    color: white;
    text-transform: uppercase;
    background-color: #ef4239;
    border: 1px solid white;
    font-size: 0.6rem;
    letter-spacing: 0.15rem;
    padding: 0.3rem 0.5rem;
    border-radius: 10px;
    z-index: 10;
`

const GoNext = styled.div`
    position: absolute;
    top: 40%;
    right: 5px;
    z-index: 10;
    background-color: #d88c03;
    border-radius: 100px;
    height: 35px;
    width: 35px;
    display: grid;
    place-items: center;
    border: 1px solid white;


`

const CardTopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.02rem 0.3rem;

    main{
        height: 4px;
        width: 19%;
        border-radius: 100px;
        background-color: pink;
    }

    span{
        height: 4px;
        width: 19%;
        border-radius: 100px;
        background-color: grey;
    }
`

const Response = styled.div`
    height: 70px;
    overflow: hidden;
    padding: 0.1rem 1rem 0.3rem 1rem;
    display: flex;
    /* align-items: center; */
    align-items: flex-end;
    justify-content: space-between;
    position: absolute;
    bottom: 5px;
    width: 100%;

    span{
        height: 45px;
        width: 45px;
        border-radius: 50%;
        border: 1px solid orange;
        display: grid;
        place-items: center;
    }
`

const Card = styled.div`
    height: 70vh;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    margin: 0 0 8px 0;
    /* box-shadow: 0px 18px 53px 0px #a9a2a24d; */
    /* box-shadow: 0px 0px 10px #646161, 2px -4px 34px #c9c9c9; */
    /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://c.ndtvimg.com/2021-08/6gck6u18_kim-jong-un-bloomberg-270_295x200_03_August_21.jpg') center center / cover no-repeat; */
    overflow: hidden;
    position: absolute;


    section{
        position: absolute;
        bottom: 65px;
        width: 100%;
        padding: 0.3rem 0.4rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
`

const ShowImage = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: pink; */
  position: absolute;
`

const ShowLike = styled.div`
    position: absolute;
    /* bottom: -100px; */
    left: -50px;
    z-index: 10;
    

    img{
        height: 30rem;
    }
`

const DescCard = styled.div`
    width: 100%;
    background-color: #2e3136;
    border-radius: 10px;
    margin-bottom: 50px;
    padding: 0.3rem;
    /* box-shadow: 0px 1px 53px 0px #a9a2a24d; */
    /* box-shadow: 0px 0px 10px #bfbaba, 2px -4px 34px #ddcece; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    

    section{
        flex: 1;
        margin-left: 10px;
        font-size: 0.7rem;
        line-height: 1rem;
        letter-spacing: 0.05rem;
        color: white;

        strong{
            color: green;
        }
    }

    div{
        height: 50px;
        width: 50px;        
        background-color: #EF4339;
        border-radius: 50%;
        color: white;
        display: grid;
        place-items: center;
        font-size: 0.95rem;
    }
`

const UserDesc = styled.div`
    padding: 0 1rem;
    

    p{
        color: white;
        font-size: 0.85rem;
        font-weight: 600;
    }

    span{
        display: block;
        color: white;
        font-size: 0.65rem;
    }
`

const SectionCenter = styled.div`
  height: 70vh;
  background-color: #2e3136;
  display: flex;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 8px;

  img{
    width: 100%;
    height: 100%;
    position: absolute;
    /* opacity: 0; */
    /* transition: all 0.3s linear; */
  }

  .activeSlide {
    opacity: 1;
    transform: translateX(0);
  }

  .lastSlide {
    transform: translateX(-100%);
  }

  .nextSlide {
    transform: translateX(100%);
  }
`








const Container = styled.div`
    padding-bottom: 1.8rem;
    position: relative;
    padding-bottom: 90px;
    background-color: #1f2225;
    min-height: 100vh;
`

const EditProfile = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: rgb(176,28,51);
    background: linear-gradient(90deg, green 13%, rgba(134,101,106,1) 100%);
    position: fixed;
    bottom: 80px;
    right: 10px;
    display: grid;
    place-items: center;
`

const HeadProfilePic = styled.div`
    position: relative;

    img{
        width: 100%;
    }

    section{
        padding: 0.35rem 1rem;
        border-radius: 100px;
        background: orange;
        position: absolute;
        bottom: -10px;
        right: 10px;
        display: flex;
        align-items: center;
        font-size: 0.85rem;
        letter-spacing: 0.1rem;
    }
`

const CoverImage = styled.div`
    max-height: 70vh;
    overflow: hidden;
`

const CardTopBarVP = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.1rem;
    position: absolute;
    top: 0;
    width: 99vw;

    main{
        height: 4px;
        width: 19%;
        border-radius: 100px;
        background-color: pink;
    }

    span{
        height: 4px;
        width: 19%;
        border-radius: 100px;
        background-color: grey;
    }
`

const ShowUserCredentials = styled.div`
    padding: 0.3rem 0.6rem;
`

const OneLineDown = styled.div`
    display: flex;
    align-items: flex-end;


    span{
        font-size: 1.65rem;
        font-weight: 600;
        letter-spacing: 0.15rem;
        color: white;

        p{
            font-size: 1.25rem;
            display: inline-block;
            margin-left: 0.4rem;
            font-weight: 300;
            color: white;
        }
    }

    section{
        font-size: 1.05rem;
        font-weight: 600;
        letter-spacing: 0.15rem;
        margin-top: 1.4rem;
        color: white;


        p{
            font-size: 1.25rem;
            display: inline-block;
            margin-left: 0.4rem;
            font-weight: 300;
            
        }
    }
`

const OneLineCenter = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    display: block;
    margin-bottom: 0.2rem;
    
    p{
        color: #efc8c8;
        display: inline-block;
        margin-left: 10px;
        margin-top: -10px;
    }
`

const Caption = styled.div`
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
    color: white;
`

const Passions = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Passion = styled.div`
    padding: 0.3rem;
    border-radius: 100px;
    font-size: 0.7rem;
    color: #efc8c8;
    border: 1px solid #efc8c8;
    margin: 0 0.3rem 0.3rem 0;
`

const SendRequest = styled.div`
    padding: 0.35rem 1rem;
    border-radius: 100px;
    background: orange;
    position: absolute;
    top: calc(70vh - 20px);
    right: 5px;
    display: flex;
    align-items: center;
    font-size: 0.85rem;
    letter-spacing: 0.1rem;
    z-index: 10;
`

const GoBack = styled.div`
    padding: 0.35rem 1rem;
    border-radius: 100px;
    background: transparent;
    position: absolute;
    top: 10px;
    left: 0px;
    display: flex;
    align-items: center;
    font-size: 0.85rem;
    letter-spacing: 0.1rem;
    z-index: 10;
`


const SectionCenterVP = styled.div`
  height: 70vh;
  background-color: #2e3136;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-bottom: 8px;
  border-bottom-left-radius: 40px;


  img{
    width: 100%;
    height: 100%;
    position: absolute;
    /* opacity: 0; */
    /* transition: all 0.3s linear; */
  }

  .activeSlide {
    opacity: 1;
    transform: translateX(0);
  }

  .lastSlide {
    transform: translateX(-100%);
  }

  .nextSlide {
    transform: translateX(100%);
  }

  
`

const CardVP = styled.div`
    height: 70vh;
    width: 100%;
    background-color: white;
    margin: 0 0 8px 0;
    /* box-shadow: 0px 18px 53px 0px #a9a2a24d; */
    /* box-shadow: 0px 0px 10px #646161, 2px -4px 34px #c9c9c9; */
    /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://c.ndtvimg.com/2021-08/6gck6u18_kim-jong-un-bloomberg-270_295x200_03_August_21.jpg') center center / cover no-repeat; */
    overflow: hidden;
    position: absolute;
    border-bottom-left-radius: 40px;


    section{
        position: absolute;
        bottom: 65px;
        width: 100%;
        padding: 0.3rem 0.4rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
`

const SecondContainer = styled.div`
    position: absolute;
    top: -42px;
    width: 100vw;
`