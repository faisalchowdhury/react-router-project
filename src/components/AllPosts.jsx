import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './Post';
const AllPosts = () => {
    const data = useLoaderData();
   
    return (
        <>

            <div className='grid grid-cols-2 gap-5'>

                {
                    data.map(item => <Post key={item.id} item={item}></Post>)
                }
            </div>

        </>
    )
};

export default AllPosts;