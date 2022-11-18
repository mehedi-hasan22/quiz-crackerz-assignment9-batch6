import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicsDetails = () => {
    const topics = useLoaderData().data.questions;
    // const topicsQuestion = useLoaderData().data.question;
    console.log(topics)
    return (
        <div>
            <h1>Squize the Quizzz!</h1>
            {
                topics.map(qq => <section className='questions container mt-5 border rounded p-5'>
                    <h3>{qq.question}</h3>
                    {
                        qq.options.map(op => <h5 className='mt-3 border rounded p-3'><input class="form-check-input mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                {op}
                            </label></h5>)
                    }
                </section>)
            }
        </div >
    );
};

export default TopicsDetails;