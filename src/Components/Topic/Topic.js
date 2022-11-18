import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic }) => {
    const { name, logo, total, id } = topic
    // console.log(topic)
    return (
        <div className='topic'>
            <img className='img img-fluid' src={logo} alt="" />
            <h5>{name}</h5>
            <p><small>{total}</small></p>
            <Link className='btn btn-primary' to={`/topics/${id}`}>Start now</Link>
        </div >
    );
};

export default Topic;