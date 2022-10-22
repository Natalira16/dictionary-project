import React, { useState } from "react";
import './Dictionary.css';
import axios from "axios";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function search(event) {
        event.preventDefault();

        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.getUri(apiUrl).then(handleResponse);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
        </div>
    )
}