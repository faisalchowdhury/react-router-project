import React from 'react';
import { useNavigate, useLoaderData, useParams } from 'react-router';

const Details = () => {

    const data = useLoaderData();
    const myOwnId = useParams();
    const navigate = useNavigate();

    const { title, body} = data;

    return (
        <div>
            <h1 className='text-3xl font-semibold'>{myOwnId.postId}</h1>
            <h2 className='text-2xl'>{title}</h2>
            <p>{body}</p>
           <br />
            <button onClick={() => navigate(-1)} className='btn '>Go Back</button>
            
            
        </div>
    );
};

export default Details;