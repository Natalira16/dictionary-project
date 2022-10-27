import React from "react";
import "./Phonetic.css";
// import Listen from "./Listen";

export default function Phonetic(props) {
    console.log(props.phonetic.audio);
    function handleListen(event) {
        event.preventDefault();

        let audioElement = document.querySelector('audio');

        if (props.audio === "false") {
            audioElement.play();
            props.audio = "true";
        } else if (props.audio === "true") {
            audioElement.pause();
            props.audio = "false";
        }
    }

    let apiUrl = `https://api.dictionaryapi.dev/media/pronunciations/en/${props.keyword}-us.mp3`;

    return (
        <div className="Phonetic">
            <button type="button" className="btn audio-btn" onClick={handleListen}><audio src={apiUrl}></audio>🔊</button>
            <span className="phonetic-text">{props.phonetic.text}</span>
        </div >
    )
}