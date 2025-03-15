import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function Question({ question }) {
    const [userAnswer, setAnswer] = useState();

    const checkAnswer = () => {
        const correctAnswer = question.def.toLowerCase();
        let correctAnswerWord = correctAnswer.split(" ");
        const userAnswerWord = userAnswer.split(" ");
        const correctAnswerLength = correctAnswerWord.length;
        const userAnswerLength = userAnswerWord.length;
        let matchCount = 0;

        for (let i = 0; i < Math.min(userAnswerLength, correctAnswerLength); i++) {
            const index = correctAnswerWord.indexOf(userAnswerWord[i].toLowerCase());
            if (index !== -1) {
                matchCount++;
                correctAnswerWord = correctAnswerWord.slice(0, index) + correctAnswerWord.slice(index + 1);
            }
        }

        const percentageMatch = (matchCount / correctAnswerLength) * 100;

        if (percentageMatch === 100) {
            document.querySelector(".answer").classList.add("correct");
            document.querySelector(".answer").classList.remove("wrong");
        } else {
            document.querySelector(".answer").classList.remove("correct");
            document.querySelector(".answer").classList.add("wrong");
        }
        document.querySelector(".feedback").innerHTML = `Your answer is ${percentageMatch.toFixed(2)}% close to the correct answer.`;
    }

    useEffect(() => {
        document.querySelector(".answer").classList.remove("correct");
        document.querySelector(".answer").classList.remove("wrong");
        setAnswer("");
        document.querySelector(".feedback").innerHTML = "";
    }, [question])


    return (
        <>
            <input type="text" className='answer' value={userAnswer} onChange={(e)=>{setAnswer(e.target.value)}}/>
            <button onClick={checkAnswer}>Check Answer</button>
            <p className="feedback"></p>
        </>
    )
}

export default Question;