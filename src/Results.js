import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <section className="text-start">
                    <h2 className="Results-title">{props.results.word}</h2>
                    {props.results.phonetics.map(function (phonetic, index) {
                        return (
                            <div key={index}>
                                <Phonetic phonetic={phonetic} />
                            </div>
                        )
                    })}
                </section>
                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <section className="text-start" key={index}>
                            <Meaning meaning={meaning} />
                        </section>
                    );
                })}
            </div>
        )
    } else {
        return null;
    }
}