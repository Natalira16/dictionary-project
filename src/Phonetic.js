import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
    console.log(props.phonetic.audio);
    function handleListen(event) {
        event.preventDefault();

        let audioElement = document.querySelector("audio");
        audioElement.play();
    }

    return (
        <div className="Phonetic">
            <button type="button" className="btn audio-btn" onClick={handleListen}>
                <audio src={props.phonetic.audio}></audio>🔊
            </button>
            <span className="phonetic-text">{props.phonetic.text}</span>
        </div>
    );
}