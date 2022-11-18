import React from 'react';

const Questions = ({ topics }) => {
    const { correctAnswer } = topics
    // console.log(topics)
    return (
        <div>
            {
                topics.map(qq => <section>
                    <h1>{topics}</h1>
                </section>)
            }
        </div>
    );
};

export default Questions;