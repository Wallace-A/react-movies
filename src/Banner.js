import React, { useState, useEffect } from 'react';
import "./Banner.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import noirflixLogo from "./noirflix.png";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        // later this will capture and image. Maybe the last movie you watched or a random one from to watch list.
    }, []);

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: noirflixLogo,
            backgroundPosition: "center center",
            }}
        >   

            <div className="banner_contents">
                {/* Title */}
                <h1 className="banner_title"> Movie Name Here</h1>
               
                {/* Description */}
                <h1 className="banner_description">
                    {truncate("This is where the description goes. Blah blah blah blah blah blah blah.", 150)}
                </h1>
                 {/* Div > 2 Buttons (Play, My List) */}
                 <div className="banner_buttons">
                    <button className="banner_button play">
                        <div className="banner-button-icon">
                            <FontAwesomeIcon icon={faPlay} />
                        </div> 
                        <div style={{width: "1rem"}}></div>
                        <div className="banner-button-text">
                            Play
                        </div>
                    </button>
                    <button className="banner_button list">
                        <div className="banner-button-icon">
                            <FontAwesomeIcon icon={faPlus} />
                        </div> 
                        <div style={{width: "1rem"}}></div>
                        <div className="button-text">
                            My List
                        </div>
                    </button>
                </div>
            </div>
            {/* div for fade effect */}
            <div className="banner--fadeBottom"></div>

        </header>
    )
}

export default Banner
