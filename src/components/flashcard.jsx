import React from "react";
import { useEffect } from "react";

function Flashcard({ flashcard }) {

    const flip = () => {
        document.querySelector(".card").classList.toggle("flip");
    }



    return (
        <div className="flashcard">
            <div className="card" onClick={flip}>
                <div className="word">
                    <h3>{flashcard.word}</h3>
                </div>
                <div className="def">
                    <h3>{flashcard.def}</h3>
                </div>
            </div>
        </div>

    )
}

export default Flashcard;