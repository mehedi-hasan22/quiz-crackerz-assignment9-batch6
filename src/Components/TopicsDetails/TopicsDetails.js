import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicsDetails = () => {
    const topics = useLoaderData().data.questions;
    // const topicsQuestion = useLoaderData().data.question;
    // console.log(topics)
    return (
        <div>
            {
                topics.map(qq => <section className='questions container mt-5 border rounded p-5' key={qq.question}>
                    <h3>{qq.question}</h3>
                    {
                        qq.options.map(op => <h5 key={op} className='mt-3 border rounded p-3'><input className="form-check-input mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                {op}
                            </label></h5>)
                    }
                    <button className='btn btn-primary px-5 py-2 mt-2'>Show Answer</button>
                </section>)
            }
        </div >
    );
};

export default TopicsDetails;