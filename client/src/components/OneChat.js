import React from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import SendIcon from '@material-ui/icons/Send';


const OneChat = () => {
    



    return (
        <GreatContainer>
            <TopBar>
                <Link to='/chats' style={{ margin: '0.3rem 1rem 0 0' }}>
                    <ArrowBackIcon style={{fill: 'white'}} />
                </Link>
                <DisplayProfilePic style={{ background: "url('https://media.glamour.com/photos/56957f9d5fff94d44eec31f3/master/pass/beauty-2015-02-dakota-johnson-fifty-shades-lipstick-main.jpg') center center / cover no-repeat" }} />
                <p>Dakota Johnson</p>

                <Signal>
                </Signal>

                <section>
                    <MoreVertIcon style={{fill: 'white'}}/>
                </section>
            </TopBar>
            <Container>
                <MainChatContainer>
                    <RecievedMessages>
                        <div>
                            I really like your profile, wanna hangout sometime this evening?
                        <br />
                            <span>16:46 PM</span>
                        </div>
                    </RecievedMessages>
                    <SentMessages>
                        <div>
                            Yeah sure, netflix and chill? At my place or else we can also 
                            consider the new momos store outside our college.
                            <br />
                            <span>16:46 PM</span>
                        </div>
                    </SentMessages>
                    <RecievedMessages>
                        <div>
                            Btw I have seen your bio and got to know that you are single.
                            So Nayak, do you like someone?
                        <br />
                            <span>16:46 PM</span>
                        </div>
                    </RecievedMessages>
                    <SentMessages>
                        <div>
                            Yeah you
                            <br />
                            <span>16:46 PM</span>
                        </div>
                    </SentMessages>
                    <RecievedMessages>
                        <div>
                            Err...I have a boyfriend.
                        <br />
                            <span>16:46 PM</span>
                        </div>
                    </RecievedMessages>
                    <SentMessages>
                        <div>
                            Yeah you?*
                            <br />
                            <span>16:46 PM</span>
                        </div>
                    </SentMessages>
                    <RecievedMessages>
                        <div>
                            Oh my gosh!!! baby you are so fluid. I wasn't
                            single but now I am 😘😘
                        <br />
                            <span>16:46 PM</span>
                        </div>
                    </RecievedMessages>
                    <RecievedMessages>
                        <div>
                            You know my parents aren't home
                        <br />
                            <span>16:46 PM</span>
                        </div>
                    </RecievedMessages>
                    <SentMessages>
                        <div>
                            Go find them
                            <br />
                            <span>16:46 PM</span>
                        </div>
                    </SentMessages>
                </MainChatContainer>
            </Container>
            <TypeMessage>
                <main>
                    <AddPhoto>
                        {/* <CameraAltIcon style={{fill: 'white'}}/> */}
                    </AddPhoto>
                    <input type="text" placeholder="Message..."/>
                    <SendIcon/>
                </main>
            </TypeMessage>
        </GreatContainer>
    )
}

export default OneChat

const GreatContainer = styled.div`
    background-color: #000000;
    min-height: 100vh;
    position: fixed;
    width: 100vw;
    z-index: 10;
`



const Container = styled.div`
    padding : 0.3rem;
    height: 95vh;
    overflow-y: scroll;
`



const RecievedMessages = styled.div`
    display: flex;
    justify-content: flex-start;

    div{
        max-width: 60%;
        font-size: 0.75rem;
        background: #262626;
        color: white;
        padding: 0.5rem;
        margin-bottom: 1rem;
        border-radius: 0.8rem;
    }

    span{
        font-size: 0.5rem;
        color: white;
        margin-top: 0.2rem;
        float: right;
        margin-right: 0.4rem;
        line-height: 0.6rem;
    }

    img{
        width: 50vw;
        border-radius: 10px;
    }
`

const SentMessages = styled.div`
    display: flex;
    justify-content: flex-end;

    div{
        max-width: 60%;
        font-size: 0.75rem;
        background: #eb3a2a;
        padding: 0.5rem;
        margin-bottom: 1rem;
        border-radius: 0.8rem;
        color: white;
    }

    img{
        width: 50vw;
        border-radius: 10px;
    }

    span{
        font-size: 0.5rem;
        margin-top: 0.2rem;
        float: right;
        margin-right: 0.4rem;
        line-height: 0.6rem;
        color: white;
    }
`



const TopBar = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    padding: 1rem 0.5rem 0.75rem 0.3rem;
    background-color: #222;
    border-bottom: 1px solid black;
    
    
    p{
        font-size: 0.9rem;
        color: white;
    }
    
    section{
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }
`

const DisplayProfilePic = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background-color: #f1f1f1;
    margin-right: 0.5rem;
`
const MainChatContainer = styled.div`
    margin-top: 65px;
    margin-bottom: 60px;
`

const TypeMessage = styled.div`
    position: fixed;
    bottom: 0px;
    background: #1f2225;
    right: 0;
    left: 0;
    border-top-left-radius: 45px;
    border-top-right-radius: 45px;
    
    main{
        width: calc(100% - 12px);
        display: flex;
        align-items: center;
        background-color: #f1f1f1;
        height: 3rem;
        margin-left: 6px;
        margin-right: 6px;
        border-radius: 100px;
        padding: 0.3rem;
        margin-bottom: 10px;
        padding-right: 1rem;
    }

    input{
        margin: 0.5rem;
        flex: 1;
        font-size: 0.85rem;
        border: none;
        background: transparent;
        outline: none;
    }
`

const AddPhoto = styled.div`
    height: 2.4rem;
    width: 2.4rem;
    border-radius: 50%;
    background-color: red;
    display: grid;
    place-items: center;
`

const Signal = styled.div`
    height: 0.65rem; 
    width: 0.65rem;
    border-radius: 50%;
    background-color: orange;
    margin-left: 0.5rem;
`