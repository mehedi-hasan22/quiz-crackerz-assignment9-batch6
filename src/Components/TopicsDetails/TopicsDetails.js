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
            alert('YAY!!. Correct Answer!!!')
        }
        else {
            document.getElementById('wr-ans').classList.add('d-none')
            document.getElementById('r8-ans').classList.remove('d-none')
            alert('Wrong Answer. Try Again')
        }

    };

    // console.log(topics)
    return (
        <div>
            <div className='container'>
                <h2 id='wr-ans' className='border fs-1 mt-2 text-success d-none'>Write Answer!!!</h2>
                <h2 id='r8-ans' className='border fs-1 mt-2 text-danger d-none'>Wrong Answer!!!</h2>
            </div>
            {
                topics.map(qq => <section className='questions container mt-5 border rounded p-5 buttons' key={qq.question}>
                    <h5>{qq.question}</h5>
                    {
                        qq.options.map(op => <button onClick={() => handleClick(op, qq.correctAnswer)} key={op} id='answer-btn' className='mt-3 border rounded p-3 button'>
                            {op}
                        </button>)
                    }
                    <button title={qq.correctAnswer} className='btn btn-primary px-5 py-2 mt-4'>Hover to see answer</button>
                </section>)

            }
        </div >
    );
};

export default TopicsDetails;