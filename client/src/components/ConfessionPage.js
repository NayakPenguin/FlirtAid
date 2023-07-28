import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkIcon from '@material-ui/icons/Link';
import EventIcon from '@material-ui/icons/Event';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import TextConfessions from './TextConfessions';
import { Avatar, Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import { db } from '../firebase';
import firebase from 'firebase';
import { LinearProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CreateIcon from '@material-ui/icons/Create';


const ConfessionPage = ({ mainUser }) => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [progress, setProgress] = useState(false);
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState([]);



    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setInput("");
        setOpen(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            db.collection("confessions").add({
                chutiyaUser: `${mainUser.name}`,
                chutiyaUser: `${mainUser.email}`,
                gender: `${mainUser.gender}`,
                branch: `${mainUser.dept}`,
                // age: `${mainUser.age}`,
                // year: `${data[valueMatched].year}`,
                // profileImgURL: `${data[valueMatched].profileImgURL}`,
                desc: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                date: new Date().toLocaleString(),
            });
            setOpen(false);
        }, 300);
    }


    useEffect(() => {
        setLoading(true);
        db.collection("confessions").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setAllPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })));
            setLoading(false);
        })
    }, [])

    useEffect(() => {
        // console.log(allPosts);
    }, [allPosts]);

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <ModalContent onSubmit={handleSubmit}>
                    <ModalHeader>
                        <h3></h3>
                        <h3>Write confession</h3>
                        <CloseIcon style={{ cursor: 'pointer' }} onClick={handleClose} />
                    </ModalHeader>
                    <ModelUser>
                        <Avatar />
                        <h4>Anonymous</h4>
                    </ModelUser>
                    <ModelTextArea placeholder="Express your love, without fear. Your account info will not be shared." value={input} onChange={e => setInput(e.target.value)} >
                    </ModelTextArea>

                    {
                        !progress ? (<ModelPost type='submit'>
                            Post
                        </ModelPost>)
                            :
                            (
                                <ModelDontPost>
                                    <CircularProgress color="secondary" />
                                </ModelDontPost>
                            )
                    }

                </ModalContent>
            </Modal>
            <Container>
                {/* <AddPost>
                    <Input onClick={handleOpen}>
                        <input value="" type="text" placeholder='Express your love, without fear'/>
                    </Input>
                </AddPost> */}

                <TopLabel>
                    <Link className="backArrow" to='/explore'>
                        <ArrowBackIosIcon style={{ fontSize: '1.2rem' }} />
                    </Link>
                    <h3>Confession Page</h3>
                </TopLabel>

                {loading ? <ProgressContainer>
                    <LinearProgress />
                </ProgressContainer> : <></>}

                {
                    allPosts.map(({ id, data: { branch, gender, age, desc, date } }) => {
                        return <TextConfessions key={id} gender={gender} branch={branch} desc={desc} username={"FlirtAid User"} date={date} />
                    })
                }

                {/* <TextConfessions branch={"Male - Computer Science"} year={19} username={"Anonymous"} desc={"Hindi song, lyrics, Punjabi song, slowed and reverbed song, Hindi song cover, Hindi slowed song, Punjabi song slowed, Punjabi, slowed and reverbed, punjabi song, Punjabi, Neha Kakkar, Arijit Singh, Arijit Singh song, romantic song, romantic love song, Punjabi love song, diljit Singh, Hindi sad song, sad slowed song, sad hindi slowed song, Punjabi slowed song, slowed, reverbed, sadi gali."}/> */}
                {/* <TextConfessions branch={"Stock Manangements"} year={25} username={"Anonymous"} desc={"this song is also made for mothers ☺️😇💕that lyrics jab jab saase leta hu tera hi naam leta hu this is for my most special person my mom "}/> */}
                {/* <TextConfessions branch={"Computer Science"} year={25} username={"Anonymous"} desc={"Hindi song, lyrics, Punjabi song, slowed and reverbed song, Hindi song cover, Hindi slowed song, Punjabi song slowed, Punjabi, slowed and reverbed, punjabi song, Punjabi, Neha Kakkar, Arijit Singh, Arijit Singh song, romantic song, romantic love song, Punjabi love song, diljit Singh, Hindi sad song, sad slowed song, sad hindi slowed song, Punjabi slowed song, slowed, reverbed, sadi gali."}/> */}


                <EditProfile onClick={handleOpen}>
                    <CreateIcon style={{ fill: 'white' }} />
                </EditProfile>
            </Container>
        </>
    )
}

export default ConfessionPage

const Container = styled.div`
    min-height: 100vh;
    padding: 0.3rem;
    background-color: #333;
`

const AddPost = styled.div`
    width: 100%;
    background-color: #ff6869;
    border-radius: 7px;
    border: 1px solid black;
`


const Input = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem;

    input{
    flex: 1;
    height: 2.6rem;
    border-radius: 100px;
    border: 1px solid black;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    outline: none;
    }
`

const Open = styled.div`
    margin-left: 1rem;
    flex: 1;
    height: 2.6rem;
    border-radius: 100px;
    border: 1px solid #cdcfd7;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 0.9rem;
    color: grey;
`

const Options = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem 0.6rem;
    /* padding-bottom: 0.2rem; */
`

const Option = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    padding: 0.4rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
    background-color: #f5efef;
    transition-duration: 250ms;
    }
`

const ProgressContainer = styled.div`
    margin-top: 1rem;
`


const ModalContent = styled.form`
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
    top: 25%;
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
const ModelTextArea = styled.textarea`
    width: 98%;
    border: none;
    outline: none;
    background-color: #f3f2f2;
    border-radius: 10px;
    padding: 0.6rem;
    height: 15vw;


    @media(max-width: 850px){
        height: 186px;
    }

`

const ModelAddItem = styled.div`
    width: 98%;
    margin-top: 0.3rem;
    margin-bottom: 1rem;
    padding: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f3f3f394;
    border: 1px solid #bec4cf94;
    border-radius: 7px;
    font-size: 0.8rem;
    cursor: pointer;

    &:hover{
        background-color: #ccced17d;
        transition-duration: 250ms;
    }
`
const ModelPost = styled.button`
    width: 98%;
    border: none;
    background-color: #d35b5c;
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

const ModelDontPost = styled.div`
    width: 98%;
    border: 1px solid grey;
    color: black;
    padding: 0.3rem;
    border-radius: 6px;
    display: grid;
    place-items: center;
`
const TopLabel = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5rem 0 1rem 0;

    h3{
        color: white;
        letter-spacing: 0.075rem;
    }

    .backArrow{
        margin-bottom: -1px;
        display: grid;
        place-items: center;
        height: 30px;
        width: 30px;
        padding-left: 7px;
        background-color: black;  
        border-radius: 50%;    
        margin-right: 0.5rem;  
    }

`

const EditProfile = styled.div`
    height: 55px;
    width: 55px;
    border-radius: 50%;
    background: rgb(176,28,51);
    background: linear-gradient(90deg, green 13%, rgba(134,101,106,1) 100%);
    position: fixed;
    bottom: 15px;
    right: 10px;
    display: grid;
    place-items: center;
`