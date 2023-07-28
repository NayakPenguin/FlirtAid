import React, { useEffect } from "react";
import { useState } from 'react';
import styled from 'styled-components'
import ClearIcon from '@material-ui/icons/Clear';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import RedditIcon from '@material-ui/icons/Reddit';
import { Link } from 'react-router-dom';
import { db, storage } from '../firebase';
import imageCompression from "browser-image-compression";



const CreateProfile = ({ mainUser }) => {
    // console.log(mainUser);
    // console.log(mainUser.email);

    const [allowRedirectToHome, setAllowRedirectToHome] = useState(false);


    const [slide, setSlide] = useState("Page1");


    const [name, setName] = useState("");
    // Actually name contains the instagram id
    const [age, setAge] = useState("");
    const [branch, setBranch] = useState("");
    const [university, setUniversity] = useState("");
    const [passout, setPassout] = useState("");
    const [hobby, setHobby] = useState("");
    const [bio, setBio] = useState("");
    const [searchingFor, setSearchingFor] = useState("");
    const [instagram, setInstagram] = useState("");

    const [numFiles, setNumFiles] = useState(0);
    const [allSubmit, setAllSubmit] = useState(false);

    const [selectedInterests, setSelectedInterests] = useState([]);



    const [userID, setUserID] = useState(mainUser._id);
    const [progress, setProgress] = useState(false);

    const [fileOne, setFileOne] = useState('');
    const [fileTwo, setFileTwo] = useState('');
    const [fileThree, setFileThree] = useState('');
    const [fileFour, setFileFour] = useState('');
    const [fileFive, setFileFive] = useState('');

    const [imageNameOne, setImageNameOne] = useState("");
    const [imageNameTwo, setImageNameTwo] = useState("");
    const [imageNameThree, setImageNameThree] = useState("");
    const [imageNameFour, setImageNameFour] = useState("");
    const [imageNameFive, setImageNameFive] = useState("");

    const [imageOneURL, setImageOneURL] = useState("");
    const [imageTwoURL, setImageTwoURL] = useState("");
    const [imageThreeURL, setImageThreeURL] = useState("");
    const [imageFourURL, setImageFourURL] = useState("");
    const [imageFiveURL, setImageFiveURL] = useState("");





    const [flag, setFlag] = useState(0);
    useEffect(() => {
        // console.log(flag);
        if (flag == 5) {
            fetch('https://faid-api.herokuapp.com/update', {
                method: 'post',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    insta: name,
                    age: age,
                    department: branch,
                    Year: passout,
                    hobbies: hobby,
                    bio: bio,
                    insearch: searchingFor,
                    email: mainUser.email,
                    password: "environmentVariable",
                    interests: selectedInterests,
                    image: [imageOneURL, imageTwoURL, imageThreeURL, imageFourURL, imageFiveURL],
                })
            }).then(response => response.json())
                .then(resp => {
                    // alert(resp);
                    // console.log(resp);
                    setProgress(false);
                    setAllowRedirectToHome(true);
                })
        }
    }, [flag]);

    // console.log(flag);


    // -------------- I M A G E   U P L O A D E R   S T A R T ---------------


    // console.log(imageOneURL);
    // console.log(imageTwoURL);
    // console.log(imageThreeURL);
    // console.log(imageFourURL);
    // console.log(imageFiveURL);


    const options = {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 800,
        useWebWorker: true
    };

    const imageCompresserOne = (file) => {
        if (options.maxSizeMB >= ((file.size) / 1024)){
            setFileOne(file);
        }

        let output;
        imageCompression(file, options).then(x => {
            // output = x;
            // console.log(x);
            // const downloadLink = URL.createObjectURL(output);
            // console.log(downloadLink);
            // return x;
            setFileOne(x);
        });
    }

    const imageCompresserTwo = (file) => {
        if (options.maxSizeMB >= ((file.size) / 1024)){
            setFileTwo(file);
        }

        imageCompression(file, options).then(x => {
            setFileTwo(x);
        });
    }

    const imageCompresserThree = (file) => {
        if (options.maxSizeMB >= ((file.size) / 1024)){
            setFileThree(file);
        }

        imageCompression(file, options).then(x => {
            setFileThree(x);
        });
    }

    const imageCompresserFour = (file) => {
        if (options.maxSizeMB >= ((file.size) / 1024)){
            setFileFour(file);
        }

        imageCompression(file, options).then(x => {
            setFileFour(x);
        });
    }

    const imageCompresserFive = (file) => {
        if (options.maxSizeMB >= ((file.size) / 1024)){
            setFileFive(file);
        }

        imageCompression(file, options).then(x => {
            setFileFive(x);
        });
    }




    const handleCountFileOne = (e) => {
        // console.log(e.target.files[0].name);
        if (e.target.files[0] == undefined){
            setImageNameOne("");
        }
        else {

            // -------------- I M A G E   C O M P R E S S E R    S T A R T ---------------
            imageCompresserOne(e.target.files[0]);


            // -------------- I M A G E   C O M P R E S S E R    E N D ---------------
            // setFileOne(e.target.files[0]);

            if ((e.target.files[0].name).length > 25) {
                setImageNameOne(e.target.files[0].name.substring(0, 24));
            }
            else {
                setImageNameOne(e.target.files[0].name);
            }
        }
    }


    const handleCountFileTwo = (e) => {
        if (e.target.files[0] == undefined) {
            setImageNameTwo("");
        }
        else {
            imageCompresserTwo(e.target.files[0]);

            if ((e.target.files[0].name).length > 25) {
                setImageNameTwo(e.target.files[0].name.substring(0, 24));
            }
            else {
                setImageNameTwo(e.target.files[0].name);
            }
        }
    }

    const handleCountFileThree = (e) => {
        if (e.target.files[0] == undefined) {
            setImageNameThree("");
        }
        else {
            
            
            
            imageCompresserThree(e.target.files[0]);



            if ((e.target.files[0].name).length > 25) {
                setImageNameThree(e.target.files[0].name.substring(0, 24));
            }
            else {
                setImageNameThree(e.target.files[0].name);
            }
        }
    }

    const handleCountFileFour = (e) => {
        if (e.target.files[0] == undefined) {
            setImageNameFour("");
        }
        else {
            
            
            
            imageCompresserFour(e.target.files[0]);



            if ((e.target.files[0].name).length > 25) {
                setImageNameFour(e.target.files[0].name.substring(0, 24));
            }
            else {
                setImageNameFour(e.target.files[0].name);
            }
        }
    }

    const handleCountFileFive = (e) => {
        if (e.target.files[0] == undefined) {
            setImageNameFive("");
        }
        else {
            
            
            
            imageCompresserFive(e.target.files[0]);



            if ((e.target.files[0].name).length > 25) {
                setImageNameFive(e.target.files[0].name.substring(0, 24));
            }
            else {
                setImageNameFive(e.target.files[0].name);
            }
        }
    }


    // console.log(imageOneURL);
    // console.log(imageTwoURL);
    // console.log(imageThreeURL);
    // console.log(imageFourURL);
    // console.log(imageFiveURL);




    const handleSubmit = async () => {
        setProgress(true);
        var imageURLs = [];



        const uploadTask1 = storage.ref(`files/${userID}/${imageNameOne}`).put(fileOne);
        const uploadTask2 = storage.ref(`files/${userID}/${imageNameTwo}`).put(fileTwo);
        const uploadTask3 = storage.ref(`files/${userID}/${imageNameThree}`).put(fileThree);
        const uploadTask4 = storage.ref(`files/${userID}/${imageNameFour}`).put(fileFour);
        const uploadTask5 = storage.ref(`files/${userID}/${imageNameFive}`).put(fileFive);

        uploadTask1.on(
            "state-changed",
            (snapshot) => {
                // console.log("Image Added successfully !");
            },
            (error) => {
                alert(error.message);
            },
            () => {
                storage.ref(`files/${userID}`).child(imageNameOne).getDownloadURL().then(url => {
                    setImageOneURL(url);
                    imageURLs.push(url);
                    setFlag(prevFlag => prevFlag + 1);
                }
                )
            },


        );

        uploadTask2.on(
            "state-changed",
            (snapshot) => {
                // console.log("Image Added successfully !");
            },
            (error) => {
                alert(error.message);
            },

            () => {
                storage.ref(`files/${userID}`).child(imageNameTwo).getDownloadURL().then(url => {
                    setImageTwoURL(url);
                    imageURLs.push(url);
                    setFlag(prevFlag => prevFlag + 1);
                }
                )
            },

        );


        uploadTask3.on(
            "state-changed",
            (snapshot) => {
                // console.log("Image Added successfully !");
            },
            (error) => {
                alert(error.message);
            },

            () => {
                storage.ref(`files/${userID}`).child(imageNameThree).getDownloadURL().then(url => {
                    setImageThreeURL(url);
                    imageURLs.push(url);
                    setFlag(prevFlag => prevFlag + 1);
                }
                )
            },

        );

        uploadTask4.on(
            "state-changed",
            (snapshot) => {
                // console.log("Image Added successfully !");
            },
            (error) => {
                alert(error.message);
            },

            () => {
                storage.ref(`files/${userID}`).child(imageNameFour).getDownloadURL().then(url => {
                    setImageFourURL(url);
                    imageURLs.push(url);
                    setFlag(prevFlag => prevFlag + 1);
                }
                )
            },

        );

        uploadTask5.on(
            "state-changed",
            (snapshot) => {
                // console.log("Image Added successfully !");
            },
            (error) => {
                alert(error.message);
            },

            () => {
                storage.ref(`files/${userID}`).child(imageNameFive).getDownloadURL().then(url => {
                    setImageFiveURL(url);
                    imageURLs.push(url);
                    setFlag(prevFlag => prevFlag + 1);
                }
                )
            },
        );

        // return imageURLs;
    };


    // -------------- I M A G E   U P L O A D E R   E N D ---------------

    const interests = [
        "Cricket",
        "Football",
        "Swimming",
        "MMA/Boxing",
        "E-Sports",
        "Karate",
        "Astrology",
        "Science & Technology",
        "Hardcore Engineering",
        "Stand-Up Comedy",
        "Coding",
        "Marvel/ DC",
        "Philosophy",
        "Western Music",
        "Indian Classical Music",
        "Rap Music",
        "Bollywood Songs",
        "Bengali Songs",
        "English Films",
        "Hindi Films",
        "HIMYM",
        "GOT",
        "Bengali Movies",
        "Video Games",
        "Politics",
        "Debates",
        "Fitness/Gym",
        "Puppies/Dogs",
        "Cats/Kittens",
        "K-Pop",
        "Anime",
        "Harry Potter",
        "Friends",
        "Fashion",
        "Painting",
        "Writing",
        "Reading",
    ];




    const handleSubmitMain = async () => {
        const imageAllUrls = await handleSubmit();
        if (imageAllUrls.length > 0) {
            // console.log(imageAllUrls);
        }
        // console.log(imageAllUrls);



    }


    let colorFlag = 0;

    useEffect(() => {
        colorFlag = 0;
    }, [selectedInterests]);

    const handleAddInterest = (e) => {
        if (selectedInterests.includes(e)) {
            colorFlag = 1;
            setSelectedInterests(
                selectedInterests.filter(function (item) {
                    return item != e;
                })
            );
        }
        else {
            colorFlag = 0;
            setSelectedInterests([...selectedInterests, e]);
        }
    }

    const changeBg = (e) => {
        if (!colorFlag) {
            e.target.style.backgroundColor = 'white';
            e.target.style.border = '1px solid white';
            e.target.style.color = '#333';
        }
        else {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.border = '1px solid grey';
            e.target.style.color = 'grey';
        }

    }

    // const changeBgTwo = (e) => {
    //     e.target.style.backgroundColor = 'transparent';
    //     e.target.style.border = '#333';
    //     e.target.style.color = '#333';
    // }

    // console.log(selectedInterests);


    return (
        <BigContainer>

            <Container>
                {
                    slide == "Page1" ? (
                        <>
                            <Pagination>
                            </Pagination>
                            <PageOne>
                                <section>
                                    <FormStatus>Create Profile > Basic Information</FormStatus>
                                    <Link to="/home">
                                        <ClearIcon style={{ fill: 'grey', fontSize: '1.5rem' }} />
                                    </Link>
                                </section>
                                <MainHeader>
                                    <h1>create your account</h1>
                                    <span>All the information to given below will be later shown on your profile</span>
                                </MainHeader>
                                <InputsContainer>
                                    <input type="number" placeholder='Age' onChange={(e) => setAge(e.target.value)} />
                                    <input type="text" placeholder='Branch' onChange={(e) => setBranch(e.target.value)} />
                                    <input type="text" placeholder='College' onChange={(e) => setUniversity(e.target.value)} />
                                    <input type="number" placeholder='Year of Passout, eg. 2024' onChange={(e) => setPassout(e.target.value)} />
                                    <input type="text" placeholder='Instagram ID (optional)' onChange={(e) => setName(e.target.value)} />
                                </InputsContainer>
                                <InputsContainer>
                                    <input type="text" placeholder='Something you like to do' onChange={(e) => setHobby(e.target.value)} />
                                    <InstructionSpan>
                                    What do you do to spend time? Coder, Painter, maybe an overthinker?
                                    </InstructionSpan>
                                    <input type="text" placeholder='Bio' onChange={(e) => setBio(e.target.value)} />
                                    <input type="text" placeholder='Preferable date expectations' onChange={(e) => setSearchingFor(e.target.value)} />
                                    <InstructionSpan>
                                        serious relationship, simple dating or hookups etc
                                    </InstructionSpan>
                                </InputsContainer>
                                {
                                    age && branch && university && passout && hobby && bio && searchingFor && mainUser.isVerified ? (
                                        <SubmitButton onClick={() => setSlide("Page2")}>
                                            Continue
                                        </SubmitButton>
                                    ) : (
                                        <NoDoneButton onClick={() => alert("Please fill all the above fields")}>
                                            Continue
                                        </NoDoneButton>
                                        // <SubmitButton onClick={() => setSlide("Page2")}>
                                        //     Continue
                                        // </SubmitButton>
                                    )
                                }

                            </PageOne>
                        </>
                    ) : (
                        slide == "Page2" ? (
                            <>
                                <Pagination>
                                    <div></div>
                                </Pagination>
                                <PageTwo>
                                    <section>
                                        <FormStatus>Create Profile > Accouts and Interests</FormStatus>
                                        <Link to="/home">
                                            <ClearIcon style={{ fill: 'grey', fontSize: '1.5rem' }} />
                                        </Link>
                                    </section>
                                    <MainHeaderPartTwo>
                                        <h1>Personal Interests</h1>
                                        <span>Choose any 7 - 15 of your top interests, this will also be a way to match your compatibility with your date.</span>
                                    </MainHeaderPartTwo>

                                    <p className="counter">{selectedInterests.length} interests selected</p>

                                    <ChooseInterests>
                                        <>
                                            {
                                                interests.map((name) => {
                                                    return <section onClick={(e) => { handleAddInterest(name); changeBg(e) }}>{name}</section>
                                                })
                                            }
                                        </>
                                    </ChooseInterests>
                                    {
                                        selectedInterests.length >= 7 && selectedInterests.length <= 15? (
                                            <SubmitButton onClick={() => setSlide("Page3")}>
                                                Continue
                                            </SubmitButton>
                                        ) : (
                                            <NoDoneButton onClick={() => alert(`You have choosen ${selectedInterests.length} interests, please choose between 7 - 15 from the options.`)}>
                                                Continue
                                            </NoDoneButton>
                                            // <SubmitButton onClick={() => setSlide("Page3")}>
                                            //     Continue
                                            // </SubmitButton>
                                        )
                                    }

                                </PageTwo>
                            </>) : (
                            <>
                                <Pagination>
                                    <div></div>
                                    <div></div>
                                </Pagination>
                                <PageThree>
                                    <section>
                                        <FormStatus>Create Profile > Image Upload </FormStatus>
                                        <Link to="/home">
                                            <ClearIcon style={{ fill: 'grey', fontSize: '1.5rem' }} />
                                        </Link>
                                    </section>

                                    <ImageContainer>

                                        <BoxBig>
                                            <img style={{ height: "100px" }} src="https://winaero.com/blog/wp-content/uploads/2019/09/Photos-app-icon-256-colorful.png" alt="" />
                                            <span>We require 1 profile picture and 4 addition photos to glorify your profile.</span>
                                            {/* <BrowseButton>Browse Images</BrowseButton> */}
                                            {/* <input type="file" onChange={handleCountFile} id="file-input" accept="image/png, image/jpeg, image/jpg" multiple/> */}
                                            {/* <BrowseButton htmlFor="file-input">
                                                Click here to select five photos
                                            </BrowseButton> */}
                                            <br />
                                            {/* <p style={{fontSize: "0.6rem", letterSpacing: '0.1rem'}}>Select all Images at once, first selected will become your </p> */}
                                            {/* <p id="num-of-files" style={{fontSize: "0.6rem"}}>{`${numFiles} Image Selected`}</p> */}

                                            <ImageUploadBox>
                                                <img src="https://winaero.com/blog/wp-content/uploads/2019/09/Photos-app-icon-256-colorful.png" alt="" />
                                                <section>
                                                    <p>{imageNameOne == "" ? "Add as Profile picture" : `${imageNameOne} is selected`}</p>
                                                    <input type="file" onChange={handleCountFileOne} id="file-input1" accept="image/png, image/jpeg, image/jpg" />
                                                    {/* <label htmlFor="file-input1">Click here to browse</label> */}
                                                    {
                                                        imageNameOne == "" ? (
                                                            <label htmlFor="file-input1">Click here to browse</label>
                                                        ) : (
                                                            <button onClick={() => setImageNameOne("")}>
                                                                Remove
                                                            </button>
                                                        )
                                                    }
                                                </section>
                                            </ImageUploadBox>

                                            <ImageUploadBox>
                                                <img src="https://winaero.com/blog/wp-content/uploads/2019/09/Photos-app-icon-256-colorful.png" alt="" />
                                                <section>
                                                    <p>{imageNameTwo == "" ? "Add additional photo" : `${imageNameTwo} is selected`}</p>
                                                    <input type="file" onChange={handleCountFileTwo} id="file-input2" accept="image/png, image/jpeg, image/jpg" />
                                                    {/* <label htmlFor="file-input2">Click here to browse</label> */}
                                                    {
                                                        imageNameTwo == "" ? (

                                                            <label htmlFor="file-input2">Click here to browse</label>

                                                        ) : (
                                                            <button onClick={() => setImageNameTwo("")}>
                                                                Remove
                                                            </button>
                                                        )
                                                    }
                                                </section>
                                            </ImageUploadBox>

                                            <ImageUploadBox>
                                                <img src="https://winaero.com/blog/wp-content/uploads/2019/09/Photos-app-icon-256-colorful.png" alt="" />
                                                <section>
                                                    <p>{imageNameThree == "" ? "Add additional photo" : `${imageNameThree} is selected`}</p>
                                                    <input type="file" onChange={handleCountFileThree} id="file-input3" accept="image/png, image/jpeg, image/jpg" />
                                                    {/* <label htmlFor="file-input3">Click here to browse</label> */}
                                                    {
                                                        imageNameThree == "" ? (

                                                            <label htmlFor="file-input3">Click here to browse</label>

                                                        ) : (
                                                            <button onClick={() => setImageNameThree("")}>
                                                                Remove
                                                            </button>
                                                        )
                                                    }
                                                </section>
                                            </ImageUploadBox>

                                            <ImageUploadBox>
                                                <img src="https://winaero.com/blog/wp-content/uploads/2019/09/Photos-app-icon-256-colorful.png" alt="" />
                                                <section>
                                                    <p>{imageNameFour == "" ? "Add additional photo" : `${imageNameFour} is selected`}</p>
                                                    <input type="file" onChange={handleCountFileFour} id="file-input4" accept="image/png, image/jpeg, image/jpg" />
                                                    {/* <label htmlFor="file-input4">Click here to browse</label> */}
                                                    {
                                                        imageNameFour == "" ? (

                                                            <label htmlFor="file-input4">Click here to browse</label>

                                                        ) : (
                                                            <button onClick={() => setImageNameFour("")}>
                                                                Remove
                                                            </button>
                                                        )
                                                    }
                                                </section>
                                            </ImageUploadBox>

                                            <ImageUploadBox>
                                                <img src="https://winaero.com/blog/wp-content/uploads/2019/09/Photos-app-icon-256-colorful.png" alt="" />
                                                <section>
                                                    <p>{imageNameFive == "" ? "Add additional photo" : `${imageNameFive} is selected`}</p>
                                                    <input type="file" onChange={handleCountFileFive} id="file-input5" accept="image/png, image/jpeg, image/jpg" />
                                                    {/* <label htmlFor="file-input5">Click here to browse</label> */}
                                                    {
                                                        imageNameFive == "" ? (

                                                            <label htmlFor="file-input5">Click here to browse</label>

                                                        ) : (
                                                            <button onClick={() => setImageNameFive("")}>
                                                                Remove
                                                            </button>
                                                        )
                                                    }
                                                </section>
                                            </ImageUploadBox>

                                        </BoxBig>





                                        {
                                            (imageNameOne != "" && imageNameTwo != "" && imageNameThree != "" && imageNameFour != "" && imageNameFive != "") ? (
                                                !progress ? (
                                                    <DoneButton onClick={handleSubmit}>
                                                        Done
                                                    </DoneButton>
                                                ) : (
                                                    <ProcessButton>
                                                        <img src="https://media4.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif" alt="" />
                                                    </ProcessButton>
                                                )
                                            ) : (
                                                <NoDoneButton onClick={() => alert("You need to add five total images to continue")}>
                                                    Done
                                                </NoDoneButton>
                                            )
                                        }



                                        {
                                            allowRedirectToHome ? (
                                                <RedirectContainer>
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/768px-Flat_tick_icon.svg.png" alt="" />
                                                    <h3>
                                                        Congrats Your account is created successfully, 
                                                    </h3>
                                                    {/* <h3>just the last step</h3> */}
                                                    {/* <p>Just a last step for our users account security.</p> */}
                                                    <p>Voila! You are now ready to find love. Click on the link below to login to your picture perfect account! <br /> <br /> You might want to learn how to use the app. <a style={{"color":"cornflowerblue"}} href="/learn">Click here</a> to know more.</p>
                                                    <Link className="home-link" to="/login">continue to login again</Link>
                                                    {/* <Link className="home-link" to="/gender-verification">Verify your gender</Link> */}
                                                </RedirectContainer>
                                            ) : (
                                                <></>
                                            )
                                        }
                                    </ImageContainer>
                                </PageThree>
                            </>
                        )
                    )
                }


            </Container>
        </BigContainer>
    )
}

export default CreateProfile

const RedirectContainer = styled.div`
    position: fixed;
    top: 10px;
    left: 10px;
    background-color: white;
    height: calc(100vh - 20px);
    width: calc(100vw - 20px);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    text-align: center;

    img{
        height: 100px;
        margin-bottom: 1rem;
    }

    h3{
        text-transform: uppercase;
        /* font-family: 'Moon Dance', cursive; */
        letter-spacing: 0.15rem;
        font-size: 1.25rem;
    }

    p{
        text-align: center;
        color: grey;
        font-size: 0.9rem;
        letter-spacing: 0.1rem;
        margin: 1rem 0;
        
    }

    .home-link{
        position: absolute;
        bottom: 10px;
        text-decoration: none;
        font-size: 0.8rem;
        color: white;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        background-color: cornflowerblue;
        padding: 10px 15px;
        border-radius: 5px;
    }
`

const BigContainer = styled.div`
    min-height: 100vh;
    background-color: #1f2225;
`

const InstructionSpan = styled.span`
    font-size: 0.5rem;
    color: #ff6b5c;
    margin-bottom: 0.2rem;
    width: 80%;
`

const ChooseInterests = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    margin-top: 1rem;

    section{
        padding: 0.3rem;
        border-radius: 100px;
        font-size: 0.7rem;
        color: grey;
        border: 1px solid grey;
        margin: 0 0.3rem 0.3rem 0;
    }
`

const SocialAccInputsContainer = styled.div`
    margin-top: 0.9rem;
`

const SideBySide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: auto;
    margin-top: 0.3rem;

    input{
        flex: 1;
        padding: 0.5rem;
        font-size: 0.8rem;
        outline: none;
        border: 1px solid #d5c5c5;
        border-radius: 4px;
        margin-left: 0.2rem;
    }
`

const SubmitButton = styled.button`
    padding: 0.5rem 1.1rem;
    width: 80%;
    margin: 1.5rem auto;
    border: none;
    background: linear-gradient(#fd4670, #ff6b5c);
    border-radius: 4px;
    color: white;
    font-weight: 500;
    cursor: pointer;
    display: grid;
    place-items: center;
    letter-spacing: 0.05rem;
    margin-bottom: 1rem;
`

const Pagination = styled.div`
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    div{
        height: 10px;
        background: #d31260;
        /* background: linear-gradient(90deg, rgba(134,101,106,1) -10%, green 100%); */
        display: block;
        width: 33.33vw;
    }
`

const InputsContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 80%;
        padding: 9px 0 7px 8px;
        font-size: 0.8rem;
        outline: none;
        margin-top: 0.3rem;
        border: 1px solid #d5c5c5;
        border-radius: 4px;
        background-color: #1f2225;
        color: white;
    }
`

const Container = styled.div`
    /* padding: 0.3rem; */
`

const FormStatus = styled.div`
    font-size: 0.65rem;
    color: grey;
`

const PageOne = styled.div`
    padding: 0 0.3rem 0.3rem 0.3rem;

    section{
        display: flex;
        padding: 0.3rem;
        align-items: center;
        justify-content: space-between;
    }
`

const PageTwo = styled.div`
    padding: 0 0.3rem 0.3rem 0.3rem;
    section{
        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    .counter{
        color: #68cf71;
        margin: 0.5rem;
        font-size: 0.8rem;
        text-align: center;
        letter-spacing: 0.15rem;
        font-weight: 500;
    }
`

const PageThree = styled.div`
    padding: 0 0.3rem 0.3rem 0.3rem;
    section{
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
`

const MainHeader = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1{
        font-size: 1.2rem;
        letter-spacing: 0.15rem;
        text-transform: uppercase;
        color: white;
    }

    span{
        font-size: 0.8rem;
        color: #ff6b5c;
    }
`

const MainHeaderPartTwo = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1{
        font-size: 0.9rem;
        letter-spacing: 0.15rem;
        text-transform: uppercase;
        color: white;
    }

    span{
        font-size: 0.7rem;
        color: #ff6b5c;
    }
`

const ImageContainer = styled.div`
    min-height: 100vh; 
    padding: 1rem;
    position: relative;
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
        color: white;
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
    min-height: 60px;
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
        padding: 0.2rem 0;

        p{
            font-size: 0.6rem;
            text-align: left;
            margin-bottom: 0.1rem;
            color: #e7d8d8;
        }
        label{
            cursor: pointer;
            font-size: 0.6rem;
            letter-spacing: 0.15rem;
            text-transform: uppercase;
            color: cornflowerblue;
            text-align: left;
        }

        button{
            cursor: pointer;
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

const ProcessButton = styled.button`
    padding: 0.2rem 1.1rem;
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
    background: linear-gradient(#fd4670, #ff6b5c);

    
    img{
      height: 1.6rem;
    }
`



const NoDoneButton = styled.button`
    padding: 0.5rem 1.1rem;
    width: 80%;
    margin: 1.5rem auto 0 auto;
    border: none;
    border-radius: 4px;
    color: #746266;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    display: grid;
    place-items: center;
    letter-spacing: 0.4rem;
    background-color: #3c2f2f;
    margin-bottom: 1rem;
`


{/* <MainHeaderPartTwo style={{marginTop: '3rem'}}>
    <h1>Social Media Accounts</h1>
    <span>Enter accounts which ever you have</span>
</MainHeaderPartTwo>

<SocialAccInputsContainer>
<SideBySide>
    <InstagramIcon style={{ fill: '#fd4f6c', fontSize: '2rem' }} />
    <input type="text" placeholder='Instagram' onChange={(e) => setInstagram(e.target.value)}/>
</SideBySide>
<SideBySide>
    <FacebookIcon style={{ fill: '#fd4f6c', fontSize: '2rem' }} />
    <input type="text" placeholder='FaceBook'/>
</SideBySide>
<SideBySide>
    <TwitterIcon style={{ fill: '#fd4f6c', fontSize: '2rem' }} />
    <input type="text" placeholder='Twitter'/>
</SideBySide>
<SideBySide>
    <RedditIcon style={{ fill: '#fd4f6c', fontSize: '2rem' }} />
    <input type="text" placeholder='Reddit'/>
</SideBySide>
</SocialAccInputsContainer> */}


{/* <SubmitButton onClick={handleSubmitMain}>
    Continue
</SubmitButton> */}