import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './TopicDetails.css'

const TopicsDetails = () => {
    const topics = useLoaderData().data.questions;
    // const topicsQuestion = useLoaderData().data.question;

    const handleClick = (op, correctAnswer) => {
        // console.log('answer clicked', op, correctAnswer);
        if (op === correctAnswer) {
            document.getElementById('wr-ans').classList.remove('d-none')
            document.getElementById('r8-ans').classList.add('d-none')
        }
        else {
            document.getElementById('wr-ans').classList.add('d-none')
            document.getElementById('r8-ans').classList.remove('d-none')
        }

    };

    const showAns = () => {
        console.log('show kormu???')
    }
    console.log(topics)
    return (
        <div>
            <div>
                <h2 id='wr-ans' className='border mt-2 text-info d-none'>Write Answer!!!</h2>
                <h2 id='r8-ans' className='border mt-2 text-danger d-none'>Wrong Answer!!!</h2>
            </div>
            {
                topics.map(qq => <section className='questions container mt-5 border rounded p-5 buttons' key={qq.question}>
                    <h5>{qq.question}</h5>
                    <p id='show' className='d-none'>{qq.correctAnswer}</p>
                    {
                        qq.options.map(op => <button onClick={() => handleClick(op, qq.correctAnswer)} key={op} id='answer-btn' className='mt-3 border rounded p-3 button'>
                            {op}
                        </button>)
                    }
                    <button className='btn btn-primary px-5 py-2 mt-2'>Show Answer</button>
                </section>)

            }
        </div >
    );
};

export default TopicsDetails;