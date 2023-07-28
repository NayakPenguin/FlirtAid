import React, { useEffect } from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import BottomNavbar from './BottomNavbar'
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import { LinearProgress } from '@material-ui/core';


const Updates = ({ mainUser }) => {
    // console.log(mainUser);

    const [showAlert, setShowAlert] = useState(false);
    const [data, setData] = useState([]);

    const [flag, setFlag] = useState(0);

    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        setLoading(true);
        await fetch(`https://faid-api.herokuapp.com/getmatchlist/${mainUser._id}`)
            .then(response => response.json())
            .then(resp => {
                setData(resp);
                setLoading(false);
                // console.log(resp);
            });
    }, [flag])

    // console.log(data);

    



    const [connectedData, setConnectedData] = useState([]);


    useEffect(async () => {
        await fetch(`https://faid-api.herokuapp.com/getconnected/${mainUser._id}`)
            .then(response => response.json())
            .then(resp => {
                setConnectedData(resp);
                // console.log(resp);
            });
    }, [flag])

    // console.log(connectedData);





    const onAccept = (id) => {
        // console.log(id);
        fetch('https://faid-api.herokuapp.com/resreq', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                senderid: id,
                receiverid: mainUser._id,
                des: 1
            })
        })
            .then(response => response.json())
            .then(user => {
                alert('Accepted');
                setFlag(1);
            })


    }


    const onReject = (id) => {
        // console.log(id);
        fetch('https://faid-api.herokuapp.com/resreq', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                senderid: id,
                receiverid: mainUser._id,
                des: 0
            })
        })
            .then(response => response.json())
            .then(user => {
                alert('Rejected');
                setFlag(2);
            })

    }



    return (
        <CoverContainer>
            <Container>
                {
                    showAlert ? (
                        <>
                            <CustomAleart onClick={() => setShowAlert(false)}>
                                <div>
                                    Coming Soon. Stay Tuned ✌🏽
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


                {/* ? We can also make a top orange colored
            thing that can show what can one do on this 
            page */}
                {/* <TopOptionHeader>
                <span style={{background: '#f1f1f1'}}>
                    32 Likes
                </span>
                <section></section>
                <span>
                    Suggested
                </span>
            </TopOptionHeader> */}
                <TopBar>
                    <Link to='/home' style={{ margin: '0.3rem 1rem 0 0' }}>
                        <ArrowBackIcon style={{ fill: 'white' }} />
                    </Link>
                    <p>{mainUser.name}</p>
                </TopBar>
                <TopOptionHeaderTop>
                    <Link to="/chats">
                        <span>
                            Chats
                        </span>
                    </Link>
                    <section></section>
                    <Link to="/updates">
                        <span style={{ background: '#CF142B' }}>
                            Updates
                        </span>
                    </Link>
                </TopOptionHeaderTop>
                <SearchByName>
                    <SearchIcon style={{ fontSize: '1.4rem', marginRight: '0.4rem' }} />
                    <input type="text" placeholder="search" />
                </SearchByName>

                {loading ? <ProgressContainer>
                    <LinearProgress />
                </ProgressContainer> : <></>}


                <CardHolder>
                    {
                        // console.log(data),
                        data.map((person) => {
                            // console.log(person);
                            return (
                                <Card style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url(${person.image[0]}) center center / cover no-repeat` }}>
                                    <section className="person-info">
                                        <main>
                                            <p>
                                                {person.name}
                                            </p>
                                            <span>
                                                {person.dept}, {person.Year}
                                            </span>
                                        </main>
                                    </section>

                                    {
                                        flag == 0?(
                                            <section className="options">
                                                <button onClick={() => onAccept(person._id)} className="accept">Accept</button>
                                                <button onClick={() => onReject(person._id)} className="reject">Reject</button>
                                            </section>
                                        ):(
                                        flag == 1? (
                                            <section className="options">
                                                <div className="show-accept">Accepted</div>
                                                <button onClick={() => setShowAlert(true)} className="accept">Chat</button>
                                            </section>
                                        ):(
                                            <section className="options">
                                                <div className="show-reject">Rejected</div>
                                            </section>
                                        )
                                        )
                                    }

                                </Card>
                            )
                        })
                    }

                    {
                        connectedData.map((person) => {
                            // console.log(person);
                            return (
                                <Card style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url(${person.image[0]}) center center / cover no-repeat` }}>
                                    <section className="person-info">
                                        <main>
                                            <p>
                                                {person.name}
                                            </p>
                                            <span>
                                                {person.dept}, {person.Year}
                                            </span>
                                        </main>
                                    </section>

                                    <section className="options">
                                        <div className="show-accept">Accepted</div>
                                        <button onClick={() => setShowAlert(true)} className="accept">Chat</button>
                                    </section>
                                </Card>
                            )
                        })
                    }


                    {/* <Card style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('http://videos.usatoday.net/Brightcove3/29906170001/201612/2978/29906170001_5255265843001_5255255609001-vs.jpg?pubId=29906170001') center center / cover no-repeat" }}>
                        <section className="person-info">
                            <main>
                                <p>
                                    Atanu Nayak
                                </p>
                                <span>
                                    MBA, 25
                                </span>
                            </main>
                        </section>

                        <section className="options">
                            <div className="show-reject">REjEcted</div>
                        </section>
                    </Card> */}


                    {/* <Card style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('http://videos.usatoday.net/Brightcove3/29906170001/201612/2978/29906170001_5255265843001_5255255609001-vs.jpg?pubId=29906170001') center center / cover no-repeat" }}>
                        <section className="person-info">
                            <main>
                                <p>
                                    Atanu Nayak
                                </p>
                                <span>
                                    MBA, 25
                                </span>
                            </main>
                        </section>

                        <section className="options">
                            <div className="show-accept">Accepted</div>
                            <button onClick={() => setShowAlert(true)} className="accept">Chat</button>
                        </section>
                    </Card> */}

                    {/* <Card style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://64.media.tumblr.com/00295028b84359644df18ed232e39f29/tumblr_nukufpx2TI1ryn80io2_1280.png') center center / cover no-repeat" }}>
                        <section className="person-info">
                            <main>
                                <p>
                                    Atanu Nayak
                                </p>
                                <span>
                                    computer science, 25
                                </span>
                            </main>
                        </section>

                        <section className="options">
                            <button className="accept">Accept</button>
                            <button className="reject">Reject</button>
                        </section>
                    </Card> */}



                    {/* <Card style={{background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://media.glamour.com/photos/56957f9d5fff94d44eec31f3/master/pass/beauty-2015-02-dakota-johnson-fifty-shades-lipstick-main.jpg') center center / cover no-repeat"}}>
                    <section>
                        <div>
                            93%
                        </div>
                        <main>
                            <p>
                                Dakota Johnson
                            </p>
                            <span>
                                Electronics, 25
                            </span>
                        </main>
                    </section>
                </Card>
                <Card style={{background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://img.wattpad.com/959dbcd976c171304ce5a07423a4f9797f329932/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f66346e506c4b756e6c61703746773d3d2d34322e313532393139373531326233666663303636383736363632333130342e6a7067?s=fit&w=720&h=720') center center / cover no-repeat"}}>
                    <section>
                        <div>
                            78%
                        </div>
                        <main>
                            <p>
                                Hande Ercel
                            </p>
                            <span>
                                Mechanical Engg. , 25
                            </span>
                        </main>
                    </section>
                </Card>
                <Card style={{background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://files.oyebesmartest.com/uploads/preview/selena-gomez-iphone-wallpm8de4.webp') center center / cover no-repeat"}}>
                    <section>
                        <div>
                            98%
                        </div>
                        <main>
                            <p>
                                Selena Gomez
                            </p>
                            <span>
                                Computer Science, 25
                            </span>
                        </main>
                    </section>
                </Card>
                <Card style={{background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://wallpaperboat.com/wp-content/uploads/2020/08/26/53604/kendall-jenner-19.jpg') center center / cover no-repeat"}}>
                    <section>
                        <div>
                            87%
                        </div>
                        <main>
                            <p>
                                Kendall Jenner
                            </p>
                            <span>
                                Electronics, 25
                            </span>
                        </main>
                    </section>
                </Card>
                <Card style={{background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://cdn.wallpapersafari.com/79/20/HUrO2X.jpg') center center / cover no-repeat"}}>
                    <section>
                        <div>
                            93%
                        </div>
                        <main>
                            <p>
                                Dakota Johnson
                            </p>
                            <span>
                                Electronics, 25
                            </span>
                        </main>
                    </section>
                </Card>
                <Card style={{background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLqw9m8TRG3ZOst2XwragMgFQxPKyGqp-Fg&usqp=CAU') center center / cover no-repeat"}}>
                    <section>
                        <div>
                            93%
                        </div>
                        <main>
                            <p>
                                Dakota Johnson
                            </p>
                            <span>
                                Electronics, 25
                            </span>
                        </main>
                    </section>
                </Card>
                <Card style={{background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://wallpaperaccess.com/full/7054237.jpg') center center / cover no-repeat"}}>
                    <section>
                        <div>
                            93%
                        </div>
                        <main>
                            <p>
                                Dakota Johnson
                            </p>
                            <span>
                                Electronics, 25
                            </span>
                        </main>
                    </section>
                </Card>
                <Card style={{background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://media.glamour.com/photos/56957f9d5fff94d44eec31f3/master/pass/beauty-2015-02-dakota-johnson-fifty-shades-lipstick-main.jpg') center center / cover no-repeat"}}>
                    <section>
                        <div>
                            93%
                        </div>
                        <main>
                            <p>
                                Dakota Johnson
                            </p>
                            <span>
                                Electronics, 25
                            </span>
                        </main>
                    </section>
                </Card>
                <Card style={{background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://cdn.wallpapersafari.com/79/20/HUrO2X.jpg') center center / cover no-repeat"}}>
                    <section>
                        <div>
                            93%
                        </div>
                        <main>
                            <p>
                                Dakota Johnson
                            </p>
                            <span>
                                Electronics, 25
                            </span>
                        </main>
                    </section>
                </Card>
                <Card style={{background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLqw9m8TRG3ZOst2XwragMgFQxPKyGqp-Fg&usqp=CAU') center center / cover no-repeat"}}>
                    <section>
                        <div>
                            93%
                        </div>
                        <main>
                            <p>
                                Dakota Johnson
                            </p>
                            <span>
                                Electronics, 25
                            </span>
                        </main>
                    </section>
                </Card>
                <Card style={{background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://wallpaperaccess.com/full/7054237.jpg') center center / cover no-repeat"}}>
                    <section>
                        <div>
                            93%
                        </div>
                        <main>
                            <p>
                                Dakota Johnson
                            </p>
                            <span>
                                Electronics, 25
                            </span>
                        </main>
                    </section>
                </Card> */}
                </CardHolder>
            </Container>
        </CoverContainer>
    )
}

export default Updates

const CoverContainer = styled.div`
    padding : 0.3rem;
    background-color: #1f2225;
    height: 100vh;
    position: fixed;
    width: 100vw;
    z-index: 10;
    overflow-y: scroll;
`

const TopBar = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    
    p{
        color: white;
    }

`

const TopOptionHeaderTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border-bottom: 1px solid #403b3bb3; */
    padding:  0.2rem 0.6rem;
    margin-top: 10px;

    section{
        height: 2rem;
        /* background-color: #403b3bb3; */
        width: 1px;
    }

    a{
        width: 49%;
        text-decoration: none;
    }
    
    span{
        padding: 0.4rem;
        display: grid;
        place-items: center;
        font-size: 0.8rem;
        color: white;
        border-radius: 100px;

    }
`

const SearchByName = styled.div`
    background-color: #f1f1f1;
    margin: 10px;
    margin-bottom: 20px;
    padding: 0.3rem 0.3rem;
    border-radius: 6px;
    display: flex;
    align-items: center;

    input{
        width: 100%;
        border: none;
        background: transparent;
        outline: none;
        font-size: 0.8rem;
    }
`




const Floater = styled.div`
    position: absolute;
    top: 10px;
    background: rgb(176,28,51);
    background: linear-gradient(90deg, rgba(176,28,51,1) 13%, rgba(134,101,106,1) 100%);
    border-radius: 50px;
    width: 85vw;
    margin: 0 7.5vw;
    padding: 0.4rem;
    text-transform: uppercase;
    color: white;
    font-size: 0.9rem;
    letter-spacing: 0.25rem;
    display: grid;
    place-items: center;
`

const Container = styled.div`
    /* padding: 0.8rem 0.3rem; */
    margin-bottom: 10px;
    overflow-y: scroll;

`

const TopOptionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    padding: 0.2rem 0;

    section{
        height: 1.4rem;
        background-color: grey;
        width: 1px;
    }
    
    span{
        padding: 0.2rem;
        width: 49%;
        display: grid;
        place-items: center;
        font-size: 0.8rem;
    }
`

const CardHolder = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 0.7rem;
`

const Card = styled.div`
    border: 1px solid grey;
    width: 49%;
    height: 65vw;
    background-color: pink;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    margin-bottom: 10px;
    /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://www.glasgowtimes.co.uk/resources/images/4053884/?type=responsive-gallery') center center / cover no-repeat; */

    .person-info{
        position: absolute;
        bottom: 35px;
        width: 100%;
        padding: 0.3rem 0.4rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;


        div{
            height: 35px;
            width: 35px;        
            background-color: #EF4339;
            border-radius: 50%;
            color: white;
            display: grid;
            place-items: center;
            font-size: 0.8rem;
        }

        main{
            margin-bottom: -3px;
            width: calc(100% - 40px)
        }

        p{
            color: white;
            font-size: 0.8rem;
            display: block;
            line-height: 1rem;
            margin-bottom: -8px;
        }
        
        span{
            color: white;
            font-size: 0.6rem;
            line-height: 0rem;
        }
    }

    .options{
        position: absolute;
        bottom: 2px;
        width: 100%;
        padding: 0.3rem 0.4rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        button{
            width: 49%;
            font-size: 0.6rem;
            padding: 0.3rem 0rem;
            letter-spacing: 0.1rem;
            text-transform: uppercase;
            color: white;
            border: none;
            border-radius: 10px;
        }
        
        .accept{
            background-color: orange;
        }

        .reject{
            background-color: red;
        }

        .show-accept{
            letter-spacing: 0.1rem;
            text-transform: uppercase;
            color: white;
            font-size: 0.7rem;
            margin: 0 0.5rem 0 0;
        }

        .show-reject{
            letter-spacing: 0.5rem;
            text-transform: uppercase;
            color: #e56161;
            font-size: 0.7rem;
            margin: auto;
        }
    }

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



const ProgressContainer = styled.div`
    margin: 0.8rem;
`