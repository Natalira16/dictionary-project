import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);
        // console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function search(event) {
        event.preventDefault();

        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
            <Results results={results} />
        </div>
    )
}