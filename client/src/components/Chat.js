import React from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import BottomNavbar from './BottomNavbar'
import SearchIcon from '@material-ui/icons/Search';


const Chat = ({ mainUser }) => {

    return (
        <>
            <Container>
                <TopBar>
                    <Link to='/home' style={{ margin: '0.3rem 1rem 0 0' }}>
                        <ArrowBackIcon style={{ fill: 'white' }} />
                    </Link>
                    <p>{mainUser.name}</p>
                </TopBar>
                <TopOptionHeader>
                    <Link to="/chats">
                        <span style={{ background: '#CF142B' }}>
                            Chats
                        </span>
                    </Link>
                    <section></section>
                    <Link to="/updates">
                        <span>
                            Updates
                        </span>
                    </Link>
                </TopOptionHeader>

                <SearchByName>
                    <SearchIcon style={{ fontSize: '1.4rem', marginRight: '0.4rem' }} />
                    <input type="text" placeholder="search" />
                </SearchByName>

                <NameCard>
                    <DisplayProfilePic style={{ background: "url('https://media.glamour.com/photos/56957f9d5fff94d44eec31f3/master/pass/beauty-2015-02-dakota-johnson-fifty-shades-lipstick-main.jpg') center center / cover no-repeat" }} />
                    <DisplayPerson>
                        <main>
                            <h5>Coming Soon</h5>
                            <span>2 hours ago</span>
                        </main>
                        <section>
                            Delivered
                        </section>
                    </DisplayPerson>
                </NameCard>

                {/* ------- I M P O R D A N T - remove the above name card and uncomment the below
                four Links */}

                {/* <Link to="personal-chat">
                <NameCard>
                    <DisplayProfilePic style={{background: "url('https://media.glamour.com/photos/56957f9d5fff94d44eec31f3/master/pass/beauty-2015-02-dakota-johnson-fifty-shades-lipstick-main.jpg') center center / cover no-repeat"}}/>
                    <DisplayPerson>
                        <main>
                            <h5>Dakota Johnson</h5>
                            <span>2 mins ago</span>
                        </main>
                        <section>
                            Delivered
                        </section>
                    </DisplayPerson>
                    
                </NameCard>
            </Link>

            <Link to="personal-chat">
                <NameCard>
                    <DisplayProfilePic style={{background: "url('https://akns-images.eonline.com/eol_images/Entire_Site/2018113/rs_600x600-180213092402-600-dakota-johnson-fifty-shades.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top') center center / cover no-repeat"}}/>
                    <DisplayPerson>
                        <main>
                            <h5>Selena Gomez</h5>
                            <span>23 hours ago</span>
                        </main>
                        <section>
                            New Message
                        </section>
                    </DisplayPerson>
                </NameCard>
            </Link>

            <Link to="personal-chat">
                <NameCard>
                    <DisplayProfilePic style={{background: "url('https://www.99images.com/download-image/972978/1080x1624') center center / cover no-repeat"}}/>
                    <DisplayPerson>
                        <main>
                            <h5>Arihana Grande</h5>
                            <span>a day ago</span>
                        </main>
                        <section>
                            New Message
                        </section>
                    </DisplayPerson>
                </NameCard>
            </Link>


            <Link to="personal-chat">
            <NameCard>
                <DisplayProfilePic style={{background: "url('https://img-comment-fun.9cache.com/media/abVMWBE/annVkMwm_700w_0.jpg') center center / cover no-repeat"}}/>
                <DisplayPerson>
                    <main>
                        <h5>Bella Gloss</h5>
                        <span>3 week ago</span>
                    </main>
                    <section>
                        New Message
                    </section>
                </DisplayPerson>
            </NameCard>
            </Link> */}


                <CustomAleart>
                    <div>
                        Chat will be added soon! You can contact your matches through their social media profile for now.
                    </div>
                </CustomAleart>

            </Container>
            {/* <BottomNavbar></BottomNavbar> */}
        </>
    )
}

export default Chat

const Container = styled.div`
    padding : 0.3rem;
    background-color: #1f2225;
    min-height: 100vh;
    position: fixed;
    width: 100vw;
    z-index: 10;
    

    a{
        text-decoration: none;
        color: white;
        color: white;

    }
`



const NameCard = styled.div`
    display: flex;
    justify-content: space-between;
    height: 4.2rem;
    padding: 0.6rem 0.5rem;
    border-top: 1px solid #403b3bb3;
    position: relative;
    color: white;

`

const DisplayProfilePic = styled.div`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    background-color: #f1f1f1;
    margin-right: 0.5rem;
    color: white;

`

// const ShowSignal = styled.div`
//     height: 13px;
//     width: 13px;
//     border-radius: 50%;
//     position: absolute;
//     bottom: 5px;
//     left: 2.65rem;
//     display: grid;
//     place-items: center;
//     background-color: white;

//     section{
//         height: 10px;
//         width: 10px;
//         border-radius: 50%;
//         color: white;

//     }
// `

const DisplayPerson = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;


    main{
        display: flex;
        justify-content: space-between;
        align-items: center;

        h5{
            color: white;
        }
        

        span{
            font-size: 0.65rem;
            color: #d5cbcb;
        }
    }

    section{
        font-size: 0.8rem;
        color: #d5cbcb;

    }
`

const TopBar = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    
    p{
        color: white;
    }

`

const TopOptionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border-bottom: 1px solid #403b3bb3; */
    padding: 0.2rem 0.6rem;
    margin-top: 10px;
    text-decoration: none;

    section{
        height: 2rem;
        /* background-color: #403b3bb3; */
        width: 1px;
    }

    a{
        width: 49%;
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

const CustomAleart = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    transition-delay: 2s;
    
    div{
        position: fixed;
        top: 30px;
        z-index: 100;
        padding: 1rem;
        width: 600px;
        background-color: #5fd979«;
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
            color: white;
            background-color: #423e3e;
        } 

        img {
            height: 1.4rem;
            margin-right: 0.3rem;
        }
    }
`