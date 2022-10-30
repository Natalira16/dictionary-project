import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import './Dictionary.css';

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionResponse(response) {
        // console.log(response.data[0]);
        // console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        // console.log(apiUrl);
        axios.get(apiUrl).then(handleDictionResponse);

        let pexelsApiKey = "563492ad6f9170000100000128fc1f4d82c84212b123b6e031615562";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { "Authorization": `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1>What word do you want to look up?</h1>
                    <div className="row">
                        <form onSubmit={handleSubmit}>
                            <input type="search" placeholder="sunset" onChange={handleKeywordChange} />
                            <button className="btn search-button" type="submit" onClick={handleSubmit}>🔎</button>
                        </form>
                    </div>
                    <div className="hint text-start">
                        suggested words: sunset, wine, yoga, forest, etc.
                    </div>
                </section>
                <Results results={results} keyword={keyword} />
                <Photos photos={photos} />
            </div>
        )
    } else {
        load();
        return (
            "Loading..."
        )
    }
}