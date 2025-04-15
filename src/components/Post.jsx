import React, { useState } from 'react';
import { useNavigate } from 'react-router';


const Post = ({ item }) => {
    const { id, title, body } = item;

    const navigate = useNavigate();

    const [details, setDetails] = useState(false)
    return (
        <>
            <div className='p-5 border border-slate-300 rounded-lg space-y-3'>
                <h2 className='text-xl'>{title}</h2>
                <p>{body}</p>


                <div className='flex'>

                    <button onClick={() => setDetails(!details)} className='btn bg-purple-700 text-white'>
                        {
                            details ? 'Hide' : 'Show'
                        } Details</button>

                    <button onClick={() => navigate(`/blog/details/${id}`)} className='btn bg-pink-700 text-white'>Show in Single Page</button>
                </div>

                {
                    details ?
                        <div className='p-5'>
                            <p className='p-5 rounded-lg bg-slate-200'>
                                {body}
                            </p>
                        </div>
                        : null
                }
            </div>
        </>
    );
};

export default Post;