import React from 'react';
import './Topic.css'

const Topic = ({ topic }) => {
    const { name, logo, total } = topic
    console.log(topic)
    return (
        <div className='topic'>
            <img className='img img-fluid' src={logo} alt="" />
            <h5>{name}</h5>
            <p><small>{total}</small></p>
            <button className='btn btn-primary'>Start Quiz</button>
        </div>
    );
};

export default Topic;