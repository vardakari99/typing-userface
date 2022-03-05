import React,{useEffect, useState} from 'react';
import './Tester.css';
import $ from 'jquery';
import axios from 'axios';
import Navbar from './Navbar';

const Tester = () => {
//     const para = "One September night a family had gathered round their hearth, and piled it high with the driftwood of mountain streams, the dry cones of the pine, and the splintered ruins of great trees that had come crashing down the precipice. Up the chimney roared the fire, and brightened the room with its broad blaze. The faces of the father and mother had a sober gladness; the children laughed; the eldest daughter was the image of Happiness at seventeen; and the aged grandmother, who sat knitting in the warmest place, was the image of Happiness grown old.  They had found the herb, hearts-ease in the bleakest spot of all New England."
//     const extractedWords = para.split(" ");
//    const requiredWords = extractedWords; 
    const requiredWords = [
        {
            level: 1,
            wordset: [{
                id: 1,
                word: "hello"
            },
            {
                id: 2,
                word: "parrot"
            },
            {
                id: 3,
                word: "language"
            },
            {
                id: 4,
                word: "vegetable"
            },
            {
                id: 5,
                word: "flower"
            },
            {
                id: 6,
                word: "go"
            },
            {
                id: 7,
                word: "to"
            },
            {
                id: 8,
                word: "farm"
            },
            {
                id: 9,
                word: "get"
            },
            {
                id: 10,
                word: "me"
            },
            {
                id: 11,
                word: "a"
            },
            {
                id: 12,
                word: "fruit"
            },
            {
                id: 13,
                word: "pineapple"
            },
            {
                id: 14,
                word: "house"
            },
            {
                id: 15,
                word: "sleep"
            },
            {
                id: 16,
                word: "zebra"
            },
            {
                id: 17,
                word: "live"
            },
            {
                id: 18,
                word: "your"
            },
            {
                id: 19,
                word: "life"
            },
            {
                id: 20,
                word: "good"
            },
            {
                id: 21,
                word: "no"
            },
            {
                id: 22,
                word: "regrets"
            },
            {
                id: 23,
                word: "ever"
            },
            {
                id: 24,
                word: "kid"
            },
            {
                id: 25,
                word: "bless"
            }    
        ]
        },
        {
            level: 2,
            wordset: [{
                id: 1,
                word: "An"
            },
        {
                id: 2,
                word: "old"
            },
            {
                id: 3,
                word: "man"
            },
            {
                id: 4,
                word: "lived"
            },
            {
                id: 5,
                word: "in"
            },
            {
                id: 6,
                word: "the"
            },
            {
                id: 7,
                word: "village."
            },
            {
                id: 8,
                word: "He"
            },
            {
                id: 9,
                word: "was"
            },
            {
                id: 10,
                word: "one"
            },
            {
                id: 11,
                word: "of"
            },
            {
                id: 12,
                word: "the"
            },
            {
                id: 13,
                word: "most"
            },
            {
                id: 14,
                word: "unfortunate"
            },
            {
                id: 15,
                word: "people"
            },
            {
                id: 16,
                word: "in"
            },
            {
                id: 17,
                word: "the"
            },
            {
                id: 18,
                word: "world."
            },
            {
                id: 19,
                word: "The"
            },
            {
                id: 20,
                word: "whole"
            },
            {
                id: 21,
                word: "village"
            },
            {
                id: 22,
                word: "was"
            },
            {
                id: 23,
                word: "tired"
            },
            {
                id: 24,
                word: "of"
            },
            {
                id: 25,
                word: "him\;"
            },
            {
                id: 26,
                word: "he"
            },
            {
                id: 27,
                word: "was"
            },
            {
                id: 28,
                word: "always"
            },
            {
                id: 29,
                word: "gloomy,"
            },
            {
                id: 30,
                word: "he"
            },
            {
                id: 31,
                word: "constantly"
            },
            {
                id: 32,
                word: "The"
            },
            {
                id: 33,
                word: "complained"
            },
            {
                id: 34,
                word: "and"
            },
            {
                id: 35,
                word: "was"
            },
            {
                id: 36,
                word: "always"
            },
            {
                id: 37,
                word: "in"
            },
            {
                id: 38,
                word: "a"
            },
            {
                id: 39,
                word: "bad"
            },
            {
                id: 40,
                word: "mood."
            },
            {
                id: 41,
                word: "The"
            },
            {
                id: 42,
                word: "longer"
            },
            {
                id: 43,
                word: "he"
            },
            {
                id: 44,
                word: "lived"
            },
            {
                id: 45,
                word: "the"
            },
            {
                id: 46,
                word: "more"
            },
            {
                id: 47,
                word: "bile"
            },
            {
                id: 48,
                word: "he"
            },
            {
                id: 49,
                word: "was"
            },
            {
                id: 50,
                word: "becoming"
            },
            {
                id: 51,
                word: "and"
            },
            {
                id: 52,
                word: "the"
            },
            {
                id: 53,
                word: "more"
            },
            {
                id: 54,
                word: "poisonous"
            },
            {
                id: 55,
                word: "were"
            },
            {
                id: 56,
                word: "his"
            },
            {
                id: 57,
                word: "words."
            },
            {
                id: 58,
                word: "People"
            },
            {
                id: 59,
                word: "avoided"
            },
            {
                id: 60,
                word: "him,"
            },
            {
                id: 61,
                word: "because"
            },
            {
                id: 62,
                word: "his"
            },
            {
                id: 63,
                word: "misfortune"
            },
            {
                id: 64,
                word: "became"
            },
            {
                id: 65,
                word: "contagious."
            },
            {
                id: 66,
                word: "It"
            },
            {
                id: 67,
                word: "was"
            },
            {
                id: 68,
                word: "even"
            },
            {
                id: 69,
                word: "unnatural"
            },
            {
                id: 70,
                word: "and"
            },
            {
                id: 71,
                word: "insulting"
            },
            {
                id: 72,
                word: "to"
            },
            {
                id: 73,
                word: "be"
            },
            {
                id: 74,
                word: "happy"
            },
            {
                id: 75,
                word: "near"
            },
            {
                id: 76,
                word: "him."
            },
            {
                id: 77,
                word: "But"
            },
            {
                id: 78,
                word: "one"
            },
            {
                id: 79,
                word: "day,"
            },
            {
                id: 80,
                word: "when"
            },
            {
                id: 81,
                word: "he"
            },
            {
                id: 82,
                word: "turned"
            },
            {
                id: 83,
                word: "eighty"
            },
            {
                id: 84,
                word: "years"
            },
            {
                id: 85,
                word: "old,"
            },
            {
                id: 86,
                word: "an"
            },
            {
                id: 87,
                word: "incredible"
            },
            {
                id: 88,
                word: "thing"
            },
            {
                id: 89,
                word: "happened."
            },
            {
                id: 90,
                word: "Instantly"
            },
            {
                id: 91,
                word: "everyone"
            },
            {
                id: 92,
                word: "started"
            },
            {
                id: 93,
                word: "hearing"
            },
            {
                id: 94,
                word: "the"
            },
            {
                id: 95,
                word: "rumour"
            },
            {
                id: 96,
                word: "that"
            },
            {
                id: 97,
                word: "an"
            },
            {
                id: 98,
                word: "old"
            },
            {
                id: 99,
                word: "man"
            },
            {
                id: 100,
                word: "is"
            },
            {
                id: 101,
                word: "happy"
            },
            {
                id: 102,
                word: "today,"
            },
            {
                id: 103,
                word: "he"
            },
            {
                id: 104,
                word: "doesn\'t"
            },
            {
                id: 105,
                word: "complain"
            },
            {
                id: 106,
                word: "about"
            },
            {
                id: 107,
                word: "anything,"
            },
            {
                id: 108,
                word: "he"
            },
            {
                id: 109,
                word: "smiles,"
            },
            {
                id: 110,
                word: "and"
            },
            {
                id: 111,
                word: "even"
            },
            {
                id: 112,
                word: "his"
            },
            {
                id: 113,
                word: "face"
            },
            {
                id: 114,
                word: "is"
            },
            {
                id: 115,
                word: "freshened"
            },
            {
                id: 116,
                word: "up."
            },
            {
                id: 117,
                word: "The"
            },
            {
                id: 118,
                word: "whole"
            },
            {
                id: 119,
                word: "village"
            },
            {
                id: 120,
                word: "gathered"
            },
            {
                id: 121,
                word: "together."
            },
            {
                id: 122,
                word: "When"
            },
            {
                id: 123,
                word: "the"
            },
            {
                id: 124,
                word: "villagers"
            },
            {
                id: 125,
                word: "asked"
            },
            {
                id: 126,
                word: "him"
            },
            {
                id: 127,
                word: "what"
            },
            {
                id: 128,
                word: "had"
            },
            {
                id: 129,
                word: "happened"
            },
            {
                id: 130,
                word: "to"
            },
            {
                id: 131,
                word: "him,"
            },
            {
                id: 132,
                word: "the"
            },
            {
                id: 133,
                word: "old"
            },
            {
                id: 134,
                word: "man"
            },
            {
                id: 135,
                word: "said"
            },
            {
                id: 136,
                word: "that"
            },
            {
                id: 137,
                word: "it"
            },
            {
                id: 138,
                word: "had"
            },
            {
                id: 139,
                word: "been"
            },
            {
                id: 140,
                word: "eighty"
            },
            {
                id: 141,
                word: "years"
            },
            {
                id: 142,
                word: "he"
            },
            {
                id: 143,
                word: "had"
            },
            {
                id: 144,
                word: "been"
            },
            {
                id: 145,
                word: "chasing"
            },
            {
                id: 146,
                word: "happiness"
            },
            {
                id: 147,
                word: "and"
            },
            {
                id: 148,
                word: "it"
            },
            {
                id: 149,
                word: "was"
            },
            {
                id: 150,
                word: "useless."
            },
            {
                id: 151,
                word: "And"
            },
            {
                id: 152,
                word: "then"
            },
            {
                id: 153,
                word: "he"
            },
            {
                id: 154,
                word: "decided"
            },
            {
                id: 155,
                word: "to"
            },
            {
                id: 156,
                word: "live"
            },
            {
                id: 157,
                word: "without"
            },
            {
                id: 158,
                word: "happiness"
            },
            {
                id: 159,
                word: "and"
            },
            {
                id: 160,
                word: "just"
            },
            {
                id: 161,
                word: "enjoy"
            },
            {
                id: 162,
                word: "life."
            },
            {
                id: 163,
                word: "That\'s"
            },
            {
                id: 164,
                word: "why"
            },
            {
                id: 165,
                word: "I"
            },
            {
                id: 166,
                word: "am"
            },
            {
                id: 167,
                word: "happy"
            },
            {
                id: 168,
                word: "now."
            }
            ]
        },
        {
            level: 3,
            wordset: []
        }
    ]
    const [requiredWordIndex, setRequiredWordIndex] = useState(0);
    const [requiredWord, setRequiredWord] = useState();
    const [attemptedWords, setAttemptedWords] = useState(0);
    const [incorrectWords, setIncorrectWords] = useState(0);
    const [correctWords, setCorrectWords] = useState(0);
    const [userLetterInput, setUserLetterInput] = useState([]);
    const [userAccuracy, setUserAccuracy] = useState(0);
    const [userWpmScore, setUserWpmScore] = useState(0);
    const [timeCount, setTimeCount] = useState(60);
    const [testStarted, setTestStarted] = useState(false);
    const [level, setLevel] = useState(0);
    const userInputHandler = (event) => {
        if(requiredWordIndex < requiredWords[level].wordset.length){
            var requiredObject = level ? requiredWords[level].wordset[requiredWordIndex] : requiredWords[0].wordset[requiredWordIndex];
            setRequiredWord(requiredObject.word);
        }
        if(event.key !== null){
            // console.log(event.key, event);
            const keyName = event.key;
            if(event.keyCode > 64 && event.keyCode < 91){ 
                setUserLetterInput(prevState => [...prevState, keyName]); //setting state only on alphabet keycodes
            }
            if(userLetterInput.length === 1){
                setTestStarted(true);
            }
            // document.addEventListener('keydown', handleKeyDown, false);
            if(keyName === ' '){
                // console.log(event);
                const userinput = userLetterInput.toString();
                const toMatch = userinput.split(',').join('');
                // console.log(toMatch);
                // console.log(requiredWord);
                const isMatched = toMatch.localeCompare(requiredWord);
                // console.log(isMatched);
                const nextword = requiredObject != null ? requiredObject.id + 1 : null;
                if(nextword == null){
                    generateReport(userAccuracy, userWpmScore, level);
                    $(".modal").show();
                    return;
                }
                console.log(nextword);
                if(isMatched !== 0){
                    $('#' + requiredObject.id).addClass('error');
                    $('#' + requiredObject.id).removeClass('underline');
                    setIncorrectWords(prevState => prevState + 1);
                }else{
                    $('#' + requiredObject.id).addClass('active');
                    $('#' + requiredObject.id).removeClass('underline');
                }
                $('#' + nextword).addClass('underline');
                setAttemptedWords(prevState => prevState + 1);
                setRequiredWordIndex(prevState => prevState + 1);
                setUserLetterInput([]);
            }else if(keyName === "Backspace"){
                let removed = userLetterInput.filter((_, index) => index !== userLetterInput.length - 1);
                setUserLetterInput(removed);
            }
            return keyName;
        }
    }
    const timecountHandler = (timer) => {
        setTimeCount(prevState => prevState - 1);
        if (timeCount > 0) {
          setTimeout(timecountHandler, 1000);
        }else{
            setTimeCount(60);
        }
    }
    const calculateAccuracy = (incorrectWords, attemptedWords) => {
        const correctWords = attemptedWords - incorrectWords;
        setCorrectWords(correctWords);
        const attempedby5 = attemptedWords/5;
        const grossWpm = attempedby5 / (timeCount/60);
        const numerator = attempedby5 - incorrectWords;
        const netWpm = numerator / (timeCount/60);
        setUserWpmScore(netWpm.toFixed(1));
        const accuracy = (netWpm / grossWpm) * 100;
        setUserAccuracy(accuracy.toFixed(2));
        // const accuracy = (correctWords / attemptedWords) * 100;
        // setUserAccuracy(accuracy.toFixed(2));
    }
    const setTimeCounter = (setTo) => {
        setTimeCount(setTo);
        switch (setTo) {
            case 60:
                setLevel(0);
                break;
            case 180:
                setLevel(1);
                break;
            case 300:
                setLevel(2);
                break;
            default:
                break;
        }
        setAttemptedWords(0);
        setCorrectWords(0);
        setIncorrectWords(0);
        setUserAccuracy(0);
        $(".requiredWord").removeClass("error");
        $(".requiredWord").removeClass("underline");
        $(".requiredWord").removeClass("active");
        $(".user-typebox").val("");
        setRequiredWordIndex(0);
    }
    const generateReport = (userAccuracy, userWpmScore, level) => {
        axios.post("http://localhost:3001/api/insert/user/report", {accuracy: userAccuracy, wpmScore: userWpmScore, timeSpan: level })
        .then(res =>{
            console.log(res.status);
            console.log(res.data);
        });
    }
    useEffect(()=>{
        console.log(userLetterInput);
    },[userLetterInput]);
    useEffect(()=>{
        calculateAccuracy(incorrectWords, attemptedWords);
    },[attemptedWords, incorrectWords]);
    useEffect(()=>{
        if(testStarted === true){
            timecountHandler(60);
        }
    },[testStarted]);
    //check OVERFLOW CONTENT MOVING TO LEFT SIDE in WPM TEST inside laravel-react folder
        return(
            <React.Fragment>
                <Navbar/>
                <div className="tester" style={{"maxWidth": "100%"}}> 
                    <div className="container-fluid tester-body d-flex my-5 justify-content-center">
                        <div className="col-sm-10 my-5">
                            <div className="row">
                                <div className="circular-counter text-center col-sm-3">
                                    <svg className="progress-ring-basic" height="120" width="120">
                                    <circle className="progress-ring__circle__basic" strokeWidth="6" fill="transparent" r="50" cx="60" cy="60" strokeLinecap="round" id="circle2" stroke="#ffd000" style={{"strokeDasharray": 314.159, "strokeDashoffset": 0}}></circle>
                                    </svg>
                                    <span className="fw-bold time-counter">{timeCount > 0 ? timeCount : 60}s</span>
                                </div>
                                <div className="col-sm-9 row m-0 d-flex justify-content-around">
                                    <div className="col-sm-4 bg-white display-card text-center pt-3">
                                        <p className='fw-bold'>Accuracy</p>
                                        <span className="fw-bold">{userAccuracy > 0 ? userAccuracy + ' %' : 0 + ' %'}</span>
                                    </div>
                                    <div className="col-sm-4 bg-white display-card text-center pt-3">
                                        <p className='fw-bold'>Words/min</p>
                                        <span className="fw-bold">{ userWpmScore > 0 ? userWpmScore + ' WPM' : 0 + ' WPM'}</span>
                                    </div>
                                    <div className="col-sm-4 bg-white display-card text-center pt-3">
                                        <p className='fw-bold'>Errors</p>
                                        <span className="fw-bold">{incorrectWords}/{attemptedWords}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center menu-row mt-5">
                                <div className="d-flex col-sm-5 offset-sm-1 col-12">
                                    <p className="mr-1 my-auto text-white">Modes</p>
                                    <button className="btn mx-2 menu-btn" onClick={() => setTimeCounter(60)}>1 Minute</button>
                                    <button className="btn mx-2 menu-btn" onClick={() => setTimeCounter(180)}>3 Minute</button>
                                    <button className="btn mx-2 menu-btn" onClick={() => setTimeCounter(300)}>5 Minute</button>
                                </div>
                            </div>
                            <div className="row justify-content-center task-row mt-5">
                                <div className="task-card">
                                    <div className="word-section">
                                    {requiredWords[level].wordset.map((requiredWord)=> (
                                        <span className="requiredWord" id={requiredWord.id} key={requiredWord.id}>{requiredWord.word}</span>
                                    ))}
                                    </div>
                                </div>
                            </div>
                            <div className="row input-row mt-4">
                                <input className="form-control mx-auto user-typebox" placeholder="Start Typing..." onKeyDown={userInputHandler}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content bg-dark text-white">
                    <div className="modal-header">
                        <h5 className="modal-title">Thank you for taking the test!</h5>
                        <button type="button" className="close bg-dark text-white" data-dismiss="modal" aria-label="Close" onClick={()=>{$(".modal").hide()}}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>You have a typing speed of { userWpmScore > 0 ? userWpmScore + ' WPM' : 0 + ' WPM'}.</p>
                        <p>Your Accuracy was {userAccuracy > 0 ? userAccuracy + ' %' : 0 + ' %'}!</p>
                    </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
 
export default Tester;