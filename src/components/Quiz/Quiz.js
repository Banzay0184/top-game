"use client"
import React from "react";

import './style.css'

const questions = [
    {
        title: 'How old are you ?',
        variants: ['10-15', '15-20', '20-25', '25-30', '35-40', '40-80']
    },
    {
        title: 'What game genre do you like the most ?',
        variants: ['RPG', 'Shooter', 'Strategy', 'Stimulant', 'Arcade', 'Fighting', 'Race', 'Action', 'Adventure', 'Quests', 'Brain teaser', 'Another variant']
    },
    {
        title: 'What type of games (online or offline) do you prefer?',
        variants: ['Online', 'Offline']
    },
    {
        title: 'How much time do you spend in the game ?',
        variants: ['~1 hour', 'From 1-3 hours', 'From 3-5 hours', 'More than 5 hours']
    },
];

function Game({step, question, onClickVariant}) {

    const percentage = Math.round((step / questions.length) * 100)

    return (
        <div className='containerss'>
            <div className='section2__progressBarContainer'>
                <div className='section2__progressBar'>
                    <div style={{width: `${percentage}%`}} className='section2__progressBarRect'>
                        <span className='section2__progressBarCircle'></span>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className='pt-[24px] text-[32px] text-[#00FF0C] pb-[28px] '>{question.title}</h1>
                <div className="flex flex-wrap justify-start gap-[24px]">
                    {question.variants.map((text, index) => (
                        <div className='question-btn' onClick={() => onClickVariant(index)} key={text}>
                            <h1 style={{color: '#ffff'}}>{text}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Quiz({handleVision}) {
    const [step, setStep] = React.useState(0);
    const question = questions[step];
    const onClickVariant = (index) => {
        setStep(step + 1)
    }

    const topGame = document.querySelector('.top-games')
    const menu = document.querySelector('.menu')
    return (
        <div className=''>
            {
                step !== questions.length ? (
                    <Game step={step} question={question} onClickVariant={onClickVariant}/>) : (
                    <div className='containerss flex flex-col items-center justify-center'>
                        <h1 className='uppercase text-[42px] font-black text-center text-[#00FF0C] pb-[28px]'>thanks for the answer</h1>
                        <button onClick={() => handleVision("topGames")} className="question-btn-next">
                            Next
                        </button>
                    </div>
                )
            }
        </div>
    );
}

export default Quiz;




