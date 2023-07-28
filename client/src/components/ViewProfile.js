import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import SchoolIcon from '@material-ui/icons/School';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CreateIcon from '@material-ui/icons/Create';
import BottomNavbar from './BottomNavbar';
import { Link } from "react-router-dom";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Fade from 'react-reveal/Fade';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const ViewProfile = ({currUser}) => {
    const [index, setIndex] = useState(0);
    // console.log(currUser);

    const people = [
        {
            id: 1,
            image: 'https://i.pinimg.com/originals/4c/d5/0e/4cd50e4474c87e1d247a5f59e845e44d.jpg',
            name: 'maria ferguson',
            title: 'office manager',
            quote:
                'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
        },
        {
            id: 2,
            image:
                'https://i.pinimg.com/564x/50/ed/69/50ed6962b885dd026c07d6f7b0fb5f55.jpg',
            name: 'john doe',
            title: 'regular guy',
            quote:
                'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
        },
        {
            id: 3,
            image:
                'https://coolwallpapers.me/picsup/6089829-selena-gomez-music-celebrities-girls-hd-4k-smile-cute.jpg',
            name: 'peter smith',
            title: 'product designer',
            quote:
                'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
        },
        {
            id: 4,
            image:
                'https://www.bollywoodhungama.com/wp-content/uploads/2021/12/Selena-Gomez-invests-in-15-billion-grocery-delivery-company-Gopuff-1.jpg',
            name: 'susan andersen',
            title: 'the boss',
            quote:
                'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
        },
        {
            id: 5,
            image:
                'https://images.indianexpress.com/2021/08/selena-gomez.jpg',
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
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);




    return (
        <>
            <Link to="/home">
                <GoBack>
                    <ArrowBackIosIcon />
                </GoBack>
            </Link>
            <Fade big>
                <Container>
                    <SectionCenter>
                        {
                            people.map((person, personIndex) => {
                                const { id, name, image } = person;
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
                                    <Card style={{ background: `url(${image}) center center / cover no-repeat` }} className={position} onClick={() => setIndex(index + 1)}>
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
                                    </Card>
                                )

                            })
                        }
                    </SectionCenter>
                    <SendRequest>
                        Request ❤️
                    </SendRequest>


                    <ShowUserCredentials>
                        <OneLineDown>
                            <span>
                                Selena Gomez
                                <p>18</p>
                            </span>
                        </OneLineDown>
                        <Caption>
                            Break my heart thousand times, i will still search for heartbreakers❤️
                        </Caption>
                        <OneLineCenter>
                            <SchoolIcon style={{ fontSize: '1.4rem', fill: '#efc8c8', marginBottom: '-0.4rem' }} />
                            <p>Romantic and Villan Acting</p>
                        </OneLineCenter>
                        <OneLineCenter>
                            <BusinessCenterIcon style={{ fontSize: '1.4rem', fill: '#efc8c8', marginBottom: '-0.4rem' }} />
                            <p>Expert, 35</p>
                        </OneLineCenter>
                        <OneLineCenter>
                            <BubbleChartIcon style={{ fontSize: '1.4rem', fill: '#efc8c8', marginBottom: '-0.4rem' }} />
                            <p>Modeling and Instagram</p>
                        </OneLineCenter>
                        <OneLineCenter>
                            <CheckCircleIcon style={{ fontSize: '1.4rem', fill: '#efc8c8', marginBottom: '-0.4rem' }} />
                            <p>Akhoo mai pyaar!</p>
                        </OneLineCenter>


                        <OneLineDown>
                            <section>
                                Other Accounts
                            </section>
                        </OneLineDown>
                        <OneLineCenter>
                            <InstagramIcon style={{ fontSize: '1.4rem', fill: '#efc8c8', marginBottom: '-0.4rem' }} />
                            <p>@iamatanunayak</p>
                        </OneLineCenter>
                        <OneLineCenter>
                            <TwitterIcon style={{ fontSize: '1.4rem', fill: '#efc8c8', marginBottom: '-0.4rem' }} />
                            <p>@nayakerrrr</p>
                        </OneLineCenter>


                        <OneLineDown>
                            <section>
                                Passions
                                <div style={{ marginBottom: '0.5rem' }}></div>
                            </section>
                        </OneLineDown>
                        <Passions>
                            <Passion>
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
                            </Passion>
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
        </>
    )
}

export default ViewProfile

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

const CardTopBar = styled.div`
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


const SectionCenter = styled.div`
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

const Card = styled.div`
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