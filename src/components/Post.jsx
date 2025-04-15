import React, { useState } from 'react';

const Post = ({item}) => {
    const {title ,body} = item;
    
    const [details , setDetails] = useState(false)
    return (
      <>
        <div className='p-5 border border-slate-300 rounded-lg space-y-3'>
            <h2 className='text-xl'>{title}</h2>
            <p>{body}</p>
            <button onClick={() => setDetails(!details)} className='btn bg-purple-700 text-white'>
                {
                details ? 'Hide' : 'Show'
                } Details</button>

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