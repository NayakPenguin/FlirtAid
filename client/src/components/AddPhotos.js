import React from 'react'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
// import { db, storage } from '../firebase';



const AddPhotos = () => {
    
    const [numFiles, setNumFiles] = useState(0);
    const [allSubmit, setAllSubmit] = useState(false);
    

    const handleCountFile = (e) => {
        // console.log(numFiles);
        if(e.target.files.length == undefined){
            setNumFiles(0);
        }
        else{
            setNumFiles(e.target.files.length);
        }
        // console.log(allSubmit);
        if(e.target.files.length == 5){
            setAllSubmit(true);
        }
        // console.log(e.target.files[0].name);
        // console.log(allSubmit);
    }

    // console.log(numFiles);

    return (
        <Container>
            <BoxBig>
                <img style={{height: "100px"}} src="https://winaero.com/blog/wp-content/uploads/2019/09/Photos-app-icon-256-colorful.png" alt="" />
                <span>We require 1 profile picture and 4 addition photos to glorify your profile.</span>
                {/* <BrowseButton>Browse Images</BrowseButton> */}
                <input type="file" onChange={handleCountFile} id="file-input" accept="image/png, image/jpeg" multiple/>
                {/* <BrowseButton htmlFor="file-input">
                    Click here to select five photos
                </BrowseButton> */}
                <br />
                {/* <p style={{fontSize: "0.6rem", letterSpacing: '0.1rem'}}>Select all Images at once, first selected will become your </p> */}
                {/* <p id="num-of-files" style={{fontSize: "0.6rem"}}>{`${numFiles} Image Selected`}</p> */}
                <ImageUploadBox>
                    <img src="https://winaero.com/blog/wp-content/uploads/2019/09/Photos-app-icon-256-colorful.png" alt="" />
                    <section>
                        <p>Add as Profile picture </p>
                        <span>Click here to browse</span>
                        <button>
                            Remove
                        </button>
                    </section>
                </ImageUploadBox>
                <ImageUploadBox>
                    <img src="https://winaero.com/blog/wp-content/uploads/2019/09/Photos-app-icon-256-colorful.png" alt="" />
                    <section>
                        <p>Image added successfully</p>
                        <span>Click here to browse</span>
                        <button>
                            Remove
                        </button>
                    </section>
                </ImageUploadBox>
                <ImageUploadBox>
                    <img src="https://winaero.com/blog/wp-content/uploads/2019/09/Photos-app-icon-256-colorful.png" alt="" />
                    <section>
                        <p>Image added successfully</p>
                        <span>Click here to browse</span>
                        <button>
                            Remove
                        </button>
                    </section>
                </ImageUploadBox>
                <ImageUploadBox>
                    <img src="https://winaero.com/blog/wp-content/uploads/2019/09/Photos-app-icon-256-colorful.png" alt="" />
                    <section>
                        <p>Image added successfully</p>
                        <span>Click here to browse</span>
                        <button>
                            Remove
                        </button>
                    </section>
                </ImageUploadBox>
                <ImageUploadBox>
                    <img src="https://winaero.com/blog/wp-content/uploads/2019/09/Photos-app-icon-256-colorful.png" alt="" />
                    <section>
                        <p>Image added successfully</p>
                        <span>Click here to browse</span>
                        <button>
                            Remove
                        </button>
                    </section>
                </ImageUploadBox>
                
                

            </BoxBig>
            {
                allSubmit ? (
                    <DoneButton>
                        Done
                    </DoneButton>
                ):(
                    <NoDoneButton onClick={() => alert("You need to add five total images to continue")}>
                        Done
                    </NoDoneButton>
                )
            }

            
            {/* <AddButton>
                <AddIcon style={{fill: 'white', fontSize: '1.5rem'}}/>
            </AddButton> */}
        </Container>
    )
}

export default AddPhotos

const Container = styled.div`
    min-height: 100vh; 
    padding: 1rem;
`

const AddButton = styled.button`
    height: 50px;
    width: 50px;
    background: linear-gradient(#fd4670, #ff6b5c);
    border: none;
    border-radius: 50%;
    position: absolute;
    bottom: 70px;
    right: 35px;
    display: grid;
    place-content: center;
    box-shadow: -4px 3px 35px -6px rgba(0,0,0,0.56);
    -webkit-box-shadow: -4px 3px 35px -6px rgba(0,0,0,0.56);
    -moz-box-shadow: -4px 3px 35px -6px rgba(0,0,0,0.56);
`

const BoxBig = styled.div`
    height: calc(100vh - 92px);
    width: 100%;
    border: 1px dashed #012b41;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    span{
        font-size: 0.8rem;
        letter-spacing: 0.09rem;
    }
`

const BrowseButton = styled.label`
    background: none;
    border: none;
    color: cornflowerblue;
    font-size: 0.7rem;
    text-transform: uppercase;
    margin: 0.5rem 0;
    font-weight: 500;
    letter-spacing: 0.3rem;
`

const ImageUploadBox = styled.div`
    margin-bottom: 0.4rem;
    border: 1px dotted cornflowerblue;
    height: 60px;
    width: 100%;
    border-radius: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        height: 100%;
    }

    section{
        flex: 1;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p{
            font-size: 0.7rem;
        }
        span{
            font-size: 0.6rem;
            letter-spacing: 0.15rem;
            text-transform: uppercase;
            color: cornflowerblue;
            text-align: left;
        }

        button{
            border: none;
            background: transparent;
            font-size: 0.6rem;
            text-transform: uppercase;
            letter-spacing: 0.25rem;
            color: red;
            margin-top: 5px;
        }
    }

`

const DoneButton = styled.button`
    padding: 0.5rem 1.1rem;
    width: 80%;
    margin: 1.5rem auto 0 auto;
    border: none;
    background: linear-gradient(#fd4670, #ff6b5c);
    border-radius: 4px;
    color: white;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    display: grid;
    place-items: center;
    letter-spacing: 0.4rem;
`

const NoDoneButton = styled.button`
    padding: 0.5rem 1.1rem;
    width: 80%;
    margin: 1.5rem auto 0 auto;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    display: grid;
    place-items: center;
    letter-spacing: 0.4rem;
`